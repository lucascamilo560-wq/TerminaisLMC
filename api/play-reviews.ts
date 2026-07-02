import { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { app } = req.query;

    if (!app || typeof app !== 'string') {
      return res.status(400).json({ error: 'App parameter is required' });
    }

    // Configurable packageName via environment variable
    // For app='alpha', use process.env.PACKAGE_NAME_ALPHA
    const envKey = `PACKAGE_NAME_${app.toUpperCase()}`;
    const packageName = process.env[envKey];

    if (!packageName) {
      return res.status(400).json({ error: 'Invalid app or package name not configured' });
    }

    // App name mapping
    let appName = 'App';
    if (app.toLowerCase() === 'alpha') {
      appName = 'Alpha Pro Terminal';
    } else if (app.toLowerCase() === 'divide') {
      appName = 'ControleAi';
    }

    // Google Play Service Account Credentials
    const clientEmail = process.env.GOOGLE_PLAY_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PLAY_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
      // Return empty list if not configured, or a specific error?
      // Better to return 500 so we know it's missing, but for the frontend, we could just handle empty nicely.
      return res.status(500).json({ error: 'Google Play credentials not configured' });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    });

    const androidPublisher = google.androidpublisher({
      version: 'v3',
      auth,
    });

    const response = await androidPublisher.reviews.list({
      packageName,
      maxResults: 50,
    });

    const reviews = response.data.reviews || [];

    const safeReviews = reviews
      .filter((r) => {
        const rating = r.comments?.[0]?.userComment?.starRating;
        return rating === 4 || rating === 5;
      })
      .map((r) => {
        const userComment = r.comments?.[0]?.userComment;
        return {
          rating: userComment?.starRating,
          review_text: userComment?.text?.trim(),
          author_name: r.authorName || 'Usuário Google Play',
          app_name: appName,
          reviewed_at: userComment?.lastModified?.seconds,
        };
      })
      .filter((r) => r.review_text && r.review_text.length > 0);

    // Cache to prevent excessive calls to Google Play
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400');
    
    return res.status(200).json({ reviews: safeReviews.slice(0, 10) });
  } catch (error: any) {
    console.error('Error fetching Play Store reviews:', error.message);
    return res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}

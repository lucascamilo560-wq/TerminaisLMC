import React, { useEffect, useState } from 'react';

interface PlayReview {
  rating: number;
  review_text: string;
  author_name: string;
  app_name: string;
  reviewed_at?: string;
}

interface PlayStoreReviewsSectionProps {
  app: string;
}

export const PlayStoreReviewsSection: React.FC<PlayStoreReviewsSectionProps> = ({ app }) => {
  const [reviews, setReviews] = useState<PlayReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/play-reviews?app=${app}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [app]);

  if (loading || error || reviews.length === 0) {
    return null;
  }

  return (
    <section className="play-proof-section">
      <div className="play-proof-inner">
        <h2 className="play-proof-title">Avaliações do {reviews[0]?.app_name}</h2>
        <p className="play-proof-subtitle">Comentários e sinais reais de usuários que baixaram nosso app.</p>
        
        <div className="play-proof-grid">
          {reviews.map((review, index) => (
            <div key={index} className={`play-proof-card play-proof-card--${app}`}>
              <p className="play-proof-app-name">{review.app_name}</p>
              <div className="play-proof-meta">
                <span className="play-proof-rating">★ {review.rating}</span>
                <span className="play-proof-count">{review.author_name}</span>
              </div>
              <p className="play-proof-review">"{review.review_text}"</p>
              <p className="play-proof-source">Fonte: Google Play</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

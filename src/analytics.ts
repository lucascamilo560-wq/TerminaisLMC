export type OutboundTarget = {
  path: string
  destinationUrl: string
  label: string
}

type ScriptState = 'idle' | 'loading' | 'ready' | 'failed'

const ANALYTICS_SCRIPT_SRC = '/_vercel/insights/script.js'

const targets = {
  alphaProPlay: {
    path: '/go/alpha-pro/google-play',
    destinationUrl: 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal',
    label: 'Alpha Pro · Google Play',
  },
  controleAiPlay: {
    path: '/go/controleai/google-play',
    destinationUrl: 'https://play.google.com/store/apps/details?id=com.divideai.app',
    label: 'ControleAi · Google Play',
  },
  bordoAiPlay: {
    path: '/go/bordoai/google-play',
    destinationUrl: 'https://play.google.com/store/apps/details?id=com.lmc.bordoai',
    label: 'BordoAi · Google Play',
  },
  bordoAiWeb: {
    path: '/go/bordoai/web',
    destinationUrl: 'https://bordoai.vercel.app',
    label: 'BordoAi · Web/PWA',
  },
  bordoAiWebIphone: {
    path: '/go/bordoai/web/iphone',
    destinationUrl: 'https://bordoai.vercel.app',
    label: 'BordoAi · Web/PWA · iPhone',
  },
  bordoAiWebAndroid: {
    path: '/go/bordoai/web/android',
    destinationUrl: 'https://bordoai.vercel.app',
    label: 'BordoAi · Web/PWA · Android',
  },
} satisfies Record<string, OutboundTarget>

const outboundByPath = new Map(
  Object.values(targets).map((target) => [target.path, target] as const),
)

let scriptState: ScriptState = 'idle'
let resolveScriptSettled: (() => void) | null = null
const scriptSettled = new Promise<void>((resolve) => {
  resolveScriptSettled = resolve
})

function settleScript(state: Exclude<ScriptState, 'idle' | 'loading'>) {
  scriptState = state
  resolveScriptSettled?.()
  resolveScriptSettled = null
}

function initAnalyticsQueue() {
  const win = window as Window & {
    va?: (...params: unknown[]) => void
    vaq?: unknown[][]
  }

  if (win.va) return

  win.va = (...params: unknown[]) => {
    win.vaq = win.vaq || []
    win.vaq.push(params)
  }
}

function injectAnalyticsScript() {
  if (scriptState !== 'idle') return

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${ANALYTICS_SCRIPT_SRC}"]`,
  )

  if (existing) {
    scriptState = 'loading'
    existing.addEventListener('load', () => settleScript('ready'), { once: true })
    existing.addEventListener('error', () => settleScript('failed'), { once: true })
    return
  }

  scriptState = 'loading'
  const script = document.createElement('script')
  script.src = ANALYTICS_SCRIPT_SRC
  script.defer = true
  script.setAttribute('data-sdkn', 'terminais-lmc')
  script.setAttribute('data-sdkv', 'manual-v1')
  script.addEventListener('load', () => settleScript('ready'), { once: true })
  script.addEventListener('error', () => settleScript('failed'), { once: true })
  document.head.appendChild(script)
}

function trackedTargetForAnchor(anchor: HTMLAnchorElement): OutboundTarget | null {
  let url: URL
  try {
    url = new URL(anchor.href, window.location.href)
  } catch {
    return null
  }

  if (url.hostname === 'play.google.com' && url.pathname === '/store/apps/details') {
    const appId = url.searchParams.get('id')
    if (appId === 'com.lmc.alphaproterminal') return targets.alphaProPlay
    if (appId === 'com.divideai.app') return targets.controleAiPlay
    if (appId === 'com.lmc.bordoai') return targets.bordoAiPlay
  }

  if (url.hostname === 'bordoai.vercel.app') {
    const installCard = anchor.closest('.bordoai-install-card')
    const platform = installCard
      ?.querySelector('.install-platform')
      ?.textContent
      ?.toLocaleLowerCase('pt-BR')

    if (platform?.includes('iphone')) return targets.bordoAiWebIphone
    if (platform?.includes('android')) return targets.bordoAiWebAndroid
    return targets.bordoAiWeb
  }

  return null
}

function openTrackedPath(path: string, newTab: boolean) {
  if (newTab) {
    window.open(path, '_blank', 'noopener,noreferrer')
    return
  }
  window.location.assign(path)
}

function installOutboundClickTracking() {
  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      const origin = event.target
      if (!(origin instanceof Element)) return

      const anchor = origin.closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return

      const target = trackedTargetForAnchor(anchor)
      if (!target) return

      event.preventDefault()
      const wantsNewTab =
        anchor.target === '_blank' || event.ctrlKey || event.metaKey || event.shiftKey
      openTrackedPath(target.path, wantsNewTab)
    },
    { capture: true },
  )
}

export function initTerminaisAnalytics() {
  if (!import.meta.env.PROD || typeof window === 'undefined') return
  initAnalyticsQueue()
  injectAnalyticsScript()
  installOutboundClickTracking()
}

export function getOutboundTarget(pathname: string): OutboundTarget | null {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  return outboundByPath.get(normalized) ?? null
}

export function redirectAfterAnalytics(target: OutboundTarget) {
  const go = () => window.location.replace(target.destinationUrl)

  if (!import.meta.env.PROD) {
    go()
    return () => undefined
  }

  let finished = false
  let delayTimer: number | null = null

  const finish = () => {
    if (finished) return
    finished = true
    if (delayTimer !== null) window.clearTimeout(delayTimer)

    if (scriptState === 'ready') {
      window.setTimeout(go, 180)
    } else {
      go()
    }
  }

  void scriptSettled.then(finish)
  delayTimer = window.setTimeout(finish, 1000)

  return () => {
    finished = true
    if (delayTimer !== null) window.clearTimeout(delayTimer)
  }
}

export default {
  github: 'https://github.com/MDCYT/Guilded-Bot',
  docsRepositoryBase: 'https://github.com/MDCYT/Guilded-Bot-Guide',
  titleSuffix: ' – Guilded-Bot',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline text-yello-500">
        Guilded-Bot
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Simple package for your Guilded-Bot
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#F2C100" />
      <meta name="theme-color" content="#F2C100" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Guilded-Bot: Simple package for your Guilded-Bot"
      />
      <meta
        name="og:description"
        content="Guilded-Bot: Simple package for your Guilded-Bot"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/og.png" />
      <meta name="twitter:site:domain" content="guide.guildedbot.js.org" />
      <meta name="twitter:url" content="https://guide.guildedbot.js.org" />
      <meta
        name="og:title"
        content="Guilded-Bot"
      />
      <meta name="og:image" content="/og.png" />
      <meta name="apple-mobile-web-app-title" content="Guilded-Bot" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page',
  footerText: (
    <p>
      <p style={{ color: '#E9BA00' }}>Guilded-Bot</p> ©{' '}
      {new Date().getFullYear()} Guilded-Bot
    </p>
  ),
  unstable_faviconGlyph: '👋',
  darkMode: true,
}

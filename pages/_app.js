import "@/styles/globals.css"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DZ8X965715"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DZ8X965715', {
          page_path: window.location.pathname,
          });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

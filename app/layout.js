import Script from "next/script";

export const metadata = {
  title: "Аренда сапбордов и палаток в СПб | Прокат туристического снаряжения — Action Rent",
  description:
    "Аренда и прокат сапбордов, палаток и туристического снаряжения в Санкт-Петербурге (СПб). У нас — аренда сапов, палаток, шатров и прочего снаряжения. Прокат туристического инвентаря в СПб для отдыха и путешествий по доступным ценам.",
  metadataBase: new URL("https://action-rent.ru"),
  openGraph: {
    title: "Action Rent | Аренда сапборда и палатки в СПб",
    description:
      "Прокат сапбордов, палаток и туристического снаряжения в Санкт-Петербурге. Всё для активного отдыха — аренда SUP-досок и туристических рюкзаков в СПб.",
    url: "https://action-rent.ru",
    siteName: "Action Rent",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Viewport: для мобильных устройств */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* UX улучшения */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Action Rent",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "streetAddress": "проспект Энгельса, 126к1",
              },
              "telephone": "+7 (950) 222-65-90",
              "url": "https://action-rent.ru",
            }),
          }}
        />

        {/* Yandex.Metrika */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(101197944, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101197944"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

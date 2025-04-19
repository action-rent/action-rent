export const metadata = {
  title: "Action Rent",
  description: "Аренда сапборда, палаток и туристического инвентаря спб",
  // themeColor: "#000000", // для мобильной строки состояния
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Viewport: для правильной работы на мобильных, особенно с вырезами */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Apple & Android UX */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}

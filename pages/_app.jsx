// pages/_app.jsx
import "../app/App.css"; // твой основной CSS

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

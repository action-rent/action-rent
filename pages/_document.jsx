// pages/_app.jsx
import "../styles/App.css"; // твой основной CSS  ee

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

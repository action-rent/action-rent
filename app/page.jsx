import Head from "next/head";
import { FaTelegram } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../app/App.css"; 
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-container">
      <Head>
        <title>
          Прокат SUP-досок, аренда сапбордов, аренда сапбордов спб, аренда палаток, аренда туристических рюкзаков, прокат сапбордов, прокат сап досок спб , прокат палаток спб и туристического инвентаря в СПб | Action Rent
        </title>
        <meta
          name="description"
          content="Аренда сапбордов и снаряжения в Санкт-Петербурге. Удобный прокат SUP-досок, палаток, туристического инвентаря без залога — Action Rent."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Action Rent",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "streetAddress": "проспект Энгельса, 126к1"
              },
              "telephone": "+7 (950) 222-65-90",
              "url": "https://action-rent.ru"
            }
          `,
          }}
        />
      </Head>

      <div className="landing-content">
        <Header />

        <div className="landing-main">
          <div className="landing-text-section">
            {/* Скрытый H1 для SEO */}
            <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
              Прокат сапбордов, аренда палаток и снаряжения в Санкт-Петербурге, аренда сапбордов
            </h1>

            <h2 className="landing-number">78</h2>
            <p className="landing-subtext">COME EXPLORE WITH US!</p>
            <h2 className="landing-title">Action Rent</h2>
            <p className="landing-subtitle">Аренда SUP-досок и туристического инвентаря</p>
            <p className="landing-description">
              Открой природу с новой стороны — арендуй SUP-доску и снаряжение для приключений уже сегодня! Всё, что нужно для активного отдыха — в одном месте.
            </p>
            <div className="landing-buttons">
              <Link href="/price">
                <button className="btn primary">Прайс</button>
              </Link>
              <a className="btn secondary" href="https://t.me/actionrent78" target="_blank" rel="noopener noreferrer">
                 <span>Написать</span> <FaTelegram/>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

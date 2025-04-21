export const metadata = {
  title: "Аренда сапбордов и палаток в СПб | Аренда снаряжения — Action Rent",
  description:
    "Прокат сапбордов, палаток и туристического снаряжения в Санкт-Петербурге. Прокат SUP-досок и палаток. Все для активного отдыха — арендуй легко с Action Rent.",
};

import { FaTelegram } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import "../app/App.css";

export default function Home() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <Header />

        <div className="landing-main">
          <div className="landing-text-section">
            {/* Скрытый H1 для SEO */}
            <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
              Прокат сапбордов, аренда палаток и снаряжения в Санкт-Петербурге, аренда сапборда спб
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
                <span>Написать</span> <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Контакты | Прокат сапбордов, палаток и снаряжения — Action Rent СПб",
  description:
    "Контакты проката Action Rent в Санкт-Петербурге. Адрес, телефон, мессенджеры и карта проезда. Аренда сапбордов, шатров, палаток, спальных мешков и прочего туристического инвентаря в СПб.",
};

import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import "../Contact.css";
import Script from "next/script";

export default function Contact() {
  return (
    <div className="landing-container">
      {/* Структурированные данные (JSON-LD) */}
      <Script
        id="ld-json-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "Action Rent",
            address: {
              "@type": "PostalAddress",
              streetAddress: "проспект Энгельса, 126к1",
              addressLocality: "Санкт-Петербург",
              addressCountry: "RU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 60.039897,
              longitude: 30.323027,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "10:00",
                closes: "22:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "09:00",
                closes: "22:00",
              },
            ],
            telephone: "+7-950-222-65-90",
            email: "actionrent78@mail.ru",
            url: "https://action-rent.ru/contact",
          }),
        }}
      />

      <div className="landing-background"></div>

      <div className="landing-content">
        <Header />

        {/* SEO-заголовок */}
        <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          Контактная информация Action Rent — аренда сапбордов и туристического снаряжения в СПб
        </h1>

        <main className="contacts-main">
          <div className="contacts-layout">
            {/* Карта */}
            <div className="map-container">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=73713561680"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                title="Yandex Map"
              />
            </div>

            {/* Инфо */}
            <div className="contacts-info">
              <p>
                <strong>Адрес:</strong> Санкт-Петербург, проспект Энгельса, 126к1
                <br /> (м. Озерки)
              </p>
              <p>
                <strong>Телефон:</strong>{" "}
                <a href="tel:+79502226590" className="mobile-only">
                  +7 (950) 222-65-90
                </a>
                <span className="desktop-only">+7 (950) 222-65-90</span>
              </p>
              <p>
                <strong>Часы работы:</strong>
                <br /> Будние: 10:00 – 22:00
                <br /> Выходные: 09:00 – 22:00
              </p>
              <p>
                <strong>Почта:</strong> actionrent78@mail.ru
              </p>

              <div className="contact-social-icon">
                <div className="landing-social-icons">
                  <a href="https://t.me/actionrent78" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={40} />
                  </a>
                  <FaInstagram size={40} />
                  <a href="https://wa.me/79502226590" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

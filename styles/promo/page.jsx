export const metadata = {
  title: "Скидки и акции на аренду сапбордов и снаряжения в СПб | Action Rent",
  description:
    "Актуальные акции и скидки на прокат SUP-досок, палаток и туристического снаряжения в Санкт-Петербурге. Выгодная аренда инвентаря — только в Action Rent.",
    alternates: {
      canonical: "https://action-rent.ru/promo",
    },
};

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import "../promo.css";
import firstPromo from "../assets/picture/firstPromo.webp";
import secondPromo from "../assets/picture/secondPromo.webp";
import lastPromo from "../assets/picture/lastPromo.webp";

export default function Promo() {
  return (
    <div className="landing-container">
      <div className="landing-background"></div>

      <div className="landing-content">
        <Header />

        <main className="promo-main">
          {/* Скрытый SEO-заголовок */}
          <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
            Акции и скидки на прокат SUP-досок, палаток и снаряжения в Санкт-Петербурге
          </h1>

          <div className="promo-cards">
            {/* Акция 1 */}
            <div className="promo-card">
              <div className="promo-image">
                <Image
                  src={firstPromo}
                  alt="Скидка 10% при аренде SUP-досок для группы, корпоратив на сапбордах"
                  height={200}
                  placeholder="blur"
                  className="promo"
                />
              </div>
              <div className="promo-details">
                <h3 className="promo-heading">Скидка для группы</h3>
                <p className="promo-description">Скидка 10% на аренду при заказе от 3 дней и 3 единиц инвентаря.</p>
                <p className="promo-terms">Не суммируется с другими предложениями.</p>
              </div>
            </div>

            {/* Акция 2 */}
            <div className="promo-card">
              <div className="promo-image">
                <Image
                  src={secondPromo}
                  alt="Скидка выходного дня на аренду туристического снаряжения в СПб"
                  height={200}
                  placeholder="blur"
                  className="promo"
                />
              </div>
              <div className="promo-details">
                <h3 className="promo-heading">Акция выходного дня</h3>
                <p className="promo-description">
                  Скидка 5% на аренду инвентаря с пятницы по воскресенье.
                </p>
                <p className="promo-terms">Действует только в выходные. Не суммируется.</p>
              </div>
            </div>

            {/* Акция 3 */}
            <div className="promo-card">
              <div className="promo-image">
                <Image
                  src={lastPromo}
                  alt="Скидка ко дню рождения на аренду SUP-досок и палаток в СПб"
                  height={200}
                  placeholder="blur"
                  className="promo"
                />
              </div>
              <div className="promo-details">
                <h3 className="promo-heading">День Рождения!</h3>
                <p className="promo-description">
                  Скидка 10% за 7 дней до и после вашего дня рождения.
                </p>
                <p className="promo-terms">Понадобится документ. Не суммируется с другими акциями.</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

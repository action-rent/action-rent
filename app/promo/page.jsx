// pages/promo.jsx
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css"; // подстрой путь
import "../promo.css"; // подстрой путь
import firstPromo from "../assets/picture/firstPromo.webp";
import secondPromo from "../assets/picture/secondPromo.webp";
import lastPromo from "../assets/picture/lastPromo.webp";

export default function Promo() {
  console.log(firstPromo.src, '1')
  return (
    <div className="landing-container">
      <Head>
        <title>Скидки и акции на аренду сапбордов и снаряжения — Action Rent</title>
        <meta
          name="description"
          content="Узнайте об актуальных скидках и акциях на прокат SUP-досок, палаток и туристического инвентаря в Санкт-Петербурге. Лучшие условия аренды от Action Rent."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "OfferCatalog",
              "name": "Скидки и акции на прокат",
              "url": "https://action-rent.ru/promo",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Скидка для группы",
                  "description": "Скидка 10% при аренде от 3 дней и 3 единиц инвентаря"
                },
                {
                  "@type": "Offer",
                  "name": "Акция выходного дня",
                  "description": "Скидка 5% на аренду с пятницы по воскресенье"
                },
                {
                  "@type": "Offer",
                  "name": "Скидка ко Дню Рождения",
                  "description": "10% скидка за 7 дней до и после даты рождения"
                }
              ]
            }
          `,
          }}
        />
      </Head>

      <div className="landing-background"></div>

      <div className="landing-content">
        <Header />

        <main className="promo-main">
          <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
            Акции и скидки на прокат SUP-досок и туристического инвентаря в Санкт-Петербурге
          </h1>

          <div className="promo-cards">
            {/* Акция 1 */}
            <div className="promo-card">
              <div className="promo-image" >
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
                <p className="promo-description">Cкидка 10% на общую сумму аренды инвентаря.<br /></p>
                <p className="promo-terms">
                  Условия: Скидка действует при аренде от 3 дней и от 3 единиц инвентаря.
                  <br /> Предложение не суммируется с другими акциями.
                </p>
              </div>
            </div>

            {/* Акция 2 */}
            <div className="promo-card">
              <div className="promo-image">
              <Image
                  src={secondPromo}
                  alt="Скидка выходного дня на аренду инвентаря, доставка для корпоративов"
                  height={200}
                  placeholder="blur"
                  className='promo'
                />
              </div>
              <div className="promo-details">
                <h3 className="promo-heading">Акция выходного дня</h3>
                <p className="promo-description">
                  Скидка 5% на аренду инвентаря на выходные (пятница - воскресенье).
                </p>
                <p className="promo-terms">
                  Условия: Скидка действует только при аренде с пятницы по воскресенье.
                  <br /> Предложение не суммируется с другими акциями.
                </p>
              </div>
            </div>

            {/* Акция 3 */}
            <div className="promo-card">
              <div className="promo-image">
              <Image
                  src={lastPromo}
                  alt="Скидка ко дню рождения на аренду SUP-досок, день рождение компании"
                  height={200}
                  placeholder="blur"
                  className='promo'
                />
              </div>
              <div className="promo-details">
                <h3 className="promo-heading">День Рождения!</h3>
                <p className="promo-description">
                  Скидка 10% на аренду инвентаря. <br /> 7 дней до и после дня рождения.
                </p>
                <p className="promo-terms">
                  Требуется предоставить документ, подтверждающий дату рождения.
                  <br /> Предложение не суммируется с другими акциями.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

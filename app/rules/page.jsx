import Head from "next/head";
import "../App.css";
import "../rules.css";
import {
  FaIdCard,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaExclamationTriangle,
  FaUndo,
  FaClipboardCheck,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaPassport,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Rules() {
  return (
    <div className="landing-container">
      <Head>
        <title>Правила аренды инвентаря — Action Rent СПб</title>
        <meta
          name="description"
          content="Условия проката SUP-досок, туристических палаток и снаряжения в Санкт-Петербурге. Всё, что нужно знать перед арендой — залог, документы, сроки возврата."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Правила аренды инвентаря",
                "url": "https://action-rent.ru/rules",
                "description": "Подробные правила и условия проката SUP-досок, палаток и туристического снаряжения в СПб от Action Rent."
              }
            `,
          }}
        />
      </Head>

      <div className="landing-background"></div>

      <div className="landing-content">
        <Header />

        {/* Скрытый заголовок для SEO */}
        <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          Условия и правила аренды SUP-досок и туристического инвентаря в Санкт-Петербурге
        </h1>

        <main className="rules-main">
          <div className="rules-scrollbox">
            <div className="rule-block">
              <FaPassport className="rule-icon" />
              <p>
                <strong>Документы:</strong> при аренде требуется паспорт для оформления договора.
              </p>
            </div>

            <div className="rule-block">
              <FaIdCard className="rule-icon" />
              <p>
                <strong>Залог:</strong><br />
                <strong>1. Документ + денежный залог</strong><br />
                Паспорт гражданина РФ, водительское удостоверение, военный билет или загранпаспорт.<br />
                <strong>2. Только денежный залог</strong><br />
                Возможен залог исключительно в денежной форме (чтобы избежать спорных ситуаций, уточняйте).
              </p>
            </div>

            <div className="rule-block">
              <FaMoneyBillWave className="rule-icon" />
              <p>
                <strong>Оплата:</strong> без предоплаты. Возможны наличный расчет, карта, QR-код или перевод.
              </p>
            </div>

            <div className="rule-block">
              <FaClock className="rule-icon" />
              <p>
                <strong>Срок аренды:</strong> до 18:00 — возврат до 12:00 следующего дня;
                после 18:00 — возврат до 22:00 следующего дня.
                Просрочка более 2 часов = дополнительный день аренды.
              </p>
            </div>

            <div className="rule-block">
              <FaTools className="rule-icon" />
              <p>
                <strong>Состояние:</strong> оборудование возвращается сухим и чистым. Иначе — плата за обслуживание.
              </p>
            </div>

            <div className="rule-block">
              <FaExclamationTriangle className="rule-icon" />
              <p>
                <strong>Ответственность:</strong> арендатор отвечает за оборудование. Повреждение — ремонт, замена или компенсация.
              </p>
            </div>

            <div className="rule-block">
              <FaUndo className="rule-icon" />
              <p>
                <strong>Отказ и возврат:</strong> деньги за неиспользованные дни не возвращаются. Возможен отказ в прокате.
              </p>
            </div>

            <div className="rule-block">
              <FaClipboardCheck className="rule-icon" />
              <p>
                <strong>Проверка:</strong> при возврате — проверка комплектности. Ущерб фиксируется актом.
              </p>
            </div>

            <div className="rule-block">
              <FaBoxOpen className="rule-icon" />
              <p>
                <strong>Комплектация:</strong> выдаётся полный комплект. Потеря элементов — компенсация по прайсу.
              </p>
            </div>

            <div className="rule-block">
              <FaMapMarkedAlt className="rule-icon" />
              <p>
                <strong>Общие положения:</strong> арендатор соглашается с публичной офертой и правилами проката.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

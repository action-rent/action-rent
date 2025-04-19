export const metadata = {
  title: "Правила аренды снаряжения и сапбордов в СПб | Action Rent",
  description:
    "Условия аренды SUP-досок, палаток и туристического снаряжения в Санкт-Петербурге. Что нужно для проката: документы, залог, сроки возврата, правила пользования.",
};

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
      <div className="landing-background"></div>

      <div className="landing-content">
        <Header />

        {/* SEO H1 */}
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
                Паспорт, водительское удостоверение, военный билет или загранпаспорт.<br />
                <strong>2. Только денежный залог</strong><br />
                Возможен залог исключительно в денежной форме.
              </p>
            </div>

            <div className="rule-block">
              <FaMoneyBillWave className="rule-icon" />
              <p>
                <strong>Оплата:</strong> без предоплаты. Принимаем наличные, карты, переводы.
              </p>
            </div>

            <div className="rule-block">
              <FaClock className="rule-icon" />
              <p>
                <strong>Срок аренды:</strong> возврат до 12:00 (если аренда до 18:00) или до 22:00 (если позже).
              </p>
            </div>

            <div className="rule-block">
              <FaTools className="rule-icon" />
              <p>
                <strong>Состояние:</strong> возврат сухого и чистого снаряжения.
              </p>
            </div>

            <div className="rule-block">
              <FaExclamationTriangle className="rule-icon" />
              <p>
                <strong>Ответственность:</strong> за повреждения — компенсация или ремонт.
              </p>
            </div>

            <div className="rule-block">
              <FaUndo className="rule-icon" />
              <p>
                <strong>Отказ:</strong> деньги за неиспользованные дни не возвращаются.
              </p>
            </div>

            <div className="rule-block">
              <FaClipboardCheck className="rule-icon" />
              <p>
                <strong>Проверка:</strong> при возврате проверяется комплектность.
              </p>
            </div>

            <div className="rule-block">
              <FaBoxOpen className="rule-icon" />
              <p>
                <strong>Комплектация:</strong> утерянные элементы компенсируются по прайсу.
              </p>
            </div>

            <div className="rule-block">
              <FaMapMarkedAlt className="rule-icon" />
              <p>
                <strong>Общие положения:</strong> клиент соглашается с публичной офертой и правилами.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

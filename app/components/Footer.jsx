import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  return (
    <>
      <footer className="landing-footer">
        <div className="landing-social-icons">
          <a href="https://t.me/actionrent78" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={20} />
          </a>
          <FaInstagram size={20} />
          <a href="https://wa.me/79502226590" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} />
          </a>
        </div>

        <div className="landing-copyright">&copy; 2025 ActionRent</div>
      </footer>
      <div className="landing-oferta">
        Информация, представленная на данном сайте, носит исключительно информационный характер
        и не является публичной офертой в соответствии с положениями гражданского законодательства
        Российской Федерации. Компания не несет ответственности за возможные изменения цен и
        доступности товаров и услуг, представленных на сайте.
      </div>
    </>
  );
};

export default Footer;

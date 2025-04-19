import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const ProductCard = ({ product, days, weekend, onDaysChange, onToggleWeekend }) => {
  const prices = weekend ? product.weekendPricesByDay : product.pricesByDay;
  const total = prices[days - 1];

  return (
    <div className="product-card">
      <Image
        src={typeof product.image === "string" ? product.image : product.image.src}
        alt={product.name}
        width={300}
        height={200}
        className="product-image"
      />

      <h3 className="product-name">{product.name}</h3>
      <p className="product-second-name">{product.secondName}</p>

      <div className="days-selector">
        <button onClick={() => onDaysChange(-1)}>-</button>
        <span>{days} дн.</span>
        <button onClick={() => onDaysChange(1)}>+</button>
      </div>

      <label className="weekend-checkbox">
        <input
          type="checkbox"
          checked={weekend}
          onChange={onToggleWeekend}
        />
        <span>Выходной</span>
      </label>

      <p className="product-price">{total.toLocaleString()}₽</p>

      <div className="landing-social-icons">
        <a href="https://t.me/actionrent78" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
        <a href="https://wa.me/79502226590" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
        <a href="tel:+79502226590" className="mobile-only">
          <FaPhone size={28} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

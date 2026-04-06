import "./App.css"; 
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="landing-container">
      <div className="landing-background"></div>
      <div className="landing-content">
        <h1>Ошибка 404</h1>
        <h3>
          Кажется, что-то пошло не так! Страница, которую вы запрашиваете, не существует.
          Возможно, она устарела, была удалена, или вы ввели неверный адрес.
        </h3>
        <Link href="/">
          <button className="btn primary">На Главную</button>
        </Link>
      </div>
    </div>
  );
}

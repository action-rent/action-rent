"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "../App.css";
import "../PriceCategory.css";

import { products } from "../data/products";
import { categories } from "../data/categories";

export default function PriceCategory() {
  const [daysSelected, setDaysSelected] = useState(
    products.reduce((acc, { id }) => ({ ...acc, [id]: 1 }), {})
  );
  const [isWeekend, setIsWeekend] = useState(
    products.reduce((acc, { id }) => ({ ...acc, [id]: false }), {})
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const changeDays = (id, delta) => {
    setDaysSelected(prev => ({
      ...prev,
      [id]: Math.min(7, Math.max(1, prev[id] + delta))
    }));
  };

  const toggleWeekend = (id) => {
    setIsWeekend(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  return (
    <div className="landing-container">
      <Head>
        <title>Цены на прокат снаряжения | SUP-доски, палатки и другое — Action Rent СПб</title>
        <meta
          name="description"
          content="Узнайте актуальные цены на прокат туристического снаряжения, SUP-досок, палаток и других товаров. Удобные условия аренды в СПб."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Store",
                "name": "Action Rent",
                "image": "https://action-rent.ru/logo.png",
                "description": "Прокат SUP-досок, палаток и туристического снаряжения в Санкт-Петербурге",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Санкт-Петербург",
                  "streetAddress": "проспект Энгельса, 126к1"
                },
                "openingHours": "Mo-Su 09:00-21:00",
                "telephone": "+7 (950) 222-65-90",
                "url": "https://action-rent.ru/price"
              }
            `,
          }}
        />
      </Head>

      <div className="landing-background" />

      <div className="landing-content">
        <Header />

        <main className="category-section">
          {/* SEO H1 */}
          <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
            Цены на прокат туристического снаряжения и SUP-досок в Санкт-Петербурге
          </h1>

          {categories.map(category => (
            <div key={category.id} className="category-block">
              <button className="category-header" onClick={() => openModal(category)}>
                {category.title} <span>▼</span>
              </button>
            </div>
          ))}
        </main>

        <Footer />

        {/* Модальное окно */}
        {isModalOpen && selectedCategory && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>✖</button>
              <h2>{selectedCategory.title}</h2>
              <div className="products-section">
                <div className="products-grid">
                  {products
                    .filter(product => product.title === selectedCategory.title)
                    .map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        days={daysSelected[product.id]}
                        weekend={isWeekend[product.id]}
                        onDaysChange={delta => changeDays(product.id, delta)}
                        onToggleWeekend={() => toggleWeekend(product.id)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { Metadata } from "next";
import PriceCategory from "./PriceCategory";

export const metadata: Metadata = {
  title: "Цены на прокат снаряжения в СПб | SUP-доски, палатки — Action Rent",
  description:
    "Актуальные цены на аренду и прокат туристического снаряжения в Санкт-Петербурге. SUP-доски, палатки, рюкзаки и многое другое — выгодные условия без залога.",
};

export default function PricePage() {
  return <PriceCategory />;
}

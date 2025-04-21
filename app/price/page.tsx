import { Metadata } from "next";
import PriceCategory from "./PriceCategory";

export const metadata: Metadata = {
  title: "Цены на прокат снаряжения в СПб | сап доски, палатки — Action Rent",
  description:
    "Актуальные цены на аренду и прокат туристического снаряжения в Санкт-Петербурге. шатры, спальники, палатки, рюкзаки и многое другое — выгодные условия.",
};

export default function PricePage() {
  return <PriceCategory />;
}

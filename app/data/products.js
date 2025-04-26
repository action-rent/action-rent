import touristBackpack45l from "../assets/picture/touristBackpack45l.webp"
import touristBackpack65l from "../assets/picture/touristBackpack65l.webp"
import tent from "../assets/picture/tent.webp"
import table from "../assets/picture/table.webp"
import bigTent from "../assets/picture/bigTent.webp"
import lifeJacket from "../assets/picture/lifeJacket.webp"
import sleepingBag from "../assets/picture/sleepingBag.webp"
import premSup from "../assets/picture/premSup.webp"
import secondSup from "../assets/picture/secondSup.webp"
import tent3x4 from "../assets/picture/tent3x4.webp"
import phoneBag from "../assets/picture/phoneBag.webp"
import travelMat from "../assets/picture/travelMat.webp"
import backPack from "../assets/picture/backPack.webp"
import bigTentRH from "../assets/picture/bigTentRH.webp"
import sleepBag3 from "../assets/picture/sleepBag3.webp"

export const products = [
  {
    id: 1,
    name: "Premium Сапборд",
    secondName: "11'6\"x35\"x6\"/350*89*15см",
    image: premSup,
    pricesByDay: [800, 1600, 2300, 3000, 3600, 4200, 4700],
    weekendPricesByDay: [1000, 2000, 2700, 3400, 4000, 4600, 5100],
    title: "Сапборды",
  },
  {
    id: 2,
    name: "Сапборд",
    secondName: "11\"x32\"x6\"/335*83*15см",
    image: secondSup,
    pricesByDay: [700, 1400, 2000, 2600, 3100, 3600, 4000],
    weekendPricesByDay: [900, 1800, 2400, 3000, 3500, 4000, 4400],
    title: "Сапборды",
  },
  {
    id: 3,
    name: "Палатка Outventure Dome 3",
    secondName: "Идеально подходит для 2-3 человек. Хорошо защищает от дождя и ветра.",
    image: tent,
    pricesByDay: [500, 1000, 1400, 1700, 2000, 2200, 2400],
    weekendPricesByDay: [500, 1000, 1400, 1700, 2000, 2200, 2400],
    title: "Палатки",
  },
  {
    id: 4,
    name: "Спальник +15°",
    secondName: "В комплекте чистый флисовый вкладыш от 5° дополнительного тепла для спального мешка.",
    image: sleepingBag,
    pricesByDay: [300, 600, 800, 1000, 1100, 1200, 1300],
    weekendPricesByDay: [300, 600, 800, 1000, 1100, 1200, 1300],
    title: "Спальники",
  },
  {
    id: 5,
    name: "Шатер",
    secondName: "320х320х245см",
    image: bigTent,
    pricesByDay: [900, 1800, 2500, 3000, 3400, 3700, 3900],
    weekendPricesByDay: [900, 1800, 2500, 3000, 3400, 3700, 3900],
    title: "Тенты, Шатры",
  },
  {
    id: 6,
    name: "Шатер Outventure",
    secondName: "350х350х200см",
    image: bigTentRH,
    pricesByDay: [1500, 3000, 4000, 4500, 5000, 5300, 5600],
    weekendPricesByDay: [1500, 3000, 4000, 4500, 5000, 5300, 5600],
    title: "Тенты, Шатры",
  },
  {
    id: 7,
    name: "Рюкзак Outventure 45л",
    image: touristBackpack45l,
    pricesByDay: [400, 800, 1100, 1300, 1500, 1700, 1800],
    weekendPricesByDay: [400, 800, 1100, 1300, 1500, 1700, 1800],
    title: "Рюкзаки",
  },
  {
    id: 8,
    name: "Рюкзак Outventure 65л",
    image: touristBackpack65l,
    pricesByDay: [400, 800, 1100, 1300, 1500, 1700, 1800],
    weekendPricesByDay: [400, 800, 1100, 1300, 1500, 1700, 1800],
    title: "Рюкзаки",
  },
  {
    id: 9,
    name: "Складной стол",
    secondName: "В комплекте 4 складных стульчика",
    image: table,
    pricesByDay: [400, 800, 1000, 1100, 1200, 1300, 1400],
    weekendPricesByDay: [400, 800, 1000, 1100, 1200, 1300, 1400],
    title: "Туристическая мебель, Аксессуары",
  },
  {
    id: 10,
    name: "Жилет",
    secondName: "S,M,L,XL",
    image: lifeJacket,
    pricesByDay: [200, 400, 500, 550, 600, 650, 700],
    weekendPricesByDay: [200, 400, 500, 550, 600, 650, 700],
    title: "Туристическая мебель, Аксессуары",
  },
  {
    id: 11,
    name: "Тент Outventure TARP",
    secondName: "3х4 м ",
    image: tent3x4,
    pricesByDay: [200, 400, 500, 600, 650, 700, 750],
    weekendPricesByDay: [200, 400, 500, 600, 650, 700, 750],
    title: "Тенты, Шатры",
  },
  {
    id: 12,
    name: "Чехол для телефона",
    secondName: "Водонепроницаемый",
    image: phoneBag,
    pricesByDay: [100, 200, 250, 250, 250, 250, 250],
    weekendPricesByDay: [100, 200, 250, 250, 250, 250, 250],
    title: "Туристическая мебель, Аксессуары",
  },
  {
    id: 13,
    name: "Каремат",
    secondName: "Коврик туристический",
    image: travelMat,
    pricesByDay: [50, 100, 150, 150, 150, 150, 150],
    weekendPricesByDay: [50, 100, 150, 150, 150, 150, 150],
    title: "Туристическая мебель, Аксессуары",
  },
  {
    id: 14,
    name: "Гермомешок",
    secondName: "5л",
    image: backPack,
    pricesByDay: [100, 200, 250, 250, 250, 250, 250],
    weekendPricesByDay: [100, 200, 250, 250, 250, 250, 250],
    title: "Туристическая мебель, Аксессуары",
  },
  {
    id: 15,
    name: "Спальник Outventure +3°",
    secondName: "В комплекте чистый флисовый вкладыш от 5° дополнительного тепла для спального мешка.",
    image: sleepBag3,
    pricesByDay: [300, 600, 800, 1000, 1100, 1200, 1300],
    weekendPricesByDay: [300, 600, 800, 1000, 1100, 1200, 1300],
    title: "Спальники",
  },
];

import img1 from "../assets/images/event-img-1.svg";
import img2 from "../assets/images/event-img-2.svg";
import img3 from "../assets/images/event-img-3.svg";
import img4 from "../assets/images/event-img-4.svg";
import img5 from "../assets/images/event-img-5.svg";
import img6 from "../assets/images/event-img-6.svg";
import img7 from "../assets/images/event-img-7.svg";

export interface EventsCardData {
  id: number;
  title: string;
  type: string;
  text: string;
  location: string;
  date: string;
  time: string;
  img: any;
}

export const eventsCardDatas: EventsCardData[] = [
  {
    id: 1,
    title: "Ilhom manbai",
    type: "San’at va madaniyat",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img1,
  },
  {
    id: 2,
    title: "Kompyuter asri",
    type: "IT",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img2,
  },
  {
    id: 3,
    title: "Shodlik qasidasi",
    type: "San’at va madaniyat",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img3,
  },
  {
    id: 4,
    title: "Yoshlar kelajagi",
    type: "Trening",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img4,
  },
  {
    id: 5,
    title: "Texnalogiya marafoni",
    type: "IT",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img5,
  },
  {
    id: 6,
    title: "What’s on the clouds?",
    type: "Turizm",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img6,
  },
  {
    id: 7,
    title: "Java proyekti",
    type: "IT",
    text: "Nogironlarning ijtimoiy-psixologik moslashuvi muammosini hal etishda muhim qadam tashlandi; Loyihani amalga oshirish jarayonida tashkilotning reabilitatsiya qilish, hayotga ...",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img: img7,
  },
];

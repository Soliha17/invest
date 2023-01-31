import sameImg1 from "../assets/images/same-event-img1.svg";
import sameImg2 from "../assets/images/same-event-img2.svg";
import sameImg3 from "../assets/images/same-event-img3.svg";

export interface SameEventCardData {
  id: number;
  title: string;
  type: string;
  location: string;
  date: string;
  time: string;
  img: any;
}

export const sameEventCardDatas: SameEventCardData[] = [
  {
    id: 1,
    title: "Java proyekti",
    type: "IT",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img:sameImg1
  },
  {
    id: 2,
    title: "Yoshlar kelajagi",
    type: "Trening",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img:sameImg2
  },
  {
    id: 3,
    title: "What’s on the clouds?",
    type: "Turizm",
    location: "Uzbekistan Hotel",
    date: "02.08.2022  ",
    time: "14:36",
    img:sameImg3
  },
];
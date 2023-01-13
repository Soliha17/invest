import img9 from "../assets/images/podcast-img9.svg";
import img10 from "../assets/images/podcast-img10.svg";

export interface PodcastsEcoCardData {
  id: number;
  title: string;
  text: string;
  podcastTime: string;
  img: any;
}
export const podcastsEcoCardDatas: PodcastsEcoCardData[] = [
  {
    id: 1,
    title: "Shamol energiyasi",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img9,
  },
  {
    id: 2,
    title: "Yashil bino",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img10,
  },
];

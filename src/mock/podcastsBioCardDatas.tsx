import img5 from "../assets/images/podcast-img5.svg";
import img6 from "../assets/images/podcast-img6.svg";

export interface PodcastsBioCardData {
  id: number;
  title: string;
  text: string;
  podcastTime: string;
  img: any;
}
export const podcastsBioCardDatas: PodcastsBioCardData[] = [
  {
    id: 1,
    title: "Raqamli PSR",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img5,
  },
  {
    id: 2,
    title: "Yangi kashfiyot",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img6,
  },
];

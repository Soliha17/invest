import img1 from "../assets/images/podcast-img1.svg";
import img2 from "../assets/images/podcast-img2.svg";
import img3 from "../assets/images/podcast-img3.svg";
import img4 from "../assets/images/podcast-img4.svg";

export interface PodcastsCardData {
  id: number;
  title: string;
  text: string;
  podcastTime: string;
  img: any;
}

export const podcastsCardDatas: PodcastsCardData[] = [
  {
    id: 1,
    title: "FrontoWeek",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img1,
  },
  {
    id: 2,
    title: "IT Life",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img2,
  },
  {
    id: 3,
    title: "Robotlar hayoti",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img3,
  },
  {
    id: 4,
    title: "Microchiplar",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img4,
  },
];

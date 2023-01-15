import img7 from "../assets/images/podcast-img7.svg";
import img8 from "../assets/images/podcast-img8.svg";

export interface PodcastsArtCardData {
  id: number;
  title: string;
  text: string;
  podcastTime: string;
  img: any;
}
export const podcastsArtCardDatas: PodcastsArtCardData[] = [
  {
    id: 7,
    title: "Ranglar jilosi",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img7,
  },
  {
    id: 8,
    title: "Ilhom parisi",
    text: "GitHub Actions vulnerability, US bans sales of Huawei, TrueNAS open source hyperconv...",
    podcastTime: "21 minut",
    img: img8,
  },
];

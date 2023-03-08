import Home from "../pages/home/Home";
import Vacancy from "../pages/vacancy/Vacancy";
import VacancyFull from "../pages/vacancyFull/VacancyFull";
import Events from "../pages/events/Events";
import EventsFull from "../pages/eventsFull/EventsFull";
import Grants from "../pages/grants/Grants";
import GrantsFull from "../pages/grantsFull/GrantsFull";
import News from "../pages/news/News";
import NewsFull from "../pages/newsFull/NewsFull";
import Volunteer from "../pages/volunteer/Volunteer";
import VolunteerFull from "../pages/volunteerFull/VolunteerFull";
import Podcasts from "../pages/podcasts/Podcasts";
import ItPodcast from "../pages/podcasts/itPodcast/ItPodcast";
import Modal from "../components/modal/Modal";
import SuccessModal from "../components/successModal/successModal";

interface Utils {
  id: number;
  title: string;
  path: string;
  element: any;
}

export const navbarUtils: Utils[] = [
  {
    id: 1,
    title: "home",
    path: "/",
    element: Home,
  },
  {
    id: 2,
    title: "News",
    path: "/news",
    element: News,
  },
  {
    id: 3,
    title: "News",
    path: "/news/:id",
    element: NewsFull,
  },
  {
    id: 4,
    title: "Grants",
    path: "/grants",
    element: Grants,
  },
  {
    id: 5,
    title: "Grants",
    path: "/grants/:id",
    element: GrantsFull,
  },
  {
    id: 6,
    title: "Vacancy",
    path: "/vacancy",
    element: Vacancy,
  },
  {
    id: 7,
    title: "VacancyFull",
    path: "/vacancy/:id",
    element: VacancyFull,
  },
  {
    id: 8,
    title: "Events",
    path: "/events",
    element: Events,
  },
  {
    id: 9,
    title: "EventsFull",
    path: "/events/:id",
    element: EventsFull,
  },
  {
    id: 10,
    title: "Volunteer",
    path: "/volunteer",
    element: Volunteer,
  },
  {
    id: 11,
    title: "VolunteerFull",
    path: "/volunteer/:id",
    element: VolunteerFull,
  },
  {
    id: 12,
    title: "Podcasts",
    path: "/podcasts",
    element: Podcasts,
  },
  {
    id: 13,
    title: "Podcasts",
    path: "/podcasts/it",
    element: ItPodcast,
  },
  {
    id: 14,
    title: "Modal",
    path: "/modal",
    element: Modal,
  },
  {
    id: 15,
    title: "Success Modal",
    path: "/smodal",
    element: SuccessModal,
  },
];

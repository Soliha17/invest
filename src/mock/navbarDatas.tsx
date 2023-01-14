import Home from "../pages/home/Index";
import Vacancy from "../pages/vacancy/Index";
import VacancyFull from "../pages/vacancyFull/Index";
import Events from "../pages/events/Index";
import EventsFull from "../pages/eventsFull/Index";
import Grants from "../pages/grants/Index";
import GrantsFull from "../pages/grantsFull/Index";
import News from "../pages/news/Index";
import NewsFull from "../pages/newsFull/Index";
import Volunteer from "../pages/volunteer/Index";
import VolunteerFull from "../pages/volunteerFull/Index";
import Podcasts from "../pages/podcasts/Index";
import ItPodcast from "../pages/podcasts/itPodcast/Index";
import Modal from "../components/modal/Index";
import SuccessModal from "../components/successModal/Index";

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

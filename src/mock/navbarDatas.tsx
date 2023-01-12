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
];

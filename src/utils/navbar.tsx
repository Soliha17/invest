import Vacancy from "../pages/vacancy/Index";
import Events from "../pages/events/Index";
import Grants from "../pages/grants/Index";
import GrantsMain from "../pages/grantsFull/Index";
import Home from "../pages/home/Index";
import News from "../pages/news/Index";
import NewsFull from "../pages/newsFull/Index";
import VacancyFull from "../pages/vacancyFull/Index";

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
    element: GrantsMain,
  },
  {
    id: 6,
    title: "Vacancy",
    path: "/vacancy",
    element: Vacancy,
  },
  {
    id: 7,
    title: "Vacancy",
    path: "/vacancy/:id",
    element: VacancyFull,
  },
  {
    id: 8,
    title: "Events",
    path: "/events",
    element: Events,
  },
];

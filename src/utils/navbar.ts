import Grants from "../pages/grants/Index";
import GrantsMain from "../pages/grantsFull/Index";
import Home from "../pages/home/Index";
import News from "../pages/news/Index";
import NewsFull from "../pages/newsFull/Index";

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
];

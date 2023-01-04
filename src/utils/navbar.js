import Grants from "../pages/grants/Index";
import GrantsMain from "../pages/grantsFull/Index";
import Home from "../pages/home/Index"
import News from "../pages/news/Index";
import NewsFull from "../pages/newsFull/Index";

export const navbarUtils = [
  {
    id: 1,
    title: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    title: "News",
    path: "/news",
    element: <News />,
  },
  {
    id: "2-1",
    title: "News",
    path: "/news/:id",
    element: <NewsFull />,
  },
  {
    id: 3,
    title: "Grants",
    path: "/grants",
    element: <Grants />,
  },
  {
    id: "3-1",
    title: "Grants",
    path: "/grants/:id",
    element: <GrantsMain/>,
  },
];

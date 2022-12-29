import Home from "../pages/home/Index";
import News from "../pages/news/Index";
import Podcasts from "../pages/podcasts/Index";


export const navbarUtils = [
  {
    id: 1,
    title: "Home",
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
    id: 3,
    title: "Podcasts",
    path: "/podcast",
    element: <Podcasts />,
  },
];

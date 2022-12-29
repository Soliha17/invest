import Podcasts from "../pages/podcasts/Index"
import News from "../pages/news/Index";
import NewsFull from "../pages/newsFull/Index";

export const navbarUtils = [
  {
    id: 1,
    title: "podcast",
    path: "/podcast",
    element: <Podcasts />,
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
];

import React from "react";

import "./style.scss"

import Sidebar from "../../components/sidebar/Index";
import PodcastsFeed from "./components/podcastsFeed/Index";
import Menu from "../../components/menu/Index";
import PodcastsMain from "./components/podcastsMain/Index";
import PodcastMenu from "./components/podcastMenu/Index";

function Podcasts() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full podcast-full">
          <PodcastsFeed />
          <div className="main-inner">
            <PodcastsMain />
            <PodcastMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;

import React from "react";

import "./style.scss";

import Sidebar from "../../components/sidebar/Index";
import PodcastsFeed from "./components/podcastsFeed/Index";
import PodcastsMain from "./components/podcastsMain/Index";
import PodcastMenu from "./components/podcastMenu/Index";
import Player from "../../components/player/Index";
import PlayerMenu from "../../components/playerMenu/Index";

function Podcasts() {
  return (
    <div className="wrapper podcast-wrapper">
      <div className="main podcast-main">
        <Sidebar />
        <div className="main-full podcast-full">
          <PodcastsFeed />
          <div className="main-inner">
            <PodcastsMain />
            <PodcastMenu />
            <PlayerMenu />
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
}

export default Podcasts;

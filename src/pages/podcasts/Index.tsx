import React, { useState, useEffect, MouseEvent } from "react";

import "./style.scss";

import Sidebar from "../../components/sidebar/Index";
import PodcastsFeed from "./components/podcastsFeed/Index";
import PodcastsMain from "./components/podcastsMain/Index";
import PodcastMenu from "./components/podcastMenu/Index";
import Player from "../../components/player/Index";
import PlayerMenu from "../../components/playerMenu/Index";

interface WrapperProps {}

const Podcasts: React.FC<WrapperProps> = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const handleClose = () => {
    setSelectedCardId(null);
  };

  return (
    <div className="wrapper podcast-wrapper">
      <div className="main podcast-main">
        <Sidebar />
        <div className="main-full podcast-full">
          <PodcastsFeed />
          <div className="main-inner">
            <PodcastsMain
              handleCardClick={handleCardClick}
              selectedCardId={selectedCardId}
            />
            {selectedCardId !== null && (
              <PlayerMenu handleClose={handleClose} />
            )}
            <PodcastMenu />
          </div>
        </div>
      </div>
      {selectedCardId !== null && <Player />}
    </div>
  );
};

export default Podcasts;

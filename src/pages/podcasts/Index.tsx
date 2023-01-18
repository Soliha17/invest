import React, { useState, useEffect, MouseEvent } from "react";
import { useSidebar } from "../../hooks/UseSidebar";

import "./style.scss";

import Sidebar from "../../components/sidebar/Index";
import PodcastsFeed from "./components/podcastsFeed/Index";
import PodcastsMain from "./components/podcastsMain/Index";
import PodcastMenu from "./components/podcastMenu/Index";
import Player from "../../components/player/Index";
import PlayerMenu from "../../components/playerMenu/Index";

interface WrapperProps {}

const Podcasts: React.FC<WrapperProps> = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const [visibility, setVisibility] = React.useState(true);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const handleClose = () => {
    setSelectedCardId(null);
  };
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="wrapper podcast-wrapper">
      <div className="main podcast-main">
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
        <div className="main-full podcast-full">
          <PodcastsFeed
            visibility={visibility}
            toggleVisibility={toggleVisibility}
          />
          <div className="main-inner">
            <PodcastsMain
              handleCardClick={handleCardClick}
              selectedCardId={selectedCardId}
            />
            {selectedCardId !== null && (
              <PlayerMenu handleClose={handleClose} />
            )}
            <PodcastMenu
              visibility={visibility}
              toggleVisibility={toggleVisibility}
            />
          </div>
        </div>
      </div>
      {selectedCardId !== null && <Player />}
    </div>
  );
};

export default Podcasts;

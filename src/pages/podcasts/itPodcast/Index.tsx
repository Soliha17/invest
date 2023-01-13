import React from "react";

import "./style.scss";

import PodcastsCard from "../components/podcastsCard/Index";

import { podcastsCardItDatas } from "../../../mock/podcastsItCardDatas";
import Sidebar from "../../../components/sidebar/Index";
import PodcastsFeed from "../components/podcastsFeed/Index";
import PodcastMenu from "../components/podcastMenu/Index";

function ItPodcast() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full podcast-full">
          <PodcastsFeed />
          <div className="main-inner">
            <div className="podcasts-main">
              <span className="top__podcasts-main">
                <h3 className="font-style__3239">IT</h3>
                <span className="content__podcasts-main">
                  <span className="info__content">
                    <h6 className="font-style__1215">So’ngilar</h6>
                    <h5 className="font-style__1619">
                      Packet Pushers - IT sohasidagi ishlarning rivojlanishi
                    </h5>
                    <p className="font-style__1215">
                      An unabashedly nerdy swan dive into networking technology.
                      Weekly episodes feature industry....
                    </p>
                    <button className="listen-btn font-style__1619">
                      Tinglash
                    </button>
                  </span>
                </span>
              </span>
              <span className="bottom__podcasts-main">
                {podcastsCardItDatas.map((item) => (
                  <React.Fragment key={item.id}>
                    <PodcastsCard
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      img={item.img}
                      podcastTime={item.podcastTime}
                    />
                  </React.Fragment>
                ))}
              </span>
            </div>
            <PodcastMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItPodcast;

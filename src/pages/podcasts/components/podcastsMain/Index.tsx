import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import PodcastsCard from "../podcastsCard/Index";
import BioCard from "../bioCard/Index";

import ArtCard from "../artCard/Index";
import EcoCard from "../EcoCard/Index";

import { podcastsCardDatas } from "../../../../mock/podcastsCardDatas";
import { podcastsBioCardDatas } from "../../../../mock/podcastsBioCardDatas";
import { podcastsArtCardDatas } from "../../../../mock/podcastsArtCardDatas";
import { podcastsEcoCardDatas } from "../../../../mock/podcastsEcoCardDatas";

function PodcastsMain() {
  const navigate = useNavigate();
  function onGo() {
    navigate(`/podcasts/it`);
  }

  return (
    <div className="podcasts-main">
      <span className="top__podcasts-main">
        <h3 className="font-style__3239" onClick={onGo}>IT</h3>
        <span className="content__podcasts-main">
          <span className="info__content">
            <h6 className="font-style__1215">So’ngilar</h6>
            <h5 className="font-style__1619">
              Packet Pushers - IT sohasidagi ishlarning rivojlanishi
            </h5>
            <p className="font-style__1215">
              An unabashedly nerdy swan dive into networking technology. Weekly
              episodes feature industry....
            </p>
            <button className="listen-btn font-style__1619">Tinglash</button>
          </span>
        </span>
      </span>
      <span className="bottom__podcasts-main">
        {podcastsCardDatas.map((item) => (
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
        <h4 className="font-style__3239">Biotexnologiya</h4>
        <span className="content__podcasts-main">
          {podcastsBioCardDatas.map((item) => (
            <React.Fragment key={item.id}>
              <BioCard
                id={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
                podcastTime={item.podcastTime}
              />
            </React.Fragment>
          ))}
        </span>
        <h4 className="font-style__3239">San’at</h4>
        <span className="content__podcasts-main">
          {podcastsArtCardDatas.map((item) => (
            <React.Fragment key={item.id}>
              <ArtCard
                id={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
                podcastTime={item.podcastTime}
              />
            </React.Fragment>
          ))}
        </span>
        <h4 className="font-style__3239">Ekologiya</h4>
        <span className="content__podcasts-main">
          {podcastsEcoCardDatas.map((item) => (
            <React.Fragment key={item.id}>
              <EcoCard
                id={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
                podcastTime={item.podcastTime}
              />
            </React.Fragment>
          ))}
        </span>
      </span>
    </div>
  );
}

export default PodcastsMain;

import React from "react";

import "./style.scss";
import { newsCardDatas } from "../../../../mock/newsCardDatas";

import NewsCard from "../newsCard/Index";

function NewsMain() {
  return (
    <div className="news-main">
      {newsCardDatas.map((item) => (
        <React.Fragment key={item.id}>
          <NewsCard
            id={item.id}
            path={item.path}
            newsType={item.newsType}
            newsDate={item.newsDate}
            logoImg={item.logoImg}
            newsText={item.newsText}
            fullInfo={item.fullInfo}
            img={item.img}
            newsTitle={item.newsTitle}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
export default NewsMain;

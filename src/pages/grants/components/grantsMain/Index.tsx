import React from "react";

import "./style.scss";
import { grantsCardDatas } from "../../../../mock/grantCardDatas";
import GrantsCard from "../grantsCard/Index";

function GrantsMain() {
  return (
    <div className="grants-main">
      {grantsCardDatas.map((item) => (
        <React.Fragment key={item.id}>
          <GrantsCard
            id={item.id}
            path={item.path}
            firstInfo={item.firstInfo}
            secondInfo={item.secondInfo}
            listInfo={item.listInfo}
            listInfoSecond={item.listInfoSecond}
            listInfoThird={item.listInfoThird}
            thirdInfo={item.thirdInfo}
            firstList={item.firstList}
            secondList={item.secondList}
            thirdList={item.thirdList}
            grantsType={item.grantsType}
            text={item.text}
            img={item.img}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
export default GrantsMain;

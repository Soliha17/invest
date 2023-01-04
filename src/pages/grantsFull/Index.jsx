import React, { useState,useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";

import "./style.scss";
import { grantsInfo } from "../../utils/grantsInfo";
import GrantsFeed from "../../components/GrantsFeed/Index";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import grantsLogo from "../../assets/icons/grant-page-mark.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import Sidebar from "../../components/Sidebar/Index";
import backIcon from "../../assets/icons/back-icon.svg";
import smallDateIcon from "../../assets/icons/small-date-icon.svg"
import smallLocationIcon from "../../assets/icons/small-location-icon.svg";


function GrantsMain() {
  const [dots, setDots] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [grants, setGrants] = useState([]);
  useEffect(() => {
    let result = grantsInfo.filter((item) => {
      return item.id === +id;
    });
    setGrants(result);
  }, [id]);

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="main wrapper">
        <Sidebar />
        <div className="main-full">
          <span className="grants-full__top flex">
            <span className="back-group flex" onClick={goBack}>
              <span className="back-icon">
                <img src={backIcon} alt="" />
              </span>
            </span>
            <GrantsFeed />
          </span>
          <div className="grants-container">
            {grants.map((info) => (
              <span className="grants-box" key={info.id}>
                <span className="grants__top flex">
                  <img src={grantsLogo} alt="grants Logo" />
                  <span className="three-dots">
                    <img
                      src={threeDotsIcon}
                      onClick={() => setDots(!dots)}
                      alt="proas"
                    />
                    <span
                      className="dots-content"
                      style={dots ? { display: "block" } : { display: "none" }}
                    >
                      <Link to="">
                        <img src={copyIcon} alt="" />
                        Nusxalash
                      </Link>
                      <Link to="">
                        <img src={spamIcon} alt="" />
                        Shikoyat qilish
                      </Link>
                    </span>
                  </span>
                </span>
                <p className="grants-type f-1619">{info.grantsType}</p>
                <span className="grants-middle">
                  <p className="f-2431">{info.text}</p>
                  <img src={info.img} alt="oxford img" />
                </span>
                <span className="footer__news-main flex">
                  <span className="left__footer flex">
                    <p className="flex f-1417">
                      <img
                        src={smallDateIcon}
                        width="16"
                        height="16"
                        alt="eye icon"
                      />
                      Tugash vaqti: 04.01.2023
                    </p>
                    <p className="flex f-1417">
                      <img src={smallLocationIcon} alt="location icon" />
                      Buyuk Britaniya
                    </p>
                  </span>
                  <span className="right__footer flex">
                    <img src={sendIcon} alt="" />
                    <img src={savedIcon} alt="" />
                  </span>
                </span>
                <span className="info-box__grants">
                  <span className="first__info-box">
                    <h6 className="f-2431">Batafsil</h6>
                    <p className="f-2024">
                      Buyuk Britaniyada joylashgan Oksford universiteti
                      tarkibidagi Said Business School oliygohi MBA magistrlik
                      dasturida uzluksiz taʼlim (full-time) asosida tahsil
                      olishni xohlovchilar uchun har yili Skoll Scholarship
                      dasturini taklif etadi. Grant butun magistrlik dasturi
                      davri (1 yil) uchun taqdim etiladi. Har yili 4 nafargacha
                      talaba ushbu grant bilan taqdirlanadi.
                    </p>
                  </span>
                  <span className="second__info-box">
                    <h6 className="f-2431">Ariza topshirish jarayoni</h6>
                    <p className="f-1621">
                      Grant arizasi Oksford MBA dasturiga topshiriladigan
                      hujjatlar bilan birga topshiriladi. Hozirda 2023-yil
                      sentyabrda boshlanadigan Oksford MBA dasturiga ariza qabul
                      qilinmoqda va arizalar 4 marta qabul qilinadi. Skoll
                      Scholarship grantiga ariza topshirmoqchi boʻlganlar
                      quyidagi uchta qabuldan birida Oksford MBA dasturiga
                      hujjat topshirish lozim:
                    </p>
                  </span>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <h6 className="f-2431">Dasturning manfaatli tomoni</h6>
                  <p>
                    Oksford MBA dasturida oʻqish uchun bir yillik kontrakt
                    toʻlovi 2023-2024-oʻquv yili uchun 75 140 funt-sterlingni
                    tashkil etadi.Skoll Scholarship grantini qoʻlga kiritgan
                    talabalar quyidagi imtiyozlar bilan taʼminlanadi:
                  </p>
                </span>
                <span className="footer__news-main flex">
                  <span className="left__footer flex">
                    <p className="flex f-1417">
                      <img
                        src={smallDateIcon}
                        width="16"
                        height="16"
                        alt="eye icon"
                      />
                      Tugash vaqti: 04.01.2023
                    </p>
                    <p className="flex f-1417">
                      <img src={smallLocationIcon} alt="location icon" />
                      Buyuk Britaniya
                    </p>
                  </span>
                  <span className="right__footer flex">
                    <img src={sendIcon} alt="" />
                    <img src={savedIcon} alt="" />
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GrantsMain;

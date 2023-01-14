import React from 'react'

import "./style.scss";

import closeIcon from "../../assets/icons/close-icon.svg";
import successIcon from "../../assets/icons/two-checked-icon.svg";

function SuccessModal() {
  return (
    <div className="success-modal wrapper">
      <span className="content__success-modal">
        <img src={closeIcon} className="close-img" alt="close icon" />
        <span className="text-content">
          <span className="success-img">
            <img src={successIcon} alt="checked icon" />
          </span>
          <h4 className="font-style__2431">
            Muvaffaqiyatli ro‘yxatdan o‘tdingiz
          </h4>
          <p className="font-style__1619">
            So‘rovnomangiz qabul qilindi. Tez orada operatorlarimiz siz bilan
            bog‘lanishadi.
          </p>
        </span>
      </span>
    </div>
  );
}

export default SuccessModal
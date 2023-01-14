import React from "react";

import "./style.scss";

import closeIcon from "../../assets/icons/close-icon.svg";

function Modal() {
  return (
    <div className="modal-container wrapper">
      <span className="close-icon">
        <img src={closeIcon} alt="close icon" />
      </span>
      <span className="modal-content">
        <span className="modal-box">
          <h1 className="font-style__2024">F.I.Sh</h1>
          <input
            type="text"
            className="font-style__1417"
            placeholder="Ism va familyangizni kiriting"
          />
        </span>
        <span className="modal-box">
          <h1 className="font-style__2024">Telefon raqamingiz</h1>
          <input
            type="text"
            className="font-style__1417"
            placeholder="Raqamingizni kiriting"
          />
        </span>
        <span className="modal-box">
          <h1 className="font-style__2024">Telegram username</h1>
          <input
            type="text"
            className="font-style__1417"
            placeholder="Usernameni kiriting"
          />
        </span>
        <button className="send-btn font-style__1619">Yuborish</button>
      </span>
    </div>
  );
}

export default Modal;

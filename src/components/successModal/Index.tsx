import React from "react";

import "./style.scss";

import closeIcon from "../../assets/icons/close-icon.svg";
import successIcon from "../../assets/icons/two-checked-icon.svg";

interface Modal2Props {
  toggleModal: () => void;
  closeModal1: () => void;
  isOpen: boolean;
}

const SuccessModal: React.FC<Modal2Props> = ({
  toggleModal,
  isOpen,
  closeModal1,
}) => {
  if (!isOpen) return null;
  return (
    <div className="success-modal wrapper">
      <span className="content__success-modal">
        <img
          src={closeIcon}
          className="close-img"
          onClick={() => {
            toggleModal();
            closeModal1();
          }}
          alt="close icon"
        />
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
};

export default SuccessModal;

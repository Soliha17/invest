import React, { useState, useEffect } from "react";

import "./style.scss";

import closeIcon from "../../assets/icons/close-icon.svg";
import errorIcon from "../../assets/icons/error-input-icon.svg";

interface Modal1Props {
  toggleModal: () => void;
  isOpen: boolean;
  openModal2: () => void;
}

interface FormState {
  name: string;
  number: number;
  username: string;
}
const Modal: React.FC<Modal1Props> = ({ toggleModal, isOpen, openModal2 }) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    // component logic
  }, [isOpen]);
  // if (!isOpen) return null;

  const [formState, setFormState] = useState<FormState>({
    name: "",
    number: 0,
    username: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    let errors: string[] = [];
    Object.entries(formState).forEach(([key, value]) => {
      if (!value) {
        errors.push(key);
      }
    });
    setErrors(errors);
    if (errors.length === 0) {
      handleCheck();
    }
    setIsSubmitting(false);
  };

  function handleCheck() {
    toggleModal();
    openModal2();
  }

  const renderError = (fieldName: string) => {
    if (errors.includes(fieldName)) {
      return (
        <span className="error-group">
          <img src={errorIcon} alt="error icon" />
          <p className="error-text font-style__1417">
            Bu {fieldName} muhim, to‘ldiring
          </p>
        </span>
      );
    }
    return null;
  };
  return (
    <div className="modal-container wrapper">
      <span className="close-icon" onClick={toggleModal}>
        <img src={closeIcon} alt="close iconnn" />
      </span>
      <form className="modal-content">
        <span className="modal-box">
          <label htmlFor="name" className="font-style__2024">
            F.I.Sh
          </label>
          <input
            value={formState.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="font-style__1417"
            placeholder="Ism va familyangizni kiriting"
          />
          {renderError("name")}
        </span>
        <span className="modal-box">
          <label htmlFor="number" className="font-style__2024">
            Telefon raqamingiz
          </label>
          <input
            value={formState.number}
            onChange={handleChange}
            type="text"
            name="number"
            className="font-style__1417"
            placeholder="Raqamingizni kiriting"
          />
          {renderError("number")}
        </span>
        <span className="modal-box">
          <label htmlFor="username" className="font-style__2024">
            Telegram username
          </label>
          <input
            value={formState.username}
            onChange={handleChange}
            type="text"
            name="username"
            className="font-style__1417"
            placeholder="Usernameni kiriting"
          />
          {renderError("username")}
        </span>
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={(event) => {
            handleSubmit(event);
          }}
          className="send-btn font-style__1619"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Modal;

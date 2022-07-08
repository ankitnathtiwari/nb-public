import React, { useState, useEffect, useRef } from "react";
import "./index.css";
export const PopUpModal = ({ children, openModal, setOpenModal }) => {
  const popupModal = useRef();

  useEffect(() => {
    const closeModel = (e) => {
      if (!popupModal.current.contains(e.target)) {
        setOpenModal(false);
      }
    };
    if (openModal) {
      document.addEventListener("click", closeModel);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("click", closeModel);
    };
  });

  if (!openModal) {
    return null;
  }

  return (
    <div className="modal-pop-up" ref={popupModal}>
      {children}
    </div>
  );
};

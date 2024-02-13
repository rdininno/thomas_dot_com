import React from "react";
import "../Modal.css";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;

import React, { ReactNode } from "react";
import CloseButton from "./buttons/closeButton";
import CancelButton from "./buttons/cancelButton";

type ModalProps = {
  showModal?: boolean;
  onCloseClick?: () => void;
  children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ showModal = false, onCloseClick = () => {}, children }) => {
  return (
    <div
      className={`${
        !showModal && "hidden"
      } fixed flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-700 bg-opacity-50`}
    >
      <CancelButton
        className="top-4 right-4 absolute"
        onClick={onCloseClick}
        btnName="Close Modal"
      />

      <div>{children}</div>
    </div>
  );
};

export default Modal;

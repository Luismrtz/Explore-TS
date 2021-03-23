import React, { useRef, useEffect } from "react";
import {
  Background,
  ModalContent,
  ModalWrapper,
  CloseModalButton,
  DemStuff,
} from "./Modalstyles";

export const Modal: React.FC<DemStuff> = ({
  showModal,
  setShowModal,
  h1,
  paragraph,
  newUrl,
  children,
}) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          {children}
          <ModalWrapper>
            <ModalContent>
              <img src={newUrl} alt="test" />

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal(false)}
              />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

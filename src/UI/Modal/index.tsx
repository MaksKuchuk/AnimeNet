import React from "react";
import classes from "./Modal.module.scss";

type IModal = {
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  children: React.ReactNode;
  styles: StyleSheet;
};

const Modal: React.FC<IModal> = ({ visible, setVisible, styles, children }) => {
  return (
    <div
      onClick={() => setVisible(false)}
      className={`${classes.modal} ${visible && classes.active}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={`${styles}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

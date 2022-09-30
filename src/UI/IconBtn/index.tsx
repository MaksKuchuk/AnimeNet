import React from "react";
import classes from "./IconBtn.module.scss";

type IIconBtnProps = {
  children: string;
  styles: StyleSheet;
  onClick: () => void;
  SvgElem: React.FC<React.SVGProps<SVGSVGElement>>;
};

const IconBtn: React.FC<IIconBtnProps> = ({
  styles,
  onClick,
  SvgElem,
  children,
}) => {
  return (
    <div className={`${classes.container} ${styles}`}>
      <button className={classes.btn} onClick={onClick}>
        <div className={classes.svgblock}>
          <SvgElem className={classes.svg} width="40" height="40" />
        </div>
        <div className={classes.spanblock}>
          <span>{children}</span>
        </div>
      </button>
    </div>
  );
};

export default IconBtn;

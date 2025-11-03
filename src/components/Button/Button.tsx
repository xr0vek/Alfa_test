import { FC } from "react";
import style from "./Button.module.scss";
import { ButtonProps } from "./Button.props.ts";

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${style.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

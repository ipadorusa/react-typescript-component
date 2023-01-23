import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./button.module.scss";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${classes.btn} ${
        props.className === "btn--active" ? classes["btn--active"] : ""
      }`}
    />
  );
};

export default Button;

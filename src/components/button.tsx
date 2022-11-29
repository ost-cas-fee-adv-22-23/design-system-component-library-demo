import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from "react";

type BaseButtonProps = {
  color: "Slate" | "Violet" | "Gradient";
  size: "M" | "L";
  children: ReactNode;
  as: "button" | "link";
};

type HTMLButtonProps = BaseButtonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseButtonProps & {
      as?: "button";
    }
  >;

type LinkButtonProps = BaseButtonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseButtonProps & {
      as: "link";
    }
  >;

type ButtonProps = HTMLButtonProps | LinkButtonProps;

export const Button: FC<ButtonProps> = ({ color, size, as, children }) => {
  if (as === "link") {
    return <a>{children}</a>;
  }

  return (
    <button
      className={
        color === "Slate" ? "bg-blue-500 text-white" : "bg-blue-200 text-black"
      }
    >
      {children}
    </button>
  );
};

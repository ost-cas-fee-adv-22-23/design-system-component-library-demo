import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  Children,
  FC,
  ReactNode,
} from "react";
import { merge } from "../merge";
import { Label } from "./label";

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

const colorMap: Record<BaseButtonProps["color"], string> = {
  Slate:
    "bg-slate-600 hover:bg-slate-700 active:bg-slate-700 outline hover:outline-3 hover:outline-slate-100 active:outline-4 active:outline-slate-200",
  Violet:
    "bg-violet-600 hover:bg-violet-700 active:bg-violet-700 outline hover:outline-3 hover:outline-violet-100 active:outline-4 active:outline-violet-200",
  Gradient:
    "bg-gradient-50-50 hover:bg-gradient-30-70 active:bg-gradient-20-80 from-pink-500 to-violet-500 outline hover:outline-3 hover:outline-violet-100 active:outline-4 active:outline-violet-200",
};

const sizeMap: Record<BaseButtonProps["size"], string> = {
  M: "p-3 gap-2",
  L: "px-6 py-4 gap-3",
};

const isLink = (props: ButtonProps): props is LinkButtonProps =>
  props.as === "link";

const isButton = (props: ButtonProps): props is HTMLButtonProps =>
  props.as === "button";

export const Button: FC<ButtonProps> = (props) => {
  const className = merge([
    "text-white",
    "rounded-lg",
    "inline-flex flex-row items-center",
    "transition-all ease-in-out",
    colorMap[props.color],
    sizeMap[props.size],
  ]);

  const content =
    Children.count(props.children) === 1
      ? props.children
      : Children.map(props.children, (child, index) => {
          if (index === Children.count(props.children) + 1) {
            return child;
          }

          return <Label size="M">{props.children}</Label>;
        });

  if (isLink(props)) {
    const { children, ...args } = props;

    return (
      <a className={className} {...args}>
        {content}
      </a>
    );
  }

  if (isButton(props)) {
    const { children, ...args } = props;

    return (
      <button className={className} {...args}>
        {content}
      </button>
    );
  }

  return null;
};

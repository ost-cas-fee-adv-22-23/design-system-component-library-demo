import React, { FC, ReactNode } from "react";
import { merge } from "../merge";

type Props = {
  as?: "span";
  size: "S" | "M" | "L" | "XL";
  children: ReactNode;
};

const classMap: Record<Props["size"], string> = {
  S: "text-xs leading-none font-semibold",
  M: "text-sm leading-none font-semibold",
  L: "text-lg leading-none font-semibold",
  XL: "text-2xl leading-none font-semibold",
};

export const Label: FC<Props> = ({
  children,
  as: Tag = "span",
  size = "M",
}) => (
  <Tag className={merge(["font-sans text-current", classMap[size]])}>
    {children}
  </Tag>
);

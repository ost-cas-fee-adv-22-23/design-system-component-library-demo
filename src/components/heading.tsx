import React, { FC, ReactNode } from "react";
import { merge } from "../merge";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  level: "1" | "2" | "3" | "4";
  children: ReactNode;
};

const classMap = {
  "1": "text-5xl leading-tight font-bold",
  "2": "text-4xl leading-tight font-bold",
  "3": "text-3xl leading-tight font-semibold",
  "4": "text-2xl leading-tight font-semibold",
};

export const Heading: FC<HeadingProps> = ({
  children,
  level = "1",
  as: Tag = "h1",
}) => (
  <Tag className={merge(["font-sans text-current", classMap[level]])}>
    {children}
  </Tag>
);

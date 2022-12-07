import React, { FC, ReactNode, useEffect } from "react";
import { merge } from "../merge";
import { Label } from "./label";

type Props = {
  href: string;
  children: ReactNode;
};

export const TextLink: FC<Props> = ({ href, children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.CSS as any).registerProperty({
          name: "--offset",
          syntax: "<length>",
          inherits: false,
          initialValue: 0,
        });
      } catch {}
    }
  }, []);

  return (
    <>
      <a
        href={href}
        className={merge([
          "text-violet-600 transform-cpu",
          "underline decoration-current hover:decoration-violet-200",
          "underline-offset-animatable transition-[--offset] underline-magic-2 hover:underline-magic-4",
        ])}
      >
        <Label size="S" as="span">
          {children}
        </Label>
      </a>
    </>
  );
};

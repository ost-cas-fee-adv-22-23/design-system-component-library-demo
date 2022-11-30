import React, { FC, ReactNode } from "react";
import { Label } from "./label";

type Props = {
  href: string;
  children: ReactNode;
};

export const TextLink: FC<Props> = ({ href, children }) => (
  <a
    href={href}
    className="text-violet-600 underline decoration-current hover:decoration-violet-200 hover:underline-offset-4 underline-offset-2"
  >
    <Label size="S" as="span">
      {children}
    </Label>
  </a>
);

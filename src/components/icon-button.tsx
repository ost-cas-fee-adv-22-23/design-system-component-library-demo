import React, { FC } from "react";

type IconButtonProps = { label: string };

export const IconButton: FC<IconButtonProps> = ({ label }) => (
  <span>{label}</span>
);

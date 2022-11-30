import React, { ChangeEvent, FC, ReactNode, useId } from "react";
import { merge } from "../merge";
import { Label } from "./label";

type Props = {
  label?: string;
  type?:
    | "email"
    | "hidden"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  tail?: ReactNode;
};

export const Input: FC<Props> = ({
  label,
  value,
  placeholder,
  onChange,
  tail,
  type = "text",
}) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <Label size="M" htmlFor={id}>
        {label}
      </Label>

      <div className="relative">
        <input
          onChange={onChange}
          className={merge([
            "rounded-lg w-full h-12 leading-none border p-4 border-slate-200 hover:border-violet-600 outline-transparent focus:outline-violet-600",
            "text-sm leading-none font-semibold text-slate-700",
            "placeholder:text-sm placeholder:leading-none placeholder:font-semibold placeholder:text-slate-200",
          ])}
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
        />
        {tail && (
          <span className="absolute h-full items-center flex px-4 text-slate-600 bottom-0 right-0">
            {tail}
          </span>
        )}
      </div>
    </div>
  );
};

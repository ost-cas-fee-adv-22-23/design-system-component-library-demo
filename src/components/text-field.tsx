import React, { ChangeEvent, FC } from 'react';
import { merge } from '../merge';

type Props = {
  placeholder: string;
  value: string;
  onChange(e: ChangeEvent<HTMLTextAreaElement>): void;
};

export const TextField: FC<Props> = ({ placeholder, value, onChange }) => (
  <textarea
    className={merge([
      'w-full h-40 resize-none',
      'bg-slate-100 border-1 border-slate-200 rounded-lg p-4 placeholder:text-slate-500',
      'transition-all ease-in-out',
      'hover:border-1 border-transparent outline outline-transparent outline-2 hover:outline-slate-300 focus:outline-violet-600',
      'text-base leading-normal font-medium text-slate-900',
    ])}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

import React, { Children, cloneElement, FC, isValidElement, MouseEvent, ReactNode } from 'react';
import { merge } from '../merge';

type Props = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
};
export const IconButton: FC<Props> = ({ children, onClick }) => {
  if (Children.count(children) > 1) {
    console.error(`IconButton only accepts one child (ideally an icon).`);
    return null;
  }

  const content = Children.map(
    children,
    (child) =>
      isValidElement<{ size?: string }>(child) &&
      cloneElement(child, {
        size: '16',
      })
  );

  return (
    <button
      onClick={onClick}
      className={merge([
        'p-4 rounded-full bg-slate-600 text-white transition-colors ease-in-out outline',
        'hover:bg-slate-700 hover:outline-3 hover:outline-slate-100',
        'active:bg-slate-700 active:outline-4 active:outline-slate-200',
      ])}
    >
      {content}
    </button>
  );
};

import React, { FC, MouseEvent, ReactNode } from 'react';
import { merge } from '../merge';
import { Label } from './label';

type Props = {
  children: ReactNode;
};

export const Tabs: FC<Props> = ({ children }) => (
  <nav className="bg-slate-200 inline-flex rounded-lg">
    <ul className="inline-flex flex-row gap-4 p-1">{children}</ul>
  </nav>
);

type ItemProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  active?: boolean;
};
export const Item: FC<ItemProps> = ({ children, onClick, active = false }) => (
  <li>
    <button
      className={merge([
        'rounded-lg px-3 py-2',
        active ? 'bg-white text-violet-600' : 'text-slate-600 hover:text-slate-800',
      ])}
      onClick={onClick}
    >
      <Label size="M">{children}</Label>
    </button>
  </li>
);

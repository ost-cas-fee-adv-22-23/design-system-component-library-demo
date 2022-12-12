import React, { FC, ReactNode } from 'react';
import { merge } from '../merge';

type Props = {
  children: ReactNode;
  href: string;
  color: 'Violet' | 'Slate';
};

const colorMap: Record<Props['color'], string> = {
  Violet: 'text-violet-600 hover:text-violet-900',
  Slate: 'text-slate-400 hover:text-slate-600',
};

export const Link: FC<Props> = ({ children, href, color = 'Slate' }) => (
  <a
    href={href}
    className={merge(['inline-flex flex-row gap-1 items-center', 'transition-colors ease-in-out', colorMap[color]])}
  >
    {children}
  </a>
);

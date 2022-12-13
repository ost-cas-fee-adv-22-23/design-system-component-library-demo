import React, { FC } from 'react';
import { merge } from '../merge';

type Props = {
  src: string;
  alt: string;
  size: 'S' | 'M' | 'L' | 'XL';
};

const sizeMap: Record<Props['size'], string> = {
  S: 'h-10 w-10',
  M: 'h-16 w-16 border-slate-100 border-6',
  L: 'h-24 w-24 border-6',
  XL: 'h-40 w-40 border-6',
};

export const Avatar: FC<Props> = ({ src, alt, size }) => (
  <img src={src} alt={alt} className={merge(['inline-block rounded-full bg-violet-200', sizeMap[size]])} />
);

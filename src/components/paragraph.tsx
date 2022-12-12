import React, { FC, ReactNode } from 'react';
import { merge } from '../merge';

type Props = {
  children: ReactNode;
  as?: 'p' | 'span';
  size: 'M' | 'L';
};

const classMap: Record<Props['size'], string> = {
  M: 'text-base leading-snug font-medium',
  L: 'text-2xl leading-normal font-medium',
};

export const Paragraph: FC<Props> = ({ children, as: Tag = 'p', size = 'M' }) => (
  <Tag className={merge(['font-sans text-current', classMap[size]])}>{children}</Tag>
);

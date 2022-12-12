import React, { FC, ReactNode } from 'react';
import { merge } from '../merge';

type Props = {
  children: ReactNode;
  direction: 'row' | 'col';
  spacing: 'none' | 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  as?: 'ul' | 'ol' | 'div';
};

const spaceMap: Record<Props['spacing'], string> = {
  none: 'gap-0',
  XXS: 'gap-1',
  XS: 'gap-2',
  S: 'gap-4',
  M: 'gap-6',
  L: 'gap-8',
  XL: 'gap-12',
  XXL: 'gap-16',
};

export const Stack: FC<Props> = ({ children, direction, as: Tag = 'div', spacing }) => (
  // eslint-disable-next-line react/forbid-component-props
  <Tag className={merge(['flex', direction === 'row' ? 'flex-row' : 'flex-col', spaceMap[spacing]])}>{children}</Tag>
);

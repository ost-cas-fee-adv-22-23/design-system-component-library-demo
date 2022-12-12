import React, { FC, ReactNode } from 'react';
import { merge } from '../merge';

type Props = {
  children: ReactNode;
  as?: 'div' | 'aside' | 'article' | 'main' | 'section';
  rounded?: boolean;
};

export const Card: FC<Props> = ({ children, as: Tag = 'div', rounded = false }) => (
  // eslint-disable-next-line react/forbid-component-props
  <Tag className={merge(['bg-white px-12 py-8', rounded ? 'rounded-2xl' : ''])}>{children}</Tag>
);

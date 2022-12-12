import React, { Children, FC, MouseEvent, ReactNode } from 'react';
import { merge } from '../merge';
import { Label } from './label';

type Props = {
  onClick?: (e: MouseEvent) => void;
  color: 'Violet' | 'Pink' | 'Slate';
  active?: boolean;
  children: ReactNode;
};

const colorMap: Record<Props['color'], Record<'active' | 'inactive', string>> = {
  Slate: {
    active: 'text-slate-600 bg-slate-100',
    inactive: 'text-slate-600 bg-transparent hover:bg-slate-100',
  },
  Violet: {
    active: 'text-slate-600 bg-transparent hover:text-violet-600 hover:bg-violet-50',
    inactive: 'text-slate-600 bg-transparent hover:text-violet-600 hover:bg-violet-50',
  },
  Pink: {
    active: 'text-pink-900 bg-transparent hover:text-pink-600 hover:bg-pink-50',
    inactive: 'text-slate-600 bg-transparent hover:text-pink-600 hover:bg-pink-50',
  },
};

const iconColorMap: Record<Props['color'], Record<'active' | 'inactive', string>> = {
  Slate: {
    active: 'text-slate-600',
    inactive: 'text-slate-600',
  },
  Violet: {
    active: 'text-violet-600',
    inactive: 'text-slate-600 group-hover:text-violet-600',
  },
  Pink: {
    active: 'text-pink-500',
    inactive: 'text-slate-600 group-hover:text-pink-500',
  },
};

export const Action: FC<Props> = ({ onClick, color, active = false, children }) => {
  /**
   * Before we do anything, we count the `children`. If it's only 1 and of type `string`,
   * we'll wrap it in a `Label` and be done with it.
   *
   * If there are more, we only want to wrap the text elements in a `Label` but leave the rest.
   * This way our SVG Icon will not be modified.
   */
  const content =
    Children.count(children) === 1 && typeof children === 'string' ? (
      <Label as="span" size="M">
        {children}
      </Label>
    ) : (
      Children.map(children, (child) => {
        if (typeof child === 'string') {
          return (
            <Label as="span" size="M">
              {child}
            </Label>
          );
        }

        return (
          <span className={merge(['transition-colors', iconColorMap[color][active ? 'active' : 'inactive']])}>{child}</span>
        );
      })
    );

  return (
    <button
      className={merge([
        'group inline-flex flex-row leading-none rounded-2xl px-3 py-2 gap-2',
        'transition-colors ease-in-out',
        colorMap[color][active ? 'active' : 'inactive'],
      ])}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

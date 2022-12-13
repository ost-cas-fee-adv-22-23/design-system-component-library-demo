import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, Children, FC, ReactNode } from 'react';
import { merge } from '../merge';
import { Label } from './label';

/**
 * These are shared props between all buttons, no matter whether they are a semantic
 * anchor (link) or button. Both should look the same, have the same colors and the
 * same sizes.
 */
type BaseButtonProps = {
  color: 'Slate' | 'Violet' | 'Gradient';
  size: 'M' | 'L';
  layout?: 'Default' | 'Block';
  children: ReactNode;
  as: 'button' | 'a';
};

/**
 * If the button is rendered as a HTML button, all native attributes should be accepted.
 * This is called a Intersection Type. This means, that `HTMLButtonProps` is a combination
 * of `BaseButtonProps` and the native attributes.
 */
type HTMLButtonProps = BaseButtonProps & {
  as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * If the button is rendered as a HTML anchor, all native attributes should be accepted.
 * This is called a Intersection Type. This means, that `HTMLButtonProps` is a combination
 * of `BaseButtonProps` and the native attributes.
 */
type LinkButtonProps = BaseButtonProps & {
  as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Because a button can be either of the above, we use a Union Type. This means,
 * `ButtonProps` can be either of theses.
 */
type ButtonProps = HTMLButtonProps | LinkButtonProps;

const colorMap: Record<BaseButtonProps['color'], string> = {
  Slate:
    'bg-slate-600 hover:bg-slate-700 active:bg-slate-700 outline hover:outline-3 hover:outline-slate-100 active:outline-4 active:outline-slate-200',
  Violet:
    'bg-violet-600 hover:bg-violet-700 active:bg-violet-700 outline hover:outline-3 hover:outline-violet-100 active:outline-4 active:outline-violet-200',
  Gradient:
    'bg-200% bg-left bg-gradient-50-50 hover:bg-center active:bg-right from-pink-500 to-violet-500 outline hover:outline-3 hover:outline-violet-100 active:outline-4 active:outline-violet-200',
};

const sizeMap: Record<BaseButtonProps['size'], string> = {
  M: 'p-3 gap-2',
  L: 'px-6 py-4 gap-3',
};

/**
 * This is called a type guard and is performed at runtime. But during development we can
 * ensure that our props have the correct typing, e.g. LinkButtonProps, when a certain
 * criteria is met.
 */
const isLink = (props: ButtonProps): props is LinkButtonProps => props.as === 'a';

const isButton = (props: ButtonProps): props is HTMLButtonProps => props.as === 'button';

export const Button: FC<ButtonProps> = (props) => {
  const className = merge([
    'justify-center',
    'text-center',
    'will-change-auto',
    'text-white',
    'rounded-lg',
    'inline-flex flex-row items-center',
    'transition-all ease-in-out',
    props.layout === 'Block' ? 'w-full' : '',
    colorMap[props.color],
    sizeMap[props.size],
  ]);

  /**
   * Before we do anything, we count the `children`. If it's only 1 and of type `string`,
   * we'll wrap it in a `Label` and be done with it.
   *
   * If there are more, we only want to wrap the text elements in a `Label` but leave the rest.
   * This way our SVG Icon will not be modified.
   */
  const content =
    Children.count(props.children) === 1 && typeof props.children === 'string' ? (
      <Label as="span" size="M">
        {props.children}
      </Label>
    ) : (
      Children.map(props.children, (child) => {
        if (typeof child === 'string') {
          return (
            <Label as="span" size="M">
              {child}
            </Label>
          );
        }

        return child;
      })
    );

  if (isLink(props)) {
    return (
      <a className={className} {...props}>
        {content}
      </a>
    );
  }

  if (isButton(props)) {
    return (
      <button className={className} {...props}>
        {content}
      </button>
    );
  }

  return null;
};

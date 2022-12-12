import React, { FC, ReactNode, useEffect } from 'react';
import { merge } from '../merge';
import { Label } from './label';

type Props = {
  href: string;
  children: ReactNode;
};

export const TextLink: FC<Props> = ({ href, children }) => {
  /**
   * This is a "brilliant" hack making use of the Houdini API
   * to register the propert --offset with a numeric value. Because
   * it's numeric, it can be animated! With the transitions below and
   * in the tailwind config, this results in an animated text-decoration-offset.
   * Although actually it's not the property `text-decoration-offset` that is
   * animated, but the defined property here.
   *
   * In all honesty, I wouldn't use this in a productive environment but it was
   * fun here.
   */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // We'll allow this because we'd never actually do it in production 😂
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.CSS as any).registerProperty({
          name: '--offset',
          syntax: '<length>',
          inherits: false,
          initialValue: 0,
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <>
      <a
        href={href}
        className={merge([
          'text-violet-600 transform-cpu',
          'underline decoration-current hover:decoration-violet-200',
          'underline-offset-animatable transition-[--offset] underline-magic-2 hover:underline-magic-4',
        ])}
      >
        <Label size="S" as="span">
          {children}
        </Label>
      </a>
    </>
  );
};

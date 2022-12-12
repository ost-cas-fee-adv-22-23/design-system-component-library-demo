import React, { FC, useEffect, useState } from 'react';

type Props = {
  value: string;
  delay?: number;
};

import { Action } from './action';
import { ShareIcon } from './icons/share';

export const Clipboard: FC<Props> = ({ value, delay = 1000 }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => {
        setCopied(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [copied]);

  return (
    <Action color="Slate" onClick={copy}>
      <ShareIcon />
      {copied ? 'Link copied' : 'Copy Link'}
    </Action>
  );
};

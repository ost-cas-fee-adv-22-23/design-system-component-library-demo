import { ComponentMeta, ComponentStory } from '@storybook/react';

import React, { useEffect, useState } from 'react';
import { TextField } from '../src/components/text-field';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

export const TextFieldComponent: ComponentStory<typeof TextField> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <TextField {...args} value={input} onChange={(e) => setInput(e.currentTarget.value)} />;
};

TextFieldComponent.storyName = 'TextField';

TextFieldComponent.args = {
  placeholder: 'Placeholder',
  value: '',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MumbleIcon } from '../src/components/icons/mumble';

import React, { useEffect, useState } from 'react';
import { Input } from '../src/components/input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

export const InputComponent: ComponentStory<typeof Input> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <Input {...args} value={input} onChange={(e) => setInput(e.currentTarget.value)} />;
};

InputComponent.storyName = 'Input';

InputComponent.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
};

export const InputComponentWithTail: ComponentStory<typeof Input> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <Input {...args} value={input} onChange={(e) => setInput(e.currentTarget.value)} tail={<MumbleIcon />} />;
};

InputComponentWithTail.storyName = 'Input with a Tail';

InputComponentWithTail.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
};

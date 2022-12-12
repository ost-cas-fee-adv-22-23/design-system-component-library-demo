import { ComponentMeta, ComponentStory } from '@storybook/react';

import React, { useEffect, useState } from 'react';
import { Tabs, Item } from '../src/components/tabs';

type StoryProps = { activeTab: 'mumbles' | 'likes' };

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    active: {
      options: { Mumbles: 'mumbles', Likes: 'likes' },
      control: 'select',
    },
  },
} as ComponentMeta<typeof Tabs & StoryProps>;

export const TabsComponent: ComponentStory<typeof Tabs & StoryProps> = (args) => {
  const [activeTab, setActiveTab] = useState<StoryProps['activeTab']>((args as any).active);

  useEffect(() => {
    setActiveTab((args as any).active);
  }, [(args as any).active]);

  return (
    <Tabs {...args}>
      <Item onClick={() => setActiveTab('mumbles')} active={activeTab === 'mumbles'}>
        Deine Mumbles
      </Item>
      <Item onClick={() => setActiveTab('likes')} active={activeTab === 'likes'}>
        Deine Likes
      </Item>
    </Tabs>
  );
};

TabsComponent.storyName = 'Tabs';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Action } from '../src/components/action';
import { Avatar } from '../src/components/avatar';
import { Button } from '../src/components/button';
import { Card } from '../src/components/card';
import { Clipboard } from '../src/components/clipboard';
import { Heading } from '../src/components/heading';
import { AirplaneIcon } from '../src/components/icons/airplane';
import { ChatOutlineIcon } from '../src/components/icons/chat-outline';
import { HeartOutlineIcon } from '../src/components/icons/heart-outline';
import { MumbleIcon } from '../src/components/icons/mumble';
import { UploadIcon } from '../src/components/icons/upload';
import { Label } from '../src/components/label';
import { Link } from '../src/components/link';
import { Paragraph } from '../src/components/paragraph';
import { Stack } from '../src/components/stack';
import { TextField } from '../src/components/text-field';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    as: {
      options: ['div', 'aside', 'article', 'main', 'section'],
      control: 'select',
    },
    rounded: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Card>;

export const MumbleCardComponent: ComponentStory<typeof Card> = (args) => (
  <div className="bg-slate-100 p-8">
    <div className="w-[615px]">
      <Card {...args}>
        <div className="absolute -left-8 top-4">
          <Avatar
            size="M"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx89&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Portrait of Matilda"
          />
        </div>
        <Stack direction="col" spacing="M">
          <Stack direction="col" spacing="XS">
            <Label size="L">Display Name</Label>
            <Stack direction="row" spacing="S">
              <Link color="Violet" href="#">
                <MumbleIcon /> Username
              </Link>
              <Link color="Slate" href="#">
                <MumbleIcon /> Timestamp
              </Link>
            </Stack>
          </Stack>

          <Paragraph size="M">
            Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
            sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
            excepturi ut deleniti ut repellat magni.
          </Paragraph>

          <img
            src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
            alt=""
          />

          <Stack direction="row" spacing="XL">
            <Action color="Violet">
              <ChatOutlineIcon />
              Comment
            </Action>
            <Action color="Pink">
              <HeartOutlineIcon />
              Like
            </Action>
            <Clipboard value="A Card" />
          </Stack>
        </Stack>
      </Card>
    </div>
  </div>
);

MumbleCardComponent.storyName = 'Mumble Card';
MumbleCardComponent.args = { rounded: true };

export const WriteCardComponent: ComponentStory<typeof Card> = (args) => (
  <div className="bg-slate-100 p-8">
    <div className="w-[680px]">
      <Card {...args}>
        <Stack direction="col" spacing="S">
          <Heading as="h2" level="4">
            Hey, was gibt&apos;s neues?
          </Heading>
          <TextField
            value=""
            placeholder="Deine Meinung zählt!"
            onChange={(e) => {
              console.log(e.currentTarget.value);
            }}
          />
          <Stack direction="row" spacing="S">
            <Button color="Slate" size="M" as="button" layout="Block">
              Bild hochladen <UploadIcon />
            </Button>
            <Button color="Violet" size="M" as="button" layout="Block">
              Absenden <AirplaneIcon />
            </Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  </div>
);

WriteCardComponent.storyName = 'Write Card';
WriteCardComponent.args = { rounded: true };

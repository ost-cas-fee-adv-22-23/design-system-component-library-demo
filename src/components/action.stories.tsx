import { ComponentMeta, ComponentStory } from "@storybook/react";

import React, { useState, useEffect } from "react";
import { Action } from "./action";

import { MumbleIcon } from "./icons/mumble";
import { HeartIcon } from "./icons/heart";
import { HeartOutlineIcon } from "./icons/heart-outline";
import { ChatIcon } from "./icons/chat";
import { ChatOutlineIcon } from "./icons/chat-outline";

export default {
  title: "Components/Action",
  component: Action,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    color: {
      options: ["Pink", "Violet"],
      control: { type: "select" },
    },
    active: { options: [true, false], control: { type: "radio" } },
  },
} as ComponentMeta<typeof Action>;

export const ActionComponent: ComponentStory<typeof Action> = ({
  children,
  ...args
}) => (
  <Action {...args}>
    <MumbleIcon />
    {children}
  </Action>
);

ActionComponent.storyName = "Action";

ActionComponent.args = {
  active: false,
  color: "Pink",
  children: "Action",
};

export const LikeActionComponent: ComponentStory<any> = ({ numberOfLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(numberOfLikes);
    setLiked(false);
  }, [numberOfLikes]);

  useEffect(() => {
    if (liked) {
      setLikes(likes + 1);
    } else if (liked && likes > 0) {
      setLikes(likes - 1);
    }
  }, [liked]);

  return (
    <Action color="Pink" active={liked} onClick={() => setLiked((l) => !l)}>
      {liked ? <HeartIcon /> : <HeartOutlineIcon />}
      {likes > 0 ? `${likes} Likes` : liked ? "Liked" : "Like"}
    </Action>
  );
};

LikeActionComponent.storyName = "Like Action";
LikeActionComponent.args = { numberOfLikes: 0 } as any;
LikeActionComponent.argTypes = {
  onClick: {
    table: { disable: true },
  },
  color: {
    table: { disable: true },
  },
  children: {
    table: { disable: true },
  },
  active: {
    table: { disable: true },
  },
  numberOfLikes: {
    control: { type: "number" },
  },
} as any;

export const ReplyActionComponent: ComponentStory<any> = ({
  numberOfReplies,
}) => {
  const [replied, setReplied] = useState(false);
  const [replies, setReplies] = useState(0);

  useEffect(() => {
    setReplies(numberOfReplies);
    setReplied(false);
  }, [numberOfReplies]);

  useEffect(() => {
    if (replied) {
      setReplies(replies + 1);
    } else if (replied && replies > 0) {
      setReplies(replies - 1);
    }
  }, [replied]);

  return (
    <Action
      color="Violet"
      active={replied}
      onClick={() => setReplied((l) => !l)}
    >
      {replies > 0 ? <ChatIcon /> : <ChatOutlineIcon />}
      {replies > 0 ? `${replies} Comments` : "Comment"}
    </Action>
  );
};

ReplyActionComponent.storyName = "Reply Action";
ReplyActionComponent.args = { numberOfReplies: 0 } as any;
ReplyActionComponent.argTypes = {
  onClick: {
    table: { disable: true },
  },
  color: {
    table: { disable: true },
  },
  children: {
    table: { disable: true },
  },
  active: {
    table: { disable: true },
  },
  numberOfReplies: {
    control: { type: "number" },
  },
} as any;

import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfilePicture } from "../components/ProfilePicture";

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';


export default {
  title: 'ProfilePicture',
  component: ProfilePicture,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    classes: { control: 'text' },
    src: { control: 'text', defaultValue: "src/assets/ProfilePicture.png" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/twebVJf4ML6HEfrUnFmojm/Personal-Curriculum?node-id=482%3A169",
    },
  },
} as ComponentMeta<typeof ProfilePicture>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof ProfilePicture> = (args) => <ProfilePicture {...args} />;

export const LargeThumbnail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LargeThumbnail.args = {
  classes: "w-16 h-16",
  src: "src/assets/RecommendedOne.jpeg",
};

export const MediumThumbnail = Template.bind({});
MediumThumbnail.args = {
  classes: "w-12 h-12 hover:",
  src: "src/assets/RecommendedTwo.jpeg",
};

export const SmallThumbnail = Template.bind({});
SmallThumbnail.args = {
  classes: "w-8 h-8",
  src: "src/assets/RecommendedThree.jpeg",
};


LargeThumbnail.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);
  const profilePicture = await canvas.findByAltText("profile-picture");
  await expect(profilePicture.getAttribute("src") === "src/assets/RecommendedOne.jpeg");
}
import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfilePicture } from "../components/ProfilePicture";

export default {
  title: 'ProfilePicture',
  component: ProfilePicture,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    classes: { control: 'text' },
    src: { control: 'text' },
  },
} as ComponentMeta<typeof ProfilePicture>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof ProfilePicture> = (args) => <ProfilePicture {...args} />;

// export const Src = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

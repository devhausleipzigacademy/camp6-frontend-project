import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StatusHome } from "../components/StatusHome";

export default {
  title: "StatusHome",
  component: StatusHome,
  argTypes: {
    artificialPercentageComplete: {
      name: "Arteficial Percentage Complete",
      type: "number",
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/twebVJf4ML6HEfrUnFmojm/Personal-Curriculum?node-id=482%3A169",
    },
  },
} as ComponentMeta<typeof StatusHome>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof StatusHome> = (args) => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital@0;1&family=Comfortaa:wght@600;700&family=Poppins:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <StatusHome {...args}/>
  </>
);

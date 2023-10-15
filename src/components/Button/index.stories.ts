import Button from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    default: {
      control: "text",
      description: "Slot Content",
    },
    primary: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "large", "medium"],
    },
  },
  args: {
    default: "Button",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" >{{ args.default }}</Button>',
  }),
};

export const Default: Story = {};

export const Primary: Story = {
  args: {
    primary: "primary",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
export default meta;

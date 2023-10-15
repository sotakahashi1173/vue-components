import Switch from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: { Switch },
    setup() {
      return { args };
    },
    template: '<Switch v-bind="args" />',
  }),
};

export const Default: Story = {};

export default meta;

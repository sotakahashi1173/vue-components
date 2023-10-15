import SearchBox from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof SearchBox>;

const meta: Meta<typeof SearchBox> = {
  title: "SearchBox",
  component: SearchBox,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: { SearchBox },
    setup() {
      return { args };
    },
    template: '<SearchBox v-bind="args" />',
  }),
};

export const Default: Story = {};

export default meta;

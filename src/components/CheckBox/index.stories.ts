import CheckBox from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof CheckBox>;

const meta: Meta<typeof CheckBox> = {
  title: "CheckBox",
  component: CheckBox,
  argTypes: {},
  args: {
    default: "CheckBox",
  },
  render: (args) => ({
    components: { CheckBox },
    setup() {
      return { args };
    },
    template: '<CheckBox v-bind="args" >{{ args.default }}</CheckBox>',
  }),
};

export const Default: Story = {};

export default meta;

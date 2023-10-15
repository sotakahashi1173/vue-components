import Radio from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof Radio>;

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,
  args: {},
  render: (args) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template:
      '<div><Radio v-bind="args" name="radio" @click="onClick" value="raido1" >ラジオ1</Radio></div><br><div><Radio v-bind="args" name="radio" value="radio2" >ラジオ2</Radio></div>',
  }),
};

export const Default: Story = {};

export default meta;

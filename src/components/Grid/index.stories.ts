import Grid from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  title: "Grid",
  component: Grid,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: { Grid },
    setup() {
      return { args };
    },
    template: '<Grid v-bind="args" >{{ args.default }}</Grid>',
  }),
};

export const Default: Story = {};

export default meta;

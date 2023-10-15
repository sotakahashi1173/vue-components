import InputText from "./Index.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof InputText>;

const meta: Meta<typeof InputText> = {
  title: "InputText",
  component: InputText,
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "url"],
    },
    isError: {
      control: { type: "boolean" },
    },
  },
  render: (args) => ({
    components: { InputText },
    setup() {
      return { args };
    },
    template: '<InputText v-bind="args" />',
  }),
};

export const Default: Story = {};

export const Password: Story = {
  args: { placeholder: "パスワード入力", type: "password" },
};

export const Email: Story = {
  args: { placeholder: "Email入力", type: "email" },
};

export const URL: Story = {
  args: { placeholder: "URL入力", type: "url" },
};

export const Error: Story = {
  args: { isError: true },
};
export default meta;

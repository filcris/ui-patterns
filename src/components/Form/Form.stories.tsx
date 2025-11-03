import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {};

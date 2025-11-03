import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "exemplo@dominio.pt",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "exemplo@dominio.pt",
    error: "Endereço de email inválido.",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

type Person = { name: string; email: string; role: string };
const columns: Parameters<typeof Table<Person>>[0]["columns"] = [
  { key: "name", header: "Nome" },
  { key: "email", header: "Email" },
  { key: "role", header: "Função" },
];

const data: Person[] = [
  { name: "Ana Silva", email: "ana@example.com", role: "Admin" },
  { name: "Bruno Reis", email: "bruno@example.com", role: "User" },
  { name: "Carla Araújo", email: "carla@example.com", role: "User" },
];

const meta: Meta<typeof Table<Person>> = {
  title: "Components/Table",
  component: Table<Person>,
  tags: ["autodocs"],
  argTypes: {
    zebra: { control: "boolean" },
    density: { control: "radio", options: ["comfortable", "compact"] },
  },
};
export default meta;
type Story = StoryObj<typeof Table<Person>>;

export const Default: Story = {
  args: { columns, data, caption: "Tabela de utilizadores", zebra: true, density: "comfortable" },
};

export const Compact: Story = { args: { ...Default.args, density: "compact" } };

export const Clickable: Story = {
  args: { ...Default.args, onRowClick: (row: Person) => alert(`Clicou: ${row.name}`) },
};

import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Table } from "./Table";

type Row = { a: string; b: string };

test("renderiza headers e células", () => {
  render(
    <Table<Row>
      columns={[
        { key: "a", header: "Col A" },
        { key: "b", header: "Col B" },
      ]}
      data={[{ a: "X", b: "Y" }]}
      caption="Tabela teste"
    />
  );
  expect(screen.getByText("Col A")).toBeInTheDocument();
  expect(screen.getByText("Y")).toBeInTheDocument();
});

test("onRowClick funciona com Enter", () => {
  const onRowClick = vi.fn();
  render(
    <Table<Row>
      columns={[
        { key: "a", header: "A" },
        { key: "b", header: "B" },
      ]}
      data={[{ a: "1", b: "2" }]}
      onRowClick={onRowClick}
    />
  );
  const row = screen.getByRole("row", { name: /linha selecionável/i });
  row.focus();
  fireEvent.keyDown(row, { key: "Enter", code: "Enter" });
  expect(onRowClick).toHaveBeenCalledTimes(1);
});


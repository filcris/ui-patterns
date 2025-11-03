import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza o botão com o texto correto", () => {
    render(<Button>Submeter</Button>);
    expect(screen.getByRole("button", { name: /submeter/i })).toBeInTheDocument();
  });

  it("está desativado quando a prop disabled é verdadeira", () => {
    render(<Button disabled>Desativado</Button>);
    expect(screen.getByRole("button", { name: /desativado/i })).toBeDisabled();
  });
});

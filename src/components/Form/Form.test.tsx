import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  it("mostra mensagens de erro quando os campos estão vazios", async () => {
    const { container } = render(<Form />);

    // Submeter o FORM (o botão está disabled, por isso clicá-lo não faz nada)
    const form = container.querySelector("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/email é obrigatório/i)).toBeInTheDocument();
      expect(screen.getByText(/password é obrigatória/i)).toBeInTheDocument();
    });
  });
});

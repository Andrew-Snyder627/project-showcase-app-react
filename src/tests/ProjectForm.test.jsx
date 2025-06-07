import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "../components/ProjectForm";

describe("ProjectForm", () => {
  it("renders the form inputs and button", () => {
    render(<ProjectForm onAddProject={() => {}} />);

    expect(screen.getByPlaceholderText("Project Title")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Project Description")
    ).toBeInTheDocument();
    expect(screen.getByText("Add Project")).toBeInTheDocument();
  });

  it("calls onAddProject when form is submitted with values", () => {
    const mockAddProject = jest.fn();

    render(<ProjectForm onAddProject={mockAddProject} />);

    fireEvent.change(screen.getByPlaceholderText("Project Title"), {
      target: { value: "Test Project" },
    });

    fireEvent.change(screen.getByPlaceholderText("Project Description"), {
      target: { value: "Test Description" },
    });

    fireEvent.click(screen.getByText("Add Project"));

    expect(mockAddProject).toHaveBeenCalledTimes(1);
  });

  it("does not call onAddProject if fields are empty", () => {
    const mockAddProject = jest.fn();

    render(<ProjectForm onAddProject={mockAddProject} />);

    fireEvent.click(screen.getByText("Add Project"));

    expect(mockAddProject).toHaveBeenCalledTimes(0);
  });
});

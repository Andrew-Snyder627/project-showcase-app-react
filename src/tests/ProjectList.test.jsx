import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const projectsMock = [
  { title: "Test Project 1", description: "Desc 1" },
  { title: "Test Project 2", description: "Desc 2" },
];

describe("ProjectList", () => {
  it("renders the list of projects", () => {
    render(<ProjectList projects={projectsMock} handleDelete={() => {}} />);

    expect(screen.getByText("Test Project 1")).toBeInTheDocument();
    expect(screen.getByText("Test Project 2")).toBeInTheDocument();
  });

  it("calls delete function when delete button is clicked", () => {
    const mockDelete = jest.fn();

    render(<ProjectList projects={projectsMock} handleDelete={mockDelete} />);

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});

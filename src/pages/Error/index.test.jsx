import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Error from './index';

describe("Error", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders NOT FOUND text", () => {
    render(<Error />);
    const notFoundElements = screen.getAllByText(/NOT FOUND/i);
    expect(notFoundElements.length).toBeGreaterThan(0);
  });

  it("renders 404 error code", () => {
    const { container } = render(<Error />);

    const firstFour = container.querySelector('[class*="text4041"]');
    const zero = container.querySelector('[class*="text4042"]');
    const secondFour = container.querySelector('[class*="text4043"]');

    expect(firstFour).toBeInTheDocument();
    expect(firstFour).toHaveTextContent('4');
    expect(zero).toBeInTheDocument();
    expect(zero).toHaveTextContent('0');
    expect(secondFour).toBeInTheDocument();
    expect(secondFour).toHaveTextContent('4');
  });

  it("renders main container with correct structure", () => {
    const { container } = render(<Error />);

    const mainContainer = container.querySelector('[class*="mainContainer"]');
    const mainWrapper = container.querySelector('[class*="mainWrapper"]');

    expect(mainContainer).toBeInTheDocument();
    expect(mainWrapper).toBeInTheDocument();
  });

  it("renders TV display with antenna", () => {
    const { container } = render(<Error />);

    const antenna = container.querySelector('[class*="antenna"]');
    const tv = container.querySelector('[class*="tv"]');

    expect(antenna).toBeInTheDocument();
    expect(tv).toBeInTheDocument();
  });

  it("renders SVG curve element", () => {
    const { container } = render(<Error />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 189.929 189.929');
  });
});

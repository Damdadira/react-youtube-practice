import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from './index';

describe("Loading", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders loading container", () => {
    const { container } = render(<Loading />);
    const loadingContainer = container.querySelector('[class*="loadingContainer"]');
    expect(loadingContainer).toBeInTheDocument();
  });

  it("renders typing indicator", () => {
    const { container } = render(<Loading />);
    const typingIndicator = container.querySelector('[class*="typingIndicator"]');
    expect(typingIndicator).toBeInTheDocument();
  });

  it("renders three typing circles", () => {
    const { container } = render(<Loading />);
    const typingCircles = container.querySelectorAll('[class*="typingCircle"]');
    expect(typingCircles).toHaveLength(3);
  });

  it("renders three typing shadows", () => {
    const { container } = render(<Loading />);
    const typingShadows = container.querySelectorAll('[class*="typingShadow"]');
    expect(typingShadows).toHaveLength(3);
  });

  it("has correct structure with circles and shadows", () => {
    const { container } = render(<Loading />);
    const typingIndicator = container.querySelector('[class*="typingIndicator"]');

    expect(typingIndicator).toBeInTheDocument();

    const children = typingIndicator.children;
    expect(children).toHaveLength(6); 
  });
});

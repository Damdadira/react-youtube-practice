import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { withRouter } from "../../../test/utils";
import { Header } from "./Header";
import userEvent from "@testing-library/user-event";

describe("SearchHeader", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      withRouter(<Route path="/" element={<Header />} />)
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with keyword correctly", () => {
    render(withRouter(<Route path="/:keyword" element={<Header />} />, "/bts"));
    expect(screen.getByDisplayValue("bts")).toBeInTheDocument();
  });

  it("navigates to results page on search button click", async () => {
    const searchKeyword = "fake-keyword";

    render(
      withRouter(
        <>
          <Route path="/" element={<Header />}></Route>
          <Route
            path="/:keyword"
            element={<p>{`Search result for ${searchKeyword}`}</p>}
          ></Route>
        </>,
        "/"
      )
    );

    const searchButton = screen.getByRole("button", { name: "검색" });
    const searchInput = screen.getByRole("textbox");

    await userEvent.type(searchInput, searchKeyword);
    await userEvent.click(searchButton);

    expect(
      screen.getByText(`Search result for ${searchKeyword}`)
    ).toBeInTheDocument();
  });
});

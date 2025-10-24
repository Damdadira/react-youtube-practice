import { MemoryRouter, Routes } from "react-router";
import { YoutubeApiProvider } from "../app/provider/YoutubeApiProvider";

export function withRouter(routes, initialEntry = "/") {
  return (
    <YoutubeApiProvider>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>{routes}</Routes>
      </MemoryRouter>
    </YoutubeApiProvider>
  );
}

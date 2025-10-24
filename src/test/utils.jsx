import { MemoryRouter, Routes } from "react-router";
import { YoutubeApiProvider } from "../app/provider/YoutubeApiProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiContext } from '../app/context/YoutubeApiContext';

export function withRouter(routes, initialEntry = "/") {
  return (
    <YoutubeApiProvider>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>{routes}</Routes>
      </MemoryRouter>
    </YoutubeApiProvider>
  );
}

export function withAllContexts(children, youtube) {
  const testClient = createTestQueryClient();
  return (
    <YoutubeApiContext.Provider value={youtube}>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </YoutubeApiContext.Provider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
}

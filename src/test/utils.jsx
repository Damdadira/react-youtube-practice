import { MemoryRouter, Routes } from "react-router";
import { YoutubeApiProvider } from "../app/provider/YoutubeApiProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiContext } from '../app/context/YoutubeApiContext';

export function withRouter(routes, initialEntry = "/", youtube = null) {
  const content = (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );

  // youtube가 제공되면 테스트용 Context 사용, 아니면 실제 Provider 사용
  if (youtube) {
    return (
      <YoutubeApiContext.Provider value={{ youtube }}>
        {content}
      </YoutubeApiContext.Provider>
    );
  }

  return <YoutubeApiProvider>{content}</YoutubeApiProvider>;
}

export function withAllContexts(children, youtube) {
  const testClient = createTestQueryClient();
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
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
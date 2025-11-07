import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router";
import { YoutubeApiContext } from "../../app/context/YoutubeApiContext";
import VideoDetail from './index';

describe("VideoDetail", () => {
  const fakeVideo = {
    id: 'test-video-id',
    snippet: {
      title: 'Test Video Title',
      channelId: 'test-channel-id',
      channelTitle: 'Test Channel',
      description: 'Test video description',
      publishedAt: new Date(),
      thumbnails: {
        medium: {
          url: 'http://image/',
        },
      },
    },
  };

  const fakeYoutube = {
    channelImageURL: vi.fn(),
    searchByChannelId: vi.fn(),
    channelComments: vi.fn()
  };

  const createTestQueryClient = () => {
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
  };

  const renderVideoDetail = (video = fakeVideo) => {
    const testClient = createTestQueryClient();

    return render(
      <YoutubeApiContext.Provider value={{ youtube: fakeYoutube }}>
        <QueryClientProvider client={testClient}>
          <MemoryRouter initialEntries={[{ pathname: '/videos/watch', state: { video } }]}>
            <Routes>
              <Route path="/videos/watch" element={<VideoDetail />} />
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      </YoutubeApiContext.Provider>
    );
  };

  afterEach(() => {
    fakeYoutube.channelImageURL.mockReset();
    fakeYoutube.searchByChannelId.mockReset();
    fakeYoutube.channelComments.mockReset();
  });

  it("renders correctly", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    const { asFragment } = renderVideoDetail();

    await waitFor(() => expect(screen.getByText(fakeVideo.snippet.title)).toBeInTheDocument());
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders video title", () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    renderVideoDetail();

    expect(screen.getByText(fakeVideo.snippet.title)).toBeInTheDocument();
  });

  it("renders video description", () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    renderVideoDetail();

    expect(screen.getByText(fakeVideo.snippet.description)).toBeInTheDocument();
  });

  it("renders youtube iframe with correct video id", () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    const { container } = renderVideoDetail();

    const iframe = container.querySelector('#player');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', `https://www.youtube.com/embed/${fakeVideo.id}`);
  });

  it("renders ChannelInfo component with correct props", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    renderVideoDetail();

    await waitFor(() => {
      expect(fakeYoutube.channelImageURL).toHaveBeenCalledWith(fakeVideo.snippet.channelId);
    });
  });

  it("renders RelatedVideos component", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    renderVideoDetail();

    await waitFor(() => {
      expect(fakeYoutube.searchByChannelId).toHaveBeenCalledWith(fakeVideo.snippet.channelId);
    });
  });

  it("renders Comment component", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    renderVideoDetail();

    await waitFor(() => {
      expect(fakeYoutube.channelComments).toHaveBeenCalledWith(fakeVideo.id);
    });
  });

  it("renders main container structure", () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    fakeYoutube.searchByChannelId.mockResolvedValue([]);
    fakeYoutube.channelComments.mockResolvedValue([]);

    const { container } = renderVideoDetail();

    const videoDetailContainer = container.querySelector('[class*="videoDetailContainer"]');
    const channelContainer = container.querySelector('[class*="channelContainer"]');
    const relatedVideosContainer = container.querySelector('[class*="relatedVideosContainer"]');

    expect(videoDetailContainer).toBeInTheDocument();
    expect(channelContainer).toBeInTheDocument();
    expect(relatedVideosContainer).toBeInTheDocument();
  });
});

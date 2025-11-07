import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { withAllContexts, withRouter } from "../../../../test/utils";
import { Route } from "react-router";
import { fakeVideos } from "../../../../test/videos";
import RealtedVideos from './RelatedVideos';

describe("RelatedVideos", () => {
  const fakeYoutube = {
    searchByChannelId: vi.fn()
  }

  const renderRelatedVideos = (path="/") => {
    return render(
      withAllContexts(
        withRouter(
          <Route path="/" element={<RealtedVideos id="test-channel-id" />}></Route>,
          "/",
          fakeYoutube
        ),
        fakeYoutube
      )
    )
  }

  afterEach(() => fakeYoutube.searchByChannelId.mockReset());

  it("renders correctly", async () => {
    fakeYoutube.searchByChannelId.mockResolvedValue(fakeVideos);
    const { asFragment } = renderRelatedVideos();

    await waitFor(() => expect(screen.getByRole('playlist')).toBeInTheDocument());
    expect(fakeYoutube.searchByChannelId).toHaveBeenCalledWith("test-channel-id");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders loading state initially", () => {
    fakeYoutube.searchByChannelId.mockImplementation(() => new Promise(() => {}));
    const { container } = renderRelatedVideos();

    expect(container.querySelector('.loadingContainer, [class*="loadingContainer"]')).toBeInTheDocument();
  });

  it("renders error state when API call fails", async () => {
    fakeYoutube.searchByChannelId.mockRejectedValue(new Error("API Error"));
    renderRelatedVideos();

    await waitFor(() => {
      const notFoundElements = screen.getAllByText(/NOT FOUND/i);
      expect(notFoundElements.length).toBeGreaterThan(0);
    });
  });

  it("renders video list when data is loaded", async () => {
    fakeYoutube.searchByChannelId.mockResolvedValue(fakeVideos);
    renderRelatedVideos();

    await waitFor(() => expect(screen.getByRole('playlist')).toBeInTheDocument());

    const videoItems = screen.getAllByRole('listitem');
    expect(videoItems).toHaveLength(fakeVideos.length);
  });

  it("calls searchByChannelId with correct channel id", async () => {
    const channelId = "custom-channel-id";
    fakeYoutube.searchByChannelId.mockResolvedValue(fakeVideos);

    render(
      withAllContexts(
        withRouter(
          <Route path="/" element={<RealtedVideos id={channelId} />}></Route>,
          "/",
          fakeYoutube
        ),
        fakeYoutube
      )
    );

    await waitFor(() => expect(fakeYoutube.searchByChannelId).toHaveBeenCalledWith(channelId));
  });
});

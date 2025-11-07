import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { withAllContexts, withRouter } from "../../../../test/utils";
import { Route } from "react-router";
import ChannelInfo from "../ChannelInfo/ChannelInfo";

describe("ChannelInfo", () => {
  const fakeYoutube = {
    channelImageURL: vi.fn()
  }

  const renderChannelInfo = (path ="/") => {
    return render(
      withAllContexts(
        withRouter(
          <Route path='/' element={<ChannelInfo id="id" name="channel" />}></Route>,
          path,
          fakeYoutube  
        )
      )
    )
  }

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it("renders correctly", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    const { asFragment } = renderChannelInfo();

    await waitFor(() => screen.getByText("channel"));
    expect(fakeYoutube.channelImageURL).toHaveBeenCalledWith("id");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without URL", () => {
    fakeYoutube.channelImageURL.mockImplementation(() => {
      throw new Error("error");
    });

    renderChannelInfo();
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders with URL", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    
    renderChannelInfo();
    expect(await screen.findByRole("img")).toBeInTheDocument();
  });
});

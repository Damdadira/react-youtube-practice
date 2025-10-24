import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { withAllContexts, withRouter } from "../../../../test/utils";
import { Route } from "react-router";
import ChannelInfo from "../ChannelInfo/ChannelInfo";

describe("ChannelInfo", () => {
  const fakeYoutube = {
    channelImageURL: vi.fn()
  }

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it("renders correctly", async () => {
    fakeYoutube.channelImageURL.mockResolvedValue("url");
    const { asFragment } = render(
      withAllContexts(
        withRouter(
          <Route path='/' element={<ChannelInfo id="id" name="channel" />}></Route>,
          "/",
          fakeYoutube  // 세 번째 인자로 전달
        )
      )
    );
    await waitFor(() => screen.getByText("channel"));
    expect(fakeYoutube.channelImageURL).toHaveBeenCalledWith("id");
    expect(asFragment()).toMatchSnapshot();
  });
});

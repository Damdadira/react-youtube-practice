import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, it, vi } from "vitest";
import { withAllContexts, withRouter } from "../../../../test/utils";
import { Route } from "react-router";
import ChannelInfo from "../ChannelInfo/ChannelInfo";

describe("ChannelInfo", () => {
  const fakeYoutube = {
    channelImageURL: vi.fn()
  }

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it("renders correctly", async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => "url");
    render(
      withAllContexts(
        withRouter(<Route path='/' element={<ChannelInfo id="id" name="channel" />}></Route>)
      )
      ,fakeYoutube
    );
    await waitFor(() => screen.getByText("channel"));
  });
});

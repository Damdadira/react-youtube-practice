import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router';
import { describe, expect, it } from 'vitest';
import { formatAgo } from '../../../../shared/lib/timeago';
import VideoCard from './VideoCard';
import userEvent from '@testing-library/user-event';

describe('VideoCard', () => {
  // 1. 테스트에 필요한 데이터와 환경 설정
  const video = {
    id: 1,
    snippet: {
      title: 'title',
      channelId: '1',
      channelTitle: 'channelTitle',
      publishedAt: new Date(),
      thumbnails: {
        medium: {
          url: 'http://image/',
        },
      },
    },
  };
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  // 정적
  it('renders video item', () => {
    // 2. 컴포넌트 렌더링(실행)
    render(
      <MemoryRouter>
        <VideoCard video={video} />
      </MemoryRouter>
    );

    // 3. 결과 확인
    const image = screen.getByRole('img');
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, 'ko'))).toBeInTheDocument();
  });

  // 동적
  it('navigates to detailed video page with video state when clicked', async () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<VideoCard video={video} />}></Route>
          <Route
            path={`/watch/${video.id}`}
            element={<LocationStateDisplay />}
          ></Route>
        </Routes>
      </MemoryRouter>
    );

    const card = screen.getByRole('listitem');
    await userEvent.click(card);
    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  });
});

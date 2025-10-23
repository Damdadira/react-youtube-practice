import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { formatAgo } from '../../../../shared/lib/timeago';
import VideoCard from './VideoCard';

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
});

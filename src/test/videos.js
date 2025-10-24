// 반복되는 테스트의 경우 별도의 파일로 만들자
export const fakeVideo = {
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

export const fakeVideos = [
  {
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
  },
  {
    id: 2,
    snippet: {
      title: 'title2',
      channelId: '2',
      channelTitle: 'channelTitle2',
      publishedAt: new Date(),
      thumbnails: {
        medium: {
          url: 'http://image/',
        },
      },
    },
  }
];
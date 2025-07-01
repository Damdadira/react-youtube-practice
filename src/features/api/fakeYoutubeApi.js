import axios from 'axios';

export default class FakeYoutubeApi {
  async search() {
    return axios.get('/mock/search.json')
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async videos() {
    return axios.get('/mock/popular.json')
      .then(res => res.data.items)
  }

  async channels() {
    return axios.get('/mock/channel.json')
  }
}
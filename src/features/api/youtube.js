import axios from 'axios';

export default class Youtube {
  constructor() {

  }

  // 공개 함수
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

   // 앞에 #붙이면 private 함수(비공개 함수)
  async #searchByKeyword() {
    return axios.get('/mock/search.json')
    .then(res => res.data.items)
    .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get('/mock/popular.json').then(res => res.data.items)
  }
}
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return axios({
    url: `${BASE_URL}/posts`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const getComments = (postId: number) => {
  return axios({
    url: `${BASE_URL}/comments?postId=${postId}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
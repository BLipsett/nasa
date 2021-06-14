import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=b0wmhPrdpoxD5SkdmrKRCNiNZxXPidg9Zi6wgENT&date=',
  timeout: 8000
})

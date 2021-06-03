/*   这是一个action 的文件。 自然   return (dispatch) => { 返回的是dispatch */

import axios from 'axios'

export const userSignupRequest = (userData) => {
  // thunk
  return (dispatch) => {
    //  不要把路由路径 和这个post 的网络请求路径搞混。
    //  axios.post('/api/users', userData) 整体是一个Promise对象。
    return axios.post('/api/users', userData)
  }
}

export const isUserExists = (username) => {
  return (dispatch) => {
    return axios.get(`/api/users/${username}`, username)
  }
}

import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/index'

// 这个action存在的意义就是修改 reducer里面的数据

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message,
  }
}

export const deleteFlashMessage = (id) => {
  return {
    type: DELETE_FLASH_MESSAGE,
    id,
  }
}

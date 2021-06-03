import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/index'
import shortid from 'shortid'
import findIndex from 'lodash/findIndex'

const flashMessageRedeucer = (state = [], action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      // 三大原则，只能返回一个新的state
      return [
        ...state,
        {
          id: shortid.generate(),
          //  type就是action里面传来的数据
          type: action.message.type,
          text: action.message.text,
        },
      ]
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id })
      if (index >= 0) {
        //...state.slice(index + 1) 表示后面的全部取到
        return [...state.slice(0, index), ...state.slice(index + 1)]
      } else {
        return state
      }
    // const filteredUser = state.filter((stateObj) => stateObj.id !== action.id)
    // return filteredUser

    default:
      return state
  }
}

export default flashMessageRedeucer

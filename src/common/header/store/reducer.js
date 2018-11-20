import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({ 
  focused: false,
  mouseIn: false,
  list: [],  //immutable数组
  page: 1,
  totalPage: 1,
  inputValue: '',
  result: ''
})
export default (state = defaultState, action) => {
  if(action.type === constants.SEARCH_FOCUSED) {
    return state.set('focused',true)
  }
  if(action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if(action.type === constants.SEARCH_INPUT) {
    return state.set('inputValue',action.value)
  }
  if(action.type === constants.CHANGE_LIST) {
    return state.merge({ //相当于多次调用merge
      list: action.data,
      totalPage:action.totalPage
    })
  }
  if(action.type === constants.MOUSE_ENTER) {
    return state.set('mouseIn',true)
  }
  if(action.type === constants.MOUSE_LEAVE) {
    return state.set('mouseIn',false)
  }
  if(action.type === constants.CHANGE_PAGE) {
    return state.set('page',action.page)
  }
  if(action.type === constants.GET_RESULT) {   
    return state.set('result', action.data)
  }
  return state
}

import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUSED
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const searchInput = (value) => ({
  type: constants.SEARCH_INPUT,
  value
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}
export const searchStart = (v) => {
  var linkapi = 'https://zh.wikipedia.org/w/api.php?origin=*&page='+ v + '&action=mobileview&format=json&noheadings=true&pilicense=any&prop=sections|text|lastmodified|lastmodifiedby|languagecount|id|protection|editable|displaytitle|thumb|description|image|revision|namespace&sectionprop=toclevel|line|anchor|level|number|fromtitle|index&sections=all&thumbwidth=640'
  return (dispatch) => {
    axios.get(linkapi).then((res) => {
      console.log(res)
      let data = res.data.mobileview 
      console.log(data)
      // displaytitle
      //lastmodified
      //sections:
      //thumb {url}
      dispatch(getResult(data))
    }).catch(() => {
      console.log('error')
    })
  }
}
const changeList = (data) =>({
  type: constants.CHANGE_LIST,
  data: fromJS(data), //传进来的是普通的数组，将其变成immutable数组，才能保证修改state的时候数据类型不变
  totalPage: Math.ceil(data.length / 10)
})
const getResult = (d) => ({
  type: constants.GET_RESULT,
  data: fromJS(d) 
})

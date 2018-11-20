import React,{ Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import  * as actionCreators  from './store/actionCreators' // * 表示所有
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button,SearchInfoItem, SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList,A } from './style.js'
import { connect } from 'react-redux'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {withRouter} from 'react-router-dom'

class Header extends Component { //可以写成无状态组件
  getListArea () {
    const pageList = [];
    const jsList = this.props.list.toJS() //将immutable数组转化为js数组
    if(jsList.length) {
      for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}> {jsList[i]} </SearchInfoItem>
        )
      }
    }
    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo onMouseEnter={(this.props.handleMouseEnter)} onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            this.props.login ? <NavItem onClick={this.props.logout} className='right'>退出</NavItem> : 
              <NavItem className='right'><A>登录</A></NavItem>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout= {300}
              in={this.props.focused}
              classNames='slide'
            >
              <NavSearch className={this.props.focused ? 'focused': ''} onFocus={() => this.props.handleInputFocus(this.props.list)} onBlur={this.props.handleInputBlur} onKeyUp={(e) => this.props.handleInput(e,this.props.inputValue)}></NavSearch> 
              </CSSTransition>
              
              <i onClick={() => this.props.handleSearchStart(this.props.inputValue)} className= {this.props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe6dd;</i>
              {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
          <i className="iconfont">&#xe775;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
//<Logo href='/'/>
const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    // focused: state.getIn(['header','focused']) 和上面的相同
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn'),
    login: state.get('login').get('login'),
    inputValue: state.get('header').get('inputValue')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      console.log(list)
      if(list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleInput(e,v){
      console.log(e)
      if(e.keyCode !== 13){
        let content = document.getElementsByClassName('focused')[0].value
        dispatch(actionCreators.searchInput(content))
      } else {
        this.handleSearchStart(v)
      }
    },
    handleSearchStart(v) {
      console.log(v)
      let props = this  //将所有的props 都合并在一起，而这里也确实是props自己，所以数据都在this上
      dispatch(actionCreators.searchStart(v))
        .then(() => {
          console.log(props)
          let url = '/search=' + props.inputValue
          props.history.push(url)
          // this.props.match 
          // this.props.xxxx
        })
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle){
        originAngle = parseInt(originAngle,10)
      }else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle+360) + 'deg)'
      console.log(spin.style.transform)
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Header)
)
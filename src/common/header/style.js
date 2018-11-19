import styled from 'styled-components'
import logoPic from '../../static/nav-logo.png'
export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
` 
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height: 56px;
  background: url(${logoPic});
  background-size: cover;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
// &.classname 指 NavItem 同时 满足 classname
export const A = styled.a.attrs({
  href:'/login'
})`
`

export const SearchWrapper = styled.div`
  position:relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width:30px;
    line-height:30px;
    text-align: center;
    border-radius:15px;
    cursor: pointer;
    &.focused {
      background: #777;
      color: #fff
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing:border-box;
  border: none;
  margin-top: 9px;
  margin-left: 20px;
  outline: none;
  border-radius: 19px;
  background: #eee; 
  color: #666;
  font-size:14px;
  &::placeholder {
    color:#999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background:white;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696; 
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size:12px;
    margin-right: 2px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding:0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height:38px;
  border-radius: 19px;
  border:1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
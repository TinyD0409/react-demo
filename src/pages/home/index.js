import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop, Toprev, Tonext} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
class Home extends Component {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
  render() {
    let carouselStyle = {
      textAlign: "center",
      lineHeight: 160,
      background: "#364d79",
      overflow: "hidden"
    }
    return (
      <HomeWrapper>
        <HomeLeft>
        <Carousel autoplay nextArrow prevArrow>
          <div><img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4526/73a226693f83ee2920d31207c881b7c6eeb46761.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
          <div><img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4526/73a226693f83ee2920d31207c881b7c6eeb46761.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
          <div><img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4526/73a226693f83ee2920d31207c881b7c6eeb46761.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/></div>
        </Carousel>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
      </HomeWrapper>)
  }
}
export default Home
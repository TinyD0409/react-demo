import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem} from '../style'
class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"/>
        <RecommendItem/>
      </RecommendWrapper>
    )
  }
}
export default Recommend
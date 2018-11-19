import React, { Component } from 'react'
import { TopicWrapper } from '../style'
import { TopicItem } from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={item.get('imgUrl')} className="topic-pic" alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({ // 获取数据
  list: state.get('home').get('topicList')
})
//mapdispatch  修改数据
export default connect(mapState,null)(Topic)
import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore} from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((item,index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem key={item.get('id')}>
                  <img className="pic" src={item.get('imgUrl')} alt=""/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={this.props.getMoreList}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.get('home').get('articleList')
})
const mapDispatch = (dispatch) => ({
  getMoreList () {
    // dispatch(actionCreator.getMoreList())
  }
})
export const getMoreList = () => {
  return (dispatch) => {
    console.log('click')
  }
}
export default connect(mapState,mapDispatch)(List)
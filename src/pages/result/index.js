import React,{ Component } from 'react'
import { connect } from 'react-redux'
//import  * as actionCreators  from '../../header/store/actionCreators'
import { Title, Section, Subtitle,Contents,Content } from './style.js'
require('./wiki.css')
require('./wiki2.css')
require('./wiki3.css')
class Result extends Component {
  sectionList() {
    let contentList = []
    let sections = this.props.result.sections
    console.log(sections)
    contentList.push(<Section key={sections[0]['id']} dangerouslySetInnerHTML={{__html:sections[0].text}}></Section>)
    for (let i = 1;i < sections.length; i++) {
      contentList.push(<Section key={sections[i]['id']}> <Subtitle>{sections[i].line}</Subtitle> <Content dangerouslySetInnerHTML={{__html:sections[i].text}}></Content> </Section>)
    }
    return contentList
  }
  render () {
    return (
      <div>
        <Title>{this.props.result.displaytitle}</Title>
        <Contents>
          {this.sectionList()}
        </Contents>
      </div>  
    )   
  }
  componentDidMount() {
    console.log(this)
  }
}
const mapState = (state) => ({
  result: state.get('header').get('result')
})
const mapDispatch = (dispatch) => ({
  getMoreList () {
    // console.log(this.props.result)
    // dispatch(actionCreator.getMoreList())
  }
})
export default connect(mapState,mapDispatch)(Result)
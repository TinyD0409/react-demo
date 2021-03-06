import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Result from './pages/result'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <Header /> */}
          <BrowserRouter>
            <div>
              <Route path='*' component={Header}></Route>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/search=*' component={Result}></Route>
            </div> 
          </BrowserRouter>
         </div> 
      </Provider>
    )
  }
  componentDidUpdate() {
    alert("componentDIdUpdate");
  }
  componentWillUpdate() {
    alert("componentWillUpdate");
  }
}
export default App

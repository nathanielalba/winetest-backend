import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { default as Home } from './components/Home'

class WineTest extends Component {
  render() {
    return (
      <div className='container'>
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={WineTest}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
)

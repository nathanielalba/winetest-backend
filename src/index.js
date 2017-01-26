import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class WineTest extends Component {
  render() {
    return (
      <div>
        <h1>It's working</h1>        
      </div>
    )
  }
}

ReactDOM.render(
  <WineTest />,
  document.getElementById('app')
)

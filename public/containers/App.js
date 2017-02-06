import React, {Component} from 'react'

import Navigation from '../components/Navigation'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Navigation/>
      <div className='container'></div>
      {this.props.children}
      </div>
    )
  }
}

export default App

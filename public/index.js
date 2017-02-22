import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './containers/App'
import Showcase from './containers/Showcase'
import Events from './containers/Events'
import Home from './containers/Home'
import Contact from './containers/Contact'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='showcase' component={Showcase}/>
      <Route path='events' component={Events}/>
      <Route path='contact' component={Contact}/>
    </Route>
  </Router>,document.querySelector('.root')
)

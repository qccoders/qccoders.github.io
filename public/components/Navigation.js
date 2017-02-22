import React, { PropTypes } from 'react'
import {Link} from 'react-router'

let Navigation = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Q-C Coders</a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-md-0">
        <li className="nav-item">
          <Link className="nav-link" to="/showcase">Showcase</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
</nav>
  )
}

export default Navigation;

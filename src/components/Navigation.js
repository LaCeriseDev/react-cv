import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
return(
  <nav className="sidebar">

    <div className="id">
      <figure className="idContent">
        <img src='./assets/media/logo.jpg' alt="profile" height={180} width={180}  />
        <figcaption>Name</figcaption>
      </figure>
    </div>

    <div className="navigation">
      <ul>
        <NavLink exact to="/" activeClassName="navActive">
          <li>
              <i className="fas fa-home"></i>
              <span>Accueil</span>
          </li>
        </NavLink>
        <NavLink exact to="/Skills" activeClassName="navActive">
          <li>
              <i className="fas fa-brain"></i>
              <span>Skills</span>
          </li>
        </NavLink>
        <NavLink exact to="/Works" activeClassName="navActive">
          <li>
              <i className="fas fa-book-open"></i>
              <span>Works</span>
          </li>
        </NavLink>
        <NavLink exact to="/Contact" activeClassName="navActive">
          <li>
            <i className="fas fa-comments"></i>
            <span>Contact</span>
          </li>
        </NavLink>
      </ul>
    </div>

    <div className="socialNetwork">
      <ul>
        <li>
          <a href="https//www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </li>
        <li>
          <a href="https//www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
        </li>
        <li>
          <a href="https//www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
        </li>
        <li>
          <a href="https//www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
        </li>
      </ul>
    </div>

    <div className="signature">
    <p>Name - 2021</p>
    </div>
  </nav>
  )
}
export default Navigation

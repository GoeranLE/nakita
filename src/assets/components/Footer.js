import React from 'react'

export default function Footer() {
    return (
      <nav className="navbar-light bg-light" style={{height: "0" , }}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center text-dark" href="https://github.com/GoeranLE/nakita"><span>If you wanna take a glimpse under the hood of this project, just click on the icon </span><i className="fab fa-github fa-1x"></i></a>
          </li>
        </ul>
      </nav>
    );
}

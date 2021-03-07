import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header(){
    return (
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="navbar-title">Noel's Book Store</h1>
            <ul className="nav-list">
              <a href="https://twitter.com/No3l_Codes" target="_blank"><TwitterIcon /></a>
              <a href="https://github.com/NoelCov" target="_blank"><GitHubIcon /></a>
              <a href="https://www.instagram.com/no3lcodes/" target="_blank"><InstagramIcon /></a>
            </ul>
        </nav>
    )};

export default Header;
import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header(){
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="title">Noel's Book Store</h1>
            <ul className="nav-list">
              <a href="https://twitter.com/No3l_Codes" style={{color: "white", fontSize: "15"}} target="_blank"><TwitterIcon /></a>
              <a href="https://github.com/NoelCov" style={{color: "white", fontSize: "15"}} target="_blank"><GitHubIcon /></a>
              <a href="https://www.instagram.com/no3lcodes/" style={{color: "white", fontSize: "15px"}} target="_blank"><InstagramIcon /></a>
            </ul>
        </nav>
      </div>
    )
};

export default Header;
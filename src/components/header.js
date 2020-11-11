import React from 'react'
import {Link} from "react-router-dom";

function Header () {
  return (
    <header>
      <div className="search-button" data-search="open"><i className="fa fa-search" /></div>
      <Link to="/"> <h1 className="page-title">MyGroceries2go</h1> </Link>
      <div className="navi-menu-button">
        <em />
        <em />
        <em />
      </div>
    </header>
  )
}

export {Header}
import React from 'react'
import {Link} from "react-router-dom";



function Header () {
  const sideNav = (e) => {
    window.$('.navi-menu-button').addClass('focused');
    window.$('div.nav-menu').fadeIn(50,function(e){
      window.$('nav.menu').addClass('opened');
    });
  }

  return (
    <header>
      <div className="search-button" data-search="open"><i className="fa fa-search" /></div>
      <Link to="/"> <h1 className="page-title">MyGroceries2go</h1> </Link>
      <div className="navi-menu-button" onClick={(e)=> sideNav(e) }>
        <em />
        <em />
        <em />
      </div>
    </header>
  )
}

export {Header}
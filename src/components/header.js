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
      <div className="search-button" data-search="open"><i style={{color: "#af40d9"}} className="fa fa-search" /></div>
      <Link to="/"> <img style={{width: "80%"}} src="/img/logo.png" alt=""/> </Link>
      <div className="navi-menu-button" onClick={(e)=> sideNav(e) }>
        <em />
        <em />
        <em />
      </div>
    </header>
  )
}

export {Header}
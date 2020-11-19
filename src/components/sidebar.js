import React from 'react'
import {Link} from "react-router-dom";

function SideBar () {
  const closeSideMenu = () => {
    window.$('.navi-menu-button').removeClass('focused');
    window.$('nav.menu').removeClass('opened');
    window.$('div.nav-menu').fadeOut(200);
  }

  const dropDown = () => {
    alert("we dey here ___")
    if (window.$(this).parent().hasClass('active'))
      window.$(this).parent().find('.expandable-content').attr('style','');
    else
      window.$(this).parent().find('.expandable-content').css({'max-height':window.$(this).parent().find('.expandable-content')[0].scrollHeight});

    window.$(this).parent().toggleClass('active');
  }

  const user = () => {
    let u = localStorage.getItem('user')
    console.log("USER _______",u)
    if (u) {
      u = JSON.parse(u)
      return u
    } else {
      return null
    }
  }
  return (
    <div className="nav-menu">
      <>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
        <div onClick={()=> closeSideMenu()}>.</div>
     </>
      <nav className="menu">
        <div className="nav-header">
          <a href="index.html">
            <img className="image-round" alt="" src="/img/user-image.png" />
            {
              user() ?
              <>
                <span>john doe</span>
                <span>johndoe@example.com</span>
              </> : ""
            }
          </a>
        </div>
        <div className="nav-container">
          <ul className="main-menu">
            <li className>
              <Link to="/" onClick={()=> closeSideMenu()}>
                <img src="/img/i1.png" alt="" /> Home
              </Link>
            </li>

            {
              user() ?
                <>
                <li>
                  <Link to="/orders" onClick={()=> closeSideMenu()}>
                    <img src="/img/i4.png" alt="" /> Orders
                  </Link>
                </li>
                <li>
                  <Link to="/change-password" onClick={()=> closeSideMenu()}>
                    <img src="/img/i4.png" alt="" /> change Password
                  </Link>
                </li>
                  <li>
                    <Link to="/change-password" onClick={()=> closeSideMenu()}>
                      <img src="/img/i4.png" alt="" /> shipping Address
                    </Link>
                  </li>
                </>
                :
                <li>
                  <Link to="/login" onClick={()=> closeSideMenu()}>
                    <img src="/img/i5.png" alt="" /> Login
                  </Link>
                </li>
            }


          </ul>
        </div>
      </nav>
    </div>
  )
}

export {SideBar}
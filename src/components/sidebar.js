import React from 'react'

function SideBar () {
  return (
    <div className="nav-menu">
      <nav className="menu">
        <div className="nav-header">
          <a href="index.html">
            <img className="image-round" alt="" src="/img/avatar.png" />
            <span>john doe</span>
            <span>johndoe@example.com</span>
          </a>
        </div>
        <div className="nav-container">
          <ul className="main-menu">
            <li className>
              <a href="index.html"><img src="/img/i1.png" alt="" /> Home</a>
            </li>
            <li>
              <a href="about.html"><img src="/img/i2.png" alt="" /> About Us</a>
            </li>
            <li>
              <a href="notifications.html"><img src="/img/i3.png" alt="" /> Notifications</a>
            </li>
            <li>
              <a href="#"><img src="/img/i4.png" alt="" /> Shop <span className="fa fa-angle-down" /></a>
              <ul>
                <li><a href="product-list.html" data-loader="show">Product List</a></li>
                <li><a href="product-detail.html" data-loader="show">Product Detail</a></li>
                <li><a href="product-basket.html" data-loader="show">Basket</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);"><img src="/img/i5.png" alt="" /> Login/Register <span className="fa fa-angle-down" /></a>
              <ul>
                <li><a href="login.html" data-loader="show">Login</a></li>
                <li><a href="signup.html" data-loader="show">Register</a></li>
                <li><a href="forgot-password.html" data-loader="show">Forgot Password</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><img src="/img/i6.png" alt="" /> Blog <span className="fa fa-angle-down" /></a>
              <ul>
                <li><a href="post-list-1.html" data-loader="show">List 1</a></li>
                <li><a href="post-list-2.html" data-loader="show">List 2</a></li>
                <li><a href="post-detail.html" data-loader="show">Detail</a></li>
                <li><a href="post-author.html" data-loader="show">Author</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);"><img src="/img/i7.png" alt="" /> Wizards <span className="fa fa-angle-down" /></a>
              <ul>
                <li><a href="wizard-default.html" data-loader="show">Wizard Default</a></li>
                <li><a href="wizard-fullscreen.html" data-loader="show">Wizard Fullscreen</a></li>
              </ul>
            </li>
            <li>
              <a href="forms.html" data-loader="show"><img src="/img/i8.png" alt="" /> Form Elements</a>
            </li>
            <li>
              <a href="#"><img src="/img/i9.png" alt="" /> Components <span className="fa fa-angle-down" /></a>
              <ul>
                <li><a href="tab-bottom.html" data-loader="show">Tab (Bottom)</a></li>
                <li><a href="tab-top.html" data-loader="show">Tab (Top)</a></li>
                <li><a href="accordion.html" data-loader="show">Accordion</a></li>
                <li><a href="popup.html" data-loader="show">Popup Modal</a></li>
                <li><a href="checkbox-list.html" data-loader="show">Check List</a></li>
                <li><a href="link-list.html" data-loader="show">Link List</a></li>
                <li><a href="link-list-two-column.html" data-loader="show">Two Column Links</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><img src="/img/i10.png" alt="" /> Pages <span className="fa fa-angle-down" /></a>
              <ul>
                <li><a href="profile.html" data-loader="show">User Profile</a></li>
                <li><a href="search-popup.html" data-loader="show">Search Popup</a></li>
                <li><a href="search-result.html" data-loader="show">Search Results</a></li>
                <li><a href="contact.html" data-loader="show">Contact</a></li>
                <li><a href="blank.html" data-loader="show">Blank Page</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export {SideBar}
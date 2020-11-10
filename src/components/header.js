import React from 'react'

function Header () {
  return (
    <header>
      <div className="search-button" data-search="open"><i className="fa fa-search" /></div>
      <h1 className="page-title">MyGroceries2go</h1>
      <div className="navi-menu-button">
        <em />
        <em />
        <em />
      </div>
    </header>
  )
}

export {Header}
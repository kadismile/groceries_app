import React from 'react'

function Search () {
  return (
    <div className="search-form">
      <span className="close-search-form" data-search="close"><i className="fa fa-times" /> </span>
      <form>
        <div className="search-input">
          <input type="text" name="q" className="form-element" placeholder="Search..." />
          <button type="submit" className="search-input-btn"><i className="fa fa-arrow-right" /></button>
        </div>
      </form>
      <div className="recent-search">
        <h4 className="search-group-title">Recent Searchs</h4>
        <a href="#" className="search-tag">Men's cloth</a>
        <a href="#" className="search-tag">Electronics</a>
        <a href="#" className="search-tag">Sports</a>
        <a href="#" className="search-tag">Furniture</a>
        <a href="#" className="search-tag">gamepads</a>
        <a href="#" className="search-tag">corona supplies</a>
        <a href="#" className="search-tag">Food</a>
        <a href="#" className="search-tag">Gloves</a>
      </div>
      <div className="popular-search">
        <h4 className="search-group-title">Popular Searchs</h4>
        <a href="#" className="search-tag">Gloves</a>
        <a href="#" className="search-tag">Alchohle</a>
        <a href="#" className="search-tag">Women’s Dress</a>
        <a href="#" className="search-tag">Grocery</a>
        <a href="#" className="search-tag">Computer</a>
        <a href="#" className="search-tag">Laptops</a>
      </div>
    </div>
  )
}
export {Search}
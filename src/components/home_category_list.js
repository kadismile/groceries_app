import React from 'react'
import {Link} from "react-router-dom";

function HomeCategoryList () {
  return (
    <section className="container">
      <div className="section-head">
        <h4 className="title-main">What Supplies We Provide?</h4>
        <a className="c-btn" href="#">more</a>
      </div>
      <div className="c-wrapper">
        <div className="col-3 text-center mb-15">
          <a href="product-list.html">
            <div className="provide-item blue-bg">
              <img src="/img/icon5.png" alt="" />
              <h4 className="w-text">Groceries</h4>
            </div>
          </a>
        </div>
        <div className="col-3 center-item text-center mb-15">
          <Link to="/category/u3IDfiUVMoAHwM5grC">
            <div className="provide-item blue-bg">
              <img src="/img/drinks.png" alt="" />
              <h4 className="w-text">Drinks</h4>
            </div>
          </Link>
        </div>
        <div className="col-3 text-center mb-15">
          <a href="product-list.html">
            <div className="provide-item blue-bg">
              <img src="/img/icon3.png" alt="" />
              <h4 className="w-text">Sports</h4>
            </div>
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="product-list.html">
            <div className="provide-item blue-bg">
              <img src="/img/icon4.png" alt="" />
              <h4 className="w-text">Furniture</h4>
            </div>
          </a>
        </div>
        <div className="col-3 center-item text-center">
          <a href="product-list.html">
            <div className="provide-item blue-bg">
              <img src="/img/icon1.png" alt="" />
              <h4 className="w-text">Food</h4>
            </div>
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="product-list.html">
            <div className="provide-item blue-bg">
              <img src="/img/icon6.png" alt="" />
              <h4 className="w-text">Grocery</h4>
            </div>
          </a>
        </div>
      </div>

    </section>

  )
}

export {HomeCategoryList}
import React from 'react'
import {HomeCategoryList} from "../components/home_category_list";
import {HomeProductList} from "../components/home_product_list";
import {BestSelling} from "../components/beast_selling";

function Home () {
  return (
    <>
    <main className="margin">
      <section className="container">
        <div className="banner-div">
          <div className="banner-content">
            <h2 className="banner-head">Get All Your Shopping Needs From One Place, With Best Prices</h2>
            <a className="c-btn" href="product-list.html">Shop Now</a>
          </div>
        </div>
      </section>
      <div className="clear" />
      {/*tabs*/}

      <HomeCategoryList />

      {/*end tab*/}
      <div className="clear" />
      <div className="clear" />
      <HomeProductList />
      <div className="clear" />

      <section className="bal-section mt-30 container">
        <div className="ref-card c1">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-grow">
              <div className="mr-auto">
                <h1 className="b-val"> Get 50% Discount! </h1>
                <p className="g-text mb-10">Lorem ipsum dolor sit amet</p>
                <a className="c-btn" href="product-list.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div></section>

      <BestSelling />

      <footer>
        <div className="container">
          <p>Copyright © All Right Reserved</p>
        </div>
      </footer>
    </main>
        <a className="bouble-link white txt-orange" href="product-basket.html"><i className="fa fa-shopping-basket"></i></a>
   </>
  )
}

export {Home}
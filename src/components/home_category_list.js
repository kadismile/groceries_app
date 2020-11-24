import React from 'react'
import {Link} from "react-router-dom";

function HomeCategoryList () {
  return (
    <section className="container">
      <div className="section-head">
        <h4 className="title-main">What Supplies We Provide?</h4>
        {/*<a className="c-btn" href="#">more</a>*/}
      </div>
      <div className="c-wrapper">
        <div className="col-3 text-center mb-15">
          <Link to="/category/MndraxsrwtsFdGa98K">
            <div className="provide-item">
              <img src="/img/groceries.png" alt="" style={{width: "120%"}}/>
            </div>
          </Link>
          <a href="product-list.html">

          </a>
        </div>
        <div className="col-3 center-item text-center mb-15">
          <Link to="/category/SgCBZ8BI3QMzz7WOIV">
            <div className="provide-item">
              <img src="/img/drinks-&-wine.png" alt="" style={{width: "120%"}} />
            </div>
          </Link>
        </div>
        <div className="col-3 text-center mb-15">
          <Link to="/category/FuywtskVFuf748Sagf">
            <div className="provide-item">
              <img src="/img/food-items.png" alt="" style={{width: "120%"}} />
            </div>
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link to="/category/V6ggberWqV7J00rjBK">
            <div className="provide-item">
              <img src="/img/body-care.png" alt="" style={{width: "120%"}} />
            </div>
          </Link>
        </div>
        <div className="col-3 center-item text-center">
          <Link to="/category/V6ggberWqV7J00rjBK">
            <div className="provide-item ">
              <img src="/img/pharmacy.png" alt="" style={{width: "120%"}} />
            </div>
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link to="/category/Hbkrteg443Bahjued7">
            <div className="provide-item ">
              <img src="/img/electronics.png" alt="" style={{width: "120%"}} />
            </div>
          </Link>
        </div>
      </div>

    </section>

  )
}

export {HomeCategoryList}
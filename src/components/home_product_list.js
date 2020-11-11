import React, {useEffect, useState} from 'react'
import {getRandomProducts} from '../utils/auth-client'
import {PageLoader} from "./lib";
import {Link} from "react-router-dom";

function HomeProductList () {
  const [products, setProducts] = useState("")
  const url = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    (async function(){
      setTimeout(async ()=> {
        const {data} = await getRandomProducts()
        let nonDuplicate = new Set(data)
        setProducts([...nonDuplicate])
      }, 1000)
    })()
  }, [])

  return (
    !products.length ? <PageLoader /> :
    <section className="container">
      <div className="section-head">
        <h4 className="title-main">Recent Uploaded Products</h4>
        <a className="c-btn" href="product-list.html">more</a>
      </div>
      <div className="product-two-column">
        {
          products.map((product, index)=> {
            let image = product.productVariantImage ? `${url}/${product.productVariantImage}` : "/img/placeholder-image.png"
            return (
              <div className="product-item v2 mb-15 mr-2" key={index}>
                <Link to={`/product-variant/`+`${product._id}`}>
                  <img className="product-image" alt="" src={image} />
                  <h2 className="product-title">{product.name}</h2>
                  <span className="product-info">
                    <span className="product-price">₦{product.price}</span>
                    <span className="cart-btn"><i className="fa fa-shopping-basket" /></span>
                  </span>
                </Link>
                <i className="add-to-favorite fa fa-heart-o" />
              </div>
            )
          })
        }

        {/*<div className="product-item v2 mb-15 ml-2">
          <a href="product-detail.html" data-loader="show">
            <img className="product-image" alt="" src="/img/p2.jpg" />
            <h2 className="product-title"> Women’s Suit</h2>
            <div className="rating-stars">
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
            </div>
            <span className="product-info">
                  <span className="product-price">$17.90</span>
                  <span className="cart-btn"><i className="fa fa-shopping-basket" /></span>
                </span>
          </a>
        </div>
        <div className="product-item v2 mr-2">
          <a href="product-detail.html" data-loader="show">
            <img className="product-image" src="/img/p3.jpg" alt="" />
            <h2 className="product-title">Men’s Jacket</h2>
            <div className="rating-stars">
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
            </div>
            <span className="product-info">
                  <span className="product-price">$17.90 <span className="old-price">$ 29.90</span></span>
                  <span className="cart-btn"><i className="fa fa-shopping-basket" /></span>
                </span>
          </a>
        </div>
        <div className="product-item v2 ml-2">
          <a href="product-detail.html" data-loader="show">
            <img className="product-image" src="/img/p4.jpg" alt="" />
            <h2 className="product-title">Women’s Dress</h2>
            <div className="rating-stars">
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
              <span className="fa fa-star star" />
            </div>
            <span className="product-info">
                  <span className="product-price">$17.90</span>
                  <span className="cart-btn"><i className="fa fa-shopping-basket" /></span>
                </span>
          </a>
        </div>*/}
      </div>
    </section>
  )
}

export {HomeProductList}
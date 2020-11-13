import React, {useEffect, useState} from 'react'
import {getRandomProducts} from '../utils/auth-client'
import {PageLoader} from "./lib";
import {Link} from "react-router-dom";
import {CartButton} from "./products/cart_button";

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
                  <img className="product-image" alt="" crossOrigin src={image} />
                  <h2 className="product-title">{product.name}</h2>
                  <span className="product-info">
                    <span className="product-price">₦{product.price}</span>
                    <CartButton product={product} />
                  </span>
                </Link>
                <i className="add-to-favorite fa fa-heart-o" />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export {HomeProductList}
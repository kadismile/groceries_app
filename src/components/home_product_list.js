import React, {useEffect, useState} from 'react'
import {getRandomProducts} from '../utils/auth-client'
import {PageLoader} from "./lib";
import {Link} from "react-router-dom";
import {formatTotal} from "../utils/helpers";

function HomeProductList () {
  const [products, setProducts] = useState("")
  const url = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {



    (async function(){
      setTimeout(async ()=> {
        const {data} = await getRandomProducts()
        let nonDuplicate = new Set(data)
        setProducts([...nonDuplicate])
        if (window.$(".slider1")) {
          window.$(".slider1").slick({
            // normal options...
            infinite: false,
            arrows: false,
            autoplay: true,
            // the magic
            responsive: [{
              settings: {
                slidesToShow: 2,
                infinite: true
              }

            }, {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                dots: false
              }
            }, {
              breakpoint: 300,
              settings: "unslick" // destroys slick

            }]
          });
        }
      }, 1000)
    })()
  }, [])

  return (
    !products.length ? <PageLoader /> :
    <section className="container">
      <div className="section-head">
        <h4 className="title-main">Recent Uploaded Products</h4>
        {/*<a className="c-btn" href="product-list.html">more</a>*/}
      </div>
      <div className="product-two-column">
        <hr/>
        <div className="slider1">
        {
          products.map((product, index)=> {
            let image = product.productVariantImage ? `${url}/${product.productVariantImage}` : "/img/placeholder-image.png"
            return (
              <>
              <div key={index}>
                <Link to={`/product-variant/`+`${product._id}`}>
                  <img className="product-image" alt="" crossOrigin src={image} />
                  <h5 className="product-title" style={{textAlign: "center"}}>
                    {product.name} <br/>
                    <span className="item-price">₦{formatTotal(product.price)}</span>
                  </h5>
                </Link>

              </div>
              </>
            )
          })
        }
        </div>
        <hr/>
      </div>
    </section>
  )
}

export {HomeProductList}
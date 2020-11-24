import React, {useEffect, useState} from 'react'
import {getVariants} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";
import {CartButton} from "./cart_button";
import {formatTotal} from "../../utils/helpers";

function ProductVariants (props) {
  console.log("props ", props)
  const url = process.env.REACT_APP_BACKEND_URL
  const productId = props.match.params.product_id
  const [product, setProduct] = useState("")

  useEffect(()=> {
    setProduct([])
    window.$('.search-form').fadeOut('fast');
    ( async ()=> {
      let data = await getVariants(productId)
      setProduct(data.data)
    })()
  }, [productId])

  return (

    product && product.name ?
     <main>
      <section className="container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img alt="" src={`${url}/${product.productImage}`} />
            </div>
          </div>
        </div>
        {/* Add Pagination */}
        <div className="swiper-pagination" />
        <div className="clear" />
        <h1 className="product-view-title txt-green">{product.name}</h1>
        <div className="form-mini-divider" />
        <div className="form-mini-divider" />
        <div className="form-mini-divider" />
        <div className="form-mini-divider" />
        <div className="form-mini-divider mb-0" />
      </section>
      <section className="container">
        <div className="section-head">
          <h4 className="title-main">{product.name} Variants</h4>
        </div>
        <div>
          {
            product.productVariants.map((prVariant)=> {
              return (
              <>
                <div className="news-list-item">
                    <div className="list-image">
                      <img alt="" crossOrigin src={`${url}/${prVariant.productVariantImage}`} width={100} height={100}  />
                    </div>
                    <div className="list-content">
                      <h2 className="list-title max-w-80">
                        <Link to={`/product-variant/`+`${prVariant._id}`}> {prVariant.name} </Link>
                    </h2>
                      <span className="item-price"> ₦{formatTotal(prVariant.price)}</span>
                      <CartButton product={prVariant} />
                    </div>
                  </div>
                <div className="form-mini-divider" />
              </>
              )
            })
          }

        </div>
      </section>
      <footer>
        <div className="container">
          <p>Copyright © My Groceries2go by Struxt</p>
        </div>
      </footer>
    </main> : <PageLoader />
  )
}

export {ProductVariants}
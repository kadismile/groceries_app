import React, {useEffect, useState} from 'react'
import {getVariants} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";

function ProductVariants (props) {
  console.log("props ", props)
  const url = process.env.REACT_APP_BACKEND_URL
  const productId = props.match.params.product_id
  const [product, setProduct] = useState("")

  useEffect(()=> {
    ( async ()=> {
      let data = await getVariants(productId)
      setProduct(data.data)
      console.log("data ____", data )
    })()
  }, 1000)

  return (

    product.productVariants && product.productVariants.length ?
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
                      <img alt="" src={`${url}/${prVariant.productVariantImage}`} width={100} height={100}  />
                    </div>
                    <div className="list-content">
                      <h2 className="list-title max-w-80">
                        <Link to={`/product-variant/`+`${prVariant._id}`}> {prVariant.name} </Link>
                    </h2>
                      <span className="item-price"> ₦{prVariant.price}</span>
                      <a href="product-basket.html" className="add-chart"><i className="fa fa-shopping-cart" /></a>
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
          <p>Copyright © All Right Reserved</p>
        </div>
      </footer>
    </main> : <PageLoader />
  )
}

export {ProductVariants}
import React, {useEffect, useState} from 'react'
import {getProductVariant} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";
import {formatTotal, oldPrice} from "../../utils/helpers";
import {BigCartButton, CartButton} from "./cart_button";

function ProductDetail (props) {
  const url = process.env.REACT_APP_BACKEND_URL
  const variantId = props.match.params.variant_id
  const [product, setProduct] = useState("")
  const [loadingVariants, setLoadingVariants] = useState(true)

  useEffect(()=> {
    setProduct("")
    setTimeout(()=> {
      ( async ()=> {
        let data = await getProductVariant(variantId)
        console.log(data.data)
        setProduct(data.data)
        if(product.length) {
          setLoadingVariants(false)
        }
      })()
    }, 1000)

  }, [props.match.params.variant_id])
  const image = product && product.productVariantImage ? `${url}/${product.productVariantImage}` : "/img/placeholder-image.png"
  return (

    !product ? <PageLoader />  :
      <main>
        <div id="top"></div>
        <section className="container">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img alt="" src={image}  />
              </div>
            </div>
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination" />
          <div className="clear" />
          <h1 className="product-view-title txt-green">{product.name}</h1>
          <h4 className="product-view-price"> ₦ {formatTotal(product.price)} <span className="old-price">₦ {oldPrice(product.price)}</span></h4>
          <div className="form-mini-divider" />
          <div className="form-mini-divider" />
          <div className="form-mini-divider" />
           <CartButton  product={product} bigButton={true} />
          <div className="form-mini-divider" />
          <div className="panel">
            <h3 className="title">Description</h3>
            {product.description}
          </div>
          <div className="form-mini-divider mb-0" />
        </section>
        {product.productVariants.length ?
        <section className="container">
          <div className="section-head">
            <h4 className="title-main">Similar Items You May Like</h4>
          </div>
          <div>
            {
              product.productVariants.map((prVariant)=> {
                const image = prVariant.productVariantImage ? `${url}/${prVariant.productVariantImage}` : "/img/placeholder-image.png"
                return (
                  <>
                    <div className="news-list-item">
                      <div className="list-image">
                        <Link to={`/product-variant/`+`${prVariant._id}`}>
                          <img alt="" crossOrigin src={image} width={100} height={100}  />
                        </Link>
                      </div>
                      <div className="list-content">
                        <h2 className="list-title max-w-80">
                          <Link to={`/product-variant/`+`${prVariant._id}`} id="top"> {prVariant.name} </Link>
                        </h2>
                        <span className="item-price">
                          <Link to={`/product-variant/`+`${prVariant._id}`} id="top">
                            <span style={{color: "black", fontWeight: '400'}}>₦ {formatTotal(prVariant.price)}
                            </span>
                          </Link>

                        </span>
                        <CartButton product={prVariant} />
                      </div>
                    </div>
                    <div className="form-mini-divider" />
                  </>
                )
              })
            }

          </div>
        </section> :
          ""
        }
        <footer>
          <div className="container">
            <p>Copyright © All Right Reserved</p>
          </div>
        </footer>
      </main>
  )
}

export {ProductDetail}
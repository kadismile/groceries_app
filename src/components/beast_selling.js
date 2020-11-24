import React, {useEffect, useState} from 'react'
import {getRandomProducts} from '../utils/auth-client'
import {Link} from "react-router-dom";
import {CartButton} from "./products/cart_button";


function BestSelling () {
  const [products, setProducts] = useState([])
  const url = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    (async function(){
      const {data} = await getRandomProducts()
      let nonDuplicate = new Set(data)
      setProducts([...nonDuplicate])
    })()
  }, [])

  return (
    <section className="container">
      <div className="section-head">
        <h4 className="title-main">Best Selling Items</h4>
       {/* <a className="c-btn" href="#">more</a>*/}
      </div>
      <div>
        {
          products.map((product, index)=> {
            let image = product.productVariantImage ? `${url}/${product.productVariantImage}` : "/img/placeholder-image.png"
            return (
              <>
                <div className="news-list-item">
                  <div className="list-image">
                    <img className="product-image" alt={product.name} crossOrigin src={image} width={100} height={100} />
                  </div>
                  <div className="list-content">
                    <h2 className="list-title max-w-80">
                      <Link to={`/product-variant/`+`${product._id}`}> {product.name} </Link>
                    </h2>
                      <span className="item-price">₦{product.price}</span>
                    <CartButton product={product} />

                  </div>
                </div>
                <div className="form-mini-divider" />
              </>
            )
          })
        }

      </div>
    </section>
  )
}

export {BestSelling}
import React, {useEffect, useState} from 'react'
import {getRandomProducts} from '../utils/auth-client'


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
        <a className="c-btn" href="#">more</a>
      </div>
      <div>
        {
          products.map((product, index)=> {
            let image = product.productVariantImage ? `${url}/${product.productVariantImage}` : "/img/placeholder-image.png"
            return (
              <>
                <div className="news-list-item">
                  <div className="list-image">
                    <img className="product-image" alt={product.name} src={image} width={100} height={100} />
                  </div>
                  <div className="list-content">
                    <h2 className="list-title max-w-80"><a href="product-detail.html"></a> {product.name}</h2>
                    <span className="item-price">₦{product.price}</span>
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
  )
}

export {BestSelling}
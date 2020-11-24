import React, {useEffect, useState} from 'react'
import {getProductTypeById} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";
import {formatTotal} from "../../utils/helpers";

function ProductType (props) {
  const productTypeId = props.productTypeId
  const [products, setProducts] = useState("")
  const url = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    (async function(){
      setTimeout(async ()=> {
        const {data} = await getProductTypeById(productTypeId)
        let nonDuplicate = new Set(data)
        setProducts([...nonDuplicate])
        if (window.$(`.${productTypeId}`)) {
          window.$(`.${productTypeId}`).slick({
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
          <h4 className="title-main">{props.name}</h4>
        </div>
        <div className="product-two-column">
          <hr/>
          <div className={productTypeId}>
            {
              products.map((product, index)=> {
                let image = product.productImage ? `${url}/${product.productImage}` : "/img/placeholder-image.png"
                return (
                  <>
                    <div key={index}>
                      <Link to={`/product/`+`${product._id}`}>
                        <img className="product-image" alt="" crossOrigin src={image} />
                        <h5 className="product-title" style={{textAlign: "center"}}>
                          {product.name}
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

export {ProductType}
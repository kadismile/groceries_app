import React, {useEffect, useState} from 'react'
import {getProductCategory} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";

function ProductCatList (props) {
  const url = process.env.REACT_APP_BACKEND_URL
  const productTypeId = props.match.params.productTypeId
  const [compData, setCompData] = useState("")

  useEffect(()=> {
    ( async () => {
      setTimeout(async ()=> {
          let data = await getProductCategory(productTypeId)
          setCompData(data.data)
      }, 1000)
    })()
  }, [])
  return (
    !compData.length ?  <PageLoader/> :
      <main>
        <section className="container">
          <div className="section-head">
            <h4 className="title-main">{compData[0].productType}</h4>
          </div>
          <div className="product-two-column">
            {compData.map((product, index)=> {
              return(
                <div className="product-item v2 mb-15 mr-2" key={index}>
                  <Link to={`/product/${product.productId}`} state={product} >
                    <img className="product-image" alt="" crossOrigin src={`${url}/${product.productVariantImage}`} />
                    <h2 className="product-title">{product.name}</h2>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
        <div className="clear"/>

      </main>

  )
}

export {ProductCatList}
import React, {useEffect, useState} from 'react'
import {getProductCategory} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";

function ProductCatList (props) {
  const url = process.env.REACT_APP_BACKEND_URL
  const category = props.match.params.category_name
  const [compData, setCompData] = useState("")

  useEffect(()=> {
    ( async () => {
      setTimeout(async ()=> {
          let data = await getProductCategory(category)
          setCompData(data.data)
      }, 1000)
    })()
  }, [])
  return (
    !compData.length ?  <PageLoader/> :
      <main>
        <section className="container">
          <div className="section-head">
            <h4 className="title-main">{compData[0].category}</h4>
          </div>
          <div className="product-two-column">
            {compData.map((product, index)=> {
              return(
                <div className="product-item v2 mb-15 mr-2" key={index}>
                  <Link to={`/product/${product._id}`} state={product} >
                    <img className="product-image" alt="" crossOrigin src={`${url}/${product.productImage}`} />
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
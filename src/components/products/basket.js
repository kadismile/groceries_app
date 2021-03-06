import React, {useEffect, useState} from 'react'
import { useAuth } from "../../context/auth-context";
import _ from 'lodash'
import Swal, {increaseTimer} from 'sweetalert2'
import {formatTotal} from "../../utils/helpers";
import {PageLoader} from "../lib";
import {Link} from "react-router-dom";

function Basket () {
  const {addToCart} = useAuth()
  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  const url = process.env.REACT_APP_BACKEND_URL
  const [loader, setLoader] = useState(true)
  const [cart, setCart] = useState([])

  useEffect(()=> {
    setTimeout(()=> setLoader(false), 1000)
    let storage = localStorage.getItem('cart')
    if (storage) {
      setCart(JSON.parse(storage))
    }
  }, [])

  const deleteProduct = (product) => {
    Swal.fire({
      text: `You will not be able to recover ${product.name} !`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then( async (result) => {
      if (result.value) {
        let j = _.remove(cart, (item) =>{
          return item._id !== product._id
        })
        localStorage.setItem('cart', JSON.stringify(j))
        setCart(j)
        addToCart(j)
      }
    })
  }

  const total = () => {
    if (cart.length) {
      let total = cart.reduce((a, b) => a + (b.count * b.total), 0)
      return " ₦" + formatTotal(total)
    }
  }

  const increaseCount = (product) => {
    cart.forEach((ct) => {
      if (ct._id === product._id) {
        if(ct.count === 20) return
        ct.count += 1
      }
    })
    localStorage.setItem('cart', JSON.stringify(cart))
    addToCart(JSON.stringify(cart))
  }

  const decreaseCount = (product) => {
    cart.forEach((ct) => {
      if (ct._id === product._id) {
        if(ct.count === 1) return
        ct.count -= 1
      }
    })
    localStorage.setItem('cart', JSON.stringify(cart))
    addToCart(JSON.stringify(cart))
  }

  return (
    loader ? <PageLoader /> :
    <main>
      <section className="container">
        {cart.length ? <span style={{fontWeight: "bold"}}>TOTAL:  {total()} </span>  : ""}
        <br/>
        <br/>
        {
          cart.length ?
          cart.map((product, index)=> {
            const image = product && product.productVariantImage ? `${url}/${product.productVariantImage}` : "/img/placeholder-image.png"
            return (
              <>

              <div className="expandable-item accordion" data-group="accordion1" key={index}>
                <div className="expandable-header">
                  <span className="pull-left">
                    <i className="fa fa-trash" onClick={() => deleteProduct(product)} style={{fontSize: "15px", color: "#e26868", marginRight: "5px"}}> </i>
                  </span>
                  <h4 className="list-title">{product.name}</h4>
                  <div className="list-item-extra">
                    ({product.count}) x ₦ {formatTotal(product.price)}
                  </div>
                  <i className="list-arrow fa fa-angle-down" />
                </div>
                <div className="expandable-content">
                <div className="padding-content">
                  <div className="news-list-item">
                    <div className="list-image">
                      <img className="product-image" alt={product.name} crossOrigin src={image} width={100} height={100} />
                    </div>
                    <div className="list-content">
                      <h2 className="list-title max-w-80">
                        <Link to={`/product-variant/`+`${product._id}`}> {product.name} </Link>
                      </h2>
                      <span className="item-price" style={{marginTop: "7px"}}>₦{formatTotal(product.price)}</span>

                      <button onClick={ () => decreaseCount(product) } className="basket-button" style={{width: "40px"}}> - </button>
                      <span> {product.count} </span>
                      <button onClick={ () => increaseCount(product) } className="basket-button" style={{width: "40px"}}> + </button>

                    </div>
                  </div>

                </div>
                </div>

              </div>

              </>
            )
          }) :
            <div className="txt-center">
              <br/>
              <br/>
              <br/>
              <a href="product-list.html">Cart Is Empty </a>
              <br/>
              <br/>
              <br/>
            </div>
        }

        {
          cart.length ?
          <>
            <div className="form-mini-divider" />
            {
              user ? <Link className="button circle block orange" to="/checkout" > <i className="fa fa-shopping-basket" /> checkout </Link> :
                <Link className="button circle block orange" to="/add-user" > <i className="fa fa-map-marker" /> Add Shipping  Address </Link>
            }

            <div className="form-mini-divider" />
            <div className="form-divider" />
            <div className="form-label-divider"><span>OR</span></div>
            <div className="form-divider" />
            <div className="txt-center">
              <Link to="/" > Continue shopping <i className="fa fa-arrow-right" /> </Link>
            </div>
          </> : ""
        }

      </section>
    </main>
  )
}

export {Basket}
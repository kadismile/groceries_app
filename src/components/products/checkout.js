import React, {useEffect, useState} from 'react'
import { useAuth } from "../../context/auth-context";
import {formatTotal} from "../../utils/helpers";
import {PageLoader} from "../lib";
import {Link, Redirect} from "react-router-dom";
import {orderCreate} from "../../utils/auth-client";
import toastr from "toastr";

function Checkout () {
  const {addToCart} = useAuth()
  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  const url = process.env.REACT_APP_BACKEND_URL
  const [loader, setLoader] = useState(true)
  const [success, setSuccess] = useState(false)
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setTimeout(()=> setLoader(false), 1000)
    let storage = localStorage.getItem('cart')
    if (storage) {
      setCart(JSON.parse(storage))
    }
  }, [])


  const total = () => {
    if (cart.length) {
      let total = cart.reduce((a, b) => a + (b.count * b.total), 0)
      return formatTotal(total)
    }
  }

  const handleClick = async () => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    let data = {
      fullName: user.fullName,
      userId: user._id,
      userNumber: user.userNumber,
      shippingAddress: user.address[0],
      orderItems: cart,
      orderTotal: total,
      itemTotal: total,
      paymentStatus: "not-paid",
      isApproved: false,
      shippingStatus: "placed"
    }
    let orderCreation = await orderCreate(data)
    if (orderCreation && orderCreation.status === "success") {
      toastr.success("Success!!");
      setLoading(true)
      localStorage.setItem('cart', [])
      setSuccess(true)
      addToCart(orderCreation)
    } else {
      toastr.error("Failed");
    }

  }

  return (
    loader ? <PageLoader /> :
        !success ?  <main>
          <section className="container" style={{color: "green", fontSize: "14px"}} >
            {cart.length ? <span style={{fontWeight: "bold"}}>TOTAL:  {" ₦" + total()} </span>  : ""}
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
                          <h4 className="list-title" style={{color: "green", fontSize: "14px"}}>{product.name}</h4>
                          <div className="list-item-extra">
                            ({product.count}) x ₦ {formatTotal(product.price)}
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


            <div style={{marginLeft: "10px"}}>
              <div className="form-mini-divider" />
              <div className="form-mini-divider" />
              <div className="form-mini-divider" />
              <div className="form-mini-divider" />
              <span style={{fontWeight: "bold"}}> Address:</span>  <i>{user.address[0].fullAddress} </i> <br/>
              <span style={{fontWeight: "bold"}}> Phone:</span>  <i>{user.phoneNumbers[0]} </i>
              <div className="form-mini-divider" />
              <div className="form-mini-divider" />
              <div className="form-mini-divider" />
              <div className="form-mini-divider" />
            </div>

            <buttom className="button circle block green" onClick={handleClick} > <i className="fa fa-check-square" /> Submit Order </buttom>

          </section>
        </main> :
          <Redirect to="/" />
  )
}

export {Checkout}
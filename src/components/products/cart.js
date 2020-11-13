import React, {useEffect, useState} from 'react'
import { useAuth } from "../../context/auth-context";
import {Link} from "react-router-dom";

function Cart () {
  const { shoppingCart } = useAuth();
  const [cartLength, setCartLength] = useState('')
  useEffect(()=> {
    let cart = localStorage.getItem('cart')
    if (cart) {
      cart = JSON.parse(cart)
      setCartLength(cart.length)
    }
  },[shoppingCart])

  return (
    <Link className="bouble-link white txt-orange" to="/basket" >
        <i className="fa fa-shopping-basket"><span
          style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#2fb18d',
            marginLeft: '3px'}}>{cartLength}</span></i>
    </Link>


  )
}

export {Cart}
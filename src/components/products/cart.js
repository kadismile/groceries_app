import React, {useEffect, useState} from 'react'
import { useAuth } from "../../context/auth-context";

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
    <a className="bouble-link white txt-orange" href="#">
      <i className="fa fa-shopping-basket"><span
        style={{
          fontSize: '12px',
          fontWeight: '700',
          color: '#2fb18d',
          marginLeft: '3px'}}>{cartLength}</span></i>
    </a>
  )
}

export {Cart}
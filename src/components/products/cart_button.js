import React from 'react'
import { useAuth } from "../../context/auth-context";
function CartButton (props) {

  const {addToCart} = useAuth();
  const product = props.product;

  const displayCart = () => {
   let cart = localStorage.getItem('cart')
   if (cart && cart.length) {
     cart = JSON.parse(cart)
     let findProduct = cart.find( v => v._id === product._id)
     console.log(findProduct)
     return !findProduct;
   } else {
     return true;
   }
 }

  const addTocart = () => {
    let cart = localStorage.getItem('cart')
    if (!cart.length) {
      let item = [product]
      item.forEach((item)=> {
        item.count = 1
        item.total = item.count * item.price
      })
      localStorage.setItem('cart', JSON.stringify(item))
      addToCart(item)
    } else {
      cart = JSON.parse(cart)
      let existingProduct = cart.find((data) => data._id === product._id)
      if(existingProduct) return
      let item = [product]
      item.forEach((item)=> {
        item.count = 1
        item.total = item.count * item.price
      })
      let value = JSON.stringify([...cart, ...item ])
      localStorage.setItem('cart', value)
      addToCart(value)
    }
  }

  const {bigButton} = props
  return (
    <>
      {
        !bigButton ?
          //small Button
        !displayCart() ? <span className="cart-btn"  onClick={()=> addTocart() }> <i className="fa fa-check" style={{color: "green"}} /></span> :
          <span className="cart-btn" onClick={()=> addTocart() }> <i className="fa fa-shopping-basket" style={{color: "#af40d9"}} /></span>

          :
          //Big Button
          !displayCart() ?
            <button className="button circle block orange" style={{backgroundColor: "#2eb18d"}} onClick={()=> addTocart() } ><i className="fa fa-check" /> Added to Cart</button> :
            <button className="button circle block orange" onClick={()=> addTocart() } ><i className="fa fa-shopping-basket" /> Add to Cart</button>
      }

    </>
  )
}


export {CartButton}
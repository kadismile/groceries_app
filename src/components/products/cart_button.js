import React, {useState} from 'react'
import { useAuth } from "../../context/auth-context";
function CartButton (props) {
  const [loading, setLoading] = useState(false)
  const {addToCart} = useAuth();
  const product = props.product;

  console.log("product ---", product)

  const displayCart = () => {
    let cart = localStorage.getItem('cart')
    cart = JSON.parse(cart)
    let findProduct = cart.find((v)=> {
      return v._id === product._id
    })
    return !findProduct;
  }
  const addTocart = () => {
    setLoading(true)
    setTimeout(()=> {
      let cart = localStorage.getItem('cart')
      if (!cart.length) {
        localStorage.setItem('cart', JSON.stringify([product]))
      } else {
        cart = JSON.parse(cart)
        let existingProduct = cart.find((data) => data._id === product._id)
        if(existingProduct) return
        let value = JSON.stringify([...cart, product])
        localStorage.setItem('cart', value)
        addToCart(value)
      }
    }, 1500)



  }

  console.log("display ____", displayCart())
  return (
    <>
      {
        displayCart() ? <span className="cart-btn"  onClick={()=> addTocart() }> <i className="fa fa-shopping-basket" style={{color: "green"}} /></span> :
          <span className="cart-btn" onClick={()=> addTocart() }> <i className="fa fa-shopping-basket" /></span>
      }


    </>
  )
}

export {CartButton}
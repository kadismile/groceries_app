import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {getUserOrders} from "../../utils/auth-client";
import {PageLoader} from "../lib";
import {formatTotal} from "../../utils/helpers";
import {Link} from "react-router-dom";


function Orders () {
  const url = process.env.REACT_APP_BACKEND_URL
  const [loader, setLoader] = useState(true)
  const [orders, setOrders] = useState([])

  useEffect(()=> {
    ( async ()=> {
      let user = localStorage.getItem('user')
      if (user){
        user = JSON.parse(user)
      }
      let data = await getUserOrders({userId: user._id})
      if (data.status === "success") {
        setLoader(false)
        setOrders(data.data)
      }

    })()
  }, [])

  const orderTotal = (orderItems) => {
    return orderItems.reduce((a,b) => a + b.price, 0)
  }
  return (
    <>
      {
        loader ? <PageLoader/>
        :
        orders.length ?
        <main>
          <section className="container">
            <div className="form-divider"/>
            <div className="form-label-divider"><span>Orders </span></div>
            <div className="form-divider"/>

            {
              orders.map((order, index ) => { return (
                <div className="expandable-item accordion" data-group="accordion2" key={index}>
                  <div className="expandable-header">
                    <i className="list-icon fa fa-adjust"/>
                    <h3 className="list-title">{moment(order.createdAt).format("DD, MMM, YYYY")}
                        <span style={{float: 'right', fontSize: '12px', marginLeft: '80px'}}>  ₦{formatTotal(orderTotal(order.orderItems))}</span>
                    </h3>
                    <i className="list-arrow fa fa-angle-down"/>
                  </div>
                  <div className="expandable-content">
                    {
                      order.orderItems.map((item, index)=> {
                        const image = item && item.productVariantImage ? `${url}/${item.productVariantImage}` : "/img/placeholder-image.png"
                        return (
                          <div className="padding-content" key={index}>
                            <div className="news-list-item">
                              <div className="list-image">
                                <img className="product-image" alt={item.name} crossOrigin src={image} width={100} height={100} />
                              </div>
                              <div className="list-content">
                                <h2 className="list-title max-w-80">
                                   {item.name}
                                </h2>
                                <span className="" style={{marginTop: "7px"}}>₦{formatTotal(item.price)}</span>

                              </div>
                            </div>

                          </div>
                        )
                      })
                    }

                  </div>
                </div>
              )  })

            }



          </section>
        </main> :
        <main>
          <section className="container">
            <br/>
            <br/>
            <h1 style={{textAlign: "center"}}>No Orders</h1>
          </section>
        </main>
      }
    </>
  )
}

export {Orders}

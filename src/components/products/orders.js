import React, {useEffect, useState} from 'react'
import {getUserOrders} from "../../utils/auth-client";
import {PageLoader} from "../lib";


function Orders () {
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

            <div className="expandable-item accordion" data-group="accordion2">
              <div className="expandable-header">
                <i className="list-icon fa fa-adjust"/>
                <h3 className="list-title">Question one</h3>
                <i className="list-arrow fa fa-angle-down"/>
              </div>
              <div className="expandable-content">
                <div className="padding-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries
                </div>
              </div>
            </div>

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

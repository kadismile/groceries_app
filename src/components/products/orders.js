/*
import React, {useEffect, useState} from 'react'
import {getUserOrders} from "../../utils/auth-client";


function Orders () {
  const [loader, setLoader] = useState(true)
  const [orders, setProduct] = useState(true)

  useEffect(()=> {
    ( async ()=> {
      let user = localStorage.getItem('user')
      if (user){
        user = JSON.parse(user)
      }
      console.log("userId", user)
      let data = await getUserOrders(user._id)
      setProduct(data.data)
    })()
  }, [])
  return (
    <main>
      <section className="container">
        <div className="form-divider" />
        <div className="form-label-divider"><span>ACCORDION (No margin)</span></div>
        <div className="form-divider" />
        {/!*expendable list item *!/}
        <div className="expandable-item accordion" data-group="accordion2">
          <div className="expandable-header">
            <i className="list-icon fa fa-adjust" />
            <h3 className="list-title">Question one</h3>
            <i className="list-arrow fa fa-angle-down" />
          </div>
          <div className="expandable-content">
            <div className="padding-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export {Orders}*/

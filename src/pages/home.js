import React, {useEffect} from 'react'
import {HomeCategoryList} from "../components/home_category_list";
import {HomeProductList} from "../components/home_product_list";
import {BestSelling} from "../components/beast_selling";
import {ProductType} from "../components/products/product-type";

function Home () {

  useEffect(()=> {
    if (window.$(".slider")) {
      window.$(".slider").slick({
        // normal options...
        infinite: false,
        arrows: false,
        autoplay: true,
        // the magic
        responsive: [{

          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }

        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }, {
          breakpoint: 300,
          settings: "unslick" // destroys slick

        }]
      });
    }

  }, [])

  return (
    <>
    <main className="margin">
      <section className="container">
        <div className="banner-div">
            <div className="slider">

              <div className="box">
                <img src="/img/slider1.jpg" alt=""/>
                  <div className="text" style={{right: "216px"}}>
                    <h4 className="title-main" style={{fontSize: "13px"}}>Order Your Groceries From One place with the best prices</h4>
                  </div>
              </div>

             <div className="box">
                <img src="/img/slider2.jpg" alt=""/>
                <div className="text" style={{right: "185px"}}>
                  <h4 className="title-main" style={{fontSize: "13px"}}>Your Liquor At affordable prices</h4>
                </div>
              </div>

              <div className="box">
                <img src="/img/slider4.jpg" alt=""/>
                <div className="text">
                  <h4 className="title-main" style={{fontSize: "13px"}}>Body Care and Cosmetics for u and family</h4>
                </div>
              </div>


            </div>
        </div>
      </section>
      <div className="clear" />
      {/*tabs*/}

      <HomeCategoryList />

      {/*end tab*/}
      <div className="clear" />
      <div className="clear" />

     {/* <HomeProductList />*/}

     <ProductType productTypeId={"MndraxsrwtsFdGa98K"} name={"Groceries"}/>

      <div className="clear" />
      <div className="clear" />

      <ProductType productTypeId={"SgCBZ8BI3QMzz7WOIV"} name={"Drinks and Wine"}/>

      <div className="clear" />
      <div className="clear" />

      <ProductType productTypeId={"V6ggberWqV7J00rjBK"} name={"Body Care & Cosmetics"}/>


      <div className="clear" />
      <div className="clear" />

      <ProductType productTypeId={"Zvterdiqga44GcHg12"} name={"Mother & Child"}/>


      <BestSelling />

      <footer>
        <div className="container">
          <p>Copyright © My Groceries2go by Struxt</p>
        </div>
      </footer>
    </main>

   </>
  )
}

export {Home}
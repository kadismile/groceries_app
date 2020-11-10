import React from 'react'

function ProductDescription () {
  return (
    <main>
      <section className="container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="img/product/p6.jpg" alt="" /></div>
          </div>
        </div>

        <div className="swiper-pagination" />
        <div className="clear" />
        <h1 className="product-view-title txt-green">New Gaming Chair</h1>
        <h4 className="product-view-price">$17.90 <span className="old-price">$24.99</span></h4>
        <div className="form-mini-divider" />
        <div className="form-mini-divider" />
        <div className="form-row-group">
          <div className="form-row no-padding">
            <select className="form-element">
              <option value selected>Quantity</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
        </div>
        <div className="form-mini-divider" />
        <button className="button circle block orange"><i className="fa fa-shopping-basket" /> Add to Cart</button>
        <div className="form-mini-divider" />
        <div className="panel">
          <h3 className="title">Description</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="form-mini-divider mb-0" />
      </section>
      <section className="container">
        <div className="section-head">
          <h4 className="title-main">Similar Items You May Like</h4>
          <a className="c-btn" href="#">more</a>
        </div>
        <div>
          <div className="news-list-item">
            <div className="list-image">
              <img src="img/product/pl1.jpg" alt="" width={100} height={100} />
            </div>
            <div className="list-content">
              <div className="rating-stars v2">
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span>(4.9)</span>
              </div>
              <h2 className="list-title max-w-80"><a href="product-detail.html">Visit Cappadocia Lorem Ipsum Dolar Sit Amet</a></h2>
              <span className="item-price">$50.00 - $70.00</span>
              <a href="product-basket.html" className="add-chart"><i className="fa fa-shopping-cart" /></a>
            </div>
          </div>
          <div className="form-mini-divider" />
          <div className="news-list-item">
            <div className="list-image">
              <img src="img/product/pl2.jpg" alt="" width={100} height={100} />
            </div>
            <div className="list-content">
              <div className="rating-stars v2">
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span>(4.9)</span>
              </div>
              <h2 className="list-title max-w-80"><a href="product-detail.html">Visit Cappadocia Lorem Ipsum Dolar Sit Amet</a></h2>
              <span className="item-price">$50.00 - $70.00</span>
              <a href="product-basket.html" className="add-chart"><i className="fa fa-shopping-cart" /></a>
            </div>
          </div>
          <div className="form-mini-divider" />
          <div className="news-list-item">
            <div className="list-image">
              <img src="img/product/pl3.jpg" alt="" width={100} height={100} />
            </div>
            <div className="list-content">
              <div className="rating-stars v2">
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span>(4.9)</span>
              </div>
              <h2 className="list-title max-w-80"><a href="product-detail.html">Visit Cappadocia Lorem Ipsum Dolar Sit Amet</a></h2>
              <span className="item-price">$50.00 - $70.00</span>
              <a href="product-basket.html" className="add-chart"><i className="fa fa-shopping-cart" /></a>
            </div>
          </div>
          <div className="form-mini-divider" />
          <div className="news-list-item">
            <div className="list-image">
              <img src="img/product/pl4.jpg" alt="" width={100} height={100} />
            </div>
            <div className="list-content">
              <div className="rating-stars v2">
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span className="fa fa-star star" />
                <span>(4.9)</span>
              </div>
              <h2 className="list-title max-w-80"><a href="product-detail.html">Visit Cappadocia Lorem Ipsum Dolar Sit Amet</a></h2>
              <span className="item-price">$50.00 - $70.00</span>
              <a href="product-basket.html" className="add-chart"><i className="fa fa-shopping-cart" /></a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
          </ul>
          <p>Copyright © All Right Reserved</p>
        </div>
      </footer>
    </main>
  )
}

export {ProductDescription}
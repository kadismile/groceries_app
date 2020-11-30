import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {formatTotal} from "../utils/helpers";
import {CartButton} from "./products/cart_button";
import _ from 'lodash'
import {searchProducts} from "../utils/auth-client";
import {PageLoader, SearchLoader} from "./lib";



function Search () {
  const url = process.env.REACT_APP_BACKEND_URL
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState('')

  const handleChange = async (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    if (search.length > 3) {
      setSearchResults([])
      const textSearch = _.debounce( async () => {
        let data = {
          "searchTerm": search,
          "query": {"limit": 10},
          "type": "products"
        }
        let results = await searchProducts(data)
        setSearchResults([])
        setSearchResults(results.data)
      },1000)
      textSearch()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 3)  {
      _.debounce( async () => {
        let data = {
          "searchTerm": search,
          "query": {"limit": 10},
          "type": "productvariants"
        }
        let results = await searchProducts(data)
        setSearchResults(results.data)
      },500)
    }
  }

  return (
    <div className="search-form">
      <span className="close-search-form" data-search="close"><i className="fa fa-times" /> </span>
      <form>
        <div className="search-input">
          <input type="text" name="serach" onChange={(e) => handleChange(e)} className="form-element" placeholder="Search..." />
          {/*<button type="submit" className="search-input-btn"><i className="fa fa-arrow-right" /></button>*/}
        </div>
      </form>
      {/*<div className="popular-search">
        <h4 className="search-group-title">Popular Searchs</h4>
        <a href="#" className="search-tag">Gloves</a>
        <a href="#" className="search-tag">Alchohle</a>
        <a href="#" className="search-tag">Women’s Dress</a>
        <a href="#" className="search-tag">Grocery</a>
        <a href="#" className="search-tag">Computer</a>
        <a href="#" className="search-tag">Laptops</a>
      </div>*/}

      {searchResults.length ?
        <section className="container">
          <div className="section-head">
            <h4 className="title-main">{search} results</h4>
          </div>
          <div>
            {
              searchResults.map((prVariant, index)=> {
                const image = prVariant.productImage ? `${url}/${prVariant.productImage}` : "/img/placeholder-image.png"
                return (
                  <>
                    <div className="news-list-item" key={index}>
                      <div className="list-image">
                        <Link to={`/product/`+`${prVariant._id}`}>
                          <img alt="" crossOrigin src={image} width={100} height={100}  />
                        </Link>
                      </div>
                      <div className="list-content">
                        <h2 className="list-title max-w-80">
                          <Link to={`/product/`+`${prVariant._id}`} id="top"> {prVariant.name} </Link>
                        </h2>
                        <span className="item-price">
                          <Link to={`/product/`+`${prVariant._id}`} id="top"> </Link>
                        </span>
                      </div>
                    </div>
                    <div className="form-mini-divider" />
                  </>
                )
              })
            }

          </div>
        </section> :
        search.length > 2 && !searchResults.length ?
        <SearchLoader/>: ""
      }
    </div>
  )
}
export {Search}
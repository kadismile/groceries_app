import {jsx} from '@emotion/core'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorMessage,} from './components/lib'
import {Home} from './pages/home'
import {NotFoud} from './components/404'
import {Header} from "./components/header";
import {Search} from "./components/search";
import {SideBar} from "./components/sidebar";
import React from "react";
import {ProductCatList} from "./components/products/product_category_list";
import {ProductVariants} from "./components/products/product_variants";
import {ProductDetail} from "./components/products/product_details";
import {ProductDescription} from "./components/product_description";


function ErrorFallback({error}) {
  return (
    <ErrorMessage
      error={error}
      css={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  )
}

function AuthenticatedApp() {
  return (
    <div className="wrapper ">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Route render={props => <SideBar {...props} />} />
          <div className="wrapper-inline">
            <Route render={props => <Header {...props} />} />
            <Route render={props => <Search {...props} />} />
            <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/product/:product_id" exact render={props => <ProductVariants {...props} />} />
            <Route path="/product-variant/:variant_id" exact render={props => <ProductDetail {...props} />} />
            <Route path="/category/:category_name" exact render={props => <ProductCatList {...props} />} />
            <Route path="*" exact render={props => <NotFoud {...props} />} />
          </Switch>
          </div>
        </Router>
        
      </ErrorBoundary>
    </div>
  )
}


export default AuthenticatedApp

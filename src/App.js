import React from 'react'
import {useAuth} from './context/auth-context'
import {FullPageSpinner} from './components/lib'
import {localStorageKey} from "./utils/api-client";
const AuthenticatedApp = React.lazy(() => import('./authenticated-app'),)
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const {user} = useAuth();
  let cart =  window.localStorage.getItem("cart");
  if (!cart) {
    window.localStorage.setItem("cart", []);
  }
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {!user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export {App}
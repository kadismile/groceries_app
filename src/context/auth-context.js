
import {jsx} from '@emotion/core'

import React from 'react'
import {bootstrapAppData} from '../utils/bootstrap'
import * as authClient from '../utils/auth-client'
import {useAsync} from '../utils/use-async'
import {FullPageSpinner, FullPageErrorFallback} from '../components/lib'

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider(props) {
  const {
    data,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync()

  React.useLayoutEffect(() => {
    run(bootstrapAppData())
  }, [run])

  const login = React.useCallback(form => {
    authClient.login(form).then(user => setData({user}))
  }, [setData],);
  
  const register = React.useCallback(
    form => authClient.register(form).then(user => setData({user})),
    [setData],
  );
  
  const logout = React.useCallback(() => {
    authClient.logout();
    setData(null)
  }, [setData]);

  const addToCart = React.useCallback(data => {
    setData({shoppingCart: data})
  }, [setData]);
  

  const user = data?.user;
  const shoppingCart = data?.shoppingCart;
  const value = React.useMemo(() => ({user, login, logout, register, addToCart, shoppingCart}), [
    login,
    logout,
    register,
    addToCart,
    shoppingCart,
    user,
  ])

  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />
  }

  throw new Error(`Unhandled status: ${status}`)
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuth}

import { useAuth } from 'contexts/Auth'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const {
    user: { loggedIn },
  } = useAuth()

  return loggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  )
}

export default ProtectedRoute

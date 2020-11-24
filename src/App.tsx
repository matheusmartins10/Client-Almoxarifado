import React from 'react'

import Global from './styles/Global'
import Route from './routes/index'

import { AuthProvider } from './contexts/auth'

const App = () => {
  return (
    <AuthProvider>
     <Route /> 
     <Global />
    </AuthProvider> 
  )
}

export default App


import React from 'react'
import { AppProvider } from './Context/Context'
import AppRoutes from "./Route"
const App = () => {
  return (
    <AppProvider>

<AppRoutes/>

    </AppProvider>
  )
}

export default App
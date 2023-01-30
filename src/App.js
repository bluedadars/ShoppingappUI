import { ThemeProvider } from '@emotion/react'
import React, { useEffect } from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signin from './Components/Signin'
import ProductList from './Components/ProductList'
import theme from './Components/styles'
const App = () => {

 useEffect(()=>{
  document.title="Shopping App"
 })
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Signin' element={<Signin/>}/>
      <Route path='Signup' element={<Signin/>}/>
 
        </Routes>
    </ThemeProvider>
  )
}

export default App
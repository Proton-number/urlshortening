import { useState } from 'react'
import './App.css'
import Desktop from './Components/Desktop View/Desktop'
import Mobile from './Components/Mobile View/Mobile'
import {createTheme, ThemeProvider } from '@mui/material'


function App() {

  
  const theme = createTheme({
    typography:{
      fontFamily: `'Poppins', sans-serif`,
    }
  })


  return (

   <ThemeProvider theme={theme}>

     <div className="App">
    <Desktop />
    <Mobile />
    </div>

   </ThemeProvider>

  )
}

export default App

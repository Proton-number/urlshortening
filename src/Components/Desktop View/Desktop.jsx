import React from 'react'
import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton , createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import Nav from './DesktopTop/Nav'
import Top from './DesktopTop/Top'
import Middle from './DesktopMiddle/Middle'
import Footer from './DesktopFooter/Footer'


function Desktop() {

    
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
      custom: 881,
    },
  },
});


  return (
   <ThemeProvider theme={theme}>
     <Stack id='desktop-view'>
      <Nav />
      <Top />
      <Middle />
      <Footer />
    </Stack>
   </ThemeProvider>
  )
}

export default Desktop

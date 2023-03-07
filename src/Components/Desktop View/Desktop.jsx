import React from 'react'
import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton , createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import Nav from './DesktopTop/Nav'
import Top from './DesktopTop/Top'
import Middle from './DesktopMiddle/Middle'
import Footer from './DesktopFooter/Footer'
import Boost from './DesktopBoost/Boost'


function Desktop() {

    


  return (
    <Stack spacing={12} id='desktop-view'>
      <Nav />
      <Top />
      <Middle />
      <Boost />
      <Footer />
    </Stack>
  )
}

export default Desktop

import React from 'react'
import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton , createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import Nav from './DesktopTop/Nav'
import Top from './DesktopTop/Top'
import Middle from './DesktopMiddle/Middle'
import Footer from './DesktopFooter/Footer'


function Desktop() {
  return (
    <Stack spacing={12} id='desktop-view'>
      <Nav />
      <Top />
      <Middle />
      <Footer />
    </Stack>
  )
}

export default Desktop

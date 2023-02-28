import React from 'react'
import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton , createTheme, ThemeProvider } from '@mui/material'
import './Desktop.css'
import Nav from './DesktopTop/Nav'
import Top from './DesktopTop/Top'


function Desktop() {
  return (
    <Stack spacing={12} id='desktop-view'>
      <Nav />
      <Top />
    </Stack>
  )
}

export default Desktop

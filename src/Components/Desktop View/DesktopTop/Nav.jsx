import React from 'react'
import { Box, Paper, Typography, Stack, Toolbar ,  createTheme, ThemeProvider, Button } from '@mui/material'
import logo from '/src/images/logo.svg'

function Nav() {
  return (
    <Box>

      <Toolbar>

    <Stack
    direction='row'
    spacing={4}
    sx={{flexGrow:3, alignItems:'center' }} 
    >

      <Box component='img' src={logo} />
    
     <Typography>Features</Typography>

     <Typography>Pricing</Typography>

     <Typography>Resources</Typography>

    </Stack>
     
      <Stack
        direction='row'
        spacing={2}
        sx={{alignItems:'baseline'}} 
      >

      <Typography>Login</Typography>
       <Button style={{textTransform:'none'}} variant='contained' disableElevation>Sign up</Button>

      </Stack>
     


      </Toolbar>
     
    </Box>
  )
}

export default Nav

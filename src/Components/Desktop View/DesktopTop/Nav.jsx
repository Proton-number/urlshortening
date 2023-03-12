import React from 'react'
import { Box, Paper, Typography, Stack, Toolbar ,  createTheme, ThemeProvider, Button } from '@mui/material'
import logo from '/src/images/logo.svg'
import { motion } from 'framer-motion'



function Nav() {

  
  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(179, 100%, 42%)'
        }
    }
})


  return (
    <Box  sx={{
      padding:{
        sm: '30px', //600
        lg: '46px' 
      },
      }}> 

      <Toolbar>

    <Stack
    direction='row'
    spacing={4}
    sx={{flexGrow:1, alignItems:'center' }} 
    >

      <Box component='img' src={logo} />
    
     <Typography component={motion.h1} whileHover={{color:'hsl(179, 100%, 42%)'}} >Features</Typography>

     <Typography component={motion.h1} whileHover={{color:'hsl(179, 100%, 42%)'}}>Pricing</Typography>

     <Typography component={motion.h1} whileHover={{color:'hsl(179, 100%, 42%)'}}>Resources</Typography>

    </Stack>
     
      <Stack
        direction='row'
        spacing={2}
        sx={{alignItems:'baseline'}} 
      >

      <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  >Login</Typography>

      <ThemeProvider theme={theme}>
        
       <Button style={{textTransform:'none', color:'white'}}  variant='contained' disableElevation>Sign up</Button>

      </ThemeProvider>

      </Stack>
     


      </Toolbar>
     
    </Box>
  )
}

export default Nav

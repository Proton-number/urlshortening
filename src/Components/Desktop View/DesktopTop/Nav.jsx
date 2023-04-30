import React, {useState} from 'react'
import { Box, Paper, Typography, Stack, Toolbar ,  createTheme, ThemeProvider, Button, IconButton, Drawer } from '@mui/material'
import logo from '/src/images/logo.svg'
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function Nav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  
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
        sm: '10px', //600
        lg: '46px' 
      },
      }}> 

<Toolbar id='desktopNav'>

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
    
   <Button  component={motion.button}
   whileHover={{scale:1.1}} style={{textTransform:'none', color:'white'}}  variant='contained' disableElevation>Sign up</Button>

  </ThemeProvider>

  </Stack>
 


  </Toolbar>
 
 {/* NAVBAR FOR SCREEN SIZES SMALLER THAN 600PX */}

 <Toolbar id="desktopNav2" >

 <Stack direction='row' sx={{justifyContent:'space-between', alignItems:'baseline'}} >
 <Box component='img' src={logo} sx={{height:'38px'}}  />

<IconButton size='small' edge='start' color='inherit' aria-label='logo' onClick={()=> setisDrawerOpen(true)} >
     <MenuIcon fontSize='large' />
       </IconButton>
 </Stack>


 </Toolbar>

   {/* DRAWER FOR  THE SIDE MENU */}
    
    <Drawer anchor='right' open={isDrawerOpen} onClose={() => setisDrawerOpen(false)} >

      <Box width='300px' textAlign='center' role='presentation'>


    <Stack spacing={6} style={{textTransform:'uppercase', padding:'20px' }}>

    <Typography component={motion.h1} whileHover={{color:'hsl(179, 100%, 42%)'}} >Features</Typography>

<Typography component={motion.h1} whileHover={{color:'hsl(179, 100%, 42%)'}}>Pricing</Typography>

<Typography component={motion.h1} whileHover={{color:'hsl(179, 100%, 42%)'}}>Resources</Typography>


<Stack
    spacing={3}
  >

  <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  >Login</Typography>

  <ThemeProvider theme={theme}>
    
   <Button  component={motion.button}
   whileHover={{scale:1.04}} style={{textTransform:'none', color:'white'}}  variant='contained' disableElevation>Sign up</Button>

  </ThemeProvider>

  </Stack>

    </Stack>


      </Box>

    </Drawer>
      
    </Box>
  )
}

export default Nav

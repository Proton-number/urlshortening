import React from 'react'
import { Box, Paper, Typography, Stack, TextField,  createTheme, ThemeProvider, Button } from '@mui/material'
import illustration from  '/src/images/illustration-working.svg'


function Top() {




  return (
   <Stack spacing={10}>

     <Stack spacing={12} direction='row' sx={{alignItems:'center'}}>
     
     <Stack spacing={2}>

        <Typography variant='h3'>More than just shorter links</Typography>

        <Typography variant='body1' >Build your brand's recognition and get detailed insights on how your links are performing.</Typography>

        <Button 
        style={{textTransform:'none'}} 
        variant='contained' 
        sx={{width:'23%'}} 
        disableElevation
        >
          Get Started
        </Button>

     </Stack>

    
        <Box 
        component='img' 
        src={illustration} 
        sx={{
            width:{
                lg:'600px'
            }
            }} />

    </Stack>

     {/* INPUTFIELDS!!!!!! */}

     <Stack 
     p={3} 
     direction='row' 
     spacing={5} 
     sx={{
      alignItems:'center', 
      justifyContent:'center', 
      backgroundColor:'hsl(260, 27%, 26%)',
      backgroundImage:'url(/src/images/bg-shorten-desktop.svg)',
      backgroundRepeat:'no-repeat',
      borderRadius:'10px',
      backgroundSize:'cover'
      }}
      >

      <TextField 
      label='Shorten a link here...' 
      sx={{
        width:{
          lg: '60%' //1200
      },
      backgroundColor:'white'
      }} />
         
         <Button style={{textTransform:'none'}} variant='contained' disableElevation>Shorten it!</Button>

     </Stack>


   </Stack>
  )
}

export default Top

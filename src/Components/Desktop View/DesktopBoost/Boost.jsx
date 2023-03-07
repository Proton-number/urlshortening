import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'


function Boost() {

     
  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(179, 100%, 42%)'
        }
    }
})


  return (
    <>
         
<Stack
        sx={{
            alignItems:'center',
            backgroundColor:'hsl(260, 27%, 26%)',
             backgroundImage:'url(/src/images/bg-boost-desktop.svg)',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
             padding:'50px',
             marginTop:'34em'
        }}
        spacing={2}
        >

            <Typography variant='h4'>Boost your links today</Typography>

               <ThemeProvider theme={theme}>

               <Button
        style={{textTransform:'none', color:'white'}} 
                variant='contained' 
               >Get Started</Button>

               </ThemeProvider>

        </Stack>  
    </>
  )
}

export default Boost

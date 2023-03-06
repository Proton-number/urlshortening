import React from 'react'
import { Box, Paper, Typography, Stack, TextField,  createTheme, ThemeProvider, Button } from '@mui/material'
import illustration from  '/src/images/illustration-working.svg'


function Top() {

   
  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(179, 100%, 42%)'
        }
    }
})


  return (
   <Stack spacing={10}>

     <Stack  
     spacing={1} 
     direction='row' 
     sx={{
      alignItems:'center',
       justifyContent:'center',
       padding:{
            sm: '50px'
       }
       }}>
     
     <Stack spacing={2} >

        <Typography 
        variant='h1' 
        sx={{
          fontSize:{
            sm:'44px',
            lg:'50px'
          },
          fontWeight:{
            sm: 800
          },
          width:{
            lg: '90%'
          }
        }} 
          >More than just shorter links</Typography>

        <Typography 
        variant='body2'  
        sx={{
          fontSize:{
            sm:'16px',
            lg:'14px'
          },
          fontWeight:{
            sm:600
          },
          width:{
            lg:'70%'
          }
          }}
          >Build your brand's recognition and get detailed insights on how your links are performing.</Typography>

       <ThemeProvider theme={theme}>
       <Button 
        style={{textTransform:'none', color:'white'}} 
        variant='contained' 
        sx={{
          width:{
          sm:'45%', //600
          lg:'17%' //1200
        }}} 
        disableElevation
        >
          Get Started
        </Button>
       </ThemeProvider>

     </Stack>

    
        <Box 
        component='img' 
        src={illustration} 
        sx={{
            width:{
              sm: '340px', //600
              md:'', //900
                lg:'600px'
            }
            }} />

    </Stack>

     {/* INPUTFIELDS!!!!!! */}

     <Stack 
     direction='row' 
     spacing={5} 
     style={{
      margin:'auto',
      marginTop:'40px'
     }}
     sx={{
      alignItems:'center', 
      justifyContent:'center', 
      backgroundColor:'hsl(260, 27%, 26%)',
      backgroundImage:'url(/src/images/bg-shorten-desktop.svg)',
      backgroundRepeat:'no-repeat',
      borderRadius:'10px',
      backgroundSize:'cover',
      padding:{
        sm: '3rem 2rem',
        lg:'3rem 2rem' //1200
      },
      width:{
        sm:'80%',
        lg: '70%' //1200
      },
      }}
      >

      <TextField 
      InputProps={{
        style:{
          borderRadius:'25px'
        }
      }}
      placeholder='Shorten a link here...' 
      sx={{
        width:{
          sm:'80%',
          lg: '60%' //1200
      },
      backgroundColor:'white',
      borderRadius:'25px'
      }} />
         
       <ThemeProvider theme={theme}>
       <Button 
       style={{textTransform:'none', color:'white'}} 
       variant='contained' 
       sx={{
        width:{
             sm:'18%'
       }
      }}
       disableElevation>Shorten it!</Button>
       </ThemeProvider>

     </Stack>


   </Stack>
  )
}

export default Top

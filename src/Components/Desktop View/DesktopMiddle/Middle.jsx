import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import brand from '/src/images/icon-brand-recognition.svg'
import detailed from '/src/images/icon-detailed-records.svg'
import fullyCustomizable from '/src/images/icon-fully-customizable.svg'




function Middle() {

    
  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(179, 100%, 42%)'
        }
    }
})


  return (
   <>

     <Stack spacing={8} >

<Stack sx={{ alignItems:'center'}}>
    <Typography variant='h3'>Advanced Statistics</Typography>

    <Typography 
    variant='body1' 
    sx={{
        textAlign:'center',
         width:{
            sm:'50%', //600
            lg:'' //1200
         }
        }}
    >Track how your links are performing across the web with our advanced statistics dashboard.</Typography>
</Stack>

<Stack 
        direction='row' 
        spacing={4} 
    sx={{
        padding:{
            sm:'40px'
        }
    }}
 >
    <Stack 
    spacing={1} 
    sx={{
        backgroundColor:'hsl(0, 0%, 100%)',
         color:'black',
         padding:{
            sm:'30px'
         }
         }} >

        <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'20%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px'
            }, 
            borderRadius:'80%'
            }}
            >
        <Box 
        component='img' 
        src={brand} 
        sx={{
            marginBottom:'5px',
            width:{
                sm:'25px'
            }
             }}  />
        </Box>


       <Typography variant='h5'>Brand Recognition</Typography>
       <Typography variant='subtitle2' sx={{opacity:'70%'}}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</Typography>

    </Stack>

    <Stack 
    spacing={1} 
     sx={{
        backgroundColor:'hsl(0, 0%, 100%)',
         color:'black',
         padding:{
            sm:'30px'
         }
         }} 
    >
  <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'20%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px'
            }, 
            borderRadius:'80%'
            }}
            >
        <Box 
        component='img' 
        src={detailed} 
        sx={{
            width:{
                sm:'25px'
            }
             }}  />
        </Box>


        <Typography variant='h5'>Detailed Records</Typography>
        <Typography variant='subtitle2' sx={{opacity:'70%'}} >Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Typography>
    </Stack>

    <Stack 
    spacing={1} 
    sx={{
        backgroundColor:'hsl(0, 0%, 100%)',
         color:'black',
         padding:{
            sm:'30px'
         }
         }} 
    >
     <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'20%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px'
            }, 
            borderRadius:'80%'
            }}
            >
        <Box 
        component='img' 
        src={fullyCustomizable} 
        sx={{
            width:{
                sm:'25px'
            }
             }}  />
        </Box>


   

    <Typography variant='h5'>Fully Customizable</Typography>
        <Typography variant='subtitle2' sx={{opacity:'70%'}}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Typography>
    </Stack>

</Stack>

<Stack
        sx={{
            alignItems:'center',
            backgroundColor:'hsl(260, 27%, 26%)',
             backgroundImage:'url(/src/images/bg-boost-desktop.svg)',
             backgroundRepeat:'no-repeat',
             borderRadius:'10px',
             backgroundSize:'cover',
             padding:'50px'
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

</Stack>

      

   </>
  )
}

export default Middle

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

<Stack sx={{ alignItems:'center'}} spacing={2}>
    <Typography variant='h5'>Advanced Statistics</Typography>

    <Typography 
    variant='subtitle2' 
    sx={{
        textAlign:'center',
         width:{
            sm:'50%', //600
            lg:'30%' //1200
         }
        }}
    >Track how your links are performing across the web with our advanced statistics dashboard.</Typography>
</Stack>

<Box sx={{position:'relative'}}>
    


    
<Stack 
        direction='row' 
        spacing={4} 
    sx={{
        padding:{
            sm:'40px'
        },
        position:'absolute',
        zIndex:1
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

<Box 
style={{
    backgroundColor:'hsl(180deg, 66%, 49%)', 
    height:'6px',
     borderRadius:'10px',
     }}
     sx={{
        transform: {
            sm: 'translateY(14em)',
            lg: 'translateY(12em)'
        },
        width:'68%'
     }}
  />

{/* <Box variant='div' style={{height:'4px', backgroundColor:'hsl(180deg, 66%, 49%)', borderRadius:'10px', width:'71%'}} /> */}


</Box>



</Stack>

      

   </>
  )
}

export default Middle

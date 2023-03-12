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

     <Stack>

<Stack sx={{ alignItems:'center'}} spacing={2}>
    <Typography variant='h4'>Advanced Statistics</Typography>

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

<Box >
    


    
<Stack 
        direction='row' 
        spacing={4} 
    sx={{
        padding:{
            sm:'40px',
            lg:'9rem'
        }
    }}
    className='desktop-boxes'
 >



    <Stack 
    spacing={1} 
    sx={{
        backgroundColor:'hsl(0, 0%, 100%)',
         color:'black',
         padding:{
            sm:'30px',
            lg:'2.3rem 1rem 2rem 1.5rem'
         },
         position:'relative',
         borderRadius:'2rem'
         }} >

         
        <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'13%',
                lg:'6.8%',
                custom:'12%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'12px'
            }, 
            borderRadius:'80%',
            position: 'absolute',
            bottom:{
                sm:'290px',
                md:'220px',
                lg:'170px',
                custom:'230px'
            }
            }}
            >
        <Box 
        component='img' 
        src={brand} 
        sx={{
            marginBottom:'5px',
            width:{
                sm:'60%',
                md:'74%',
                lg:'22px',
                custom:'76%'
            },
           
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
            sm:'30px',
            lg:'2.5rem 1rem 2rem 1.5rem'
         },
         position:'relative',
         borderRadius:'2rem',
         transform:{
            sm:'translateY(10%)'
         }
         }} 
    >
  <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'10%',
                lg:'6%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px'
            }, 
            borderRadius:'80%',
            position: 'absolute',
            bottom:{
                sm: '294px',
                md:'230px',
                lg:'170px' ,
                custom:'234px'
            }
            }}
            >
        <Box 
        component='img' 
        src={detailed} 
        sx={{
            width:{
                sm:'82%',
                md:'95%',
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
            sm:'30px',
            lg:'2.6rem 1rem 2rem 1.5rem'
         },
         position:'relative',
         borderRadius:'2rem',
         transform:{
            sm:'translateY(26%)'
         }
         }} 
    >
     <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'10%',
                lg:'6.8%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px'
            }, 
            borderRadius:'80%',
            position: 'absolute',
            bottom:{
                sm:'290px',
                md:'226px',
                lg:'170px',
                custom:'230px'
            }
            }}
            >
        <Box 
        component='img' 
        src={fullyCustomizable} 
        sx={{
            width:{
                sm:'88%', //600
                md:'100%', //1200
            }
             }}  />
        </Box>


   

    <Typography variant='h5'>Fully Customizable</Typography>
        <Typography variant='subtitle2' sx={{opacity:'70%'}}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Typography>
    </Stack>


</Stack>

</Box>



</Stack>

      

   </>
  )
}

export default Middle

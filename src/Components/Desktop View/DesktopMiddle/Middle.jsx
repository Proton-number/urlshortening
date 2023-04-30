import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import brand from '/src/images/icon-brand-recognition.svg'
import detailed from '/src/images/icon-detailed-records.svg'
import fullyCustomizable from '/src/images/icon-fully-customizable.svg'
import { motion } from 'framer-motion'




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

     <Stack spacing={10}>

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
        direction={{sm:'column', custom:'row', md:'row', lg:'row'}} 
        spacing={8} 
    sx={{
        padding:{
            sm:'60px',
            lg:'9rem'
        }
    }}
    className='desktop-boxes'
    id='desktop-boxes'
 >



    <Stack 
    component={motion.div}
    initial={{y:-26}}
    whileInView={{y:0}}
    transition={{delay:.2}}
    spacing={1} 
    sx={{
        backgroundColor:'hsl(0, 0%, 100%)',
         color:'black',
         padding:{
            sm:'25px',
            lg:'2.3rem 1rem 2rem 1.5rem'
         },
         position:'relative',
         borderRadius:'2rem'
         }} >

         
        <Box 
        sx={{
            backgroundColor:'hsl(260, 27%, 26%)', 
            width:{
                sm:'6%',
                lg:'5%',
                custom:'14%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'12px',
                lg:'14px'
            }, 
            borderRadius:'80%',
            position: "inherit",
            bottom:{
                sm:'46px',
                md:'44px',
                lg:'60px',
                custom:'40px'
            }
            }}
            >
        <Box 
        component='img' 
        src={brand} 
        sx={{
            marginBottom:'5px',
            width:{
                sm:'70%',
                md:'74%',
                lg:'12px',
                custom:'62%'
            },
           
             }}  />
        </Box>


       <Typography variant='h5'>Brand Recognition</Typography>
       <Typography variant='subtitle2' sx={{opacity:'70%'}}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</Typography>

    </Stack>

    <Stack 
     component={motion.div}
     initial={{y:40}}
     whileInView={{y:0}}
     transition={{delay:.2}}
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
                sm:'4.6%',
                lg:'4.5%',
                custom:'12%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px',
                // custom:'20px'
            }, 
            borderRadius:'80%',
            position: 'inherit',
            bottom:{
                sm: '46px',
                md:'48px',
                lg:'60px' ,
                custom:'44px'
            }
            }}
            >
        <Box 
        component='img' 
        src={detailed} 
        sx={{
            width:{
                sm:'84%',
                custom:'80%',
                md:'95%',
            }
             }}  />
        </Box>


        <Typography variant='h5'>Detailed Records</Typography>
        <Typography variant='subtitle2' sx={{opacity:'70%'}} >Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Typography>
    </Stack>

    <Stack 
     component={motion.div}
     initial={{y:-10}}
     whileInView={{y:0}}
     transition={{delay:.2}}
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
                sm:'4.6%',
                lg:'4.5%',
                custom:'12%'
            }, 
            display:'flex', 
            justifyContent:'center', 
            padding:{
                sm:'15px'
            }, 
            borderRadius:'80%',
            position: 'inherit',
            bottom:{
                sm:'48px',
                md:'48px',
                lg:'62px',
                custom:'44px'
            }
            }}
            >
        <Box 
        component='img' 
        src={fullyCustomizable} 
        sx={{
            width:{
                sm:'88%', //600
                custom:'80%', //881
                md:'100%', //900
                lg:'120%' //1200
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

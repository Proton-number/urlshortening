import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import logo from '/src/images/logo.svg'
import facebook from '/src/images/icon-facebook.svg'
import instagram from '/src/images/icon-instagram.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import twitter from '/src/images/icon-twitter.svg'
 import bgBoost from '/src/images/bg-boost-desktop.svg'
import { motion } from 'framer-motion'


function Footer() {

     
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
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
             padding:'4rem',
             position:'inherit',
             marginTop:{
                sm:'80px',
                md:'80px'
             }
        }}
        style={{
         backgroundImage:`url(${bgBoost})`
        }}
        spacing={2}
        >

            <Typography variant='h4' sx={{color:'white'}} >Boost your links today</Typography>

               <ThemeProvider theme={theme}>

               <Button
        style={{textTransform:'none', color:'white'}} 
                variant='contained' 
               >Get Started</Button>

               </ThemeProvider>

        </Stack>   


 <Stack 
    direction='row'  
    spacing={{
        sm: 3,
        lg: 40
    }} 
    sx={{
        alignItems:'center',
        padding:{
            sm:4
        },
        backgroundColor:'black',
        color:'white'
    }}
    >

        <Box>
            <Box component='img' src={logo} />
        </Box>

        <Stack 
        direction='row' 
        spacing={{
            sm: 7 ,//600
            md: 12 , //900
            lg: 20 //1200
        }}
        >

            <Stack spacing={1}> 
                <Typography variant='h6'>Features</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}} variant='subtitle2'>Link Shortening</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Branded Links</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Analytics</Typography>
            </Stack>

            <Stack  spacing={1}>
            <Typography variant='h6'>Resources</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Blog</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Developers</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Support</Typography>
            </Stack>
            
            <Stack spacing={1}> 
            <Typography variant='h6'>Company</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>About</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Our Team</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Careers</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle2'>Contact</Typography>
            </Stack>

        </Stack>

        <Stack spacing={2} direction='row'>
        <Box component='img' id='footer-img' src={facebook} sx={{width:'20px', height:'20px', cursor:'pointer'}} />
        <Box component='img' id='footer-img' src={twitter} sx={{width:'20px',height:'20px' ,cursor:'pointer'}}/>
        <Box component='img' id='footer-img' src={pinterest} sx={{width:'20px',height:'20px', cursor:'pointer'}}/>
        <Box component='img' id='footer-img' src={instagram} sx={{width:'20px',height:'20px', cursor:'pointer'}}/>
        </Stack>
      
    </Stack>



   </>
  )
}

export default Footer

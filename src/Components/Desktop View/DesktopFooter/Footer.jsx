import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button, Grid } from '@mui/material'
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
    },
   
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
                component={motion.button}
                whileHover={{scale:1.1}}
        style={{textTransform:'none', color:'white'}} 
                variant='contained' 
               >Get Started</Button>

               </ThemeProvider>

        </Stack>   


<Grid 
     container
     spacing={2}
    direction={{sm:'column'}}  
    sx={{
        padding:{
            sm:4,
            lg: 16
        },
        backgroundColor:'black',
        color:'white'
    }}>



   

   

        <Grid
        container
        direction={{sm:'column', lg:'row'}}
        sx={{
            display:"flex",
            justifyContent:'space-between',
            alignItems:'center'
        }}
        spacing={{
            md: 0 , //900
            lg: 2,
            custom: 0
        }}
        >

<Box>
            <Box 
            component='img' 
            src={logo} 
            sx={{
            width:{
                sm: '120px'
            },
            marginBottom:{
                sm:4,
                lg: 0,
                custom:4
            }
            }} />
        </Box>

            <Stack spacing={{
                sm: 2,
            }} 
            sx={{
                marginBottom:{
                    sm: 4,
                    lg:0,
                    custom:2,
                    
                },
            }}> 
                <Typography variant='h5'>Features</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}} variant='subtitle1'>Link Shortening</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Branded Links</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Analytics</Typography>
            </Stack>

            <Stack  spacing={2} sx={{
                marginBottom:{
                    sm: 4,
                    lg:0,
                    custom: 2
                },
               
            }}>
            <Typography variant='h5'>Resources</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Blog</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Developers</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Support</Typography>
            </Stack>
            
            <Stack spacing={2} sx={{
                marginBottom:{
                    sm: 4,
                    lg: -4.5
                },
                marginRight:{
                  custom:2,
                  md:2
                }
            }}> 
            <Typography variant='h5'>Company</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>About</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Our Team</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Careers</Typography>
                <Typography component={motion.p} whileHover={{color:'hsl(179, 100%, 42%)'}}  variant='subtitle1'>Contact</Typography>
            </Stack>

            <Stack spacing={4} direction='row'>

<Box 
component='img' 
id='footer-img' 
src={facebook} 
sx={{
    width:{
        sm:'30px',
        md:' 30px',
        lg:'30px'
    },
     cursor:'pointer'
    }} />

<Box 
component='img' 
id='footer-img' 
src={twitter} 
sx={{
    width:{
        sm:'34px',
        md:'30px',
        lg:'30px'
    },
    cursor:'pointer'
    }}/>

<Box 
component='img' 
id='footer-img' 
src={pinterest} 
sx={{
    width:{
        sm:'30px',
        md:'30px',
        lg:'30px'
    },
     cursor:'pointer'
     }}/>

<Box 
component='img' 
id='footer-img' 
src={instagram} 
sx={{
    width:{
        sm:'30px',
        md:'30px',
        lg:'30px'
    },
    cursor:'pointer'
    }}/>

</Stack>



        </Grid>

     






</Grid>

   </>
  )
}

export default Footer

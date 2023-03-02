import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import logo from '/src/images/logo.svg'
import facebook from '/src/images/icon-facebook.svg'
import instagram from '/src/images/icon-instagram.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import twitter from '/src/images/icon-twitter.svg'



function Footer() {
  return (
    <Stack direction='row' spacing={30} sx={{alignItems:'center'}}>

        <Box>
            <Box component='img' src={logo} />
        </Box>

        <Stack direction='row' spacing={10}>

            <Stack spacing={1}> 
                <Typography variant='h6'>Features</Typography>
                <Typography variant='subtitle2'>Link Shortening</Typography>
                <Typography variant='subtitle2'>Branded Links</Typography>
                <Typography variant='subtitle2'>Analytics</Typography>
            </Stack>

            <Stack  spacing={1}>
            <Typography variant='h6'>Resources</Typography>
                <Typography variant='subtitle2'>Blog</Typography>
                <Typography variant='subtitle2'>Developers</Typography>
                <Typography variant='subtitle2'>Support</Typography>
            </Stack>
            
            <Stack spacing={1}> 
            <Typography variant='h6'>Company</Typography>
                <Typography variant='subtitle2'>About</Typography>
                <Typography variant='subtitle2'>Our Team</Typography>
                <Typography variant='subtitle2'>Careers</Typography>
                <Typography variant='subtitle2'>Contact</Typography>
            </Stack>

        </Stack>

        <Stack spacing={3} direction='row'>
        <Box component='img' src={facebook} sx={{width:'20px', height:'20px'}} />
        <Box component='img' src={twitter} sx={{width:'20px',height:'20px'}}/>
        <Box component='img' src={pinterest} sx={{width:'20px',height:'20px'}}/>
        <Box component='img' src={instagram} sx={{width:'20px',height:'20px'}}/>
        </Stack>
      
    </Stack>
  )
}

export default Footer

import React from 'react'
import { Box,  Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'

function Middle() {
  return (
   <>

     <Stack spacing={8}>

<Stack sx={{ alignItems:'center'}}>
    <Typography variant='h3'>Advanced Statistics</Typography>

    <Typography variant='body1'>Track how your links are performing across the web with our advanced statistics dashboard.</Typography>
</Stack>

<Stack direction='row' spacing={4}>

    <Box sx={{bgcolor:'hsl(0, 0%, 100%)', color:'black', padding:'20px'}}>
       <Typography variant='h6'>Brand Recognition</Typography>
       <Typography variant='subtitle2'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</Typography>
    </Box>

    <Box sx={{bgcolor:'hsl(0, 0%, 100%)', color:'black', padding:'20px'}}>
        <Typography variant='h6'>Detailed Records</Typography>
        <Typography variant='subtitle2'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Typography>
    </Box>

    <Box sx={{bgcolor:'hsl(0, 0%, 100%)', color:'black', padding:'20px'}}>
    <Typography variant='h6'>Fully Customizable</Typography>
        <Typography variant='subtitle2'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Typography>
    </Box>

</Stack>

<Stack
        sx={{
            alignItems:'center',
            backgroundColor:'hsl(260, 27%, 26%)',
             backgroundImage:'url(/src/images/bg-boost-desktop.svg)',
             backgroundRepeat:'no-repeat',
             borderRadius:'10px',
             backgroundSize:'cover',
             padding:'20px'
        }}
        spacing={2}
        >

            <Typography variant='h4'>Boost your links today</Typography>
                <Button variant='contained'>Get Started</Button>
        </Stack>

</Stack>

      

   </>
  )
}

export default Middle

import React, {useState} from 'react'
import { Box, Paper, Typography, Stack, TextField,  createTheme, ThemeProvider, Button } from '@mui/material'
import illustration from  '/src/images/illustration-working.svg'
import bgShorten from '/src/images/bg-shorten-desktop.svg'
import { motion } from 'framer-motion'


function Top() {
  const [texts, setTexts] = useState([]);
  const [inputValue, setInputValue] = useState('');


   
  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(179, 100%, 42%)'
        }
    }
})

      const shortenHandler = () => {
        if (inputValue !== "") {
          setTexts([...texts, inputValue]);
          setInputValue("");
        }
      }


  return (
   <Stack spacing={10}  >

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
            md:'22px',
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
            md:'80%',
            lg:'70%'
          }
          }}
          >Build your brand's recognition and get detailed insights on how your links are performing.</Typography>

       <ThemeProvider theme={theme}>
       <Button 
       component={motion.button}
       whileHover={{scale:1.1}}
        style={{textTransform:'none', color:'white'}} 
        variant='contained' 
        sx={{
          width:{
          sm:'45%', //600
          md:'30%', //900
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
              md:'330px', //900
                lg:'420px'
            }
            }} />

    </Stack>

     {/* INPUTFIELDS!!!!!! */}

<Box>
<Stack 
     direction='row' 
     spacing={5} 
     style={{
      margin:'auto',
      marginTop:'40px',
      marginBottom:'50px',
      backgroundImage:`url(${bgShorten})`,
     }}
     sx={{
      alignItems:'center', 
      justifyContent:'center', 
      backgroundColor:'hsl(260, 27%, 26%)',
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
      type="url"
     onChange={(e) => setInputValue(e.target.value)} 
     value={inputValue}
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
       component={motion.button}
       whileHover={{scale:1.1}}
       onClick={shortenHandler}
       style={{textTransform:'none', color:'white'}} 
       variant='contained' 
       sx={{
        width:{
             sm:'18%',
             lg:'9.4%'
        }
      }}
       disableElevation>Shorten it!</Button>
       </ThemeProvider>
     </Stack>

 {/* LINKSSSS */}

      
      {texts.map((text, index) => (
        <>
          <Stack 
          key={index}
        spacing={1}
         sx={{
         margin:'auto',
          backgroundColor:'white',
          alignItems:'center', 
          justifyContent:'space-between',
          marginBottom:'40px',
          padding:{
            sm: '10px',
            lg:'15px' //1200
          },
          width:{
            sm:'80%',
            lg: '52%' //1200
          },
        }}
        direction='row'
        >

      <Typography variant='body2'> {text} </Typography>

     <Stack direction='row' spacing={4} sx={{alignItems:'baseline'}} > 
     <Typography variant='body2'>This is the shortened link</Typography>

      <ThemeProvider theme={theme}>
 <Button 
 style={{textTransform:'none', color:'white'}} 
 variant='contained' 
 sx={{
  width:{
       sm:'4%',
       lg:'4%'
 }
}}
 disableElevation>Copy</Button>
 </ThemeProvider>

      </Stack>  
     
     </Stack>
        </>
      ))}
      
</Box>
   


   </Stack>
  )
}

export default Top

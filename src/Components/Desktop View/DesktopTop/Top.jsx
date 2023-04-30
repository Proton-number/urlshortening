import React, {useState, useEffect} from 'react'
import { Box, Paper, Typography, Stack, TextField,  createTheme, ThemeProvider, Button } from '@mui/material'
import illustration from  '/src/images/illustration-working.svg'
import bgShorten from '/src/images/bg-shorten-desktop.svg'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from 'axios'


function Top() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

   
  const theme = createTheme({
    palette:{
        primary:{
            main:'hsl(179, 100%, 42%)'
        }
    }
})

      const shortenHandler = () => {
        if (inputValue !== "") {
          setInputValue("");
          fetchData()
        }
      }

      const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
         setCopied(false)
        }, 1200);
      }

      const fetchData = async () => {
        try{
         const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
         const shortenedText = (res.data.result.full_short_link);
         const newItem = {
          id: Math.random().toString(36).substr(2, 9),
          input: inputValue,
          shortened: shortenedText,
          copy: 'Copy',
          copied:"Copied!"
        };
        setData([...data, newItem]);
        } catch(err){
         console.log(err)
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
              sm: '240px', //600
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
             sm:'24%',
             lg:'9.4%'
        }
      }}
       disableElevation>Shorten it!</Button>
       </ThemeProvider>
     </Stack>

 {/* LINKSSSS */}

      
      {data.map((text) => (
      
          <Stack 
          key={text.id}
        spacing={1}
         sx={{
         margin:'auto',
          backgroundColor:'white',
          alignItems:'baseline', 
          justifyContent:'space-between',
          marginBottom:'40px',
          padding:{
            sm: '10px',
            lg:'15px' //1200
          },
          width:{
            sm:'88%',
            lg: '52%' //1200
          },
        }}
        direction='row'
        >

      <Typography key={`input-${text.id}`} variant='body2'> {text.input} </Typography>

     <Stack direction='row' spacing={4} sx={{alignItems:'baseline'}} > 
     

     <Typography key={`shortened-${text.id}`} variant='body2' style={{color:'hsl(179, 100%, 42%)'}} >{text.shortened}</Typography>

  

      <ThemeProvider theme={theme}>

      <CopyToClipboard   text={text.shortened} >

  <Button 
  key={`copy-${text.id}`}
  onClick={handleCopy}
 style={{textTransform:'none', color:'white'}} 
 variant='contained' 
 sx={{
  width:{
        sm:'34px',    
       lg:'4%'
 },
 padding:{
  sm: '8px'
 }
}}
 disableElevation> {copied ? text.copied: text.copy }  </Button>

  </CopyToClipboard>
 </ThemeProvider>

      </Stack>  
     
     </Stack>
      
      ))}
      
</Box>
   


   </Stack>
  )
}

export default Top

import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Typography, Box } from '@mui/material'
import Menu from '@mui/icons-material/Menu'

//IMPORTAÇÃO DA BIBLIOTECA DE ANIMAÇÃO
import 'animate.css'

export default function Navbar({ activo }) {
  
  const [isOpen, setIsOpen] = useState(false)
  const opened = isOpen == true ? 'auto': '0px'

  function handleOpen(){
    if(isOpen == false){
      setIsOpen(true)
    }else{
      setIsOpen(false)
    }
  }

  return (
    <Box
      sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100vw',
          bgcolor: 'primary.main',
          paddingTop: '20px',
          overflow: 'hidden',
          position: 'relative'
      }}
    >
      <Link to="/">
        <Typography
          sx={{
            textAlign: 'center',
            color: 'quaternary.main',
            width: '100%',
            fontSize: '2.4em',
            fontWeight: 'bold',
            letterSpacing: '1.3px',
          }}
          className='animate__animated animate__backInLeft animate__fast' 
          variant='h1'
          >
            Purple Buy
          </Typography>
        </Link>
        
        <Box
          sx={{
            display:{
              xs: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none'
            },
            position: 'absolute',
            top: '0%',
            right: '5%',
            marginTop: '30px',
            color:'quaternary.main'
          }}
          >
          <Menu
            sx={{
              fontSize: '2.4em',
              cursor: 'pointer',
            }}
            onClick={handleOpen}
            />
        </Box>

        <Box 
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection:{
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row'
            },
            height: {
              xs: opened,
              sm: opened,
              md: 'auto',
              lg: 'auto',
              xl: 'auto',
            },
            marginTop: '20px',
            bgcolor: 'terciary.main',
            overflow: 'hidden',
          }}
        >
          {activo == 'home' ? (
            <Link to="/">
              <Typography
                sx={{ 
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: 'auto',
                    lg: 'auto',
                    xl: 'auto',
                  },
                  textAlign: 'center',
                  color: 'quaternary.main',
                  padding: '10px',
                  paddingLeft: {
                    xs: '0px',
                    sm: '0px',
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginLeft: {
                    xs: '0px',
                    sm: '0px', 
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginRight: {
                    xs: '0px',
                    sm: '0px', 
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginTop: '0px',
                  marginBottom: '0px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: '.2s',
                  fontSize: '1.2em',
                  borderTopWidth: {
                   xs: '1px',
                   sm: '1px',
                   md: '0px',
                   lg: '0px',
                   xl: '0px',
                  },
                  borderTopStyle: 'solid',
                  borderTopColor: 'quartenary.main',
                  borderBottomWidth: {
                   xs: '1px',
                   sm: '1px',
                   md: '0px',
                   lg: '0px',
                   xl: '0px',
                  },
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'quartenary.main',
                  bgcolor: 'secondary.main',
                 }}
                variant='body2'>
                Home
              </Typography>
            </Link>
          ) : (

            <Link to="/">
              <Typography
                sx={{
                  textAlign: 'center',
                  color: 'quaternary.main',
                  padding: '10px',
                  margin: '10px',
                  marginTop: '0px',
                  marginBottom: '0px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: '.2s',
                  fontSize: '1.2em',
                  borderTopWidth: {
                    xs: '1px',
                    sm: '1px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                   },
                   borderTopStyle: 'solid',
                   borderTopColor: 'quartenary.main',
                   borderBottomWidth: {
                    xs: '1px',
                    sm: '1px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                   },
                   borderBottomStyle: 'solid',
                   borderBottomColor: 'quartenary.main',
                }}
                variant='body2'
              >
                Home
              </Typography>
            </Link>
            )}
          {activo == 'about' ? (
            <Link to="/about">
              <Typography
                sx={{ 
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: 'auto',
                    lg: 'auto',
                    xl: 'auto',
                  },
                  textAlign: 'center',
                  color: 'quaternary.main',
                  padding: '10px',
                  paddingLeft: {
                    xs: '0px',
                    sm: '0px',
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginLeft: {
                    xs: '0px',
                    sm: '0px', 
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginRight: {
                    xs: '0px',
                    sm: '0px', 
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginTop: '0px',
                  marginBottom: '0px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: '.2s',
                  fontSize: '1.2em',
                  borderTopWidth: {
                   xs: '1px',
                   sm: '1px',
                   md: '0px',
                   lg: '0px',
                   xl: '0px',
                  },
                  borderTopStyle: 'solid',
                  borderTopColor: 'quartenary.main',
                  borderBottomWidth: {
                   xs: '1px',
                   sm: '1px',
                   md: '0px',
                   lg: '0px',
                   xl: '0px',
                  },
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'quartenary.main',
                  bgcolor: 'secondary.main',
                 }}
                variant='body2'
              >
                Sobre nós
            </Typography>
            </Link>
          ) : (
            <Link to="/about">
              <Typography
                sx={{
                  textAlign: 'center',
                  color: 'quaternary.main',
                  padding: '10px',
                  margin: '10px',
                  marginTop: '0px',
                  marginBottom: '0px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: '.2s',
                  fontSize: '1.2em',
                  borderTopWidth: {
                    xs: '1px',
                    sm: '1px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                   },
                   borderTopStyle: 'solid',
                   borderTopColor: 'quartenary.main',
                   borderBottomWidth: {
                    xs: '1px',
                    sm: '1px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                   },
                   borderBottomStyle: 'solid',
                   borderBottomColor: 'quartenary.main',
                }}
                variant='body2'
              >
                Sobre nós
            </Typography>
            </Link>

          )}

          {activo == 'products' ? (
            <Link to="/products">
              <Typography
              sx={{ 
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: 'auto',
                  lg: 'auto',
                  xl: 'auto',
                },
                textAlign: 'center',
                color: 'quaternary.main',
                padding: '10px',
                paddingLeft: {
                  xs: '0px',
                  sm: '0px',
                  md: '10px',
                  lg: '10px',
                  xl: '10px',
                },
                marginLeft: {
                  xs: '0px',
                  sm: '0px', 
                  md: '10px',
                  lg: '10px',
                  xl: '10px',
                },
                marginRight: {
                  xs: '0px',
                  sm: '0px', 
                  md: '10px',
                  lg: '10px',
                  xl: '10px',
                },
                marginTop: '0px',
                marginBottom: '0px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: '.2s',
                fontSize: '1.2em',
                borderTopWidth: {
                 xs: '1px',
                 sm: '1px',
                 md: '0px',
                 lg: '0px',
                 xl: '0px',
                },
                borderTopStyle: 'solid',
                borderTopColor: 'quartenary.main',
                borderBottomWidth: {
                 xs: '1px',
                 sm: '1px',
                 md: '0px',
                 lg: '0px',
                 xl: '0px',
                },
                borderBottomStyle: 'solid',
                borderBottomColor: 'quartenary.main',
                bgcolor: 'secondary.main',
               }}
              variant='body2'
            >
                Produtos
            </Typography>
            </Link>
          ) : (
            <Link to="/products">
              <Typography
              sx={{
                textAlign: 'center',
                color: 'quaternary.main',
                padding: '10px',
                margin: '10px',
                marginTop: '0px',
                marginBottom: '0px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: '.2s',
                fontSize: '1.2em',
                borderTopWidth: {
                  xs: '1px',
                  sm: '1px',
                  md: '0px',
                  lg: '0px',
                  xl: '0px',
                 },
                 borderTopStyle: 'solid',
                 borderTopColor: 'quartenary.main',
                 borderBottomWidth: {
                  xs: '1px',
                  sm: '1px',
                  md: '0px',
                  lg: '0px',
                  xl: '0px',
                 },
                 borderBottomStyle: 'solid',
                 borderBottomColor: 'quartenary.main',
              }}
              variant='body2'
            >
                Produtos
            </Typography>
            </Link>
          )}

          {activo == 'contact' ? (
              <Link to="/contact">
              <Typography
                sx={{ 
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: 'auto',
                    lg: 'auto',
                    xl: 'auto',
                  },
                  textAlign: 'center',
                  color: 'quaternary.main',
                  padding: '10px',
                  paddingLeft: {
                    xs: '0px',
                    sm: '0px',
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginLeft: {
                    xs: '0px',
                    sm: '0px', 
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginRight: {
                    xs: '0px',
                    sm: '0px', 
                    md: '10px',
                    lg: '10px',
                    xl: '10px',
                  },
                  marginTop: '0px',
                  marginBottom: '0px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: '.2s',
                  fontSize: '1.2em',
                  borderTopWidth: {
                   xs: '1px',
                   sm: '1px',
                   md: '0px',
                   lg: '0px',
                   xl: '0px',
                  },
                  borderTopStyle: 'solid',
                  borderTopColor: 'quartenary.main',
                  borderBottomWidth: {
                   xs: '1px',
                   sm: '1px',
                   md: '0px',
                   lg: '0px',
                   xl: '0px',
                  },
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'quartenary.main',
                  bgcolor: 'secondary.main',
                 }}
                variant='body2'
              >
                Contato
            </Typography>
            </Link>
          ) : (
            <Link to="/contact">
              <Typography 
              sx={{
                textAlign: 'center',
                color: 'quaternary.main',
                padding: '10px',
                margin: '10px',
                marginTop: '0px',
                marginBottom: '0px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: '.2s',
                fontSize: '1.2em',
                borderTopWidth: {
                  xs: '1px',
                  sm: '1px',
                  md: '0px',
                  lg: '0px',
                  xl: '0px',
                 },
                 borderTopStyle: 'solid',
                 borderTopColor: 'quartenary.main',
                 borderBottomWidth: {
                  xs: '1px',
                  sm: '1px',
                  md: '0px',
                  lg: '0px',
                  xl: '0px',
                 },
                 borderBottomStyle: 'solid',
                 borderBottomColor: 'quartenary.main',
              }}
              variant='body2'
            >
                Contato
            </Typography>
            </Link>
          )}

        </Box>
    </Box>
  );
}
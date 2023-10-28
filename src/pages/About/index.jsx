import { Typography, Box } from '@mui/material'

import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'

export default function About(){
    return(
        <Box sx={{
            bgcolor: 'background.default',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            <Navbar activo='about'/>
            <Typography
                sx={{
                    width: '100%',
                    fontSize: '3em',
                    textAlign: 'center',
                    padding: '20px 0px',
                    color: 'quintanary.main',
                }}
                variant='h1'
            >
                Sobre Nós
            </Typography>
            <Box
                sx={{
                    width: '84vw',
                    height: '400px',
                    margin: 'auto',
                    bgcolor: 'rgba(200, 200, 200, 0.5)',
                    borderRadius: '6px',
                    marginBottom: '20px',
                    padding: '10px',
                    boxShadow: '5px 8px 1px rgba(0, 0, 0, 0.365)',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar':{
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb':{
                        bgcolor: 'primary.main',
                    },
                    
                }}
                >
                <Typography
                    sx={{
                        fontSize: '1.4em',
                        lineHeight: '1.8em',
                        textAlign: 'center',
                        color: 'quintanary.main',
                    }}
                    >
                    Somos uma empresa de tecnologia que tem como objetivo democratizar o comércio eletrônico oferecendo a melhor plataforma e os serviços necessários para que pessoas e empresas possam comprar, pagar, vender, enviar, anunciar e gerir seus negócios na Internet.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1.4em',
                        lineHeight: '1.8em',
                        textAlign: 'center',
                        color: 'quintanary.main',
                    }}
                    >
                    Nascemos em 2023, no Brasil, e atualmente, operamos em 18 países. Nosso marketplace –PurpleBuy.com – é o maior da América Latina, reunindo milhões de vendedores e compradores a partir de mais de 60 milhões de ofertas de produtos, automóveis e serviços em tempo real.
                </Typography>
            </Box>
            <Footer />
        </Box>
    )
}
import { Typography, Box } from '@mui/material'

import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import CardContact from '../../components/CardContact'

export default function Contact(){
    return(
        <Box sx={{
            bgcolor: 'background.default',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: {
            
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
            },
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            <Navbar activo="contact" />
            <Typography
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '2.4em',
                    color: 'quintanary.main',
                    padding: '10px 0px'
                }}
                variant='h1'
            >
                Formas de Contato
            </Typography>

            <CardContact card='github' />
            <CardContact card='instagram' />
            <CardContact card='email' />
            <CardContact card='linkedin' />

            <Footer />
        </Box>
    )
}
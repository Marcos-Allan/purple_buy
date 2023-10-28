import { Box, Typography } from '@mui/material'

import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'

export default function Home(){
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
            <Navbar activo="home" />
            <Typography
                sx={{
                    width: '100%',
                    textAlign: 'center',
                }}
                variant='h2'
            >
                Home
            </Typography>
            <Footer />
        </Box>
    )
}
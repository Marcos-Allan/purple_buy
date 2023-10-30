import { Box, Typography } from '@mui/material'

import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import Card from '../../components/Card'

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
                    width: '90%',
                    textAlign: 'left',
                    marginLeft: '20px',
                    fontSize: '2em',
                    color: 'primary.main',
                    marginTop: '15px',
                    textTransform: 'capitalize',
                }}
                variant='h1'
            >
                Top 3
            </Typography>
            <Box
                sx={{
                    maxWidth: '98vw',
                    padding: '1vw',
                    overflowX: {
                        xs: 'hidden',
                        sm: 'hidden',
                        md: 'scroll',
                        lg: 'scroll',
                        xl: 'scroll',
                    },
                    flexWrap: {
                        xs:'wrap',
                        sm:'wrap',
                        md:'nowrap',
                        lg:'nowrap',
                        xl:'nowrap',
                    },
                    justifyContent: {
                        xs:'center',
                        sm:'center',
                        md:'flex-start',
                        lg:'flex-start',
                        xl:'flex-start',
                    },
                    display: 'flex',
                    '&::-webkit-scrollbar':{
                        height: '10px',
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb':{
                        bgcolor: 'terciary.main',
                    },
                }}
            >
                <Card />
                <Card />
                <Card />
            </Box>
            <Typography
                sx={{
                    width: '90%',
                    textAlign: 'left',
                    marginLeft: '20px',
                    fontSize: '2em',
                    color: 'primary.main',
                    marginTop: '15px',
                    textTransform: 'capitalize',
                }}
                variant='h1'
            >
                Novidades
            </Typography>
            <Box
                sx={{
                    maxWidth: '98vw',
                    padding: '1vw',
                    overflowX: {
                        xs: 'hidden',
                        sm: 'hidden',
                        md: 'scroll',
                        lg: 'scroll',
                        xl: 'scroll',
                    },
                    flexWrap: {
                        xs:'wrap',
                        sm:'wrap',
                        md:'nowrap',
                        lg:'nowrap',
                        xl:'nowrap',
                    },
                    justifyContent: {
                        xs:'center',
                        sm:'center',
                        md:'flex-start',
                        lg:'flex-start',
                        xl:'flex-start',
                    },
                    display: 'flex',
                    '&::-webkit-scrollbar':{
                        height: '10px',
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb':{
                        bgcolor: 'terciary.main',
                    },
                }}
            >
                <Card />
                <Card />
                <Card />
            </Box>
            <Typography
                sx={{
                    width: '90%',
                    textAlign: 'left',
                    marginLeft: '20px',
                    fontSize: '2em',
                    color: 'primary.main',
                    marginTop: '15px',
                    textTransform: 'capitalize',
                }}
                variant='h1'
            >
                Mais Comprados
            </Typography>
            <Box
                sx={{
                    maxWidth: '98vw',
                    padding: '1vw',
                    overflowX: {
                        xs: 'hidden',
                        sm: 'hidden',
                        md: 'scroll',
                        lg: 'scroll',
                        xl: 'scroll',
                    },
                    flexWrap: {
                        xs:'wrap',
                        sm:'wrap',
                        md:'nowrap',
                        lg:'nowrap',
                        xl:'nowrap',
                    },
                    justifyContent: {
                        xs:'center',
                        sm:'center',
                        md:'flex-start',
                        lg:'flex-start',
                        xl:'flex-start',
                    },
                    display: 'flex',
                    '&::-webkit-scrollbar':{
                        height: '10px',
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb':{
                        bgcolor: 'terciary.main',
                    },
                }}
            >
                <Card />
                <Card />
                <Card />
            </Box>
            <Footer />
        </Box>
    )
}
import { Box, Typography } from '@mui/material'

import Navbar from "../../components/Navbar"
import Card from '../../components/Card'
import Footer from '../../components/Footer'

export default function Products(){
    return(
        <Box sx={{
            bgcolor: 'background.default',
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            overflowX: 'hidden',
        }}>
            <Navbar activo="products" />
            <Typography
                sx={{
                    width: '90%',
                    textAlign: {
                        xs: 'left',
                        sm: 'left',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    },
                    marginLeft: '20px',
                    fontSize: '2em',
                    color: 'primary.main',
                    marginTop: '15px',
                    textTransform: 'capitalize',
                }}
                variant='h1'
            >
                Mais vendidos
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
                    textAlign: {
                        xs: 'left',
                        sm: 'left',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    },
                    marginLeft: '20px',
                    fontSize: '2em',
                    color: 'primary.main',
                    marginTop: '15px',
                    textTransform: 'capitalize',
                }}
                variant='h1'
            >
                Mais Buscados
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
                    textAlign: {
                        xs: 'left',
                        sm: 'left',
                        md: 'center',
                        lg: 'center',
                        xl: 'center',
                    },
                    marginLeft: '20px',
                    fontSize: '2em',
                    color: 'primary.main',
                    marginTop: '15px',
                    textTransform: 'capitalize',
                }}
                variant='h1'
            >
                Outros
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
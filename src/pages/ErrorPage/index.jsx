import { useRouteError, Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

export default function ErrorPage(){
    const error = useRouteError()

    return(
        <Box sx={{
            bgcolor: 'background.default',
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
            <Typography
                variant="h4"
                sx={{
                    fontSize: '2.1em',
                    fontWeight: 'bold',
                    letterSpacing: '1.4px',
                    textAlign: 'center',
                    lineHeight: '1.4em',
                    marginBottom: '30px',
                }}
                >Erro 404!<br></br> Página não encontrada</Typography>
            <Link to="/purple_buy">
                <Button
                    sx={{
                        padding: '16px 60px',
                        color: '#ffffff',
                        bgcolor: 'secondary.main',
                        letterSpacing: '1.5px',
                        '&:hover':{
                            bgcolor: 'primary.main',
                        },
                    }}
                    variant="contained"
                >
                    Voltar para o inicio
                </Button>
            </Link>
        </Box>
    )
}
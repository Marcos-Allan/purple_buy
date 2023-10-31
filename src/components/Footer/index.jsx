import { Box, Typography, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <Box
            sx={{
                minWidth: '100vw',
                bgcolor: 'primary.main',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}
            >
            <Typography
                sx={{
                    fontSize: '14px',
                    width: '100%',
                    margin: '30px 0px',
                    textAlign: 'center',
                    color: 'quintanary.main',
                }}
                variant='subtitle1'
                >
                    Site criado por Marcos allan Santos Menezes
            </Typography>

            <Typography
                sx={{
                    fontSize: '14px',
                    width: '100%',
                    margin: '30px 0px',
                    textAlign: 'center',
                    color: 'quintanary.main',
                }}
                variant='subtitle1'
            >
                Veja outros projetos Criados Por Mim
                <MuiLink
                    sx={{
                        fontSize: '14px',
                        color: 'quaternary.main',
                        bgcolor: 'secondary.main',
                        padding: '6px',
                        margin: '6px',
                        textDecoration: 'none',
                        '&:hover':{
                            color: 'quaternary.main',
                        }
                    }}
                    target="_blank"
                    href="https://github.com/marcos-allan">
                        Github
                    </MuiLink>

            </Typography>
            
            <Typography
                sx={{
                    fontSize: '14px',
                    width: '100%',
                    margin: '30px 0px',
                    textAlign: 'center',
                    color: 'quintanary.main',
                }}
                variant='subtitle1'
                >
                Entre em contato com Outras
                <Link to="/purple_buy/contact">
                    <Typography
                        sx={{
                            fontSize: '14px',
                            display: 'inline-block',
                            color: 'quaternary.main',
                            bgcolor: 'secondary.main',
                            padding: '6px',
                            margin: '6px',
                            textDecoration: 'none',
                            '&:hover':{
                                color: 'quaternary.main',
                            }
                        }}
                    >   
                        Formas de Contato
                    </Typography>
                </Link>
                
            </Typography>
            <Typography
                sx={{
                    fontSize: '14px',
                    width: '100%',
                    margin: '30px 0px',
                    textAlign: 'center',
                    color: 'quintanary.main',
                }}
                variant='subtitle1'
            >
                Acesse a página de
                <Link to="/purple_buy/error">
                    <Typography
                        sx={{
                            fontSize: '14px',
                            display: 'inline-block',
                            color: 'quaternary.main',
                            bgcolor: 'secondary.main',
                            padding: '6px',
                            margin: '6px',
                            textDecoration: 'none',
                            '&:hover':{
                                color: 'quaternary.main',
                            }
                        }}
                    >   
                        Erro
                    </Typography>
                </Link>

            </Typography>
        
        </Box>
    )
}
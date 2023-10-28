import { Box, Typography } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CardContact({ card }){
    return(
        <Box
            sx={{
                width: {
                    xs: '95%',
                    sm: '95%',
                    md: '47.5%',
                    // lg: '40%',
                    // xl: '40%',
                },
                padding: '10px 0px', 
                borderRadius: '14px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'primary.main',
                margin: '5px 10px',
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center',
                boxShadow: '4px 4px 2px rgba(0, 0, 0, 0.250)',
                transition: '.2s',
                cursor: 'pointer',
                '&:hover':{
                    scale: "1.04",
                }
            }}
        >
            {card == "instagram" && (
                <>
                <InstagramIcon
                    sx={{
                        textAlign: 'left',
                        flex: 1,
                        fontSize: '8em',
                        color:"primary.main",
                    }}
                />
                <Typography
                    sx={{
                        flex: 1,
                        fontSize: '2.3em',
                        textAlign: 'center',
                        color:"primary.main",
                    }}
                    >
                    Instagram
                </Typography>
                </>
            )}
            {card == "github" && (
                <>
                <GitHubIcon
                    sx={{
                        textAlign: 'left',
                        flex: 1,
                        fontSize: '8em',
                        color:"primary.main",
                    }}
                />
                <Typography
                    sx={{
                        flex: 1,
                        fontSize: '2.3em',
                        textAlign: 'center',
                        color:"primary.main",
                    }}
                    >
                    GitHub
                </Typography>
                </>
            )}
            {card == "email" && (
                <>
                <MailIcon
                    sx={{
                        textAlign: 'left',
                        flex: 1,
                        fontSize: '8em',
                        color:"primary.main",
                    }}
                />
                <Typography
                    sx={{
                        flex: 1,
                        fontSize: '2.3em',
                        textAlign: 'center',
                        color:"primary.main",
                    }}
                    >
                    Email
                </Typography>
                </>
            )}
            {card == "linkedin" && (
                <>
                <LinkedInIcon
                    sx={{
                        textAlign: 'left',
                        flex: 1,
                        fontSize: '8em',
                        color:"primary.main",
                    }}
                />
                <Typography
                    sx={{
                        flex: 1,
                        fontSize: '2.3em',
                        textAlign: 'center',
                        color:"primary.main",
                    }}
                    >
                    Linkedin
                </Typography>
                </>
            )}
           
        </Box>
    )
}
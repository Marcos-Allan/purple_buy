import { useState } from 'react'
import { Box, Skeleton, Rating, Button } from '@mui/material'

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Card() {
    
    const [selected, setSelected] = useState(false)
    
    return (
        <Box
            sx={{
                margin: '10px',
                minWidth: '350px',
                borderWidth: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                borderStyle: 'solid',
                borderColor: 'black',
                borderRadius: '6px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.350)',
            }}
        >
            <Skeleton
                variant="rectangular"
                width='100%'
                height={200}
            />
            <Rating
                sx={{
                    position: 'absolute',
                    left: '4%',
                    bottom: '24%',
                }}
                precision={0.5}
                value={4}
                icon={<StarIcon color='primary' />}
                emptyIcon={<StarBorderIcon />}
                readOnly={true}
            />

            <Box
                sx={{
                    padding: '2px',
                    position: 'absolute',
                    bottom: '20%',
                    right: '4%',
                    borderWidth: '0px',
                    cursor: 'pointer',
                    '&:hover': {
                        bgcolor: 'transparent',
                        borderWidth: '0px',
                    }
                }}
                onClick={() => {
                    setSelected(!selected);
                }}
            >
                {selected == true ? (
                    <FavoriteIcon color='terciary' />
                ) : (
                    <FavoriteBorderIcon color='quintanary' />
                )}
            </Box>
            <Button
                sx={{
                    borderRadius: '0px',
                    width: '100%',
                    bgcolor: 'secondary.main',
                    position: 'absolute',
                    bottom: '0%',
                    transition: '.3s',
                    '&:hover': {
                        bgcolor: 'primary.main',
                    }
                }}
                variant="contained">
                comprar
            </Button>
        </Box>
    )
}
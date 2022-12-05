import React from 'react'
import { useState } from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material';



function SetFavourite() {
    let [isFavorite, setFavorite] = useState(true)
    const handleChange = () => {
    return setFavorite(!isFavorite);
  };
  return (
    <IconButton onClick={() => handleChange()} sx={{ ml:2, padding:0}}>{isFavorite ? <FavoriteBorder /> : <Favorite sx={{color:'red'}}/>}</IconButton>   
  )
}

export default SetFavourite
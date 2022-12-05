import { Typography, Button } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import { useState } from 'react'


function ProductAmount() {
    const [state, setState] = useState(0);
    const decrease = () => {
      if (state === 0) return
      setState(state - 1)
    }
    
  return (
    <>
    <Grid container spacing={0} width={'100%'} margin={0} >
        <Grid item xs={4}>
            <Button onClick={decrease} variant='outlined' sx={{marginTop:1, paddingY:1, paddingX:0, minWidth:30, height:30, marginBottom:3, borderColor:'secondary.dark'}}>
                <Typography variant='h6'>-</Typography>
            </Button>
        </Grid>
        <Grid item xs={4}>
            <Typography content={state} variant='h5' textAlign={'center'} sx={{marginTop:1, paddingY:1, paddingX:0, minWidth:30, height:30, marginBottom:3,}}>{state}</Typography>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={() => setState(state + 1)} variant='outlined' sx={{marginTop:1, paddingY:1, paddingX:0, minWidth:30, height:30, marginBottom:3, borderColor:'secondary.dark'}}>
                <Typography variant='h6'>+</Typography>
            </Button>
        </Grid>
    </Grid> 
    </>   
  )
}

export default ProductAmount
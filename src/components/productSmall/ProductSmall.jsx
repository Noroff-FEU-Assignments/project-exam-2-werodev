import styles from './ProductSmall.module.scss'
import { Paper, Typography, Button, IconButton } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import baguette1 from '../../images/baguette1-mini.jpg'
import { FavoriteBorder } from '@mui/icons-material'
import ProductAmount from '../ProductsAmount'
import SetFavourite from '../SetFavourite'


function ProductSmall() {
  return (
    <Grid item xs={3}>
        <Item>
            <Paper elevation={3} rounded sx={{ maxWidth: '292px', borderRadius:'25px'}}>
                <img src={baguette1} alt="baguette" className={styles.img} />
                <Grid container spacing={2} width={'100%'} margin={0} paddingRight={2}>
                    <Grid item xs={9}>
                      <Typography variant='h5' textAlign={'left'}>Baguette grøv 120g med skinke</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <SetFavourite />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='body2' textAlign={'left'}>45 NOK</Typography>
                    </Grid>
                    <Grid item xs={8} paddingRight={4} textAlign={'center'}>
                        <ProductAmount />   
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" sx={{ marginTop:1, padding:1, height:30, marginBottom:3 }}><Typography variant='h6'>add</Typography></Button>
                    </Grid>
                </Grid>
            </Paper>
        </Item>
    </Grid>
  )
}

export default ProductSmall
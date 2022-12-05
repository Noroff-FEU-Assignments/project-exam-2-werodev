import styles from './ProductBig.module.scss'
import { Paper, Typography, Button } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import baguette1 from '../../images/baguette1-medium.jpg'
import ProductAmount from '../ProductsAmount'
import SetFavourite from '../SetFavourite'

function ProductBig() {
  return (
    <Grid item xs={3} paddingTop={'5vh'} flexBasis={'fit-content'}>
        <Item>
            <Paper elevation={3} rounded sx={{ maxWidth: '1200px', maxHeight: '600px', borderRadius:'25px'}}>
                <Grid container spacing={0} width={'100%'} margin={0}>
                    <Grid item xs={12} md={6}>
                        <img src={baguette1} alt="baguette" className={styles.img} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={5} width={'100%'} margin={0} paddingRight={5}>
                            <Grid item xs={10}>
                              <Typography variant='h5' fontSize={'2.5rem'} textAlign={'left'}>Baguette grøv 120g med skinke</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <SetFavourite />
                            </Grid>
                            <Grid item xs={12} height={'350px'}>
                              <Typography variant='body2'textAlign={'left'} paddingTop={5}>Beskrivelse:</Typography>
                              <Typography variant='h5'textAlign={'left'} paddingTop={2} height={'100px'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                              <Typography variant='body2'textAlign={'left'} paddingTop={5}>Allergener:</Typography>                          
                            </Grid>
                            <Grid item xs={5} paddingRight={4} textAlign={'center'}>
                                <ProductAmount />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='body2' textAlign={'left'} sx={{marginTop:1, paddingY:1, paddingX:0, minWidth:30, height:30, marginBottom:3,}}>45 NOK/stk</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" sx={{ marginTop:1, padding:1, height:30, marginBottom:3 }}><Typography variant='h6'>add</Typography></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Item>
    </Grid>
  )
}

export default ProductBig
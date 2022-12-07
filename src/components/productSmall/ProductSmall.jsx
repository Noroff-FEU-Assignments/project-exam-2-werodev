import styles from './ProductSmall.module.scss'
import { API, UPLOADS } from '../../constants/api'
import { Paper, Typography, Button, Container, Box} from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import baguette1 from '../../images/baguette1-mini.jpg'
import ProductAmount from '../ProductsAmount'
import SetFavourite from '../SetFavourite'
import { useState, useEffect } from 'react'



function ProductSmall() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

  useEffect(function () {
    async function fetchData() {
      try {
          const response = await fetch(API)
          const json = await response.json()
          setProducts(json)
          setProducts(json.data)
          console.log(products)
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if (loading) {
    return <Container>Loading...</Container>
  }

  if (error) {
    console.log(error)
    return <Container sx={{paddingTop:50}}>{error}</Container>
    
  }  
    
  return (
    <>
    {products.map((product) => {
     
      return (<Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
        <Item>
            <Paper elevation={3} rounded sx={{ maxWidth: '292px', borderRadius:'25px'}}>

              {product.attributes.image.data.map((img) => { 
                return ( 
                <Box key={img.id} maxHeight='292px'> 
                <img src={UPLOADS + img.attributes.url} alt={img.attributes.alternativeText} className={styles.img} />
                </Box> 
                )})}
                <Grid container spacing={2} width={'100%'} margin={0} paddingRight={2}>
                    <Grid item xs={9}>
                      <Typography variant='h5' textAlign={'left'}>{product.attributes.title}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <SetFavourite />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='body2' textAlign={'left'}>{product.attributes.price} NOK</Typography>
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
    )})}
    </>
  )
}

export default ProductSmall
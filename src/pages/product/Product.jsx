import { Paper, Typography, Button, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import ProductAmount from '../../components/ProductsAmount'
import SetFavourite from '../../components/SetFavourite'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'
import styles from './product.module.scss'
import { APIBASE, UPLOADS } from '../../constants/api'


function Product() {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  let navigate = useNavigate();
  const {id} = useParams();
  console.log(id)
  if (!id) {
    navigate.push("/")
  }

  const url= APIBASE + id + '?populate=*'

  console.log(url)

  useEffect(function () {
      async function fetchData() {
          try {
              const response = await fetch(url)
              if(response.ok) {
                  const json = await response.json()
                  setProduct(json.data)
                  console.log(product)
              } else {
                  setError('An ERROR occured')
              }
          } catch (error) {
              setError(error.toString())
          } finally {
              setLoading(false)
          }
      }
      fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[url])

  if (loading) {
      return <Container sx={{paddingTop:50}}>Loading...</Container>
  }

  if (error) {
      console.log(error)
      return <Container sx={{paddingTop:50}}>{error}</Container>  
  } 

  return (
    <Container className={styles.container} paddingTop={'5vh'} key={product.id}>
    <Grid item xs={3} paddingTop={'5vh'} flexBasis={'fit-content'} >
        <Item>
            <Paper elevation={3} rounded sx={{ maxWidth: '1200px', borderRadius:'25px'}}>
                <Grid container spacing={0} width={'100%'} margin={0}>
                    <Grid item xs={12} md={6}>
                        {product.attributes.image.data.map((img) => { 
                        return ( 
                            <Box key={img.id} > 
                            <img src={UPLOADS + img.attributes.url} alt={img.attributes.alternativeText} className={styles.img}/>
                            </Box> 
                            )})}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={5} width={'100%'} margin={0} paddingRight={5}>
                            <Grid item xs={10}>
                              <Typography variant='h5' fontSize={'2.5rem'} textAlign={'left'}>{product.attributes.title}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <SetFavourite />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant='body2'textAlign={'left'} paddingTop={'2vh'}>Beskrivelse:</Typography>
                              <Typography variant='h5'textAlign={'left'} paddingTop={'3vh'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                              <Typography variant='body2'textAlign={'left'} paddingTop={'3vh'}>Allergener:</Typography>
                              <Grid container spacing={0} paddingTop={'2vh'}> 
                             {product.attributes.allergens.data.map((allergen) => { 
                              return ( 
                                      <Grid item xs={3} key={allergen.id}>
                                      <img src={UPLOADS + allergen.attributes.url} alt={allergen.attributes.alternativeText} className={styles.img2}/>
                                      </Grid> 
                              )})} 
                              </Grid>                     
                            </Grid>
                            <Grid item xs={5} paddingRight={4} textAlign={'center'}>
                                <ProductAmount />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='body2' textAlign={'left'} sx={{marginTop:1, paddingY:1, paddingX:0, minWidth:30, height:30, marginBottom:3,}}>{product.attributes.price} NOK</Typography>
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
    </Container>
  )
}

export default Product
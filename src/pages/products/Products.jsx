import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import styles from './products.module.scss';
import ProductSmall from '../../components/productSmall/ProductSmall';
import HeadingB from '../../components/HeadingB';

function Products() {
  return (
    <Container className={styles.container}>
        <HeadingB content="møtemat" />
        <Grid container spacing={8} paddingTop={'5vh'}>
            <ProductSmall />
        </Grid>
    </Container>
  )
}

export default Products
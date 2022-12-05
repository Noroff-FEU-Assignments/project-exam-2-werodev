import { Container } from '@mui/material'
import React from 'react'
import styles from './product.module.scss';
import ProductBig from '../../components/productBig/ProductBig';

function Product() {
  return (
    <Container className={styles.container} paddingTop={'5vh'}>
        <ProductBig />
    </Container>
  )
}

export default Product
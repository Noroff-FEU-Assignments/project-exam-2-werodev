import { Button, Typography, Grid, Container } from '@mui/material'
import React from 'react'
import HeadingA from '../../components/HeadingA'
import HeadingB from '../../components/HeadingB'
import styles from './home.module.scss'
import Item from '@mui/material/Grid'
import lussikatter from '../../images/lussikatter-big.jpg'


function Home() {
    return (
        <Container className={styles.container}>
            <Grid container spacing={1} px={{xs:5, md:15}}>
                <Grid item xs={12} sm={12} md={8}>
                    <Item><img src={lussikatter} alt="lussikatter" /></Item>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Item sx={{paddingLeft:10,}}>
                        <HeadingA content="13th" />
                        <HeadingB content="December" />
                        <Typography variant="body1" sx={{ paddingTop:10,}}>Would you like to celebrate Luciadagen with your colleagues? We'll be happy to make your day tastier, order lussikatter before 06.12.</Typography>
                        <Button variant="contained" sx={{ marginTop:5,}}>bestill her</Button>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
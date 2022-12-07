import { Container, Typography, Link, Grid } from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './cookies.module.scss'


function Cookies() {
    return (
        <Container className={styles.container}>
            <Grid container>
                <Grid item xs={1} md={2} xl={3}></Grid>
                <Grid item xs={10} md={8} xl={6}>
                    <HeadingB content="bruk av cookies" />
                    <Typography variant="h3">Working on it</Typography>
                    <Typography variant="body1" className={styles.body1}>
                        <Link href="https://www.datatilsynet.no/om-datatilsynet/datatilsynets-cookie-erklaring/" color="inherit">https://www.datatilsynet.no/om-datatilsynet/datatilsynets-cookie-erklaring/</Link>
                    </Typography>  
                </Grid>    
                <Grid item xs={1} md={2} xl={3}></Grid>
            </Grid>
        </Container>
    )
}

export default Cookies
import { Container, Typography, Link, Grid } from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './personopplysinger.module.scss'

function Personopplysinger() {
    return (
        <Container className={styles.container} sx={{ maxWidth:'100%' }} maxWidth={false}>
                <Grid container>
                <Grid item xs={1} md={2} xl={3}></Grid>
                <Grid item xs={10} md={8} xl={6}>    
                    <HeadingB content="behandling av personopplysinger" />
                    <Typography variant="h3">Working on it</Typography>
                    <Typography variant="body1" className={styles.body1}>
                        <Link href="https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/" color="inherit">https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/</Link>
                    </Typography>
                </Grid>    
                <Grid item xs={1} md={2} xl={3}></Grid>
            </Grid>  
        </Container>
    )
}

export default Personopplysinger
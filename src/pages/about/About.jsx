import { Container, Typography, Grid} from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './about.module.scss'

function About() {
    return (
        <Container className={styles.container} sx={{ paddingLeft:'20vw', paddingRight:'20vw'}}>
            <Grid container>
                <Grid item xs={1} md={2} xl={3}></Grid>
                <Grid item xs={10} md={8} xl={6}>
                    <HeadingB content="om oss" />
                    <Typography variant="h3">Om RSV Gruppen AS Divisjon Kantine</Typography>
                    <Typography variant="body1" className={styles.body1}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    </Typography>  
                    <Typography variant="h3">Om RSV Gruppen AS Divisjon Kantine</Typography>
                    <Typography variant="body1" className={styles.body1}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    </Typography> 
                    <Typography variant="h3">Om RSV Gruppen AS Divisjon Kantine</Typography>
                    <Typography variant="body1" className={styles.body1}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    </Typography> 
                </Grid>    
                <Grid item xs={1} md={2} xl={3}></Grid>
            </Grid>
        </Container>
    )
}

export default About
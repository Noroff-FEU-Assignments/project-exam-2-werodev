import { Container, Typography} from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './about.module.scss';

function About() {
    return (
        <Container className={styles.container}>
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
        </Container>
    )
}

export default About
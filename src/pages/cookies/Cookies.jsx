import { Container, Typography, Link } from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './cookies.module.scss';

function Cookies() {
    return (
        <Container className={styles.container}>
            <HeadingB content="bruk av cookies" />
            <Typography variant="h3">Working on it</Typography>
            <Typography variant="body1" className={styles.body1}>
                <Link href="https://www.datatilsynet.no/om-datatilsynet/datatilsynets-cookie-erklaring/" color="inherit">https://www.datatilsynet.no/om-datatilsynet/datatilsynets-cookie-erklaring/</Link></Typography>  
        </Container>
    )
}

export default Cookies
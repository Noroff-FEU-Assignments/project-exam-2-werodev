import { Container, Typography, Link } from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './personopplysinger.module.scss';

function Personopplysinger() {
    return (
        <Container className={styles.container} sx={{ maxWidth:'100%' }} maxWidth={false}>
            <HeadingB content="behandling av personopplysinger" />
            <Typography variant="h3">Working on it</Typography>
            <Typography variant="body1" className={styles.body1}>
                <Link href="https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/" color="inherit">https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/</Link>
            </Typography>  
        </Container>
    )
}

export default Personopplysinger
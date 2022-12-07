import { Container, Grid, Typography} from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './contact.module.scss'
import ContactForm from '../../components/ContactForm'


function Contact() {
    return (
        <Container className={styles.container}>
            <Grid container>
                <Grid item xs={1} md={2} xl={3}></Grid>
                <Grid item xs={10} md={8} xl={6}>
                    <HeadingB content="kontakt" />
                    <Typography variant="h3" paddingBottom={'5vh'}>Har du spørsmål eller trenger hjelp? Du kan ringe oss på (+47) 999 55 99. Hvis du ikke trenger raskt svar kan du fylle ut skjemaet under og vi kontakter deg innen 2 arbeidsdager. Vi er åpen mandag-fredag: kl 08:00-16:00</Typography>
                    <ContactForm /> 
                </Grid>    
                <Grid item xs={1} md={2} xl={3}></Grid>
            </Grid>
        </Container>
    )
}

export default Contact
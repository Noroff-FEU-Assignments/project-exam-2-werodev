import { Container, Grid, Typography} from '@mui/material'
import React from 'react'
import HeadingB from '../../components/HeadingB'
import styles from './login.module.scss'
import LoginForm from '../../components/LoginForm'

function Login() {
    return (
        <Container className={styles.container}>
            <Grid container>
                <Grid item xs={1} md={2} xl={3}></Grid>
                <Grid item xs={10} md={8} xl={6}>
                    <HeadingB content="Login" />
                    <Typography variant="h3" paddingBottom={'5vh'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <LoginForm /> 
                </Grid>    
                <Grid item xs={1} md={2} xl={3}></Grid>
            </Grid>
        </Container>
    )
}

export default Login
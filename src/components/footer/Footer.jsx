import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styles from './Footer.module.scss';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import logo_RsV from '../../images/logo_RsV.png'

function Copyright() {
    return (
        <Typography variant="h4" color="text.secondary">
            {'©'}{' '}
            {new Date().getFullYear()}{' '}
            <Link color="inherit" href="" sx={{ textDecoration: 'none'}}>
                Weronika Derkowska
            </Link>
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Grid container spacing={3} margin={0} className={styles.footer} sx={{position: "fixed", bottom: 0}}>
            <Grid item xs={12} md={3} className={styles.grid}>
                <Box>
                    <Item>
                        <Link href="https://rsvgruppen.no/"><img src={logo_RsV} alt='logo RsV Gruppen AS' className={styles.logo}></img></Link>
                    </Item>
                </Box>    
            </Grid>
            <Grid item xs={12} sm={6} md={2} className={styles.grid}>
                <Box>
                    <Item >
                        <Link href="/about" variant='h4' underline="none" color="inherit">Om Oss</Link>
                    </Item>
                    <Item>
                        <Link href="/contact" variant='h4' underline="none" color="inherit">Kontakt</Link>
                    </Item>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2} className={styles.grid}>
                <Box>
                    <Item>
                        <Link href="/personopplysinger" variant='h4' underline="none" color="inherit">Behandling av Personopplysinger</Link>
                    </Item>
                    <Item>
                        <Link href="/cookies" variant='h4' underline="none" color="inherit">Bruk av Cookies</Link>
                    </Item>
                </Box>
            </Grid>
            <Grid item xs={12} md={2} className={styles.grid}>
                <Box>
                    <Item className={styles.item}>
                        <Link href="/personopplysinger" variant='h4' underline="none" color="inherit">Behandling av Personopplysinger</Link>
                    </Item>
                    <Item>
                        <Link href="/cookies" variant='h4' underline="none" color="inherit">Bruk av Cookies</Link>
                    </Item>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} className={styles.grid}>
                <Box>
                    <Item>
                        <Copyright />
                    </Item>
                </Box>    
            </Grid>
        </Grid>
    );
}
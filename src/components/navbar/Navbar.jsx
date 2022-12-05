import * as React from 'react'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import logo from '../../images/logo.png'

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <>  
        <Grid container spacing={3} margin={0} padding={0} className={styles.navbar}>
            <Grid item xs>
                <Item><Link to="/"><img src={logo} alt='logo møte-mat' className={styles.logo}></img></Link></Item>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10}}>
                    <Tooltip title="User">
                        <IconButton sx={{ ml: 2 }}><PersonOutlineIcon /></IconButton>
                    </Tooltip>
                    <IconButton sx={{ ml: 2 }}><ShoppingCartOutlinedIcon /></IconButton>
                    <Tooltip title="Menu">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                
                <Menu 
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        borderRadius: 50,
                        backgroundColor: '#fdb833',
                        width: 200,
                        height: 200,
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        '& .MuiAvatar-root': {
                        width: 200,
                        height: 200,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Container className={styles.submenu} >
                        <MenuItem sx={{ width:'200px', justifyContent:'center'}}>
                        <Link to='/products' className={styles.submenuLink}><Typography variant='body2'>møtemat</Typography></Link>
                        </MenuItem>
                        <MenuItem sx={{ width:'200px', justifyContent:'center'}}>
                        <Link to='/product' className={styles.submenuLink}><Typography variant='body2' align='center'>gjestelunsj</Typography></Link>
                        </MenuItem>
                        <MenuItem sx={{ width:'200px', justifyContent:'center'}}>
                        <Link to='/about' className={styles.submenuLink}><Typography variant='body2' align='center'>om oss</Typography></Link>
                        </MenuItem>
                        <MenuItem sx={{ width:'200px', justifyContent:'center'}}>
                        <Link to='/contact' className={styles.submenuLink}><Typography variant='body2' align='center'>kontakt</Typography></Link>
                        </MenuItem>   
                    </Container>  
                </Menu>  
            </Grid>
        </Grid>
    </>
  );
}
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            light: '#fdc55b',
            main: '#fdb833',
            dark: '#b18023',
            contrastText: '#000',
        },
        secondary: {
            light: '#fcfcfc',
            main: '#f2f2f2',
            dark: '#707070',
            contrastText: '#fff',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1400,
            xl: 1536,
            xxl: 2000
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: 32,
                    textTransform: 'lowercase',
                    paddingInline: 30,
                    boxShadow: 3,
                    marginTop: 20,
                }, 
            },
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    
                }
            }
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h1",
                    },
                    style: {     
                        fontSize: 200,
                        fontFamily: '"Taviraj", serif',
                        lineHeight: 0.6,
                        paddingTop: 100,
                    }
                },
                {
                    props: {
                        variant: "h2",
                    },
                    style: {     
                        fontSize: 80,
                        fontFamily: '"Quicksand", sans-serif',
                    }
                },
                {
                    props: {
                        variant: "h3",
                    },
                    style: {     
                        fontSize: 32,
                        fontFamily: '"Taviraj", serif',
                    }
                },
                {
                    props: {
                        variant: "h4",
                    },
                    style: {     
                        fontSize: 22,
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 500,
                        color: '#090909',
                        textDecoration: 'none',
                    }
                },
                {
                    props: {
                        variant: "body1",
                    },
                    style: {     
                        fontSize: 28    ,
                        fontFamily: '"Nunito Sans", sans-serif',
                    }
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {     
                        fontSize: 20    ,
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontWeight: 600,
                        textAlign: 'center',
                        lineHeight: 1
                    }
                },
            ]
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "#FDB833"
                      }
                }
            }
        },  
             
    },    
});

export default theme;

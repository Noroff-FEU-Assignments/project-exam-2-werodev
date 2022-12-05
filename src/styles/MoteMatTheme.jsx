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
        text: {
            main: '#090909',
        }
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
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '100vw',
                    minWidth: '100vw'
                }, 
                maxWidthLg: {
                    marginRight: '0vw',
                    marginLeft: '0vw',
                    marginTop: '0vh',
                    marginBottom: '0vh',
                }, 
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    flexBasis:'fit-content',
                    WebkitFlexBasis:'fit-content',
                },
                "spacing-xs-3": {
                    marginRight: '0vw',
                    marginLeft: '0vw',
                    marginTop: '0vh',
                    marginBottom: '0vh',
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
                        fontSize: '12.5rem',
                        fontFamily: '"Taviraj", serif',
                        lineHeight: 0.6,
                        paddingTop: 100,
                    },
                },
                {
                    props: {
                        variant: "h2",
                    },
                    style: {     
                        fontSize: '5rem',
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: '300',
                    }
                },
                {
                    props: {
                        variant: "h3",
                    },
                    style: {     
                        fontSize: '2rem',
                        fontFamily: '"Taviraj", serif',
                    }
                },
                {
                    props: {
                        variant: "h4",
                    },
                    style: {     
                        fontSize: '1.375rem',
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 500,
                        color: '#090909',
                        textDecoration: 'none',
                    }
                },
                {
                    props: {
                        variant: "h5",
                    },
                    style: {     
                        fontSize: '1.25rem'    ,
                            fontFamily: '"Nunito Sans", sans-serif',
                            fontWeight: 300,
                            textAlign: 'center',
                            lineHeight: 1
                    },
                },
                {
                    props: {
                        variant: "h6",
                    },
                    style: {     
                        fontSize: '1.25rem',
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 400,
                        color: '#090909',
                        textDecoration: 'none',
                    }
                },
                {
                    props: {
                        variant: "body1",
                    },
                    style: {     
                        fontSize: '1.75rem',
                        fontFamily: '"Nunito Sans", sans-serif',
                    }
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {     
                        fontSize: '1.25rem'    ,
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

theme.typography.h1 = {
    fontSize: '6rem',
    '@media (min-width:300px)': {
      fontSize: '7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12.5rem',
    },
  };

  theme.typography.h2 = {
    fontSize: '2.5rem',
    '@media (min-width:300px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '0.7rem',
    '@media (min-width:300px)': {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.375rem',
    },
  };

export default theme;

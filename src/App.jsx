
import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import theme from './styles/MoteMatTheme'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar'
import Routing from './components/Routing'

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={theme}> 
                <CssBaseline />
                    <Navbar />
                        <Routing />
                    <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;

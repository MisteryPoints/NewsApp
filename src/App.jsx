import { NewsProvider } from './context/NewsProvider'
import { Container, Grid, Typography }  from '@mui/material'
import Formulario from './components/Formulario'
import NewsList from './components/NewsList'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    white: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
      default: '#fff'
    },
  },
});

function App() { 

  return ( 
    <NewsProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth='false' sx={{
          marginX:'0 !important',
          paddingX: '0% !important'
        }}>
          <header>
            <Typography align='center' marginY={5} component='h1' variant='h3' color='white' sx={{
                    color:'white !important'
            }}>
              Buscador de Noticias
            </Typography>
          </header>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6} lg={4}>
              <Formulario/>
            </Grid>
          </Grid>
          <NewsList/>
          <footer>
            <h2>Desarrollado por DevPoint Víctor Tejada</h2>
          </footer>
        </Container>  
      </ThemeProvider>
    </NewsProvider>
  )
}

export default App

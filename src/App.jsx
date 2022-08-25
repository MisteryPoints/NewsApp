import { useState } from 'react' 
import { NewsProvider } from './context/NewsProvider'
import { Container, Grid, Typography }  from '@mui/material'
import Formulario from './components/Formulario'
import NewsList from './components/NewsList'

function App() { 

  return ( 
    <NewsProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3' >
            Buscador de Noticias
          </Typography>
        </header>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={6} lg={4}>
            <Formulario/>
          </Grid>
        </Grid>
        <NewsList/>
      </Container> 
    </NewsProvider>
  )
}

export default App

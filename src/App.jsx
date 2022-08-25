import { useState } from 'react' 
import { Container, Grid, Typography }  from '@mui/material'

function App() { 

  return (
    <div > 
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3' >
            Buscador de Noticias
          </Typography>
        </header>
      </Container>
    </div>
  )
}

export default App

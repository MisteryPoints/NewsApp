import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import useNews from '../hooks/useNews'
import News from './News'

const NewsList = () => {
    const { news } = useNews()    
    const [loading, setLoading] = useState(true) 
    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component='h2'>
                Últimas Noticias
            </Typography>
            <Grid container spacing={2} > 
                {news.length && news.map( a => ( 
                    <News key={a.url} a={a}/>
                ))}
            </Grid>
        </>
    )
}

export default NewsList
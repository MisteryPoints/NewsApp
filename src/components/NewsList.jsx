import { Grid, Typography, Pagination, Stack } from '@mui/material'
import Loading from '../components/Loading'
import useNews from '../hooks/useNews'
import News from './News'

const NewsList = () => {
    const { news, totalNews, handleChangePage, page, loading } = useNews()     

    const totalPages = Math.ceil(totalNews / 5)
    
    console.log(loading)

    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component='h2' color='primary'>
                Últimas Noticias
            </Typography>
            {loading ? <Loading/> : (
            <Grid container spacing={2} justifyContent='center'  justifyItems='center' alignContent='center'> 
                {news.length && news.map( a => ( 
                    <News key={a.uuid} a={a}/>
                ))}
            </Grid>)}
            <Stack spacing={2} direction='row' justifyContent='center' alignItems='center' sx={{
                marginY: 5,
            }}>
                <Pagination count={totalPages > 998 ? 999 : totalPages} variant="outlined" color="primary" onChange={handleChangePage} page={page}/>
            </Stack>
        </>
    )
}

export default NewsList
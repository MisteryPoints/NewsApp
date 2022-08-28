import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const News = ({a}) => {
    const { image_url, url, title, description, source, published_at } = a 
    const date = new Date(`${published_at}`)
    return (
        <Grid item md={6} lg={4} >
            <Card >
                {image_url && (<CardMedia component='img' alt={`Imagen de la noticia ${title}`} image={image_url} height='250'/>)}
                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography textAlign='right' variant='subtitle1' component='div'>
                        {date.toLocaleDateString()}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Link href={url} target='_blank' variant='button' width={'100%'} underline='hover' textAlign='center'sx={{
                        textDecoration: 'none' ,  
                        borderRadius: '10px'
                    }}>Leer Noticia</Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default News
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const News = ({a}) => {
    const { image, url, title, description, source } = a 
    return (
        <Grid item md={6} lg={4}>
            <Card>
                {image && (<CardMedia component='img' alt={`Imagen de la noticia ${title}`} image={image} height='250'/>)}
                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
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
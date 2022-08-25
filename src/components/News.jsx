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
            </Card>
        </Grid>
    )
}

export default News
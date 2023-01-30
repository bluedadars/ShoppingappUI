import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,useTheme, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductContainer } from './Style';
const ProductList = () => {
  const theme =useTheme();
  const matches= useMediaQuery(theme.breakpoints.down('md'));
  return (
        <ProductContainer>
        <Grid container spacing={2} padding={4}>
    <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:5}}>
  <Card sx={{maxWidth:800}}>
    <CardActionArea>
        <CardMedia
        sx={{height:200
        }}
        image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pharmawell.at%2Fwp-content%2Fuploads%2F2020%2F02%2FiStock-1171526902.jpg&f=1&nofb=1&ipt=d8af2f8447edfa11766ca5f6e6abf809fbf3fc8b7e2499cf32ca54c1253db3a5&ipo=images'
        />
        <CardContent>
        <Typography sx={{
            textAlign:'center'
        }} gutterBottom variant="h5" component="div">
          Diasy
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
          Price : 1300
        </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
</Grid>
<Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:5}} spacing={3}>
  <Card sx={{maxWidth:800}}>
    <CardActionArea>
        <CardMedia
        sx={{height:200}}
        image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-zIFV6OzHNtk%2FT9mzY23H6KI%2FAAAAAAAAAU8%2FQjHFYrEytUw%2Fs1600%2Fbeauty%2Bmakeup%2Bproducts%2B02.png&f=1&nofb=1&ipt=4543625858e210ff885d4604f49c70cdf769b2e57cf696475b2eb92674e32f6c&ipo=images'
        />
        <CardContent>
        <Typography sx={{
            textAlign:'center'
        }} gutterBottom variant="h5" component="div">
          Zara Fleur De Patchouli
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
          Price : 2500
        </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
</Grid>
<Grid item xs={12} sm={4} md={4} sx={{marginTop:5}}>
  <Card sx={{maxWidth:800}}>
    <CardActionArea>
        <CardMedia
        sx={{height:200}}
        image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoveteur.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fapril-best-beauty-products-homepage-1280x720.jpg&f=1&nofb=1&ipt=0f6e9c0c485bf3bd925f4f9bf3c093eaf96de2161ec675b72d322bd5a62bf2f4&ipo=images'
        />
        <CardContent>
        <Typography sx={{
            textAlign:'center'
        }} gutterBottom variant="h5" component="div">
          Ambery Saffron
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
          Price : 10500
        </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
</Grid>
<Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:5}} spacing={3}>
  <Card sx={{maxWidth:800}}>
    <CardActionArea>
        <CardMedia
        sx={{height:200}}
        image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.annmariegianni.com%2Fwp-content%2Fuploads%2F2016%2F03%2Forganic-skincare-products.jpg&f=1&nofb=1&ipt=2c4e0a101b1bbe8bd51713ee3debeb65ac159a2c7c3245d1ee431e7c64f68628&ipo=images'
    />
        <CardContent>
        <Typography sx={{
            textAlign:'center'
        }} gutterBottom variant="h5" component="div">
          BlackRose
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
          Price : 10000
        </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
</Grid>
<Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:5}} spacing={3}>
  <Card sx={{maxWidth:800}}>
    <CardActionArea>
        <CardMedia
        sx={{height:200}}
        image='https://source.unsplash.com/random/?product'
/>
        <CardContent>
        <Typography sx={{
            textAlign:'center'
        }} gutterBottom variant="h5" component="div">
          New Collection
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
          Price : 1500
        </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
</Grid>
<Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:5}} spacing={3}>
  <Card sx={{maxWidth:800}}>
    <CardActionArea>
        <CardMedia
        sx={{height:200}}
        image='https://source.unsplash.com/random/?perfumes'
    />
        <CardContent>
        <Typography sx={{
            textAlign:'center'
        }} gutterBottom variant="h5" component="div">
          Replica
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
          Price : 2000
        </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
</Grid>
{/* </Carousel> */}
</Grid>
</ProductContainer>
  )
}

export default ProductList
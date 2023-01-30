import { Divider, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { FooterContainer, FooterContent } from './Style'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div>
        <Container >
<FooterContainer>
  <FooterContent paddingTop={4}>
    <Grid container color={'white'} justifyContent='center' spacing={3}>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >Home</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >Feature</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography>Video</Typography>
    </Grid>
    <Grid item xs={3} sm={2} md={1} lg={1}>
    <Typography >Review</Typography>
    </Grid>
    </Grid>
    </FooterContent>
    <Divider color={'white'} flexItem/>
    <Box justifyContent={'center'} display="flex" marginTop={3}>
<Grid container justifyContent="center" color={'wheat'} justifyItems={'center'}>
    <FacebookIcon sx={{mr:1}} />
        <TwitterIcon sx={{mr:1,color:'blue'}}/>
        <WhatsAppIcon sx={{mr:1,color:'green'}}/>
         <LinkedInIcon />
         </Grid>
         </Box>
</FooterContainer>
</Container>
    </div>
  )
}

export default Footer
import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
export const BannerContainer =styled(Box)(({theme})=>({
display:'flex',
justifyContent:'center',
width:'100%',
height:'100%',
backgroundColor:'#420C72',
// marginTop:'10%',
[theme.breakpoints.down('lg')]:{
    alignItems:'center',
    marginTop:'5%'
},
[theme.breakpoints.down('md')]:{
    alignItems:'center',
    marginTop:'5%'
},
[theme.breakpoints.down('sm')]:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:'17%'
},
[theme.breakpoints.down('xs')]:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:'20%'
}
}));
export const BannerContent=styled(Box)(()=>({
display:'flex',
flexDirection:'column',
padding:'30px',
justifyContent:'center',
maxWidth:420
}));
export const BannerImage = styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:'500px',
    height:'400px',
    [theme.breakpoints.down('md')]:{
        width:'350px'
    },
    [theme.breakpoints.down('sm')]:{
        width:'300px',
        height:'250px'
    }
}));
export const MessageContainer = styled(Box)(()=>({
    width:'100%',
    height:'100px',
    backgroundColor:'pink',
    justifyContent:'center',
    justifyItems:'center',
    // textAlign:'center'

}));
export const ProductContainer =styled('image')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    backgroundColor:'',
    marginTop:'10%',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
       width:'100%', 
    },
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
       width:'100%', 
    }
    }));
    export const FooterContainer = styled(Box)(({theme})=>({
        width:'100%',
        height:'200px',
        backgroundColor:'#420C72',
        justifyContent:'center',
        justifyItems:'center',
        [theme.breakpoints.down('md')]:{
        width:'100%',
        justifyContent:'center',
        justifyItems:'center'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            justifyContent:'center',
            justifyItems:'center',  
            alignItems:'center' 
        }
    }));
    export const FooterContent = styled(Typography)(({theme})=>({
        marginTop:'5%',
        display:'flex',
        justifyItems:'center',
        justifyContent:'center',
        margin:'5%'
    }))

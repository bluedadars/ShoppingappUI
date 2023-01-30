import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Drawer,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DrawerCon from "./DrawerCon";
import { Height } from "@mui/icons-material";
import { LoginOutlined } from "@mui/icons-material";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";


import {
  BannerContainer,
  BannerContent,
  BannerImage,
  MessageContainer,
} from "./Style";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Categories", "Products", "Aboutus", "Contactus"];
// const itemData= [
//     {
//         img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcdsMk2RRgLyEjYxu9sFdwHaFj%26pid%3DApi&f=1&ipt=5fcd41f718a24469fa1b6e1f41d3c2171dfe177b8ff11036fbd5728eb4aad3e9&ipo=images',
//         title:'First',
//         price:'300'
//     },
//     {
//         img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcdsMk2RRgLyEjYxu9sFdwHaFj%26pid%3DApi&f=1&ipt=5fcd41f718a24469fa1b6e1f41d3c2171dfe177b8ff11036fbd5728eb4aad3e9&ipo=images',
//         title:'Second',
//         price:'300'
//     },
//     {
//         img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcdsMk2RRgLyEjYxu9sFdwHaFj%26pid%3DApi&f=1&ipt=5fcd41f718a24469fa1b6e1f41d3c2171dfe177b8ff11036fbd5728eb4aad3e9&ipo=images',
//         title:'Third',
//         price:'300'
//     },
//     {
//         img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcdsMk2RRgLyEjYxu9sFdwHaFj%26pid%3DApi&f=1&ipt=5fcd41f718a24469fa1b6e1f41d3c2171dfe177b8ff11036fbd5728eb4aad3e9&ipo=images',
//         title:'Forth',
//         price:'300'
//     },
// ]
const Home = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <React.Fragment>
        <Grid container sx={{ placeItems: "center" }} spacing={3}>
          <AppBar sx={{ background: "#9B36F4" }}>
            <Toolbar>
              <Grid>
                <AddShoppingCartIcon />
              </Grid>
              {matches ? (
                <>
                  <Typography>SHOPPING</Typography>
                  <DrawerCon />
                  <Grid item xs={6} md={6} sm={6}>
                    <Box display="flex" sx={{ marginLeft: "auto" }}>
                      <Button
                        onClick={() => navigate("/signin")}
                        endIcon={<LoginOutlined/>}
                        sx={{
                          marginLeft: "auto",
                          background: "red",
                          width: "auto",
                          height: "auto",
                          color: "white",
                        }}
                        variant="outlined"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => navigate("/signup")}
                        endIcon={<HowToRegOutlinedIcon/>}
                        sx={{
                          marginLeft: "10px",
                          background: "red",
                          width: "auto",
                          height: "auto",
                          color: "white",
                        }}
                        variant="outlined"
                      >
                        SignUp
                      </Button>
                      {/* <link href="/Signin">Don't Have an Account?</link> */}
                    </Box>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={3}>
                    <Typography>SHOPPING</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Tabs
                      sx={{ "& button:focus": { color: "#eddb17" } }}
                      TabIndicatorProps={{ sx: { backgroundColor: "red" } }}
                      value={value}
                      textColor="white"
                      onChange={(e, val) => setValue(val)}
                    >
                      {pages.map((listtxt, index) => (
                        <Tab key={index} label={listtxt} />
                      ))}
                    </Tabs>
                  </Grid>
                  <Grid item xs={3} md={6} sm={6}>
                    <Box display="flex">
                      <Button
                        onClick={() => navigate("/signin")}
                        endIcon={<LoginOutlined/>}
                        sx={{
                          marginLeft: "auto",
                          background: "red",
                          color: "white",
                        }}
                        variant="outlined"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => navigate("/signup")}
                        endIcon={<HowToRegOutlinedIcon/>}
                        sx={{
                          marginLeft: "10px",
                          background: "red",
                          color: "white",
                        }}
                        variant="outlined"
                      >
                        SignUp
                      </Button>
                      {/* <link href="/Signin">Don't Have an Account?</link> */}
                    </Box>
                  </Grid>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Grid>
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerImage src="/images/hair.png" />

              <BannerContent>
                <Typography
                  variant="h5"
                  color={"whitesmoke"}
                  sx={{
                    fontFamily: "fantasy",
                  }}
                >
                  Shopping
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="fantasy"
                  color={"whitesmoke"}
                >
                  New Collections
                </Typography>
                <Typography color={"white"} variant="subtitle">
                  Lorem ipsum dolor sit amet . The graphic and typographic
                  operators know this well, in reality all the professions
                  dealing with the universe of communication have a stable
                  relationship with these words, but what is it? Lorem ipsum is
                  a dummy text without any sense.
                </Typography>
              </BannerContent>
            </BannerContainer>
            <MessageContainer>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: 3,
                  fontFamily: "fantasy",
                }}
              >
                Our Products
              </Typography>
            </MessageContainer>
            {/* <ImageList
        sx={{
            width:500,
            height:300
        }}
        >
            {
                itemData.map((item)=>(
                <ImageListItem key={item.img}>
                <img
                 src={`${item.img}?w=248&fit=crop&auto=format`}
                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                 alt={item.title}
                 loading="lazy"
                />
            <ImageListItemBar
             title={item.title}
             subtitle={<span>Price: {item.price}</span>}
             position="below"
            >

            </ImageListItemBar>
            </ImageListItem>
            ))}
        </ImageList> */}
          </Grid>
        </Container>
        <Container>
          <ProductList />
          <Footer />
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Home;

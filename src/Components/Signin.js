import { Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { LoginOutlined } from '@mui/icons-material';
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Signin = () => {
  const [isSignup, setisSignup] = useState();
  const [Inputs, setInputs] = useState({
    name:'',
    email:'',
    password:'',
    age:0
  })
  const handleChange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();    
    console.log(Inputs);
  }
  const reset=()=>{
    setisSignup(!isSignup);
    setInputs({name:'',email:'',password:''})
  }
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={12}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							"url(https://source.unsplash.com/random/?perfumes)",
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
        <form onSubmit={handleSubmit}>
            <Box 
            display={'flex'}
            flexDirection ={'column'}
            maxWidth={400}
            boxShadow={'5px 5px 10px grey '}
            margin='auto'
            marginTop={5}
            justifyContent={'center'}
            padding={5}
            borderRadius={3}
            > 
                    <Grid align={'center'}>  
                    <Avatar 
                    sx={{background:'blue'}}
                    >
                      <LockOutlinedIcon/>
                    </Avatar>
                    </Grid>
         
            <Typography variant='h4' fontFamily={'bold'} fontWeight={'bold'} textAlign={'center'}>{isSignup ? 'Register':'Login'}</Typography>
            {
              isSignup &&(
            <TextField 
            name='name'
            value={Inputs.name}
            onChange={handleChange}
            margin='normal' 
            variant='outlined' type={'text'} 
            label='UserName'
             placeholder=' Type your name'
            
            />
            )}
            <TextField
            name='email'
            value={Inputs.email}
             onChange={handleChange}
            margin='normal'  
            variant='outlined' 
            type={'text'} label='Email' 
            placeholder='Type your email'/>
            <TextField 
            name='password'
            value={Inputs.password}
            margin='normal'  
            variant='outlined'
            onChange={handleChange} 
            type={'password'} 
            label='Password' 
            placeholder='Type your password'/>
            
            <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select name="age" value={Inputs.age} onChange={handleChange} label='Age'>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>

        </Select>
      </FormControl>

            <Button type='submit'
            endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlined/>} 
            variant='contained' 
            sx={{marginTop:3, borderRadius:3,}}
            fontFamily='bold'
            fontWeight="bold"
 
            color='warning'>{isSignup ? 'Register':'Login'}</Button>
            <Button 
            color='secondary'
            endIcon={isSignup? <LoginOutlined/>:<HowToRegOutlinedIcon/>}
            onClick={reset}>
              Change To {isSignup ? 'Login': 'SignUp'}
            </Button>
            
      
            </Box>
        </form>
        </Grid>
         </Grid>
    </div>
  )
}

export default Signin
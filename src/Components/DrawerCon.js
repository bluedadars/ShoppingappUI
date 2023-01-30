import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const pages=['Home','Categories','Products','Aboutus','Contactus']

const DrawerCon = () => {
    const [Opendrawer,setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
  <Drawer PaperProps={{sx:{backgroundColor:'#9B36F4'}}}  open={Opendrawer} onClose={()=>setOpenDrawer(false)} Divider>
      <List>
        {
            pages.map((listtxt,index)=>(
                <ListItemButton  onClick={()=>setOpenDrawer(!Opendrawer)} key={index} divider>
                <ListItemIcon>
                    <ListItemText sx={{color:'white', marginTop:2}}>{listtxt}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            ))
            
        }
        
      </List>
  </Drawer>
   <IconButton onClick={()=>setOpenDrawer(!Opendrawer)}>
   <MenuIcon sx={{marginLeft:'auto',color:'white'}}/>
</IconButton>
</React.Fragment>
    )
}

export default DrawerCon
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const pages=['Home','Categories','Products','Aboutus','Contactus']

const Drawer = () => {
    const [Opendrawer,setOpenDrawer] = useState();
  return (
<Drawer Open={Opendrawer}>
    <List>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>{pages}</ListItemText>
            </ListItemIcon>
        </ListItemButton>
    </List>
    <IconButton>
        <MenuIcon/>
    </IconButton>
    {/* <IconButton onClick={()=>setOpenDrawer(!opendrawer)}>
    <MenuIcon sx={{marginLeft:'auto'}}/>
    </IconButton> */}
</Drawer>
  )
}

export default Drawer
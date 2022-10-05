import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import {IconButton} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

function TemporaryDrawer() {
  const[state,setState] = React.useState({
    left:false
  })
  const toggleDrawer = (anchor, open) => (event) => {
    setState({...state.left, [anchor]: open})
  };
  return (
    <div>
      <React.Fragment> 
        <IconButton onClick = {toggleDrawer("left",true)}>
            <MenuIcon/>
        </IconButton>
    <Drawer open={state['left']} onClose = {toggleDrawer("left", false)} anchor="left">
      <List>
        <ListItem>
          Sidebar
        </ListItem>
      </List>

    </Drawer>


      </React.Fragment>
       
    </div>
  
  )
}

export default TemporaryDrawer
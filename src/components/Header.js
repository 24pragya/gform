import React from 'react'
import './Header.css'
import formimage from '../images/form.png'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import avatarimage from '../images/1.jpg'
import TemporaryDrawer from './TemporaryDrawer'
import {IconButton} from '@material-ui/core'

function Header() {
  return (
    <div className= "header">
        <div className="header-info">
            <TemporaryDrawer></TemporaryDrawer>
            <img src={formimage} alt = "no image" height="40" width="40"/>
            <div className='info'>
                Forms
            </div>
        </div>
        <div className="header-search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" name="search" placeholder="Search"/>
        </div>
        <div className="header-right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <Avatar src ={avatarimage}/>
            </IconButton>

        </div>

    </div>
  )
}

export default Header
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {AppBar,Toolbar,Typography,InputBase,Box} from "@material-ui/core"
import useStyles from './Style';
import SearchIcon from '@material-ui/icons/Search'
const Header = ({setOrdinate}) => {
  const classes =useStyles();
  const[auto,setAuto]=useState(null);

  const onLoad=(autoC)=>(setAuto(autoC));
  const onPlaceChanged= ()=>{
    const lat =auto.getPlace().geometry.location.lat();
    const lng =auto.getPlace().geometry.location.lng();
    setOrdinate({lat,lng});

  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography varient='h5' className={classes.title}>
          Travel Adviser
        </Typography>
        <Box display="flex" >
          <Typography varient='h6' className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
                
              </div>
              <InputBase  placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              
            </div>
          </Autocomplete>


        </Box>

      </Toolbar>
    
    
    </AppBar>
  )
}

export default Header
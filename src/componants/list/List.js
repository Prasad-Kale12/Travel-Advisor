import React, { createRef, useEffect, useState } from 'react';
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@material-ui/core'
import useStyles from './Style'
import { Restaurant } from '@material-ui/icons';
import PlaceDetails from '../placeDetails/PlaceDetails'
const List = ({data,childClick,load,type,setType,rating,setRating}) => {
  const classes = useStyles();
  
  const [ref,setRef] =useState([]);


  useEffect(()=>{
const r=Array(data?.length).fill().map((_,i)=>ref[i] || createRef())
setRef(r);
  },[data])


  
  return (
    <div className={classes.container}>
      <Typography variant='h4'> Restaurants,Hotels & Attractions around you</Typography>
      {load ?
      (
        <div>
          <CircularProgress/>
        </div>
      ):
      (<>
        <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={type} onChange={(e)=>setType(e.target.value)}>
       <MenuItem value='restaurants'>Restaurants</MenuItem>
       <MenuItem value='hotels'>Hotels</MenuItem>
       <MenuItem value='attraction'>Attractions</MenuItem>

      </Select>
     </FormControl>

     <FormControl className={classes.formControl}>
      <InputLabel>Rating</InputLabel>
      <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
       <MenuItem value={0}>All</MenuItem>
       <MenuItem value={3}>Above 3.0</MenuItem>
       <MenuItem value={4}>Above 4.0</MenuItem>
       <MenuItem value={4.5}>Above 4.5</MenuItem>

      </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {data?.map((p,i)=>(
         <Grid item key={i} xs={12}>
          <PlaceDetails p={p} 
           selected={Number(childClick)== i}
           refProp ={ref[i]}          ></PlaceDetails>
           </Grid>
        ))}
      </Grid>
      </>


      )}
     




    </div>
  )
}

export default List
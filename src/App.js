import React, { useEffect, useState } from 'react';
import {CssBaseline, Grid} from '@material-ui/core'
import Header from './componants/Header/Header';
import List from './componants/list/List';
import Map from './componants/maps/Map';
import {getPlaces}from './api/index'

const App = () => {
const [data,setData]=useState([]);
const [ordinate,setOrdinate]=useState({});
const [bounds,setBounds]=useState({});
const [childClick,setChildClick ]=useState(null);
const [load,setLoad ]=useState(false);
const [type , setType ]= useState('restaurants');
  const [rating,setRating] =useState();
  const [filterData,setFilterData] =useState([]);


useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
setOrdinate({lat:latitude,lng:longitude});
})
},[]);

useEffect(()=>{
  const filter = data.filter((place)=>place.rating >rating);
  setFilterData(filter);

},[rating]);


  useEffect(()=>{
    if(bounds.sw && bounds.ne)
   {setLoad(true)
  getPlaces(type,bounds.sw,bounds.ne)
  .then((data)=> {
  
    setData(data?.filter((place)=>place.name && place.num_reviews>0)) 
   setLoad(false)
   setFilterData([])
  
  })
   
  }
},[bounds,type]);
  return (<>
    <CssBaseline />
    <Header setOrdinate={setOrdinate}/>
     <Grid container spacing={3} style={{width:"100%"}}>

      <Grid item xs={12} md={4}>
        <List 
        data={filterData.length?filterData:data} 
        childClick={childClick} 
        load={load}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
        ></List>
      </Grid>
      <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Map 
        setOrdinate={setOrdinate} 
        setBounds={setBounds} 
        ordinate={ordinate} 
        data={filterData.length?filterData:data} 
        setChildClick={setChildClick}></Map>
      </Grid>
     </Grid>


   
    
    

   
    </>)
}

export default App
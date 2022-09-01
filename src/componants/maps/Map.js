import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab';
import useStyles from './Style'
const Map = ({setOrdinate,setBounds,ordinate,data,setChildClick}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('min-width:600px');
   const coordinates={lat:0,lng:0}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLkeys={{key: 'AIzaSyAf-X0qp-gRxn4Go4XXCG0jFGdV8Dx2wDI'}}
      defaultCenter={ordinate}
      center={ordinate}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options={''}
      onChange={(e)=>{
        setOrdinate({lat:e.center.lat,
                      lng:e.center.lng})
        setBounds({ne:e.marginBounds.ne,
                  sw: e.marginBounds.sw})

      }}
      onChildClick={(c)=>(setChildClick(c))}
      
    >
      {data?.map((data,i)=>(
        <div className={classes.markerContainer}
             lat={Number(data.latitude)}
             lng={Number(data.longitude)}
             key={i}>

      {!isDesktop?(
        <LocationOnOutlinedIcon color='primary' fontSize='large'/>
      ) :(
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.typography} variant='subtitle1'>{data.name}</Typography>
          <img className={classes.pointer}
          src={data.photo? data.photo.images.large.url:"https://unsplash.com/s/photos/hotel"}/>
        </Paper>
      )

      }
      </div>
    ))}
    </GoogleMapReact>
    </div>
  )
}

export default Map
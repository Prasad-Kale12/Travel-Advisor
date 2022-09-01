import React from 'react';
import{Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyle from './Style'
const PlaceDetails = ({p,selected,refProp}) => {
  const classes =useStyle();
  if(selected) refProp?.current?.ScrollIntoView({behavior:'smooth',block:'start'})
  
  return (
    <Card elevation={6}>
      <CardMedia
      style={{height:350}}
      image={p.photo?p.photo.images.large.url: "https://unsplash.com/s/photos/hotel"}
      title={p.name}/>
      <CardContent>
        <Typography gutterBottom variant='h5'>{p.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{p.price.level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{p.ranking}</Typography>
        </Box>
        {p?.address && (
          <Typography gutterBottom variant='subTitle2' color='textSecondary' className={classes.subTitle}>
            <LocationOnIcon/> {p.address }
          </Typography>
        )}
           {p?.phone && (
          <Typography gutterBottom variant='subTitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon/> {p.phone }
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={()=> window.open(p.web_url , '_blank_')}>Travel Advisor</Button>
        </CardActions>
      </CardContent>
    </Card>
   
    
  )
}

export default PlaceDetails
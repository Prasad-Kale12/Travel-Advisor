import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
const URL = '';
const options = {
 

};


export const getPlaces =async(type,sw,ne)=>{
  try {
    const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{  params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
     
    },
    headers: {
      'X-RapidAPI-Key': 'f58f2bb1f2msh9767a2ed0a5eb92p1a22cajsn56cb8a74eeb6',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }

    });
    return data;
  } catch (error) {
    console.log(error)
    
  }
}
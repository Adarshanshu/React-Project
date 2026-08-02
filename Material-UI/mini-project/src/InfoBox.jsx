import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
    const INIT_URL = "https://media.istockphoto.com/id/2249519485/photo/cyclone-ditwah-20251127-cloud-map-india-3d-render-neutral.webp?a=1&b=1&s=612x612&w=0&k=20&c=bvSYLzrGus26J8-f9thC87ID3e1LwqA4REiNau7bQLo=";
    const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
     const HOT_URL = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
   
    return(
        <div className="infoBox">
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp >20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <div> Temprature = {info.temp}&deg;C </div>
        <div> Humidity = {info.humidity}</div>
        <div> Weather = {info.weather}</div>
        {/* <div> feels-Like ={info.feels_like}</div> */}
        <div> Minimum temp = {info.tempMin}</div>
        <div> maximum temp = {info.tempMax}</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}
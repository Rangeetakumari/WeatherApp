import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_INFO = 
    "https://images.unsplash.com/photo-1502726879634-199301e1c2c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4OTMzOTV8fGVufDB8fHx8fA%3D%3D"

    const HOt_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


    return (
        <div className="InfoBox">
            
            <div className="cardContainer">

            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOt_URL : COLD_URL}
                    title="weather"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature: {info.temp} &deg;C</p>
                        <p>Feels Like: {info.feelslike} &deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>the Weather can  be described as <i>{info.weather}</i> and fells like : {info.feelslike} &deg;C</p>
                        <p>Min Temperature: {info.tempMin} &deg;C</p>
                        <p>Max Temperature: {info.tempMax} &deg;C</p>
                    </Typography>

                </CardContent>

                
            </Card>
            </div>
        </div>
    );
}

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_INFO = 
    "https://images.unsplash.com/photo-1502726879634-199301e1c2c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4OTMzOTV8fGVufDB8fHx8fA%3D%3D"

    

    return (
        <div className="InfoBox">
            <h1>WeatherInfo</h1>
            <div className="cardContainer">

            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_INFO}
                    title="weather"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
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
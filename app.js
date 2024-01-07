const apikey="e4e92b065d3dc53f1b5986589b3393b0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response= await fetch(apiurl + city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".details").style.display="none";
        

    }
    else{
        let data = await response.json();
        console.log(data);
        document.querySelector(".city-name").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp + "°C";
        document.querySelector(".humidity-per").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML=data.wind.speed + "km/h";
        if(data.weather[0].main=="Clouds"){
            weathericon.src="clouds.png";
    
        }else if(data.weather[0].main=="Clear"){
            weathericon.src="clear.png";
        }else if(data.weather[0].main=="Rain"){
            weathericon.src="rain.png";
        }else if(data.weather[0].main=="Drizzle"){
            weathericon.src="drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weathericon.src="mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            weathericon.src="snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".details").style.display = "flex";
        document.querySelector(".error").style.display="none";
    }
   

}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});

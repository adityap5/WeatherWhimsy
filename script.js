const apikey ="0db1af1cd0f69e3fd99ba4c86a8634c8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".serach input");
const btn = document.querySelector(".serach button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apikey}`)
    if(res.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data =await res.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"⁰c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed +' km/h';

        if(data.weather[0].main =='Clear'){
            weatherIcon.src = "images/clear.png"
          }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
          }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
          }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
          }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
          }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
          }
          document.querySelector(".weather").style.display = 'block';
    }
   

  
  
}

btn.addEventListener("click", ()=>{
checkweather(searchbox.value);
})


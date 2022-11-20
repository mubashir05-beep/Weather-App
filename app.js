//API-KEY : https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&cnt=3&APPID=eccf41dbcc7bcbfa72b4d979e3f4ebb4
//Weather ICON : http://openweathermap.org/img/wn/${iconCode}@4x.png


//Setting variables
const cityForm = document.querySelector('form');
const cityInput = document.querySelector('input');
const temp=document.querySelector('.mainTemp');
const desc=document.querySelector('.desc');
const pressure=document.querySelector('#pressure');//hpa
const humidity=document.querySelector('#humidity');//%
const windw=document.querySelector('#wind');//m/s
const form=document.querySelector('form');
const degree=document.querySelector('.temp__unit');

//Unit Change Function
async function changeUnits() {
    if (degree.getAttribute('data-celsius')!=='true') {
        degree.textContent = '°C';
        degree.setAttribute('data-celsius', 'true');
        unit='metric';
       await weatherData(cityInput.value,unit);
    } else {
     degree.textContent = '°F';
     degree.setAttribute('data-celsius', 'false');
      unit='imperial';
     await weatherData(cityInput.value,unit);
    }
  }

//Setting Units & City
let unit='imperial';
cityForm.addEventListener('submit', ev => {
    ev.preventDefault();
    const result = cityInput.value;
    weatherData(result)
    cityInput.blur()
  })

//Getting & Setting Weather Data 
async function weatherData(city,unit){
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&cnt=3&APPID=eccf41dbcc7bcbfa72b4d979e3f4ebb4`);
if(!response.ok)alert('Invalid Country');
else{
    let data =  await response.json();

//setting up weather ICON: 
const weatherIcon=document.querySelector('#weather-icon');
weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

//Setting ICONS:
pressure.textContent=data.main.pressure+'hpa';
humidity.textContent=data.main.humidity+'%';
windw.textContent=data.wind.speed+'m/s';
//Setting Temp Description:
temp.textContent=data.main.temp;
desc.textContent=data.weather[0].main;
}}

changeUnits();





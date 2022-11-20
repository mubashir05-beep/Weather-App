//API-KEY : https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&cnt=3&APPID=eccf41dbcc7bcbfa72b4d979e3f4ebb4
//Weather ICON : http://openweathermap.org/img/wn/${iconCode}@4x.png
//°F
const countryInput=document.querySelector('#countryName');
const form=document.querySelector('form');
const enteredCountry=countryInput.value;
const degree=document.querySelector('.temp__unit');
//Unit Change Function
function changeUnits() {
    if (degree.getAttribute('data-celsius') === 'true') {
      degree.textContent = '°F'
      degree.setAttribute('data-celsius', 'false')
      return 'standart'
    } else {
      degree.textContent = '°C'
      degree.setAttribute('data-celsius', 'true')
      return 'metric'
    }

  }
//Setting Units & City

//Getting  Weather Data

async function weatherData(city){
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${changeUnits()}&cnt=3&APPID=eccf41dbcc7bcbfa72b4d979e3f4ebb4`);
if(!response)throw new Error('Invalid Country')
else{
    let data =  await response.json();
//setting up weather ICON: 
const weatherIcon=document.querySelector('#weather-icon');
weatherIcon.src=`http://openweathermap.org/img/wn/${ data.weather[0].icon}@4x.png`
//Setting ICONS:
const pressure=document.querySelector('#pressure');
const humidity=document.querySelector('#humidity');
const wind=document.querySelector('wind');

//Setting Temp Description:
const temp=document.querySelector('.mainTemp');
temp.textContent=data.main.temp;
const desc=document.querySelector('.desc');
desc.textContent=data.weather[0].main;

}
}

//Setting variables

weatherData(enteredCountry);

//setting up weather ICON 


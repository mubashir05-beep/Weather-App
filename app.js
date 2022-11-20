//API-KEY : https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&cnt=3&APPID=eccf41dbcc7bcbfa72b4d979e3f4ebb4
//Weather ICON : http://openweathermap.org/img/wn/${iconCode}@4x.png
//°F
const countryInput=document.querySelector('#countryName');
const degree=document.querySelector('.temp__unit');

degree.addEventListener('click',()=>{
if(degree.dataset.celsius = true)
{
    degree.value='°F';
    degree.innerHTML='°F';
    degree.dataset.celsius=false;
    console.log('if '+degree.dataset.celsius )
  
   
}
else{  degree.value='°C';
degree.innerHTML='°C';
degree.dataset.celsius=true;
console.log('else '+degree.dataset.celsius )

}
})




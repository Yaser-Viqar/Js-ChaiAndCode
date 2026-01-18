const city_a=(document.querySelector('#cityInput'))
const search=document.querySelector('#searchBtn')
search.addEventListener("click", () => {
    const city = city_a.value;
    if(!city){
        alert("enter location");

}
else{
    const apirequest=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7e9450c2ae6ad4cea07ac177fa99f3b&units=metric`

const xhr= new XMLHttpRequest;
 xhr.open('GET',apirequest);
 xhr.onload=function(){
    if(xhr.status===200){
              const data = JSON.parse(xhr.responseText);
    //   console.log(data);
      (document.querySelector('#temperature')).innerHTML=data.main.temp;
      (document.querySelector('#humidity')).innerHTML=data.main.humidity;
      (document.querySelector('#wind')).innerHTML=data.wind.speed;
    }
    else{
        console.log("not found")
    }
 
 }

    xhr.send();
}
})
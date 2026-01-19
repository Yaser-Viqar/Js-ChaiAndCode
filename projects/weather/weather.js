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
         //method 2(fetch method)
// searchBtn.addEventListener("click", async () => {
//   try {
//     const city = cityInput.value;
//     if (!city) return alert("Enter location");

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7e9450c2ae6ad4cea07ac177fa99f3b&units=metric`;

//     const response = await fetch(url);
//     if (!response.ok) throw new Error("City not found");

//     const data = await response.json();

//     document.querySelector('#temperature').innerText =
//       data.main.temp + "°C";

//   } catch (err) {
//     alert(err.message);
//   }
// });

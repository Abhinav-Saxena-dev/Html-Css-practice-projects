const hottest = document.getElementById("hottest");
const coldest = document.getElementById("coldest");
const API_KEY = "987455efcc8527d15acd5f8e1005c931";
const forms = document.getElementById("forms");

const getWeatherData = async (latlng) => {
 await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latlng[0]}&lon=${latlng[1]}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    ).then(res => res.json()).then(data =>{
            console.log(data);
            showWeather(data);
    });
};

const getCountries = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all").then(res => res.json());
  console.log(data);
  return data;
}

forms.addEventListener("submit", e => {
  e.preventDefault();
  const name = (e.target[0].value).toLowerCase();
  search(name);
})

const search = async (name) => {
  let cnames = await getCountries();
  for(let i = 0; i < 250; i++){ 
    let cname = cnames[i].name.common.toLowerCase();
    if(cname == name){
      console.log(cnames[i]);
      getWeatherData(cnames[i].latlng);
      break;
    }
  }
}

const showWeather = (data) => {
    hottest.innerText = data.daily[0].temp.max;
    coldest.innerHTML = data.daily[0].temp.min;
}
onmessage = function(e) {
    if (e.data==="update_data"){
        getWeather();
    }
};
async function getWeather() {
    var cities = {"milano":0, "modena":0, "napoli":0};
    for (var i in cities) {
        var coord = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + i + ",IT&limit=1&appid=df759d9b1208a7d68079dd7ce905d865",
            {method: "GET"});
        coord = await coord.json();
        lat =  coord[0].lat;
        lon =  coord[0].lon;
        var res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=df759d9b1208a7d68079dd7ce905d865",
            {method: "GET"});
        res = await res.json();
        console.log(res);
        cities[i]=res.main.temp;
    }
    postMessage(cities);
};

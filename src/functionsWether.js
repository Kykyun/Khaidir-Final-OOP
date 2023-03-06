window.addEventListener('load', Casablanca);
window.addEventListener('load', Fez);
window.addEventListener('load', Rabat);
window.addEventListener('load', Tangier);
window.addEventListener('load', Marrakesh);
window.addEventListener('load', Agadir);

function Casablanca() {
    var city = "Casablanca"; //set the city to Casablanca

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City temperature:" + celcius + "celcius")

        console.log("City wind speed:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}

function Fez() {
    var city = "fez"; //set the city to Casablanca

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City temperature:" + celcius + "celcius")

        console.log("City wind speed:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city1").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time1").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture1").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity1").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed1").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether1").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}

function Rabat() {
    var city = "rabat"; //set the city to Casablanca

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City temperature:" + celcius + "celcius")

        console.log("City wind speed:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city2").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time2").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture2").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity2").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed2").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether2").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}

function Tangier() {
    var city = "tangier"; //set the city to Casablanca

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City temperature:" + celcius + "celcius")

        console.log("City wind speed:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city3").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time3").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture3").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity3").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed3").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether3").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}
function Marrakesh() {
    var city = "marrakesh"; //set the city to Casablanca

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City temperature:" + celcius + "celcius")

        console.log("City wind speed:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city4").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time4").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture4").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity4").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed4").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether4").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}

function Agadir() {
    var city = "agadir"; //set the city to Casablanca

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City temperature:" + celcius + "celcius")

        console.log("City wind speed:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city5").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time5").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture5").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity5").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed5").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether5").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}

function buttonClicked(){

    var city = document.getElementById("fetchAPI").value; //get the searched value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)

    .then((response) => response.json())

    .then((data) => {
        
        console.log(data); //output the API into console.
        console.log("City temp:" + data.main.temp)

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City celcius:" + celcius + "celcius")

        console.log("City wind:" + data.wind.speed)

        var timezoneOffset = data.timezone +(16 * 60 * 60);
        var currentTime = new Date(Date.now() + (timezoneOffset * 1000) + 1400);
        var time = currentTime.toLocaleTimeString();

        document.getElementById("city6").innerHTML = `${data.name}, ${data.sys.country}`;
        document.getElementById("time6").innerHTML = `Current Time: ${time}`;
        document.getElementById("temperture6").innerHTML = `Temperature (C): ${celcius}`; 
        document.getElementById("humidity6").innerHTML = `Humidity: ${data.main.humidity}%`; 
        document.getElementById("windspeed6").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
        document.getElementById("wether6").innerHTML = `wether: ${data.weather[0].main}`; 
    })
}

let cityList = JSON.parse(localStorage.getItem('amendedList') || "[]");
 renderSearches();
 
function displayWeatherInfo(searchReq) {
    var APIKey = "90221d6955c424fe373d730a9dc662f5";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchReq + "&appid=" + APIKey;
    // var queryURLTwo ="https://api.openweathermap.org/data/2.5/uvi?lat=" + "&lon=" + searchOutput + "&appid=" + APIKey;
    // console.log(searchInput);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
     console.log(response);
     console.log(response.list[0].main.temp);
     //----Main Card
     var cityName = $('.cityname');
     var currentWeather = $('.weather-icon'); 
     var weatherIcon = "<img src = 'http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png'>";
     var cityTemp = $('.temperature');
     var cityHumid = $('.humidity');
     var cityWindSpeed = $('.windspeed');
     var tempFar = (response.list[0].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card One
     var date1 = $('.date1');
     var currentWeather1 = $('.icon1');
     var weatherIcon2 = "<img src = 'http://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png'>";
     var cityTemp1 = $('.temp1');
     var cityHumid1 = $('.humid1');
     var tempFarOne = (response.list[8].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Two
     var date2 = $('.date2');
     var currentWeather2 = $('.icon2');
     var weatherIcon3 = "<img src = 'http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png'>";
     var cityTemp2 = $('.temp2');
     var cityHumid2 = $('.humid2');
     var tempFarTwo = (response.list[16].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Three
     var date3 = $('.date3');
     var currentWeather3 = $('.icon3');
     var weatherIcon4 = "<img src = 'http://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png'>";
     var cityTemp3 = $('.temp3');
     var cityHumid3 = $('.humid3');
     var tempFarThree = (response.list[24].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Four
     var date4 = $('.date4');
     var currentWeather4 = $('.icon4');
     var weatherIcon5 = "<img src = 'http://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png'>";
     var cityTemp4 = $('.temp4');
     var cityHumid4 = $('.humid4');
     var tempFarFour = (response.list[32].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Five
     var date5 = $('.date5');
     var currentWeather5 = $('.icon5');
     var weatherIcon6 = "<img src = 'http://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + "@2x.png'>";
     var cityTemp5 = $('.temp5');
     var cityHumid5 = $('.humid5');
     var tempFarFive = (response.list[39].main.temp - 273.15) * 1.80 + 32;
     //----
     
     var tempFarInt = parseInt(tempFar);
     console.log(tempFarInt);
     //----- Main Card
     cityName.html(response.city.name + ' ' + response.list[0].dt_txt.split(" ")[0]);
     currentWeather.html('Current Weather Condition: '+ weatherIcon + response.list[0].weather[0].description);
     cityTemp.text('Temperature: ' + tempFar.toFixed(2));
     cityHumid.text('Humidity: ' + response.list[0].main.humidity);
     cityWindSpeed.text('Windspeed: ' + response.list[0].wind.speed);
     //---------

     //---------Card One
     date1.text(response.list[8].dt_txt.split(" ")[0]);
     currentWeather1.html('Weather: ' + response.list[8].weather[0].description + " " + weatherIcon2);
     cityTemp1.text('Temperature: ' + tempFarOne.toFixed(2));
     cityHumid1.text('Humidity: ' + response.list[8].main.humidity);
     //---------
     //----Card Two
     date2.text(response.list[16].dt_txt.split(" ")[0]);
     currentWeather2.html('Weather: ' + response.list[16].weather[0].description + " " + weatherIcon3);
     cityTemp2.text('Temperature: ' + tempFarTwo.toFixed(2));
     cityHumid2.text('Humidity: ' + response.list[16].main.humidity);
     //----
     //----Card Three
     date3.text(response.list[24].dt_txt.split(" ")[0]);
     currentWeather3.html('Weather: ' + response.list[24].weather[0].description + " " + weatherIcon4);
     cityTemp3.text('Temperature: ' + tempFarThree.toFixed(2));
     cityHumid3.text('Humidity: ' + response.list[24].main.humidity);
     //----Card Four
     date4.text(response.list[32].dt_txt.split(" ")[0]);
     currentWeather4.html('Weather: ' + response.list[32].weather[0].description + " " + weatherIcon5);
     cityTemp4.text('Temperature: ' + tempFarFour.toFixed(2));
     cityHumid4.text('Humidity: ' + response.list[32].main.humidity);
     //----
     //----Card Five
     date5.text(response.list[39].dt_txt.split(" ")[0]);
     currentWeather5.html('Weather: ' + response.list[39].weather[0].description + " " + weatherIcon6);
     cityTemp5.text('Temperature: ' + tempFarFive.toFixed(2));
     cityHumid5.text('Humidity: ' + response.list[39].main.humidity);
     //----


    });

}

function renderSearches(){
     $('#search-list').empty();
    for (var i = 0; i < cityList.length; i++){
        var city = $('<button>')
        city.addClass("city-selected");
        city.attr('data-name', cityList[i]);
        city.text(cityList[i]);
        $('#search-list').append(city);
    }
}




$(document).ready(function() {
$('#searchBtn').on('click', function(event){
 event.preventDefault();
 console.log('clicked');
 var searchReq = $('#search-bar').val().trim();
 cityList.push(searchReq);
 localStorage.setItem('amendedList', JSON.stringify(cityList));
 renderSearches();
 displayWeatherInfo(searchReq);
});

})

$(document).on("click", ".city-selected", function(){
    var searchReq = $(this).attr('data-name');
    displayWeatherInfo(searchReq);
});


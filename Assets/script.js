var cityList = [];


function pullLocal(){
    if(cityList === null) {
        cityList = [];
    } else {
      var amendedCityList = localStorage.getItem('amendedList');
      JSON.parse(amendedCityList);
    }
}

function displayWeatherInfo() {
    var searchInput = $("#search-bar").val();
    var searchOutput = $(this).attr('city-selected');
    var APIKey = "90221d6955c424fe373d730a9dc662f5";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + APIKey;
    // var queryURLTwo ="https://api.openweathermap.org/data/2.5/forecast?q=" + searchOutput + "&appid=" + APIKey;
    console.log(searchInput);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
     console.log(response);
     console.log(response.list[0].main.temp);
     var cityName = $('.cityname');
     var weatherIcon = $()   
     var cityTemp = $('.temperature');
     var cityHumid = $('.humidity');
     var cityWindSpeed = $('.windspeed');
     var cityTemp1 = $('.temp1');
     var tempFar = (response.list[0].main.temp - 273.15) * 1.80 + 32;
     var tempFarOne = (response.list[8].main.temp - 273.15) * 1.80 + 32;
     var tempFarTwo = (response.list[16].main.temp - 273.15) * 1.80 + 32;
     var tempFarThree = (response.list[24].main.temp - 273.15) * 1.80 + 32;
     var tempFarFour = (response.list[32].main.temp - 273.15) * 1.80 + 32;
     var tempFarFive = (response.list[39].main.temp - 273.15) * 1.80 + 32;
     
     var tempFarInt = parseInt(tempFar);
     console.log(tempFarInt);
     cityName.html(response.city.name + ' ' + response.list[0].dt_txt);
     cityTemp.text('Temperature: ' + tempFar.toFixed(2));
     cityHumid.text('Humidity: ' + response.list[0].main.humidity);
     cityWindSpeed.text('Windspeed: ' + response.list[0].wind.speed);
     cityTemp1.html('Temperature: ' + tempFarOne.toFixed(2));

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
 JSON.stringify(localStorage.setItem('amendedList', cityList));
 renderSearches();
 displayWeatherInfo();
});

})

$(document).on("click", ".city-selected", displayWeatherInfo);


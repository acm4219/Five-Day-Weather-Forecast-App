var cityList = [];


function pullLocal(){
    if(cityList === null) {
        cityList = [];
    } else {
      var amendedCityList = localStorage.getItem('amendedList');
      JSON.parse(amendedCityList);
    }
}

function displayWeatherInfo(searchReq) {
    var APIKey = "90221d6955c424fe373d730a9dc662f5";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchReq + "&appid=" + APIKey;
    // var queryURLTwo ="https://api.openweathermap.org/data/2.5/forecast?q=" + searchOutput + "&appid=" + APIKey;
    // console.log(searchInput);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
     console.log(response);
     console.log(response.list[0].main.temp);
     //----Main Card
     var cityName = $('.cityname');
     var weatherIcon = $()   
     var cityTemp = $('.temperature');
     var cityHumid = $('.humidity');
     var cityWindSpeed = $('.windspeed');
     var tempFar = (response.list[0].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card One
     var date1 = $('.date1')
     var currentWeather1 = $('.icon1')
     var cityTemp1 = $('.temp1');
     var cityHumid1 = $('.humid1')
     var tempFarOne = (response.list[8].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Two
     var date2 = $('.date2')
     var currentWeather2 = $('.icon1')
     var cityTemp2 = $('.temp2');
     var cityHumid2 = $('.humid1')
     var tempFarTwo = (response.list[16].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Three
     var date3 = $('.date3')
     var currentWeather3 = $('.icon1')
     var cityTemp3 = $('.temp3');
     var cityHumid3 = $('.humid1')
     var tempFarThree = (response.list[24].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Four
     var date4 = $('.date4')
     var currentWeather4 = $('.icon1')
     var cityTemp4 = $('.temp4');
     var cityHumid4 = $('.humid1')
     var tempFarFour = (response.list[32].main.temp - 273.15) * 1.80 + 32;
     //----
     //----Card Five
     var date5 = $('.date5')
     var currentWeather5 = $('.icon1')
     var cityTemp5 = $('.temp5');
     var cityHumid5 = $('.humid1')
     var tempFarFive = (response.list[39].main.temp - 273.15) * 1.80 + 32;
     //----
     
     var tempFarInt = parseInt(tempFar);
     console.log(tempFarInt);
     //----- Main Card
     cityName.html(response.city.name + ' ' + response.list[0].dt_txt);
     cityTemp.text('Temperature: ' + tempFar.toFixed(2));
     cityHumid.text('Humidity: ' + response.list[0].main.humidity);
     cityWindSpeed.text('Windspeed: ' + response.list[0].wind.speed);
     //---------

     //---------Card One
     date1.text(response.list[8].dt_txt);
     cityTemp1.text('Temperature: ' + tempFarOne.toFixed(2));
     //---------
     //----Card Two
     date2.text(response.list[16].dt_txt);
     cityTemp2.text('Temperature: ' + tempFarTwo.toFixed(2));
     //----
     //----Card Three
     date3.text(response.list[24].dt_txt);
     cityTemp3.text('Temperature: ' + tempFarThree.toFixed(2));
     //----Card Four
     date4.text(response.list[32].dt_txt);
     cityTemp4.text('Temperature: ' + tempFarFour.toFixed(2));
     //----
     //----Card Five
     date5.text(response.list[39].dt_txt);
     cityTemp5.text('Temperature: ' + tempFarFive.toFixed(2));
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
 JSON.stringify(localStorage.setItem('amendedList', cityList));
 renderSearches();
 displayWeatherInfo(searchReq);
});

})

$(document).on("click", ".city-selected", function(){
    var searchReq = $(this).attr('data-name');
    displayWeatherInfo(searchReq);
});


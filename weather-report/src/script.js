$(document).ready(function(){
var lat;
var long;
var place;
var k=1;
  navigator.geolocation.getCurrentPosition(function(pos){
    lat=pos.coords.latitude;
    long=pos.coords.longitude;
    console.log(lat);
    $.ajax({
      url:'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long,
      success: function(val){
      place=val.name;
      var count=val.sys.country;
      $("#place").text(place+ ", "+count);
      var lati=Math.floor(lat);
      var longi=Math.floor(long);
      $('#location').text("Longitude:"+longi+"  Latitude:"+lati);
      var temper=val.main.temp;
      $("#tempe").text(temper+"°C");
      $("#converter").on("click",function(){
        k*= (-1);
        if(k==1){
          $("#tempe").text(temper+"°C");
          $("#converter").removeClass("btn-primary");
          $("#converter").addClass("btn-danger");
        }
        else{
          var far=(temper*9/5)+32;
          far*=100;
          var fari=Math.floor(far);
          fari/=100;
          $("#tempe").text(fari+"°F");
          $("#converter").removeClass("btn-danger");
          $("#converter").addClass("btn-primary");
        }
      });
        var nat=val.weather[0].main;
        $("#nature").text(nat);
        if(nat){
          $("#icon").removeClass("wi-day-cloudy");
          var natu=nat.toLowerCase();
          $("#icon").addClass("wi-"+natu);
          $("#icon").addClass("wi-day-"+natu);
        }
        var imgLink=val.weather[0].icon;
        $("#image").attr("src",imgLink);
      }
   });
  });
});

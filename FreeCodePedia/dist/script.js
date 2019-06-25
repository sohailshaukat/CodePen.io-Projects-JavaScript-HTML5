$(document).ready(function(){
  var i;
  $("#search-button").on("click",function(){
    var searchterm= $("#input-box").val();
    var api= "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchterm+"&callback=?";
    console.log(api);
    $.ajax({
      type:"GET",
      url: api,
      async:false,
      dataType:"json",
      success: function(val){
          for(i=0;i<=9;i++){
           var title = val[1][i];
           var desc = val[2][i];
           var link = val[3][i];
           $("#target"+i).html('<a href="'+link+'"target="_blank"><h3>'+title+'</h3><br /><p>'+desc+'</p></a>');
          }
      },
      error: function(){
        alert("error");
      }
     });
  });
});
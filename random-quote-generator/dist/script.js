$(document).ready(function() {
  var k=1;
  var quote;
  var author;
  var back=["Gold","SaddleBrown ","DarkOliveGreen","Green","DarkOrange","Orange","DarkSeaGreen "];
  function getQuote(){
    var backRand=back[Math.floor(Math.random()*back.length)];
    $("body").css("background-color",backRand);
    $("#quoteBody").css("color",backRand);
    $.ajax({
      url:'https://api.forismatic.com/api/1.0/',
     jsonp:'jsonp',
     dataType:'jsonp',
      data: {
      method:'getQuote',
      lang:'en',
      format:'jsonp'
            },
      success: function(val){
      quote= val.quoteText;
      author= val.quoteAuthor;
      $("#quote-variable").text('"'+quote+'"');
      if(author){
        $("#author-text").text("-"+author);
      }
      else{
        $("#author-text").text("-Anonymous");
      }
    }
    });
  }
  getQuote();
  
  $("#quoteButton").on("click",function(e){
   e.preventDefault;
   getQuote();
  });
  $(".twitter-share").on("click",function(e){
    e.preventDefault;
    window.open('https://twitter.com/intent/tweet?text='+ encodeURIComponent(quote+"--"+author));
  });
  $(".UpVote").on("click",function(e){
    if(k==1){
      $(".UpVote").removeClass("btn-primary");
      $(".UpVote").addClass("btn-danger");
      k= -1;
    }
    else{
      $(".UpVote").removeClass("btn-danger");
      $(".UpVote").addClass("btn-primary");
      k= 1;
    }
  });
});
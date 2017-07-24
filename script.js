
$(document).ready(function(){
getQuote();
function getQuote(){
    var url ="http://api.forismatic.com/api/1.0/";
    $.getJSON(url,function(data){
    $(".quote").html('"' + data.quoteText + '"');
    $(".author").html('-' + data.quoteAuthor );
    })
};
$("#newQuote").on("click", function(){
    getQuote();
  });
});
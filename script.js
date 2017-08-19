$(document).ready(function() {
    var author;
    var quote;
    getQuote();

    function getQuote() {
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(data) {

            $('#quote').html('"' + data.quoteText + '"');
            quote = data.quoteText;
            $('#author').html('-' + data.quoteAuthor);
            author = data.quoteAuthor;
        })
    };
    $("#newQuote").on("click", function() {
        getQuote();
    });

    $("#newTweet").on("click", function() {

        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + '-' + author));
    });


});

$(document).ready(function(){
    $("#test1").click(function(){
        alert("You click");
    });

    /*
    $("#button").click(function(){
        $("#content").load("http:///localhost:3000/books", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!" + responseTxt);
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });*/

    /*
    $("#button").click(function(){
        //getdata("http:///localhost:3000/books", handleResponse)

        alert('test1');
        getData('http:///localhost:3000/books', function(response) {
            alert('The response was: ' + response);
        });

    });*/

    


});

$(document).ready(function(){
    $("#button").click(function(){

        getData('http:///localhost:3000/books', function(response) {
            //alert('The response was: ' + response);
            //$("#content").html('<a href="">'+response+"</a>");

            var json = $.parseJSON(response);
            $(json).each(function(i,val){
                $.each(val,function(k,v){
                    console.log(k+" : "+ v);  
                    
                    //$("#content").html(k+" : "+ v);
                    $("#content").append(k+" : "+ v).append("</br>"); 
                });
            });

        });

    });

    function getData(yt_url, callback) {
        $.ajax({
            type: "GET",
            url: yt_url,
            dataType: "text",
            success: callback,
            error: function(request, status, error) {
                alert(status);
            }
    })}
});

/*
function getData(yt_url, callback) {
    alert('test2');
    $.ajax({
        type: "GET",
        url: yt_url,
        dataType: "jsonp",
        success: callback,
        error: function(request, status, error) {
            alert(status);
        }
    });
}​*/

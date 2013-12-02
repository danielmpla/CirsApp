/**
 * Created with IntelliJ IDEA.
 * User: Daniel
 * Date: 27.11.13
 * Time: 12:46
 */
$(document).ready(function() {

    $.ajax({
        headers: {
            Accept : "application/json; charset=utf-8",
            'Content-Type': 'application/json; charset=utf-8'

        },
        url : "http://141.46.136.3:8080/RisikousRESTful/rest/publications",
        type : "GET",
        dataType: "json",
        crossDomain: true
    }).success(function (data){
        $.each(data, function(key, value){
            if(key == "publication"){
                $.each(value, function(publications){
                    var title;
                    var date;
                    $.each(publications, function(id, val) {
                       if(id == "title"){
                           title = val;
                       }
                       if(id == "entryDate"){
                           date = val;
                       }
                    });
                    $.append("<li>" + title + " " + date +  "</li>", $('#list'));
                });
            }
        });
    });
});
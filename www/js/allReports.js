/**
 * Created with IntelliJ IDEA.
 * User: Daniel
 * Date: 27.11.13
 * Time: 12:46
 */
$(document).ready(function() {

    $.getJSON('http://141.46.136.3:8080/RisikousRESTful/rest/publications', function (data){
        $.each(data, function(key, value){
            if(key == "publication"){
                $.each(value, function(publicationKey, publications){
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
                    $('#reports').append("<input class='menuButton' type='button' value='" + title + "'" +  "onclick=''><br />", $('#reports'));
                });
            }
        });
    });
});
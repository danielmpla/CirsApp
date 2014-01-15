/**
 * Created by Daniel on 15.01.14.
 */
function getParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return(false);
}

var json;

$(document).ready(function() {
    var id = getParam("id");
    $("#headline").text("Mitteilung " + id);
    $.getJSON("http://141.46.136.3:8080/RisikousRESTful/rest/publication/id/" + id, function(data) {
        json = data;
        $.each(data, function(id, value){
            if(id == ""){}
        });
    });
});
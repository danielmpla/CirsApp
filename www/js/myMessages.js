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
            if(id == 'title'){
            	$('#report').append('<h2>Titel</h2>' + value + '<br/>');
            }
            if(id == 'incidentReport'){
            	$('#report').append('<h2>Ereignisbeschreibung der Veröffentlichung</h2>' + value + '<br/>');
            }
            if(id == 'minRPZofReporter'){
            	$('#report').append('<h2>minimale RPZ des Meldenden</h2>' + value + '<br/>');
            }
            if(id == 'avgRPZofReporter'){
            	$('#report').append('<h2>durchschnittliche RPZ des Meldenden</h2>' + value + '<br/>');
            }
            if(id == 'maxRPZofReporter'){
            	$('#report').append('<h2>maximale RPZ des Meldenden</h2>' + value + '<br/>');
            }
            if(id == 'minRPZofQMB'){
            	$('#report').append('<h2>minimale RPZ des QMBs</h2>' + value + '<br/>');
            }
            if(id == 'avgRPZofQMB'){
            	$('#report').append('<h2>durchschnittliche RPZ des QMBs</h2>' + value + '<br/>');
            }
            if(id == 'maxRPZofQMB'){
            	$('#report').append('<h2>maximale RPZ des QMBs</h2>' + value + '<br/>');
            }
            if(id == 'differenceStatement'){
            	$('#report').append('<h2>Begründung der Differenz zwischen den RPZs des Meldenden und denen des QMBs</h2>' + value + '<br/>');
            }
            if(id == 'category'){
            	$('#report').append('<h2>Kategorie der Veröffentlichung</h2>' + value + '<br/>');
            }
            if(id == 'differenceStatement'){
            	$('#report').append('<h2>Maßnahme der Veröffentlichung</h2>' + value + '<br/>');
            }
        });
    });
});
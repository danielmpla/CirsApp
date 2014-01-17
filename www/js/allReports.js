/**
 * Created with IntelliJ IDEA.
 * User: Daniel
 * Date: 27.11.13
 * Time: 12:46
 */
$(document).ready(function() {

    $.get('http://141.46.136.3:8080/RisikousRESTful/rest/publications', function (data){
        var x2js = new X2JS();
        var str = new XMLSerializer();
        var xml = str.serializeToString(data);
        data = x2js.xml_str2json(xml);
        data = data.publications;
        $.each(data, function(key, value){
            if(key == "publication"){
                $.each(value, function(publicationKey, publications){
                    var title;
                    var date;
                    var idOfReport;
                    $.each(publications, function(id, val) {
                       if(id == "title"){
                           title = val;
                       }
                       if(id == "entryDate"){
                           date = val;
                       }
                       if(id == "id"){
                           idOfReport = val;
                       }
                    });
                    $('#reports').append('<a href="../sites/report.html?id=' + idOfReport + '"><input class="menuButton" type="button" value="' + title + '"></a><br />', $('#reports'));
                });
            }
        });
    });
});
/**
 * Created by Daniel on 06.12.13.
 */
$(document).ready(function () {
    function simpleTextarea (text){
        return '<textarea name="' + text +'" rows="6" placeholder="' + text + '"></textarea>';
    }

    $.getJSON('http://141.46.136.3:8080/RisikousRESTful/rest/questionnaire', function (data) {
        var options = {
            allowFutureDates: false
        };
        var dateTime;
        $.each(data, function (key, value) {
            if (key == "contactInformation") {
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.contactInformation.text) + '</div>', $('#report'));
            }
            if (key == "immediateMeasure"){
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.immediateMeasure.text) + '</div>', $('#report'));
            }
            if (key == "opinionOfReporter"){
                $('#report').append('<div id="' + key + '">' + data.opinionOfReporter.text + '<br />' + simpleTextarea(data.opinionOfReporter.organisationalFactors.text) + '<br />' + simpleTextarea(data.opinionOfReporter.personalFactors.text) + '<br />' + simpleTextarea(data.opinionOfReporter.additionalNotes.text) + '</div>', $('#report'));
            }
            if (key == "incidentDescription"){
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.incidentDescription.text) + '</div>', $('#report'));
            }
            if (key == "location"){
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.location.text) + '</div>', $('#report'));
            }
            if (key == "consequences") {
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.consequences.text) + '</div>', $('#report'));
            }
            if (key == "pointOfTime") {
                $('#report').append('<div id="' + key + '">' + data.pointOfTime.text + '<br />' + 'dateTime' + '</div>', $('#report'));
            }
            if(key == "riskEstimation"){
                $('#report').append('<div id="' + key + '">' + data.riskEstimation.text + '<br />' + 'riskEstimation' + '</div>', $('#report'));
            }
            if (key == "files"){
                $('#report').append('<div id="' + key + '">' + data.files.text + '<br />' + 'files' + '</div>', $('#report'));
            }
            if (key == "reportingArea") {
                var options;
                $.getJSON('http://141.46.136.3:8080/RisikousRESTful/rest/reportingareas', function (reportingAreaData) {
                    $.each(reportingAreaData, function (a, b) {
                        $.each(b, function (akey, array) {
                            var nameR;
                            var shortcutR;
                            $.each(array, function (keyR, valueR) {
                                if (keyR == "name") {
                                    nameR = valueR;
                                }
                                if (keyR == "shortcut") {
                                    shortcutR = valueR;
                                }
                            });
                            if (options == null) {
                                options = '<option name="' + shortcutR + '">' + nameR + '</option>';
                            } else {
                                options = options + '<option name="' + shortcutR + '">' + nameR + '</option>';
                            }
                        });
                    });
                    $('#report').append('<div id="' + key + '">' + '<select name="' + data.reportingArea.text + '">' + options + '</select>' + '</div>', $('#report'));
                });
            }
        });
    });
});

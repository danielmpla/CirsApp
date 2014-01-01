/**
 * Created by Daniel on 06.12.13.
 */

var jsonObject;

function send () {
    if(validate()){
        jsonObject.consequences.consequences = $("#consequences>textarea").text();
        jsonObject.contactInformation.contactInformation = $("#contactInformation>textarea").text();
        //Add Files
        jsonObject.immediateMeasure.immediateMeasure = $("#immediateMeasure>textarea").text();
        jsonObject.incidentDescription.incidentDescription = $("#incidentDescription>textarea").text();
        jsonObject.location.location = $("#location>textarea").text();
        jsonObject.opinionOfReporter.organisationalFactors.organisationalFactors = $("#opinionOfReporter:nth-child(1)");
        jsonObject.opinionOfReporter.personalFactors.personalFactors = $("#opinionOfReporter:nth-child(2)");
        jsonObject.opinionOfReporter.additionalNotes.additionalNotes = $("#opinionOfReporter:nth-child(3)");
        //pointOfTime
        jsonObject.reportingArea.reportingArea = $("select." + data.reportingArea.text).val();
        jsonObject.riskEstimation.detectionRating.detectionRating = $("input:radio[name ='detectionRating']:checked").val();
        jsonObject.riskEstimation.occurrenceRating.occurrenceRating = $("input:radio[name ='occurrenceRating']:checked").val();
        jsonObject.riskEstimation.significance.significance = $("input:radio[name ='significance']:checked").val();
        $.post('', jsonObject, function (data, textStatus, jqXHR){
            $('#report').html(data);

        });
    }
}

function resetValidationErrors () {
    $("#consequences>textarea").removeClass("error");
    $("#contactInformation>textarea").removeClass("error");
    //Remove Validation-Error for Files
    $("#immediateMeasure>textarea").removeClass("error");
    $("#incidentDescription>textarea").removeClass("error");
    $("#location>textarea").removeClass("error");
    $("#opinionOfReporter:nth-child(1)").removeClass("error");
    $("#opinionOfReporter:nth-child(2)").removeClass("error");
    $("#opinionOfReporter:nth-child(3)").removeClass("error");
}

function validate() {
    var validationError = false;

    if($("#consequences>textarea").text().length >= jsonObject.consequences.maximumOfCharacters){
        validationError = true;
        $("#consequences>textarea").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.consequences.required){
        if($("#consequences>textarea").text().length <= 0){
            validationError = true;
            $("#consequences>textarea").addClass("error");
            //Add Error-Message
        }
    }
    if($("#contactInformation>textarea").text().length >= jsonObject.contactInformation.maximumOfCharacters){
        validationError = true;
        $("#contactInformation>textarea").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.contactInformation.required){
        if($("#contactInformation>textarea").text().length <= 0){
            validationError = true;
            $("#contactInformation>textarea").addClass("error");
            //Add Error-Message
        }
    }
    //Add Validation-Error for Files
    if($("#immediateMeasure>textarea").text().length >= jsonObject.immediateMeasure.maximumOfCharacters){
        validationError = true;
        $("#immediateMeasure>textarea").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.immediateMeasure.required){
        if($("#immediateMeasure>textarea").text().length <= 0){
            validationError = true;
            $("#immediateMeasure>textarea").addClass("error");
            //Add Error-Message
        }
    }
    if($("#incidentDescription>textarea").text().length >= jsonObject.incidentDescription.maximumOfCharacters){
        validationError = true;
        $("#incidentDescription>textarea").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.incidentDescription.required){
        if($("#incidentDescription>textarea").text().length <= 0){
            validationError = true;
            $("#incidentDescription>textarea").addClass("error");
            //Add Error-Message
        }
    }
    if($("#location>textarea").text().length >= jsonObject.location.maximumOfCharacters){
        validationError = true;
        $("#location>textarea").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.location.required){
        if($("#location>textarea").text().length <= 0){
            validationError = true;
            $("#location>textarea").addClass("error");
            //Add Error-Message
        }
    }
    if($("#opinionOfReporter:nth-child(1)").text().length >= jsonObject.opinionOfReporter.organisationalFactors.maximumOfCharacters){
        validationError = true;
        $("#opinionOfReporter:nth-child(1)").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.opinionOfReporter.organisationalFactors.required){
        if($("#opinionOfReporter:nth-child(1)").text().length <= 0){
            validationError = true;
            $("#opinionOfReporter:nth-child(1)").addClass("error");
            //Add Error-Message
        }
    }
    if($("#opinionOfReporter:nth-child(2)").text().length >= jsonObject.opinionOfReporter.personalFactors.maximumOfCharacters){
        validationError = true;
        $("#opinionOfReporter:nth-child(2)").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.opinionOfReporter.personalFactors.required){
        if($("#opinionOfReporter:nth-child(2)").text().length <= 0){
            validationError = true;
            $("#opinionOfReporter:nth-child(2)").addClass("error");
            //Add Error-Message
        }
    }if($("#opinionOfReporter:nth-child(3)").text().length >= jsonObject.opinionOfReporter.additionalNotes.maximumOfCharacters){
        validationError = true;
        $("#opinionOfReporter:nth-child(3)").addClass("error");
        //Add Error-Message
    }
    if(jsonObject.opinionOfReporter.additionalNotes.required){
        if($("#opinionOfReporter:nth-child(3)").text().length <= 0){
            validationError = true;
            $("#opinionOfReporter:nth-child(3)").addClass("error");
            //Add Error-Message
        }
    }

    return !validationError;
}

$(document).ready(function () {
    function simpleTextarea (text, required){
        if(required){
            return '<textarea name="' + text +'" rows="6" placeholder="' + text + '" required></textarea>';
        }else{
            return '<textarea name="' + text +'" rows="6" placeholder="' + text + '"></textarea>';
        }
    }

    $.getJSON('http://141.46.136.3:8080/RisikousRESTful/rest/questionnaire', function (data) {
        jsonObject = data;
        var options = {
            allowFutureDates: false
        };
        var dateTime;
        $.each(data, function (key, value) {
            if (key == "contactInformation") {
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.contactInformation.text, data.contactInformation.required) + '</div>', $('#report'));
            }
            if (key == "immediateMeasure"){
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.immediateMeasure.text, data.immediateMeasure.required) + '</div>', $('#report'));
            }
            if (key == "opinionOfReporter"){
                $('#report').append('<div id="' + key + '">' + data.opinionOfReporter.text + '<br />' + simpleTextarea(data.opinionOfReporter.organisationalFactors.text, data.opinionOfReporter.organisationalFactors.required) + '<br />' + simpleTextarea(data.opinionOfReporter.personalFactors.text, data.opinionOfReporter.personalFactors.required) + '<br />' + simpleTextarea(data.opinionOfReporter.additionalNotes.text, data.opinionOfReporter.additionalNotes.required) + '</div>', $('#report'));
            }
            if (key == "incidentDescription"){
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.incidentDescription.text, data.incidentDescription.required) + '</div>', $('#report'));
            }
            if (key == "location"){
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.location.text, data.location.required) + '</div>', $('#report'));
            }
            if (key == "consequences") {
                $('#report').append('<div id="' + key + '">' + simpleTextarea(data.consequences.text, data.consequences.required) + '</div>', $('#report'));
            }
            if (key == "pointOfTime") {
                $('#report').append('<div id="' + key + '">' + data.pointOfTime.text + '<br />' + '<input type="datetime-local" data-clear-btn="false" value="">' + '</div>', $('#report'));
            }
            if(key == "riskEstimation"){
               $('#report').append('<div id="' + key + '">' + data.riskEstimation.text + '<br />' + data.riskEstimation.detectionRating.text + '<br />' + '<input type="radio" name="detectionRating" value="1"><input type="radio" name="detectionRating" value="2" checked><input type="radio" name="detectionRating" value="3">' + '<br />' + data.riskEstimation.occurrenceRating.text + '<br />' + '<input type="radio" name="occurrenceRating" value="1"><input type="radio" name="occurrenceRating" value="2" checked><input type="radio" name="occurrenceRating" value="3">' + '<br />' + data.riskEstimation.significance.text + '<br />' + '<input type="radio" name="significance" value="1"><input type="radio" name="significance" value="2" checked><input type="radio" name="significance" value="3">' + '</div>', $('#report'));
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
                    $('#report').append('<input class="menuButton" type="submit" value="Absenden" onclick="send()">', $('#report'))
                });
            }
        });
    });
});

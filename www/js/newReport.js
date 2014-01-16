/**
 * Created by Daniel on 06.12.13.
 */

var jsonObject;

function send () {
    if(validate()){
        jsonObject.consequences.consequences = $("#consequences>textarea").val();
        jsonObject.contactInformation.contactInformation = $("#contactInformation>textarea").val();
        //Add Files
        jsonObject.immediateMeasure.immediateMeasure = $("#immediateMeasure>textarea").val();
        jsonObject.incidentDescription.incidentDescription = $("#incidentDescription>textarea").val();
        jsonObject.location.location = $("#location>textarea").val();
        jsonObject.opinionOfReporter.organisationalFactors.organisationalFactors = $("#organisationalFactors").val();
        jsonObject.opinionOfReporter.personalFactors.personalFactors = $("#personalFactors").val();
        jsonObject.opinionOfReporter.additionalNotes.additionalNotes = $("#additionalNotes").val();
        //pointOfTime
        jsonObject.reportingArea.reportingArea = $("select." + jsonObject.reportingArea.text).val();
        jsonObject.riskEstimation.detectionRating.detectionRating = $("input:radio[name ='detectionRating']:checked").val();
        jsonObject.riskEstimation.occurrenceRating.occurrenceRating = $("input:radio[name ='occurrenceRating']:checked").val();
        jsonObject.riskEstimation.significance.significance = $("input:radio[name ='significance']:checked").val();

        $.post('http://141.46.136.3:8080/RisikousRESTful/rest/questionnaire/addQuestionnaire', jsonObject, function (data, textStatus, jqXHR){
            $('#report').html(data);

        });
    }
}

function resetValidationErrors () {
    $("#consequences>textarea").removeClass("failure");
    $("#contactInformation>textarea").removeClass("failure");
    //Remove Validation-Error for Files
    $("#immediateMeasure>textarea").removeClass("failure");
    $("#incidentDescription>textarea").removeClass("failure");
    $("#location>textarea").removeClass("failure");
    $("#opinionOfReporter:nth-child(1)").removeClass("failure");
    $("#opinionOfReporter:nth-child(2)").removeClass("failure");
    $("#opinionOfReporter:nth-child(3)").removeClass("failure");
}

function validate() {
    var validationError = false;

    if($("#consequences>textarea").val().length >= jsonObject.consequences.maximumOfCharacters){
        validationError = true;
        $("#consequences>textarea").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.consequences.required){
        if($("#consequences>textarea").val().length <= 0){
            validationError = true;
            $("#consequences>textarea").addClass("failure");
            //Add Error-Message
        }
    }
    if($("#contactInformation>textarea").val().length >= jsonObject.contactInformation.maximumOfCharacters){
        validationError = true;
        $("#contactInformation>textarea").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.contactInformation.required){
        if($("#contactInformation>textarea").val().length <= 0){
            validationError = true;
            $("#contactInformation>textarea").addClass("failure");
            //Add Error-Message
        }
    }
    //Add Validation-Error for Files
    if($("#immediateMeasure>textarea").val().length >= jsonObject.immediateMeasure.maximumOfCharacters){
        validationError = true;
        $("#immediateMeasure>textarea").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.immediateMeasure.required){
        if($("#immediateMeasure>textarea").val().length <= 0){
            validationError = true;
            $("#immediateMeasure>textarea").addClass("failure");
            //Add Error-Message
        }
    }
    if($("#incidentDescription>textarea").val().length >= jsonObject.incidentDescription.maximumOfCharacters){
        validationError = true;
        $("#incidentDescription>textarea").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.incidentDescription.required){
        if($("#incidentDescription>textarea").val().length <= 0){
            validationError = true;
            $("#incidentDescription>textarea").addClass("failure");
            //Add Error-Message
        }
    }
    if($("#location>textarea").val().length >= jsonObject.location.maximumOfCharacters){
        validationError = true;
        $("#location>textarea").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.location.required){
        if($("#location>textarea").val().length <= 0){
            validationError = true;
            $("#location>textarea").addClass("failure");
            //Add Error-Message
        }
    }
    if($("#organisationalFactors").val().length >= jsonObject.opinionOfReporter.organisationalFactors.maximumOfCharacters){
        validationError = true;
        $("#organisationalFactors").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.opinionOfReporter.organisationalFactors.required){
        if($("#organisationalFactors").val().length <= 0){
            validationError = true;
            $("#organisationalFactors").addClass("failure");
            //Add Error-Message
        }
    }
    if($("#personalFactors").val().length >= jsonObject.opinionOfReporter.personalFactors.maximumOfCharacters){
        validationError = true;
        $("#personalFactors").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.opinionOfReporter.personalFactors.required){
        if($("#personalFactors").val().length <= 0){
            validationError = true;
            $("#personalFactors").addClass("failure");
            //Add Error-Message
        }
    }if($("#additionalNotes").val().length >= jsonObject.opinionOfReporter.additionalNotes.maximumOfCharacters){
        validationError = true;
        $("#additionalNotes").addClass("failure");
        //Add Error-Message
    }
    if(jsonObject.opinionOfReporter.additionalNotes.required){
        if($("#additionalNotes").val().length <= 0){
            validationError = true;
            $("#additionalNotes").addClass("failure");
            //Add Error-Message
        }
    }

    return !validationError;
}

$(document).ready(function () {
    function simpleTextarea (text, required){
        if(required){
            return '<textarea name="' + text +'" rows="6" required></textarea>';
        }else{
            return '<textarea name="' + text +'" rows="6"></textarea>';
        }
    }

function simpleTextarea (id, text, required){
        if(required){
            return '<textarea id="' + id + '" name="' + text +'" rows="6" required></textarea>';
        }else{
            return '<textarea id="' + id + '" name="' + text +'" rows="6"></textarea>';
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
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.contactInformation.text + '</span><br>' + simpleTextarea(data.contactInformation.text, data.contactInformation.required) + '</div>', $('#report'));
            }
            if (key == "immediateMeasure"){
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.immediateMeasure.text + '</span><br>' + simpleTextarea(data.immediateMeasure.text, data.immediateMeasure.required) + '</div>', $('#report'));
            }
            if (key == "opinionOfReporter"){
                $('#report').append('<div id="' + key + '">' + '<span class="text headline">' + data.opinionOfReporter.text + '</span>' + '<br><span class="text">' + data.opinionOfReporter.organisationalFactors.text + '</span>' + '<br />' + simpleTextarea("organisationalFactors", data.opinionOfReporter.organisationalFactors.text, data.opinionOfReporter.organisationalFactors.required) + '<br><span class="text">' + data.opinionOfReporter.personalFactors.text + '</span>' + '<br />' + simpleTextarea("personalFactors", data.opinionOfReporter.personalFactors.text, data.opinionOfReporter.personalFactors.required) + '<br><span class="text">' + data.opinionOfReporter.additionalNotes.text + '</span><br />' + simpleTextarea("additionalNotes", data.opinionOfReporter.additionalNotes.text, data.opinionOfReporter.additionalNotes.required) + '</div>', $('#report'));
            }
            if (key == "incidentDescription"){
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.incidentDescription.text + '</span><br>' + simpleTextarea(data.incidentDescription.text, data.incidentDescription.required) + '</div>', $('#report'));
            }
            if (key == "location"){
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.location.text + '</span><br>' + simpleTextarea(data.location.text, data.location.required) + '</div>', $('#report'));
            }
            if (key == "consequences") {
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.consequences.text + '</span><br>' +  simpleTextarea(data.consequences.text, data.consequences.required) + '</div>', $('#report'));
            }
            if (key == "pointOfTime") {
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.pointOfTime.text + '</span><br />' + '<input type="datetime-local" data-clear-btn="false" value="">' + '</div>', $('#report'));
            }
            if(key == "riskEstimation"){
               $('#report').append('<div id="' + key + '">' + '<span class="text headline">' + data.riskEstimation.text + '</span><br /><span class="text">' + data.riskEstimation.detectionRating.text + '</span><br />' + '<input type="radio" name="detectionRating" value="1"><input type="radio" name="detectionRating" value="2" checked><input type="radio" name="detectionRating" value="3">' + '<br /><span class="text">' + data.riskEstimation.occurrenceRating.text + '</span><br />' + '<input type="radio" name="occurrenceRating" value="1"><input type="radio" name="occurrenceRating" value="2" checked><input type="radio" name="occurrenceRating" value="3">' + '<br /><span class="text">' + data.riskEstimation.significance.text + '</span><br />' + '<input type="radio" name="significance" value="1"><input type="radio" name="significance" value="2" checked><input type="radio" name="significance" value="3">' + '</div>', $('#report'));
            }
            if (key == "files"){
                $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.files.text + '</span><br />' + 'files' + '</div>', $('#report'));
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
                    $('#report').append('<div id="' + key + '">' + '<span class="text">' + data.reportingArea.text + '<br></span><select name="' + data.reportingArea.text + '">' + options + '</select>' + '</div>', $('#report'));
                    $('#report').append('<input class="menuButton" type="submit" value="Absenden" onclick="send()">', $('#report'))
                });
            }
        });
    });
});

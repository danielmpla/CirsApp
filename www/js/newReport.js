/**
 * Created by Daniel on 06.12.13.
 */
$(document).ready(function () {
    $.getJSON('http://141.46.136.3:8080/RisikousRESTful/rest/questionnaire', function (data) {
        $.each(data, function (key, value) {
            if (key != "reportingArea") {
                $('#report').append('<div id="' + key + '">', $('#report'));
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

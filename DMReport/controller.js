MOST_USAGE_PERCENTLENGTH_LENGTH = 20;
MOST_USAGE_LENGTH = 50;
$(document).ready(function () {
    var data = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }

    var data2 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }

    var data3 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }

    var data4 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }
    var data41 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }
    var data42 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }
    var dataP5 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }
    var dataP6 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }
    var dataP9 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }
    var data5 = {
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
            }
        ]
    }

    var options = {

        //Boolean - If we show the scale above the chart data			
        scaleOverlay: false,

        //Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps: null,
        //Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        //Number - The scale starting value
        scaleStartValue: null,

        //String - Colour of the scale line	
        scaleLineColor: "rgba(0,0,0,.1)",

        //Number - Pixel width of the scale line	
        scaleLineWidth: 1,

        //Boolean - Whether to show labels on the scale	
        scaleShowLabels: true,

        //Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        //String - Scale label font declaration for the scale label
        scaleFontFamily: "'Arial'",

        //Number - Scale label font size in pixels	
        scaleFontSize: 12,

        //String - Scale label font weight style	
        scaleFontStyle: "normal",

        //String - Scale label font colour	
        scaleFontColor: "#666",

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 3,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: false,

        //Boolean - Whether to animate the chart
        animation: true,

        //Number - Number of animation steps
        animationSteps: 60,

        //String - Animation easing effect
        animationEasing: "easeOutQuart",

        //Function - Fires when the animation is complete
        onAnimationComplete: null

    }
    LoadUserIncreaseOption();
    LoadSessionLengthOption();
    LoadArlSelectOption();
    LoadTotalArlSelectFeature();
    LoadConfOrSuppSelectFeature();
    LoadRetention(data, options);
    LoadSessionLength(data2, options);

    LoadMostUsedFeatures(data4, data42, options);
    LoadFeatureTrend(data41, options);
    LoadFeaturePerfTrend(dataP5, dataP6, dataP9, options)

    LoadUserIncrease(data5, options);

    $('#TotalConfOrSupp').on('change', function () {
        LoadTotalConfOrSuppSelectFeature();
    });

    $('#ConfOrSupp').on('change', function () {
        LoadConfOrSuppSelectFeature();
    });

    $('#arlKeySelect').on('change', function () {
        //$("#ConfOrSupp").attr("value", 'true');//设置value=XX的项目为当前选中项 
        //LoadArlSelectFeature();
        LoadConfOrSuppSelectFeature();
    });

    $('#retentionDropDown').on('change', function () {
        LoadRetention(data, options);
    });

    $('#sessionLengthSelect').on('change', function () {
        LoadSessionLength(data2, options);
    });

    $("#featuresSelection").on('change', function () {
        LoadFeatureTrend(data41, options);
        LoadFeaturePerfTrend(dataP5, dataP6, dataP9, options)
    });
});

function LoadUserIncreaseOption() {
    var week;
    /*
    if ($('#retentionDropDown').find("option:selected")[0] == null)
        week = "2015-3";
    else
        week = $('#retentionDropDown').find("option:selected")[0].innerText;
        */
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetUserIncrease',
        data: { week: week },
        success: function (result) {
            result = result.d;
            for (var i = 0; i < result.length; i++) {
                $("#retentionDropDown").append("<option>" + result[i].Date + "</option>");
            }
        }

    });

}

function LoadSessionLengthOption() {
    //alert("we are in the sessionLengthSelectOption");
    var week;
    if ($('#sessionLengthSelect').find("option:selected")[0] == null)
        week = "2013-3";
    else
        week = $('#sessionLengthSelect').find("option:selected")[0].innerText;
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetSessionLength',
        data: { week: week },
        success: function (result) {
            result = result.d;
            for (var i = 0; i < result.length; i++) {
                //alert(result[i].Date);
                $("#sessionLengthSelect").append("<option>" + result[i].Date + "</option>");
            }

        }
    });

}

function LoadRetention(data, options) {
    if ($('#retentionDropDown').find("option:selected")[0] == null)
        return;
    var week = $('#retentionDropDown').find("option:selected")[0].innerText;
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetRetention',
        data: { week: week },
        success: function (result) {
            result = result.d;
            data.labels = [];
            data.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                data.labels.push(result[i].Date);
                data.datasets[0].data.push(result[i].Value);
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#myChart").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Line(data, options);
        }
    });
}

function LoadSessionLength(data2, options) {
    if ($('#sessionLengthSelect').find("option:selected")[0] == null)
        return;
    var week = $('#sessionLengthSelect').find("option:selected")[0].innerText;

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetSessionLength',
        data: { week: week },
        success: function (result) {
            result = result.d;
            data2.labels = [];
            data2.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                data2.labels.push(result[i].Date);
                data2.datasets[0].data.push(result[i].Value);
                //alert(result[i].Date);
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#sessionLengthCanvas").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Bar(data2, options);
        }
    });
}

function LoadMostUsedFeatures(data4, data42, options) {
    //var feature = ($('#featuresSelection').find("option:selected")[0] == null) ? "createsite" : $('#featuresSelection').find("option:selected")[0].innerText;
    var feature;
    if ($('#sessionLengthSelect').find("option:selected")[0] == null)
        feature = "createsite";
    else
        feature = $('#sessionLengthSelect').find("option:selected")[0].innerText;
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetMostUsedFeatures',
        data: { feature: feature },
        success: function (result) {
            result = result.d;
            data4.labels = [];
            data4.datasets[0].data = [];
            data42.labels = [];
            data42.datasets[0].data = [];


            //bubble sort
            var i, j, tv, tk;
            var n = result.length;
            for (i = 0; i < n - 1; i++) {
                for (j = 0; j < n - i - 1; j++) {
                    if (result[j + 1].Value > result[j].Value) {
                        tv = result[j + 1].Value;
                        result[j + 1].Value = result[j].Value;
                        result[j].Value = tv;

                        tk = result[j + 1].Key;
                        result[j + 1].Key = result[j].Key;
                        result[j].Key = tk;
                    }
                }
            }

            var selection = new Array(MOST_USAGE_LENGTH * 2);
            //Get context with jQuery - using jQuery's .get() method.
            for (var i = 0; i < result.length && i < MOST_USAGE_LENGTH; i++) {
                data4.labels.push(result[i].Key);
                data4.datasets[0].data.push(result[i].Value);
                selection[2 * i] = result[i].Key;
                selection[2 * i + 1] = result[i].Value;
            }
            var ctx = $("#mostused").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Bar(data4, options);


            var sum = 0;
            for (var i = 0; i < result.length && i < MOST_USAGE_PERCENTLENGTH_LENGTH; i++) {
                sum += result[i].Value;
            }
            for (var i = 0; i < result.length && i < MOST_USAGE_PERCENTLENGTH_LENGTH; i++) {
                data42.labels.push(result[i].Key);
                data42.datasets[0].data.push(result[i].Value / sum * 100);
            }
            var ctx = $("#mostusedPercentage").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Bar(data42, options);




            //bubble sort
            var is, js, tvs, tks;
            var ns = Math.min(result.length, MOST_USAGE_LENGTH);
            for (is = 0; is < ns - 1; is++) {
                for (js = 0; js < ns - is - 1; js++) {
                    if (selection[2 * (js + 1)] < selection[2 * js]) {
                        tvs = selection[2 * (js + 1)];
                        selection[2 * (js + 1)] = selection[2 * js];
                        selection[2 * js] = tvs;

                        tks = selection[2 * (js + 1) + 1];
                        selection[2 * (js + 1) + 1] = selection[2 * js + 1];
                        selection[2 * js + 1] = tk;
                    }
                }
            }
            //alert("ns5:" + ns);
            var select1 = new Array(MOST_USAGE_LENGTH * 2);
            var len1 = 0;
            //$("#featuresSelection option[index='0']").remove();
            //$("#featuresSelection option[text='createsite']").remove();
            //$("#select_id option[text='createsite']").attr("selected", true);   //设置Select的Text值为jQuery的项选中 
            for (var i = 0; i < ns; i++) {
                if (selection[2 * i] > "createsite") {
                    $("#featuresSelection").append('<option>' + selection[2 * i] + '</option>');
                }
                else if (selection[2 * i] < "createsite") {
                    select1[len1] = selection[2 * i];
                    len1++;
                }
            }
            for (var i = len1 - 1; i >= 0; i--) {
                $("#featuresSelection").prepend("<option value='0'>" + select1[i] + "</option>");
            }
        }
    });
}

function LoadFeatureTrend(data41, options) {
    var feature = ($('#featuresSelection').find("option:selected")[0] == null) ? "createsite" : $('#featuresSelection').find("option:selected")[0].innerText;

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetFeatureTrend',
        data: { feature: feature },
        success: function (result) {
            result = result.d;
            data41.labels = [];
            data41.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                data41.labels.push(result[i].Date);
                //alert("result : date    " + result[i].Date);
                data41.datasets[0].data.push(result[i].Value);
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#featureTrend").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Line(data41, options);
        }
    });
}

function LoadFeaturePerfTrend(dataP5, dataP6, dataP9, options) {
    //alert("we are in the loadFeaturePerfTrend");
    var feature = ($('#featuresSelection').find("option:selected")[0] == null) ? "createsite" : $('#featuresSelection').find("option:selected")[0].innerText;

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetFeaturePerfTrend',
        data: { feature: feature },
        success: function (result) {
            result = result.d;
            dataP5.labels = [];
            dataP5.datasets[0].data = [];
            dataP6.labels = [];
            dataP6.datasets[0].data = [];
            dataP9.labels = [];
            dataP9.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                if (result[i].Date.indexOf("P50") > 0) {
                    //alert("date: "+result[i].Date);
                    //alert("value: "+result[i].Value);
                    dataP5.labels.push(result[i].Date);
                    dataP5.datasets[0].data.push(result[i].Value);
                }
                else if (result[i].Date.indexOf("P66") > 0) {
                    dataP6.labels.push(result[i].Date);
                    dataP6.datasets[0].data.push(result[i].Value);
                }
                else if (result[i].Date.indexOf("P95") > 0) {
                    dataP9.labels.push(result[i].Date);
                    dataP9.datasets[0].data.push(result[i].Value);
                }

            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#featurePerfTrend").get(0).getContext("2d");
            var myNewChartP = new Chart(ctx).LineThree(dataP5, dataP6, dataP9, options);
            //This will get the first returned node in the jQuery collection.
            /*
            var myNewChartP5 = new Chart(ctx).Line(dataP5, options);
            var myNewChartP6 = new Chart(ctx).Line(dataP6, options);
            var myNewChartP9 = new Chart(ctx).Line(dataP9, options);
            */
        }
    });
}

function LoadUserIncrease(data, options) {

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetUserIncrease',
        data: {},
        success: function (result) {
            result = result.d;
            data.labels = [];
            data.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                data.labels.push(result[i].Date);
                data.datasets[0].data.push(result[i].Value);
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#userincreasecanvas").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Line(data, options);
        }
    });
}

function LoadArlSelectOption() {
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetArlOption',
        data: {/* week: week */ },
        success: function (result) {
            result = result.d;
            //alert(result.length);
            for (var i = 0; i < result.length; i++) {
                $("#arlKeySelect").append("<option>" + result[i] + "</option>");
            }

        }
    });
}
function LoadArlSelectFeature() {
    if ($('#sessionLengthSelect').find("option:selected")[0] == null)
        return;
    var feature = $('#arlKeySelect').find("option:selected")[0].innerText;
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetArlFeature',
        data: { feature: feature },
        success: function (result) {
            result = result.d;
            //bubble sort
            var i, j, td, tc, ts;
            var n = result.length;
            for (i = 0; i < n - 1; i++) {
                for (j = 0; j < n - i - 1; j++) {
                    if (result[j + 1].ConfidenceValue > result[j].ConfidenceValue) {
                        tc = result[j + 1].ConfidenceValue;
                        result[j + 1].ConfidenceValue = result[j].ConfidenceValue;
                        result[j].ConfidenceValue = tc;

                        td = result[j + 1].DataValue;
                        result[j + 1].DataValue = result[j].DataValue;
                        result[j].DataValue = td;

                        ts = result[j + 1].SupportValue;
                        result[j + 1].SupportValue = result[j].SupportValue;
                        result[j].SupportValue = ts;
                    }
                }
            }
            $('#arlKeyTable tbody').empty();
            $("#arlKeyTable").append("<tr>" + "<th>BaseName</th>" + "<th></th>" + "<th>TargetName</th>" + "<th>Confidence</th>" + "<th>BaseSupport</th>" + "</tr>");
            for (var i = 0; i < result.length; i++) {
                var left = result[i].DataValue.substr(0, result[i].DataValue.indexOf("=>"));
                var right = result[i].DataValue.substr(result[i].DataValue.indexOf("=>") + 2, result[i].DataValue.length - result[i].DataValue.indexOf("=>") - 2);
                while (left.indexOf(",") != -1) {
                    left = left.replace(",", "<br />");
                }
                while (right.indexOf(",") != -1) {
                    right = right.replace(",", "<br />");
                }
                $("#arlKeyTable").append("<tr id =" + i + ">" + "<th>" + left + "</th>" + "<th>=></th>" + "<th>" + right + "</th>" + "<th>" + result[i].ConfidenceValue + "</th>" + "<th>" + result[i].SupportValue + "</th>" + "</tr>");
                //it looks ugly
                //$("#arlKeyTable").append("<tr>" + "<th>" + result[i].DataValue + "</th>" + "<th>" + result[i].ConfidenceValue + "</th>" + "<th>" + result[i].SupportValue + "</th>" + "</tr>");
                /*we will get the wrong result here
                $("#arlKeyTable").append("<tr>");
                $("#arlKeyTable").append("<th>" + result[i].DataValue + "</th>");
                $("#arlKeyTable").append("<th>" + result[i].ConfidenceValue + "</th>");
                $("#arlKeyTable").append("<th>" + result[i].SupportValue + "</th>");
                $("#arlKeyTable").append("</tr>");
                */
            }
        }
    });
}

function LoadTotalArlSelectFeature() {
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetTotalArlFeature',
        data: {},
        success: function (result) {
            result = result.d;

            //bubble sort
            var i, j, td, tc, ts;
            var n = result.length;
            for (i = 0; i < n - 1; i++) {
                for (j = 0; j < n - i - 1; j++) {
                    if (result[j + 1].ConfidenceValue > result[j].ConfidenceValue) {
                        tc = result[j + 1].ConfidenceValue;
                        result[j + 1].ConfidenceValue = result[j].ConfidenceValue;
                        result[j].ConfidenceValue = tc;

                        td = result[j + 1].DataValue;
                        result[j + 1].DataValue = result[j].DataValue;
                        result[j].DataValue = td;

                        ts = result[j + 1].SupportValue;
                        result[j + 1].SupportValue = result[j].SupportValue;
                        result[j].SupportValue = ts;
                    }
                }
            }
            $("#totalArlTable").append("<tr>" + "<th>BaseName</th>" + "<th></th>" + "<th>TargetName</th>" + "<th>Confidence</th>" + "<th>BaseSupport</th>" + "</tr>");
            for (var i = 0; i < result.length; i++) {
                var left = result[i].DataValue.substr(0, result[i].DataValue.indexOf("=>"));
                var right = result[i].DataValue.substr(result[i].DataValue.indexOf("=>") + 2, result[i].DataValue.length - result[i].DataValue.indexOf("=>") - 2);
                while (left.indexOf(",") != -1) {
                    left = left.replace(",", "<br />");
                }
                while (right.indexOf(",") != -1) {
                    right = right.replace(",", "<br />");
                }
                $("#totalArlTable").append("<tr id =" + i + ">" + "<th>" + left + "</th>" + "<th>=></th>" + "<th>" + right + "</th>" + "<th>" + result[i].ConfidenceValue + "</th>" + "<th>" + result[i].SupportValue + "</th>" + "</tr>");
            }
        }
    });
}

function LoadConfOrSuppSelectFeature() {
    //alert("we are in the LoadConfOrSuppSelectFeature");
    if ($('#arlKeySelect').find("option:selected")[0] == null)
        return;
    var feature = $('#arlKeySelect').find("option:selected")[0].innerText;
    var select = $('#ConfOrSupp').find("option:selected")[0].innerText;
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetArlFeature',
        data: { feature: feature },
        success: function (result) {
            result = result.d;

            if (select.indexOf("Support") >= 0) {
                //alert("we are in the support");
                //bubble sort
                var i, j, td, tc, ts;
                var n = result.length;
                for (i = 0; i < n - 1; i++) {
                    for (j = 0; j < n - i - 1; j++) {
                        if (result[j + 1].SupportValue > result[j].SupportValue) {
                            ts = result[j + 1].SupportValue;
                            result[j + 1].SupportValue = result[j].SupportValue;
                            result[j].SupportValue = ts;

                            td = result[j + 1].DataValue;
                            result[j + 1].DataValue = result[j].DataValue;
                            result[j].DataValue = td;

                            tc = result[j + 1].ConfidenceValue;
                            result[j + 1].ConfidenceValue = result[j].ConfidenceValue;
                            result[j].ConfidenceValue = tc;
                        }
                    }
                }
            }
            else {
                //alert("we are in the confidence");
                var i, j, td, tc, ts;
                var n = result.length;
                for (i = 0; i < n - 1; i++) {
                    for (j = 0; j < n - i - 1; j++) {
                        if (result[j + 1].ConfidenceValue > result[j].ConfidenceValue) {
                            tc = result[j + 1].ConfidenceValue;
                            result[j + 1].ConfidenceValue = result[j].ConfidenceValue;
                            result[j].ConfidenceValue = tc;

                            td = result[j + 1].DataValue;
                            result[j + 1].DataValue = result[j].DataValue;
                            result[j].DataValue = td;

                            ts = result[j + 1].SupportValue;
                            result[j + 1].SupportValue = result[j].SupportValue;
                            result[j].SupportValue = ts;
                        }
                    }
                }
            }
            $('#arlKeyTable tbody').empty();
            $("#arlKeyTable").append("<tr>" + "<th>BaseName</th>" + "<th></th>" + "<th>TargetName</th>" + "<th>Confidence</th>" + "<th>BaseSupport</th>" + "</tr>");
            for (var i = 0; i < result.length; i++) {
                //delete the first lines
                // $("tr[id='" + (i) + "']").remove();

                //tr_id = $("#arlKeyTable>tbody>tr:first").attr("id");
                //$('#' + tr_id).remove();

                var left = result[i].DataValue.substr(0, result[i].DataValue.indexOf("=>"));
                var right = result[i].DataValue.substr(result[i].DataValue.indexOf("=>") + 2, result[i].DataValue.length - result[i].DataValue.indexOf("=>") - 2);
                while (left.indexOf(",") != -1) {
                    left = left.replace(",", "<br />");
                }
                while (right.indexOf(",") != -1) {
                    right = right.replace(",", "<br />");
                }
                /*
                left = left.replace(",", "<br />");
                right = right.replace(",", "<br />");
                if(left.indexOf(",")>=0){
                    alter(left);
                }
                if(right.indexOf(",")>=0){
                    alter(right);
                }
                */
                $("#arlKeyTable").append("<tr id = " + i + ">" + "<th>" + left + "</th>" + "<th>=></th>" + "<th>" + right + "</th>" + "<th>" + result[i].ConfidenceValue + "</th>" + "<th>" + result[i].SupportValue + "</th>" + "</tr>");
            }
        }
    });
}

function LoadTotalConfOrSuppSelectFeature() {
    //alert("we are in the LoadToatalConfOrSuppSelectFeature");
    var select = $('#TotalConfOrSupp').find("option:selected")[0].innerText;
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetTotalArlFeature',
        data: {},
        success: function (result) {
            result = result.d;
            if (select.indexOf("Support") >= 0) {
                //alert("we are in the support");
                //bubble sort
                var i, j, td, tc, ts;
                var n = result.length;
                for (i = 0; i < n - 1; i++) {
                    for (j = 0; j < n - i - 1; j++) {
                        if (result[j + 1].SupportValue > result[j].SupportValue) {
                            ts = result[j + 1].SupportValue;
                            result[j + 1].SupportValue = result[j].SupportValue;
                            result[j].SupportValue = ts;

                            td = result[j + 1].DataValue;
                            result[j + 1].DataValue = result[j].DataValue;
                            result[j].DataValue = td;

                            tc = result[j + 1].ConfidenceValue;
                            result[j + 1].ConfidenceValue = result[j].ConfidenceValue;
                            result[j].ConfidenceValue = tc;
                        }
                    }
                }
            }
            else {
                //alert("we are in the confidence");
                var i, j, td, tc, ts;
                var n = result.length;
                for (i = 0; i < n - 1; i++) {
                    for (j = 0; j < n - i - 1; j++) {
                        if (result[j + 1].ConfidenceValue > result[j].ConfidenceValue) {
                            tc = result[j + 1].ConfidenceValue;
                            result[j + 1].ConfidenceValue = result[j].ConfidenceValue;
                            result[j].ConfidenceValue = tc;

                            td = result[j + 1].DataValue;
                            result[j + 1].DataValue = result[j].DataValue;
                            result[j].DataValue = td;

                            ts = result[j + 1].SupportValue;
                            result[j + 1].SupportValue = result[j].SupportValue;
                            result[j].SupportValue = ts;
                        }
                    }
                }
            }
            $('#totalArlTable tbody').empty();
            $("#totalArlTable").append("<tr>" + "<th>BaseName</th>" + "<th></th>" + "<th>TargetName</th>" + "<th>Confidence</th>" + "<th>BaseSupport</th>" + "</tr>");
            for (var i = 0; i < result.length; i++) {
                //delete the first lines
                //$("tr[id='" + (i) + "']").remove();

                //tr_id = $("#TotalConfOrSupp>tbody>tr:first").attr("id");
                //$('#' + tr_id).remove();

                var left = result[i].DataValue.substr(0, result[i].DataValue.indexOf("=>"));
                var right = result[i].DataValue.substr(result[i].DataValue.indexOf("=>") + 2, result[i].DataValue.length - result[i].DataValue.indexOf("=>") - 2);
                while (left.indexOf(",") != -1) {
                    left = left.replace(",", "<br />");
                }
                while (right.indexOf(",") != -1) {
                    right = right.replace(",", "<br />");
                }
                $("#totalArlTable").append("<tr id = " + i + ">" + "<th>" + left + "</th>" + "<th>=></th>" + "<th>" + right + "</th>" + "<th>" + result[i].ConfidenceValue + "</th>" + "<th>" + result[i].SupportValue + "</th>" + "</tr>");
            }
        }
    });
}
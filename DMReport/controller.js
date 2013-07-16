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
        datasetFill: true,

        //Boolean - Whether to animate the chart
        animation: true,

        //Number - Number of animation steps
        animationSteps: 60,

        //String - Animation easing effect
        animationEasing: "easeOutQuart",

        //Function - Fires when the animation is complete
        onAnimationComplete: null

    }

    LoadRetention(data, options);
    LoadSessionLength(data2, options);
    LoadMostUsedFeatures(data3, options);
    LoadUserIncrease(data5, options);

    $('#retentionDropDown').on('change', function() {
        LoadRetention(data, options);
    });

    $('#sessionLengthSelect').on('change', function () {
        LoadSessionLength(data2, options);
    });

    $("#featuresSelection").on('change', function () {
        LoadFeatureTrend(data4, options);
    });
});


function LoadRetention(data, options) {
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
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#sessionLengthCanvas").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Bar(data2, options);
        }
    });
}

function LoadMostUsedFeatures(data2, options) {
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetMostUsedFeatures',
        data: { },
        success: function (result) {
            result = result.d;
            data2.labels = [];
            data2.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                data2.labels.push(result[i].Key);
                data2.datasets[0].data.push(result[i].Value);

                $("#featuresSelection").append('<option>' + result[i].Key + '</option>');
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#mostused").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Bar(data2, options);
        }
    });
}

function LoadFeatureTrend(data2, options) {
    var feature = $('#featuresSelection').find("option:selected")[0].innerText;

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetFeatureTrend',
        data: {feature: feature},
        success: function (result) {
            result = result.d;
            data2.labels = [];
            data2.datasets[0].data = [];

            for (var i = 0; i < result.length; i++) {
                data2.labels.push(result[i].Date);
                data2.datasets[0].data.push(result[i].Value);
            }

            //Get context with jQuery - using jQuery's .get() method.
            var ctx = $("#featureTrend").get(0).getContext("2d");
            //This will get the first returned node in the jQuery collection.
            var myNewChart = new Chart(ctx).Line(data2, options);
        }
    });
}

function LoadUserIncrease(data, options) {

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: 'DMService.svc/GetUserIncrease',
        data: { },
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
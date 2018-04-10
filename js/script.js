$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(initialize);

    function initialize() {
        drawPieChart("pieChart");
        drawLineChart("lineChart");
    }

    function drawPieChart(HTMLElementId) {

        var chartData = {
            ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
            'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
            ['2020', 16, 22, 23, 30, 16, 9, ''],
            ['2030', 28, 19, 29, 30, 12, 13, '']
        };

        console.log(chartData);

        var jsonData;

        $.ajax({
            url: "",
            dataType: "json",
            async: false
        });
    }
});
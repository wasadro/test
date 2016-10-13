$(document).ready(function(){

//表一
$('#carstyle1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'B90',
                'X80',
                'B70',
                'B50',
                'B30',
                '欧朗',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '完成情况',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, ]

        }]
 });

$('#carstyle2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'B90',
                'X80',
                'B70',
                'B50',
                'B30',
                '欧朗',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '完成情况',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, ]

        }]
 });


//表二
$('#daystyle1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                '东北',
                '华北',
                '华东',
                '华中',
                '西部',
                '南部',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '目标',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0,]

        }, {
            name: '已完成',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5,]

        }, {
            name: '完成率',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3,]

        }]
 });

$('#daystyle2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                '东北',
                '华北',
                '华东',
                '华中',
                '西部',
                '南部',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '目标',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0,]

        }, {
            name: '已完成',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5,]

        }, {
            name: '完成率',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3,]

        }]
 });




//表三
$(function () {
    $('#daystyl').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                '东北',
                '华北',
                '华东',
                '华中',
                '西部',
                '南部',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '目标',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0,]

        }, {
            name: '已完成',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5,]

        }, {
            name: '完成率',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3,]

        }]
    });
});




});



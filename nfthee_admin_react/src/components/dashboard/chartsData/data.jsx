export const DefaultChartsOptions = {
    animationEnabled: false,
    axisX: {
    },
    axisY: {
        prefix: "$",
        includeZero: false
    },
    theme: "light2",
    colorSet: "greenShades",
    height:497,
    data: [{
        yValueFormatString: "$#,###",
        xValueFormatString: "Electronics",
        type: "spline",
        dataPoints: [
            {x: 0, y: 10}, {x: 10, y: 20}, {x: 20, y: 40}, {x: 30, y: 30}, {x: 40, y: 5}, {x: 50, y: 20}, {x: 60, y: 10}, {x: 70, y: 30}, {x: 80, y: 10}
        ]
    },
    {
        yValueFormatString: "$#,###",
        xValueFormatString: "Clothes",
        type: "spline",
        dataPoints: [{x: 0, y: 20}, {x: 10, y: 40}, {x: 20, y: 10}, {x: 30, y: 20}, {x: 40, y: 40}, {x: 50, y: 30}, {x: 60, y: 40}, {x: 70, y: 10}, {x: 80, y: 20}]
    },
    {
        yValueFormatString: "$#,###",
        xValueFormatString: "Toys",
        type: "spline",
        dataPoints: [{x: 0, y: 10}, {x: 10, y: 60}, {x: 20, y: 10}, {x: 30, y: 40}, {x: 40, y: 30}, {x: 50, y: 80}, {x: 60, y: 30}, {x: 70, y: 20}, {x: 80, y: 90}]
    }]
}

export const EcommerceCharts = {
    series : {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
            [10, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
            [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
            [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
            [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ]
    },
    options : {
        fullWidth: true,
        height:'480px',
        low: 0,
        axisX: {
            offset: 20,
            labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
            }
        },
        axisY: {
            onlyInteger: true,
            offset: 20
        }
    }
}

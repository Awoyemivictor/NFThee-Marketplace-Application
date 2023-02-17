

export const lineChart = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "",
            data: [54, 63, 60, 65, 60, 66, 60],
            borderColor: '#ab8ce4',
            pointBorderColor: '#ab8ce4',
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#ab8ce4',
            pointHoverBorderColor: '#ab8ce4',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            fill: false,
            borderWidth: 2
        }
    ]
};

export const lineChartOptions = {
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const AreaChart = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "",
            data: [54, 63, 60, 65, 60, 68, 60],
            borderColor: '#854fe6',
            pointBorderColor: '#854fe6',
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#ab8ce4',
            pointHoverBorderColor: '#ab8ce4',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            fill: true,
            borderWidth: 2
        }
    ]
};

export const  AreaChartOptions = {
    plugins: {
        datalabels: {
            display: false,
        }
    }
}



export const doughnutChart = {
        labels: ["Purple", "Blue", "Green"],
        datasets: [
            {
                label: "",
                borderColor: ["#854fe6", "#2ea0ad", "#00c292" ],
                backgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
                borderWidth: 2,
                data: [15, 25, 20]
            }
        ]
};



export const barChartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Cakes",
                borderColor: "#854fe6",
                backgroundColor: "rgb(198, 180, 234, 0.5)",
                data: [456, 479, 324, 569, 702, 600],
                borderWidth: 2
            },
            {
                label: "Desserts",
                borderColor: "#2ea0ad",
                backgroundColor: "rgb(100, 221, 234, 0.5)",
                data: [364, 504, 605, 400, 345, 320],
                borderWidth: 2
            }
        ]
};

export const barChartOptions = {
    plugins: {
        datalabels: {
            display: false,
        }
    }
}



export const ScatterChartData = {
    datasets: [
        {
            borderWidth: 2,
            label: "Cakes",
            borderColor: "#854fe6",
            backgroundColor: "#ab8ce4",
            data: [
                { x: 62, y: -78 },
                { x: -0, y: 74 },
                { x: -67, y: 45 },
                { x: -26, y: -43 },
                { x: -15, y: -30 },
                { x: 65, y: -68 },
                { x: -28, y: -61 }
            ]
        
        },
        {
            borderWidth: 2,
            label: "Desserts",
            borderColor: "#2ea0ad",
            backgroundColor: "#2ea0ad",
            data: [
                { x: 79, y: 62 },
                { x: 62, y: 0 },
                { x: -76, y: -81 },
                { x: -51, y: 41 },
                { x: -9, y: 9 },
                { x: 72, y: -37 },
                { x: 62, y: -26 }
            ]
        }
        
    ]
   
};

export const ScatterChartOptions = {
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const PieChartData = {
    labels: ["Cakes", "Cupcakes", "Desserts"],
    datasets: [
        {
            label: "",
            borderColor: ["#854fe6","#2ea0ad", "#00c292"],
            backgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
            borderWidth: 2,
            data: [15, 25, 20]
        }
    ]
};

export const RadarChartData = {
    datasets: [
        {
            label: "Stock",
            borderWidth: 2,
            pointBackgroundColor: "#854fe6",
            borderColor: "#ab8ce4",
            backgroundColor: 'rgb(198, 180, 234, 0.5)',
            data: [80, 90, 70]
        },
        {
            label: "Order",
            borderWidth: 2,
            pointBackgroundColor: "#2ea0ad",
            borderColor: "#26c6da",
            backgroundColor: "rgb(100, 221, 234, 0.5)",
            data: [68, 80, 95]
        }
    ],
    labels: ["Cakes", "Desserts", "Cupcakes"]
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getState = () => ({
    labels: [
        'Purple',
        'Blue',
        'Green'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        borderColor: ["#854fe6", "#2ea0ad", "#00c292" ],
        backgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
        hoverBackgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
    }]
});

export const data = {
    labels: [
            'purple',
            'Blue',
            'green'
        ],
        datasets: [{
            data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
            borderColor: ["#854fe6", "#2ea0ad", "#00c292" ],
            backgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
            hoverBackgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
        }]
}


import React  from 'react';
import { Chart } from "react-google-charts";
const primary = localStorage.getItem('primary_color') 
const secondary = localStorage.getItem('secondary_color')

export const GooglePieChart1 = () => {
    return(
    <Chart
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
        ['Task', 'Hours per Day'],
        ['Work',     5],
        ['Eat',      10],
        ['Commute',  15],
        ['Watch TV', 20],
        ['Sleep',    25]
        ]}
        options={{
        title: 'My Daily Activities',
        chartArea: { width: '70%', height: '80%' },
        colors: [primary, secondary, "#00c292", "#4099ff", "#FF5370"]
        }}
        rootProps={{ 'data-testid': '1' }}
        />
        )
}

export const GooglePieChart2 = () => {
    return(
    <Chart
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
                ['Task', 'Hours per Day'],
                ['Work',     5],
                ['Eat',      10],
                ['Commute',  15],
                ['Watch TV', 20],
                ['Sleep',    25]
                ]}
            options={{
                title: 'My Daily Activities',
                is3D: true,
                chartArea: { width: '70%', height: '80%' },
                colors: [primary, secondary, "#00c292", "#4099ff", "#FF5370"]
                }}
        rootProps={{ 'data-testid': '2' }}
        />
    )
    
}

export const GooglePieChart3 = () => {
    return(
    <Chart
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
                ['Task', 'Hours per Day'],
                ['Work',     2],
                ['Eat',      2],
                ['Commute',  11],
                ['Watch TV', 2],
                ['Sleep',    7]
                ]}
                options={{
                title: 'My Daily Activities',
                pieHole: 0.4,
                chartArea: { width: 600, height: 400 },
                colors: [primary, secondary, "#00c292", "#4099ff", "#FF5370", "#FF5370"]
                }}
        rootProps={{ 'data-testid': '3' }}
        />
    )
    
}

export const GooglePieChart4 = () => {
    return(
    <Chart
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
        ['Language', 'Speakers (in millions)'],
        ['Assamese', 13],
        ['Bengali', 83],
        ['Bodo', 1.4],
        ['Dogri', 2.3],
        ['Gujarati', 46],
        ['Hindi', 300],
        ['Kannada', 38],
        ['Kashmiri', 5.5],
        ['Konkani', 5],
        ['Maithili', 20],
        ['Malayalam', 33],
        ['Manipuri', 1.5],
        ['Marathi', 72],
        ['Nepali', 2.9],
        ['Oriya', 33],
        ['Punjabi', 29],
        ['Sanskrit', 0.01],
        ['Santhali', 6.5],
        ['Sindhi', 2.5],
        ['Tamil', 61],
        ['Telugu', 74],
        ['Urdu', 52],
        ]}
        options={{
        title: 'Indian Language Use',
        legend: 'none',
        chartArea: { width: '60%', height: '70%' },
        pieSliceText: 'label',
        slices: {  4: {offset: 0.2},
        12: {offset: 0.3},
        14: {offset: 0.4},
        15: {offset: 0.5},
        },
        colors: [primary, secondary, "#00c292", "#4099ff", "#f3d800", "#FF5370",primary, secondary, "#00c292", "#4099ff", "#f3d800", "#FF5370",primary, secondary, "#00c292", "#4099ff", "#f3d800", "#FF5370", "#fd7b6c", "#00c292","#4099ff", "#f3d800"]
        }}
        rootProps={{ 'data-testid': '5' }}
        />
        )
}

export const GoogleAreaChart1 = () => {
    return(
    <Chart
        height={'300px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540],
        ]}
        options={{
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        // For the legend to fit, we make the chart area smaller
        chartArea: { width: '60%', height: '70%' },
        // lineWidth: 25
        colors: [primary, secondary]
        }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
        />
    )

}

export const GoogleAreaChart2 = () => {
    return(
    <Chart
        height={'300px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Year', 'Cars', 'Trucks' , 'Drones' , 'Segways'],
            ['2013',  100, 400, 2000, 400],
            ['2014',  500, 700, 530, 800],
            ['2015',  2000, 1000, 620, 120],
            ['2016',  120, 201, 2501, 540]
        ]}
        options={{
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        // For the legend to fit, we make the chart area smaller
        chartArea: { width: '60%', height: '70%' },
        // lineWidth: 25
        colors: [primary, secondary, "#00c292", "#4099ff"]
        }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
        />
        )
}

export const GoogleColumnChart1 = () => {
    return(
    <Chart
        height={'400px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ["2014", 1e3, 400, 250],
            ["2015", 1170, 460, 300],
            ["2016", 660, 1120, 400],
            ["2017", 1030, 540, 450]
            ]}
        options={{
            // Material design options
            chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            },
            colors: [primary, secondary, "#00c292"]
            }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
        />
        )
}

export const GoogleColumnChart2 = () => {
    return(
    <Chart
        height={'400px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
        ]}
        options={{
        title: 'Population of Largest U.S. Cities',
        chartArea: { width: '50%' },
        colors: [primary, secondary, "#00c292"],
        vAxis: {
        format: "decimal"
        },
        }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
        />
        )
}

export const GoogleBarChart1 = () => {
    return(
    <Chart
        height={'400px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
        ["Element", "Density", { role: "style" } ],
        ["Copper", 10, primary],
        ["Silver", 12, secondary],
        ["Gold", 14, "#00c292"],
        ["Platinum", 16, "color: #4099ff"]
        ]}
        options={{
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        colors: [primary, secondary, "#00c292", "#4099ff"]
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
        />
        )
}

export const GoogleBarChart2 = () => {
    return(
    <Chart
        height={'400px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
        [
        'Element',
        'Density',
        { role: 'style' },
        {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
        },
        ],
        ['Copper', 10, primary, null],
        ['Silver', 12, secondary, null],
        ['Gold', 14, '#00c292', null],
        ['Platinum', 16, 'color: #4099ff', null],
        ]}
        options={{
        title: 'Density of Precious Metals, in g/cm^3',
        height: 400,
        bar: { groupWidth: '95%' },
        legend: { position: 'none' },
        }}
        // For tests
        rootProps={{ 'data-testid': '6' }}
        />
        )
}

export const GoogleLineChart = () => {
    return(
    <Chart
        width={`100%`}
        height={'400px'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={[
                [
                    'Day',
                    'Guardians of the Galaxy',
                    'The Avengers',
                    'Transformers: Age of Extinction',
                ],
                [1,  37.8, 80.8, 41.8],
                [2,  30.9, 10.5, 32.4],
                [3,  40.4,   57, 25.7],
                [4,  11.7, 18.8, 10.5],
                [5,  20, 17.6, 10.4],
                [6,   8.8, 13.6,  7.7],
                [7,   7.6, 12.3,  9.6],
                [8,  12.3, 29.2, 10.6],
                [9,  16.9, 42.9, 14.8],
                [10, 12.8, 30.9, 11.6],
                [11,  5.3,  7.9,  4.7],
                [12,  6.6,  8.4,  5.2],
                ]}
                options={{
                chart: {
                    title: 'Box Office Earnings in First Two Weeks of Opening',
                    subtitle: 'in millions of dollars (USD)',
                },
                colors: [primary, secondary, "#00c292"],
                }}
        rootProps={{ 'data-testid': '3' }}
        />
    )
}

export const GoogleComboChart = () => {
    return(
    <Chart
        width={`100%`}
        height={'400px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
            [
            'Month',
            'Bolivia',
            'Ecuador',
            'Madagascar',
            'Papua New Guinea',
            'Rwanda',
            'Average',
            ],
            ['2004/05', 165, 938, 522, 998, 450, 614.6],
            ['2005/06', 135, 1120, 599, 1268, 288, 682],
            ['2006/07', 157, 1167, 587, 807, 397, 623],
            ['2007/08', 139, 1110, 615, 968, 215, 609.4],
            ['2008/09', 136, 691, 629, 1026, 366, 569.6],
        ]}
        options={{
            title: 'Monthly Coffee Production by Country',
            vAxis: { title: 'Cups' },
            hAxis: { title: 'Month' },
            seriesType: 'bars',
            series: { 5: { type: 'line' } },
            colors: [primary, secondary, "#00c292", "#4099ff", "#FF5370"]
        }}
        rootProps={{ 'data-testid': '1' }}
    />
    )

}

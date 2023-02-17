import React, {Fragment, useState, useEffect} from 'react';
import {
    Line,
    Doughnut,
    Bar,
    Scatter,
    Pie,
    Radar
} from 'react-chartjs-2';
import Breadcrumb from '../../common/breadcrumb.component';
import {
    doughnutChart,
    lineChart,
    lineChartOptions,
    AreaChart,
    AreaChartOptions,
    barChartData,
    ScatterChartData,
    ScatterChartOptions,
    barChartOptions,
    PieChartData,
    RadarChartData,
    data,
    getState
} from './chart-js-data';
import {Container,Col,Row,Card,CardHeader,CardBody} from 'reactstrap'

const ReactChartJS = () => {

    const [chartData,setchartData] = useState(data)


    useEffect(() =>  {
        const timeout = setInterval(() => {
            setchartData(getState());
        }, 5000);
        return () => {
            clearTimeout(timeout);
         }
    },[])
    
    return(
        <Fragment>
            <Breadcrumb title="React-ChartJs" parent="Charts" />
            <Container fluid={true}>
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Line Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Line data={lineChart} options={lineChartOptions} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Area Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Line data={AreaChart} options={AreaChartOptions} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Doughnut Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Doughnut data={doughnutChart} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Dynamicly refreshed Doughnut</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Doughnut data={chartData} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Bar Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Bar data={barChartData} options={barChartOptions} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Scatter Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Scatter data={ScatterChartData} options={ScatterChartOptions} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Pie Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Pie data={PieChartData} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Scatter Chart</h5>
                            </CardHeader>
                            <CardBody className="chart-block">
                                <Radar data={RadarChartData} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}


export default ReactChartJS;
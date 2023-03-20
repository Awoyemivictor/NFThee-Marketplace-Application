import React,{Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import Chart from 'react-apexcharts'
import { 
    areaSpaline,
    apexAreaChart,
    apexColumnChartsone,
    apexPieChart,
    apex3DbubbleCharts,
    apexRadialBarChart,
    apexCandleStickCharts,
    apexRadarPolygonfillCharts,
    apexSteplineChart,
    apexLineWithAnnotationCharts,
    apexDonutCharts,
    apexMixedCharts,
    apexBarChart } from "./apex-data";
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'

const Apexcharts = (props)  => {
    return (
        <Fragment>
        <Breadcrumb title="Apex Chart" parent="Charts" />
        <Container fluid={true}>
        <Row>
          <Col sm="12" xl="8">
            <Card>
              <CardHeader>
                <h5>Area Spaline Chart </h5>
              </CardHeader>
              <CardBody>
                <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" /> 
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="4">
            <Card>
              <CardHeader>
                <h5>Basic Area Chart </h5>
              </CardHeader>
              <CardBody>
                <div id="basic-apex">
                <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="8">
            <Card>
              <CardHeader>
                <h5>Column Chart </h5>
              </CardHeader>
              <CardBody>
                <div id="column-chart">
                <Chart options={apexColumnChartsone.options} series={apexColumnChartsone.series} type="bar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="4">
            <Card>
              <CardHeader>
                <h5>Pie Chart </h5>
              </CardHeader>
              <CardBody className="apex-chart">
                <div id="piechart">
                <Chart options={apexPieChart.options} series={apexPieChart.series} type="pie" width={380} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="8">
            <Card>
              <CardHeader>
                <h5>
                   3d Bubble Chart </h5>
              </CardHeader>
              <CardBody>
                <div id="chart-bubble">
                <Chart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="4">
            <Card>
              <CardHeader>
                <h5>Radial Bar Chart</h5>
              </CardHeader>
              <CardBody>
                <div id="circlechart">
                <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="8">
            <Card>
              <CardHeader>
                <h5>Candlestick Chart </h5>
              </CardHeader>
              <CardBody>
                <div id="candlestick">
                <Chart options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type="candlestick" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="4">
            <Card>
              <CardHeader>
                <h5>Radar Chart </h5>
              </CardHeader>
              <CardBody>
                <div id="radarchart">
                <Chart options={apexRadarPolygonfillCharts.options} series={apexRadarPolygonfillCharts.series} type="radar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="8">
            <Card>
              <CardHeader>
                <h5>Stepline Chart </h5>
              </CardHeader>
              <CardBody>
                <div id="stepline">
                <Chart options={apexSteplineChart.options} series={apexSteplineChart.series} type="line" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-12" xl="4">
            <Card>
              <CardHeader>
                <h5>Bar chart</h5>
              </CardHeader>
              <CardBody>
                <div id="basic-bar">
                <Chart options={apexBarChart.options} series={apexBarChart.series} type="bar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Column Chart</h5>
              </CardHeader>
              <CardBody>
                <div id="annotationchart">
                <Chart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 set-col-6" xl="4">
            <Card>
              <CardHeader>
                <h5>Donut Chart</h5>
              </CardHeader>
              <CardBody className="apex-chart">
                <div id="donutchart">
                <Chart options={apexDonutCharts.options} series={apexDonutCharts.series} type="donut" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="8 set-col-6" sm="12">
            <Card>
              <CardHeader>
                <h5>Mixed Chart</h5>
              </CardHeader>
              <CardBody>
                <div id="mixedchart">
                <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="line" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default Apexcharts;
import React  from 'react';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Breadcrumb from '../common/breadcrumb.component';
import ChartistGraph from 'react-chartist';
import {marketChartData,
        marketChartOptions,
        EarningChartData,
        EarningChartOptions,
        LiveChartData,
        LiveChartOptions,
        TunoverData,
        TunoverOption,
        MonthalyData,
        MonthalyOption,
        UsesData,
        UsesOption,
        financeData,financeOption,orderData,orderOption,skillData,skillOption,browserData,browserOption
    } from './chart-widgets-data'

const ChartWidget = () => {

    return (
        <div>
            <Breadcrumb title="General Widget" parent="Home"/>
            {/* Container-fluid starts */}
            <Container fluid={true}>

                <Row>
                    <Col xl="4" md="12">
                        <Card>
                            <div className="chart-widget-top bg-primary">
                                <CardBody className="row">
                                    <div className="col-5">
                                        <h5>SALE</h5>
                                        <span className="num"><span className="counter">90</span>%<i
                                            className="icon-angle-up f-12 ml-1"></i></span>
                                    </div>
                                    <div className="col-7 text-right">
                                        <h4 className="num total-value">$ <span className="counter">3654</span>.00
                                        </h4>
                                    </div>
                                </CardBody>
                                <div>
                                    <div className="dashboard-chart-container ">
                                    <Sparklines data={[25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]} className="flot-chart-placeholder">
                                        <SparklinesLine color="#8B72BD" />
                                    </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="4" md="12">
                        <Card>
                            <div className="chart-widget-top bg-secondary">
                                <CardBody className="row">
                                    <div className="col-7">
                                        <h5>PROJECTS</h5>
                                        <span className="num"><span className="counter">30</span>%<i
                                            className="icon-angle-up f-12 ml-1"></i></span>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h4 className="num total-value counter">12569</h4>
                                    </div>
                                </CardBody>
                                <div>
                                    <Sparklines data={[25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]} className="flot-chart-placeholder">
                                        <SparklinesLine color="#0993a5" />
                                    </Sparklines>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="4" md="12">
                        <Card>
                            <div className="chart-widget-top bg-success">
                                <CardBody className="row">
                                    <div className="col-7">
                                        <h5>PRODUCTS</h5>
                                        <span className="num"><span className="counter">68</span>%<i
                                            className="icon-angle-up f-12 ml-1"></i></span>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h4 className="num total-value"><span className="counter">963</span>M</h4>
                                    </div>
                                </CardBody>
                                <div>
                                    <Sparklines data={[25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]} className="flot-chart-placeholder">
                                        <SparklinesLine color="#1c954d" />
                                    </Sparklines>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl="6" md="12">
                        <Card className="o-hidden">
                            <div className="bar-chart-widget">
                                <div className="top-content bg-primary">
                                    <Row>
                                        <div className="col-7">
                                            <CardBody className="bar-chart pb-0" id="chart-bar-widget-first">
                                                <ChartistGraph data={marketChartData} options={marketChartOptions} type={'Bar'} />
                                            </CardBody>
                                        </div>
                                        <div className="col-5">
                                            <div className="earning-details">
                                                <div className="text-left">
                                                    <span>Marketing Expenses</span>
                                                    <h4 className="mt-1 num mb-0">$ <span
                                                        className="counter">3654</span></h4>
                                                </div>
                                                <i className="icon-announcement"></i>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                                <CardBody className="bottom-content">
                                    <Row>
                                        <div className="col-4 b-r-light">
                                            <div>
                                                <span className="num font-primary">12%<i
                                                    className="icon-angle-up f-12 ml-1"></i></span>
                                                <span className="text-muted mt-2 mb-2 block-bottom">Marketing</span>
                                                <h4 className="num m-0">$<span
                                                    className="counter color-bottom">9313</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-4 b-r-light">
                                            <div>
                                                <span className="num font-secondary">15%<i
                                                    className="icon-angle-up f-12 ml-1"></i></span>
                                                <span className="text-muted mt-2 mb-2 block-bottom">Affiliate</span>
                                                <h4 className="num m-0">$<span
                                                    className="counter color-bottom">2314</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div>
                                                <span className="num font-success">34%<i
                                                    className="icon-angle-up f-12 ml-1"></i></span>
                                                <span
                                                    className="text-muted  mt-2 mb-2 block-bottom">Advertise</span>
                                                <h4 className="num m-0">$<span
                                                    className="counter color-bottom"> 4219</span></h4>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card className="o-hidden">
                            <div className="bar-chart-widget">
                                <div className="top-content bg-secondary">
                                    <Row>
                                        <div className="col-7">
                                            <div className="bar-chart card-body pb-0">
                                                <ChartistGraph data={EarningChartData} options={EarningChartOptions} type={'Bar'} />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="earning-details">
                                                <div className="text-left">
                                                    <span>Total Earning</span>
                                                    <h4 className="mt-1 num mb-0"><span
                                                        className="counter">3653</span> M</h4>
                                                </div>
                                                <i className="icofont icofont-coins"></i>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                                <CardBody className="bottom-content">
                                    <Row>
                                        <div className="col-4 b-r-light">
                                            <div>
                                                <span className="num font-primary">12%<i
                                                    className="icon-angle-up f-12 ml-1"></i></span>
                                                <span className="text-muted mt-2 mb-2 block-bottom">Year</span>
                                                <h4 className="num m-0"><span
                                                    className="counter color-bottom">3659</span>M</h4>
                                            </div>
                                        </div>
                                        <div className="col-4 b-r-light">
                                            <div>
                                                <span className="num font-secondary">15%<i
                                                    className="icon-angle-up f-12 ml-1"></i></span>
                                                <span className="text-muted mt-2 mb-2 block-bottom">Month</span>
                                                <h4 className="num m-0"><span
                                                    className="counter color-bottom">698</span>M</h4>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div>
                                                <span className="num font-success">34%<i
                                                    className="icon-angle-up f-12 ml-1"></i></span>
                                                <span className="text-muted mt-2 mb-2 block-bottom">Today</span>
                                                <h4 className="num m-0"><span
                                                    className="counter color-bottom">9361</span>M</h4>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/*small widgets Start*/}
                <Row>
                    <Col md="6" className="xl-50">
                        <div className="small-chart-widget chart-widgets-small">
                            <Card>
                                <CardHeader>
                                    <h5>Live Products</h5>
                                </CardHeader>
                                <CardBody className="bg-info">
                                    <div className="chart-container">
                                        <ChartistGraph 
                                            className="live-products" 
                                            data={LiveChartData}
                                            options={LiveChartOptions} 
                                            type={'Line'} 
                                            listener={{
                                                'draw' : function(data) {
                                                    if(data.type === 'line' || data.type === 'area') {
                                                        data.element.animate({
                                                            d: {
                                                                begin: 2000 * data.index,
                                                                dur: 2000,
                                                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                                                to: data.path.clone().stringify(),
                                                                //easing: Chartist.Svg.Easing.easeOutQuint
                                                            }
                                                        });
                                                    }
                                                }
                                            }} 
                                            
                                            />
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col md="6" className="xl-50">
                        <div className="small-chart-widget chart-widgets-small">
                            <Card>
                                <CardHeader>
                                    <h5>Turnover</h5>
                                </CardHeader>
                                <CardBody className="bg-success">
                                    <div className="chart-container">
                                        {/* <div className="turnover"></div> */}
                                        <ChartistGraph 
                                           // key="1" 
                                            className="turnover" 
                                            data={TunoverData}
                                            options={TunoverOption} 
                                            type={'Bar'} 
                                            listener={{
                                                'draw': function(data) {
                                                    if(data.type === 'bar') {
                                                        data.element.attr({
                                                            style: 'stroke-width: 15px'
                                                        });
                                                    }
                                                }
                                            }} 
                                            
                                            />
                                    </div>           
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col md="6" className="xl-50">
                        <div className="small-chart-widget chart-widgets-small">
                            <Card>
                                <CardHeader>
                                    <h5>Monthly Sales</h5>
                                </CardHeader>
                                <CardBody className="bg-danger">
                                    <div className="chart-container">
                                        <ChartistGraph 
                                            className="monthly" 
                                            data={MonthalyData}
                                            options={MonthalyOption} 
                                            type={'Bar'} 
                                            listener={{
                                                'draw': function(data) {
                                                    if(data.type === 'bar') {
                                                        data.element.attr({
                                                            style: 'stroke-width: 15px'
                                                        });
                                                    }
                                                }
                                            }} 
                                            
                                            />
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col md="6" className="xl-50">
                        <div className="small-chart-widget chart-widgets-small">
                            <Card>
                                <CardHeader>
                                    <h5>Uses</h5>
                                </CardHeader>
                                <CardBody className="bg-primary">
                                    <div className="chart-container">
                                        {/* <div className="uses"></div> */}
                                        <ChartistGraph 
                                           // key="1" 
                                            className="uses" 
                                            data={UsesData}
                                            options={UsesOption} 
                                            type={'Line'} 
                                            listener={{
                                                'draw' : function(data) {
                                                    if(data.type === 'line' || data.type === 'area') {
                                                        data.element.animate({
                                                            d: {
                                                                begin: 2000 * data.index,
                                                                dur: 2000,
                                                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                                                to: data.path.clone().stringify(),
                                                                //easing: Chartist.Svg.Easing.easeOutQuint
                                                            }
                                                        });
                                                    }
                                                }
                                            }} 
                                            
                                            />
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/*small widgets Ends*/}

                <Row>
                    <Col xl="4" lg="12">
                        <div className="status-widget">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <div className="col-9">
                                            <h5>Finance Status</h5>
                                        </div>
                                        <div className="col-3 text-sm-right">
                                            <i className="icofont icofont-growth f-20 text-muted"></i>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="status-details">
                                        <Row>
                                            <div className="col-4 text-center">
                                                <span>Investor</span>
                                                <h4 className="counter mb-0">3659</h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Money</span>
                                                <h4 className="mb-0">$<span className="counter">362</span></h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Earning</span>
                                                <h4 className="mb-0"><span className="counter">86</span>%</h4>
                                            </div>
                                        </Row>
                                    </div>
                                </CardBody>
                                <div className="status-chart bg-primary">
                                    <div className="chart-container">
                                        <div id="finance-graph" className="flot-chart-placeholder">
                                             <ChartistGraph data={financeData} options={financeOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xl="4" lg="12">
                        <div className="status-widget">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <div className="col-9">
                                            <h5>Order Status</h5>
                                        </div>
                                        <div className="col-3 text-sm-right">
                                            <i className="icofont icofont-bag f-20 text-muted"></i>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="status-details">
                                        <Row>
                                            <div className="col-4 text-center">
                                                <span>Complete</span>
                                                <h4 className="mb-0"><span className="counter">62</span>%</h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Pending</span>
                                                <h4 className="mb-0"><span className="counter">36</span>%</h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Cancle</span>
                                                <h4 className="mb-0"><span className="counter">20</span>%</h4>
                                            </div>
                                        </Row>
                                    </div>
                                </CardBody>
                                <div className="status-chart bg-secondary">
                                    <div className="chart-container">
                                        <div id="order-graph" className="flot-chart-placeholder">
                                            <ChartistGraph data={orderData} options={orderOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xl="4" lg="12">
                        <div className="status-widget">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <div className="col-9">
                                            <h5>Skill Status</h5>
                                        </div>
                                        <div className="col-3 text-sm-right">
                                            <i className="icofont icofont-architecture-alt f-20 text-muted"></i>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="status-details">
                                        <Row>
                                            <div className="col-4 text-center">
                                                <span>Design</span>
                                                <h4 className="mb-0"><span className="counter">25</span>%</h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Market</span>
                                                <h4 className="mb-0"><span className="counter">40</span>%</h4>
                                            </div>
                                            <div className="col-4 text-center">
                                                <span>Converse</span>
                                                <h4 className="mb-0"><span className="counter">35</span>%</h4>
                                            </div>
                                        </Row>
                                    </div>
                                </CardBody>
                                <div className="status-chart bg-success">
                                    <div className="chart-container">
                                        <div id="skill-graph" className="flot-chart-placeholder">
                                            <ChartistGraph data={skillData} options={skillOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm="6">
                        <div className="donut-chart-widget">
                            <Card>
                                <CardHeader>
                                    <h5>Browser Uses</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-container">
                                        <ChartistGraph data={browserData} options={browserOption} type={'Pie'} />
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col sm="6">
                        <div className="donut-chart-widget">
                            <Card>
                                <CardHeader>
                                    <h5>Website Visiter</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-container">
                                        <ChartistGraph data={browserData} options={browserOption} type={'Pie'} />
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Container-fluid Ends */}
        </div>
    )
}


export default ChartWidget;
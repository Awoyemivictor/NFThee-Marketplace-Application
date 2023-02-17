import React, { Fragment } from 'react';
import { Container,Row,Col,Card,CardHeader,CardBody,Progress } from 'reactstrap';
import Breadcrumb from '../common/breadcrumb.component';
import DataTable from 'react-data-table-component'
import { supportData,supportColumns } from '../../data/supportdb';

const SupportTicket = () => {
        return (
            <Fragment>
                <Breadcrumb title="Support Ticket" parent="Application"/>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>Support Ticket List</h5>
                                    <span>List of ticket opend by customers</span>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col xl="4" sm="6">
                                            <Card>
                                                <div className="ecommerce-widget card-body support-ticket-font">
                                                    <Row>
                                                        <div className="col-5">
                                                            <span>Order</span>
                                                            <h3 className="total-num counter">2563</h3>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="text-md-right">
                                                                <ul>
                                                                    <li>Profit<span
                                                                        className="product-stts txt-success ml-2">8989<i
                                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                                    </li>
                                                                    <li>Loss<span
                                                                        className="product-stts txt-danger ml-2">2560<i
                                                                        className="icon-angle-down f-12 ml-1"></i></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="progress-showcase">
                                                        <div className="progress lg-progress-bar">
                                                            <Progress color="primary" bar value="70"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col xl="4" sm="6">
                                            <Card>
                                                <div className="ecommerce-widget card-body support-ticket-font">
                                                    <Row>
                                                        <div className="col-5">
                                                            <span>Pending</span>
                                                            <h3 className="total-num counter">8943</h3>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="text-md-right">
                                                                <ul>
                                                                    <li>Profit<span
                                                                        className="product-stts txt-success ml-2">8989<i
                                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                                    </li>
                                                                    <li>Loss<span
                                                                        className="product-stts txt-danger ml-2">2560<i
                                                                        className="icon-angle-down f-12 ml-1"></i></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="progress-showcase">
                                                        <div className="progress lg-progress-bar">
                                                            <Progress color="secondary" bar value="70"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col xl="4" sm="6">
                                            <Card>
                                                <div className="ecommerce-widget card-body support-ticket-font">
                                                    <Row>
                                                        <div className="col-5">
                                                            <span>Running</span>
                                                            <h3 className="total-num counter">2500</h3>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="text-md-right">
                                                                <ul>
                                                                    <li>Profit<span
                                                                        className="product-stts txt-success ml-2">8989<i
                                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                                    </li>
                                                                    <li>Loss<span
                                                                        className="product-stts txt-danger ml-2">2560<i
                                                                        className="icon-angle-down f-12 ml-1"></i></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="progress-showcase mt-4">
                                                        <div className="progress lg-progress-bar">
                                                            <Progress color="warning" bar value="70"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col xl="4" sm="6">
                                            <Card>
                                                <div className="ecommerce-widget card-body support-ticket-font">
                                                    <Row>
                                                        <div className="col-5">
                                                            <span>Smooth</span>
                                                            <h3 className="total-num counter">2060</h3>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="text-md-right">
                                                                <ul>
                                                                    <li>Profit<span
                                                                        className="product-stts txt-success ml-2">8989<i
                                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                                    </li>
                                                                    <li>Loss<span
                                                                        className="product-stts txt-danger ml-2">2560<i
                                                                        className="icon-angle-down f-12 ml-1"></i></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="progress-showcase mt-4">
                                                        <div className="progress lg-progress-bar">
                                                             <Progress color="info" bar value="70"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col xl="4" sm="6">
                                            <Card>
                                                <div className="ecommerce-widget card-body support-ticket-font">
                                                    <Row>
                                                        <div className="col-5">
                                                            <span>Done</span>
                                                            <h3 className="total-num counter">5600</h3>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="text-md-right">
                                                                <ul>
                                                                    <li>Profit<span
                                                                        className="product-stts txt-success ml-2">8989<i
                                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                                    </li>
                                                                    <li>Loss<span
                                                                        className="product-stts txt-danger ml-2">2560<i
                                                                        className="icon-angle-down f-12 ml-1"></i></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="progress-showcase mt-4">
                                                        <div className="progress lg-progress-bar">
                                                            <Progress color="success" bar value="70"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col xl="4" sm="6">
                                            <Card>
                                                <div className="ecommerce-widget card-body support-ticket-font">
                                                    <Row>
                                                        <div className="col-5">
                                                            <span>Cancle</span>
                                                            <h3 className="total-num counter">2560</h3>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="text-md-right">
                                                                <ul>
                                                                    <li>Profit<span
                                                                        className="product-stts txt-success ml-2">8989<i
                                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                                    </li>
                                                                    <li>Loss<span
                                                                        className="product-stts txt-danger ml-2">2560<i
                                                                        className="icon-angle-down f-12 ml-1"></i></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <div className="progress-showcase">
                                                        <div className="progress lg-progress-bar">
                                                            <Progress color="danger" bar value="70"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <div className="table-responsive support-table">
                                        <DataTable
                                            columns={supportColumns}
                                            data={supportData}
                                            striped={true}
                                            center={true}
                                            pagination
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
}
export default SupportTicket;
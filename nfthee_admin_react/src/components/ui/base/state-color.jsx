import React, {Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,Button,ListGroup,ListGroupItem} from 'reactstrap'

const StateColor = () => {

    let color =  [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let listcolor = color.map((key) => <ListGroupItem key={key} as="li"><span></span></ListGroupItem>)
    
        return (
            <Fragment>
                <Breadcrumb title="State Color" parent="Base" />
                <Container fluid={true}>
                    <Row>
                        <Col className="col-sm-12">
                            <Card>
                                <CardHeader>
                                <h5>Default Color</h5>
                                </CardHeader>
                                <CardBody>
                                <div className="color-box">
                                <Button color="btn btn-primary btn-square digits">#ab8ce4</Button>
                                <Button color="btn btn-square digits btn-secondary">#26c6da</Button>
                                <Button color="btn btn-square digits btn-success">#00c292</Button>
                                <Button color="btn btn-square digits btn-info">#03a9f3</Button>
                                <Button color="btn btn-square digits btn-warning">#fec107</Button>
                                <Button color="btn btn-square digits btn-danger">#fb9678</Button>
                                <Button color="btn btn-square digits btn-light">#eeeeee</Button>
                                <Button color="btn btn-square digits btn-dark">#263238</Button>
                                </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader>
                                <h5>Color</h5>
                                </CardHeader>
                                <CardBody className="card-body list-colors">
                                <Row>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Primary</h6>
                                    <div className="primary-color">
                                    <ListGroup as="ul" className="m-b-30">
                                        {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">secondary</h6>
                                    <div className="secondary-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Success</h6>
                                    <div className="success-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Info</h6>
                                    <div className="info-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Warning</h6>
                                    <div className="yellow-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Danger</h6>
                                    <div className="red-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Pink</h6>
                                    <div className="pink-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <h6 className="sub-title text-uppercase">Grey</h6>
                                    <div className="gray-color">
                                    <ListGroup as="ul" className="m-b-30">
                                    {listcolor}
                                    </ListGroup>
                                    </div>
                                </Col>
                                </Row>
                            </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
export default StateColor;
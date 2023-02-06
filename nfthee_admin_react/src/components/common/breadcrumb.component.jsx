import React from 'react';
import {Row, Col, Container,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
const Breadcrumbs = (props) => {
        return (
        <Container fluid={true}>
            <div className="page-header">
                <Row>
                    <Col lg="6">
                        <h3>{props.title}
                            <small>Universal Admin panel</small>
                        </h3>
                    </Col>
                    <Col lg="6">
                        <Breadcrumb className="pull-right">
                            <BreadcrumbItem><Link to={`${process.env.PUBLIC_URL}/dashboard/default`}><i className="fa fa-home"></i></Link></BreadcrumbItem>
                            <BreadcrumbItem>{props.parent}</BreadcrumbItem>
                            <BreadcrumbItem active>{props.title}</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
        </Container>
        );
}

export default Breadcrumbs
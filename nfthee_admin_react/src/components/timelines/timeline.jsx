import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import Timeline1 from './timeline1';
import VerticalTimelineComp from './vertical-timeline';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'

const Timeline = () => {
    return (
        <Fragment>
            <Breadcrumb title="Timeline 1" parent="Timeline" />
            <Container fluid={true}>
                <Row>
                    <Col  sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Example 1</h5>
                            </CardHeader>
                            <CardBody>
                                <Timeline1 />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col  sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Example 2</h5>
                            </CardHeader>
                            <CardBody>
                                <VerticalTimelineComp />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Timeline;
import React, { Fragment } from 'react';
import Breadcrumb from '../../../common/breadcrumb.component';
import { Container,Row,Col,Card,CardBody,CardHeader} from 'reactstrap';
import {MultiPopoverBasic,MultiPopoverDirection,MultiPopoverHtmlContent,MultiPopoverOffset} from './popoverComponent'
const Popovers = (props) => {
    return (
            <Fragment>
            <Breadcrumb title="Popover" parent="Base" />
            <Container fluid={true}>
            <Row className="popover-main">
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Basic Examples</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiPopoverBasic/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Direction</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiPopoverDirection/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>HTML Content</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiPopoverHtmlContent/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Offset to Tooltip</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <MultiPopoverOffset/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default Popovers;
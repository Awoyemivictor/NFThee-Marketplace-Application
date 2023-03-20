import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody,Media} from 'reactstrap'
import ScrollArea from 'react-scrollbar';
const Scrollings = (props) => {
    return (
        <Fragment>
        <Breadcrumb title="Scrollable" parent="Advance"/>
        <Container fluid={true}>
        <Row>
          <Col sm="6">
              <Card>
                <CardHeader>
                  <h5>Vertical Scrollbar</h5>
                </CardHeader>
                <CardBody>
                <ScrollArea
                    horizontal={false}
                    vertical={true}
                    >  
                    <div><Media body src={require("../../../assets/images/banner/2.jpg")} alt="" height="600"/></div>
                </ScrollArea>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card>
                <CardHeader>
                  <h5>Click and Drag Scrollbar</h5>
                </CardHeader>
                <CardBody>
                  <ScrollArea
                    speed={0.8}
                    vertical={true}
                    swapWheelAxes={true}
                    >   
                    <div>
                      <Media body src={require("../../../assets/images/banner/3.jpg")} alt="" height="600"/>
                    </div>
                  </ScrollArea>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card>
                <CardHeader>
                  <h5>Smooth Scrollbar</h5>
                </CardHeader>
                <CardBody>
                <ScrollArea
                    speed={0.5}
                    horizontal={false}
                    vertical={true}
                    >  
                    <div><Media body src={require("../../../assets/images/banner/1.jpg")} alt="" height="600"/></div>
                  </ScrollArea>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
            <Card>
              <CardHeader>
                <h5>No Scrollbar</h5>
              </CardHeader>
              <CardBody>
                    <ScrollArea
                      vertical={false}
                    >
                     <div ><Media body src={require("../../../assets/images/banner/3.jpg")} alt="" height="600"/></div>
                    </ScrollArea>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </Fragment>
      
    );
}

export default Scrollings;
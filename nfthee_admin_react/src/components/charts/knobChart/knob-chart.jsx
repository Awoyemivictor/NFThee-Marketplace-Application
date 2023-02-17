import React,{useEffect,Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import {Container,Row,Col,Card,CardHeader,CardBody} from "reactstrap";
import Knob from "knob";
const primary = localStorage.getItem('primary_color')
const KnobChart = (props) => {

    useEffect(() => {
        var profit = Knob({
            value: 35,
            left: 1,
            angleOffset: 90,
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            readOnly: true,
            dynamicDraw: true,
            tickColorizeValues: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false
        })
        document.getElementById('profit').appendChild(profit);

        var cursormode = Knob({
            value: 29,
            angleOffset: 90,
            thickness: 0.1,
            width: 200,
            cursor:true,
            fgColor: primary,
            readOnly: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false
        })
        document.getElementById('cursormode').appendChild(cursormode);

        var offsetArc = Knob({
            value: 35,
            angleOffset: -125,
            angleArc:250,
            thickness: 0.1,
            cursor:false,
            fgColor: primary,
            readOnly: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false
        })
        document.getElementById('offsetArc').appendChild(offsetArc);

        var displayInputDisable = Knob({
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false,
            value:null
        })
        document.getElementById('displayInputDisable').appendChild(displayInputDisable);

        var displayPrevious = Knob({
            value: 44,
            min:-100,
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:true
        })
        document.getElementById('displayPrevious').appendChild(displayPrevious);

        var digitstep = Knob({
            value:0,
            className: "review",
            thickness: 0.1,
            step:0.1,
            max:10000,
            min:-10000,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:false,
        })
        document.getElementById('digitstep').appendChild(digitstep);

    }, []);
    
    return (
        <Fragment>
        <Breadcrumb title="Knob" parent="Charts" />
        <Container fluid={true}>
            <Row>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <CardHeader>
                    <h5>Angle Offset</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="knob-block text-center">
                        <div className="knob" id="profit">
                        </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <CardHeader>
                    <h5>Disable Display Input</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="knob-block text-center">
                      <div className="knob" id="displayInputDisable" style={{position:"relative"}}></div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <CardHeader>
                    <h5>Cursor Mode</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="knob-block text-center">
                      <div className="knob" id="cursormode"></div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <CardHeader>
                    <h5>Display Previous Value</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="knob-block text-center">
                      <div className="knob" id="displayPrevious"></div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <CardHeader>
                    <h5>Angle Offset & Arc</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="knob-block text-center">
                      <div className="knob" id="offsetArc"></div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50" md="6">
                <Card>
                  <CardHeader>
                    <h5>4-digit, step 0.1</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="knob-block text-center">
                      <div className="knob" id="digitstep"></div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default KnobChart;
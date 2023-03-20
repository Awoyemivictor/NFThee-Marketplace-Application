import React,{Fragment} from 'react';
import Breadcrumb from '../../../common/breadcrumb.component';
import StepZilla from 'react-stepzilla'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import {DefaultStep,StepWithIcon,StepStates,StepSizing,VerticalStep,DefaultPearlsSteps,PearlsStepsWithIcon,PearlsStepSizing,PearlsStepStates} from "./stepsComponent";
const defaultdtep =[{name: 'Step 1',component:<DefaultStep/>}]
const stepwithicon =[{name: 'Step 2',component:<StepWithIcon/>}]
const stepstates =[{name: 'Step 3',component:<StepStates/>}]
const stepsizing =[{name: 'Step 4',component:<StepSizing/>}]
const verticalstep =[{name: 'Step 5',component:<VerticalStep/>}]
const defaultparlssteps =[{name: 'Step 6',component:<DefaultPearlsSteps/>}]
const pearlsstepswithicon =[{name: 'Step 7',component:<PearlsStepsWithIcon/>}]
const pearlsstepsizing =[{name: 'Step 8',component:<PearlsStepSizing/>}]
const pearlsstepstates =[{name: 'Step 9',component:<PearlsStepStates/>}]

const Steps = (props) => {
    return (
        <Fragment>
        <Breadcrumb title="Steps" parent="Advance"/>
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Default Step</h5>
              </CardHeader>
              <CardBody>
                <StepZilla steps={defaultdtep} showSteps={false}  showNavigation={false}/>
              </CardBody>
            </Card>
          </Col>
        
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Step with icon</h5>
              </CardHeader>
              <CardBody>
                <StepZilla steps={stepwithicon} showSteps={false}  showNavigation={false} />
              </CardBody>
            </Card>
          </Col>
         
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Step States</h5><span>A u-step with classname <code>.done</code> A u-step with classname <code>.error</code>A u-step with classname <code>.current</code>A u-step with classname <code>.disabled</code></span>
              </CardHeader>
              <CardBody>
                <StepZilla steps={stepstates} showSteps={false}  showNavigation={false} />
              </CardBody>
            </Card>
          </Col>
         
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Step Sizing</h5><span>A step with classname <code>.u-steps-xs</code><code>.u-steps-sm</code><code>.u-steps-lg</code></span>
              </CardHeader>
              <CardBody>
                  <StepZilla steps={stepsizing} showSteps={false}  showNavigation={false}/>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Vertical Step</h5>
              </CardHeader>
              <CardBody>
                <StepZilla steps={verticalstep} showSteps={false}  showNavigation={false}/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Default Pearls Steps</h5>
              </CardHeader>
              <CardBody>
                <StepZilla steps={defaultparlssteps} showSteps={false}  showNavigation={false}/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Pearls Steps with icon</h5>
              </CardHeader>
              <CardBody>
                 <StepZilla steps={pearlsstepswithicon} showSteps={false}  showNavigation={false}/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Pearls Step Sizing</h5><span>A Pearls step with classname <code>.u-pearls-xs</code><code>.u-pearls-sm</code><code>.u-pearls-lg</code></span>
              </CardHeader>
              <CardBody>
                <StepZilla steps={pearlsstepsizing} showSteps={false}  showNavigation={false}/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Pearls Step States</h5><span>A pearls step states with different class<code>.done</code><code>.currunt</code><code>.error</code><code>.disabled</code></span>
              </CardHeader>
              <CardBody>
                <StepZilla steps={pearlsstepstates} showSteps={false}  showNavigation={false}/>
              </CardBody>
              </Card>
          </Col>
        </Row>
      </Container>
      </Fragment> 
    );
}

export default Steps;
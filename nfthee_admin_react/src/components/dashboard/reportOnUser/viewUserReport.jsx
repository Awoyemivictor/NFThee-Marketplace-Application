import React, {useEffect, useState,Fragment} from "react";
import instance from "../../../axios";
import {useLocation,useHistory} from "react-router-dom";
import Breadcrumb from '../../common/breadcrumb.component'            
// common/breadcrumb.component';

import axios from "axios";
import moment from 'moment';

import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Button,
	Form,
	FormGroup,
} from 'reactstrap';
import backendInstance from "../../../backendInstance";
export default function ViewUserReport() {
    const history = useHistory();
    const location = useLocation();
    const _ID = (location.state.state._id);
    const [User, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
          
      // backendInstance
      backendInstance
    // axios
      .get(`/api/fetchUserReport?id=${_ID}`)
          .then(response => {setUser(response.data.data)
      setLoading(false)
    }
    
    )
  }, []) 
    return ( 
      <Fragment>
  <Breadcrumb title="User Report Detail" parent="CRM" />
  <Container fluid={true}>
  <Row>
    <Col sm="12" xl="12">
      <Card>
        <CardHeader>
          <h5>User Report View</h5>
        </CardHeader>
      {loading?   <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
  </div>
  </div>:
          <CardBody>
            <Row>
              <Col md="12">
                <Form className="theme-form">
                <FormGroup className="form-row">
                    <h6 className="col-sm-3 col-form-label text-right f-w-700">
                      From:
                    </h6>
                    <div className="col-xl-5 col-sm-9 col-form-label text-left">
                      <img alt="" src={User[0].userId.profile_image?User[0].userId.profile_image:require('../../../assets/images/user/avt-1.jpg')} height="100px" width="100px"/>
                    <h6 className="col-sm-3 col-form-label text-center f-w-700">
                      {User[0].userId.user_name}
                    </h6>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-row">
                    <h6 className="col-sm-3 col-form-label text-right f-w-700">
                      On:
                    </h6>
                    <div className="col-xl-5 col-sm-9 col-form-label text-left">
                      <img alt="" src={User[0].reportedUser.profile_image?User[0].reportedUser.profile_image:require('../../../assets/images/user/avt-1.jpg')} height="100px" width="100px"/>
                    <h6 className="col-sm-3 col-form-label text-center f-w-700">
                      {User[0].reportedUser.user_name}
                    </h6>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-row">
                    <h6 className="col-sm-3 col-form-label text-right f-w-700">
                      Action:
                    </h6>
                    <div className="col-xl-5 col-sm-9 col-form-label text-left">
                      <p>{User[0].action}</p>
                    </div>
                  </FormGroup>
                  {User[0].report_issue?<FormGroup className="form-row">
                    <h6 className="col-sm-3 col-form-label text-right f-w-700">
                      Issue:
                    </h6>
                    <div className="col-xl-5 col-sm-9 col-form-label text-left">
                      <p>{User[0].report_issue}</p>
                    </div>
                  </FormGroup>:null}
                  <FormGroup className="form-row">
                    <h6 className="col-sm-3 col-form-label text-right f-w-700">
                     Time/Date:
                    </h6>
                    <div className="col-xl-5 col-sm-9 col-form-label text-left">
                      <p>{User[0].timeSinceCreated}</p>
                    </div>
                  </FormGroup>
                
  
                 
               
                </Form>
              
             
              </Col>
            </Row>
            <Button
              color="primary"
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </CardBody>}
    
      </Card>
    </Col>
  </Row>
  </Container>
  </Fragment>
     
    )
}

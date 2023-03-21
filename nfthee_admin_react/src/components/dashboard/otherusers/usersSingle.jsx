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
	ListGroup,
	ListGroupItem,
	TabContent,
	TabPane,
	Media,
	Form,
	FormGroup,
} from 'reactstrap';
import backendInstance from "../../../backendInstance";

export default function SingleUser() {
  const history = useHistory();
  const location = useLocation();
  const _ID = (location.state.state._id);
  const [User, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        
    // backendInstance
    backendInstance.get(`/api/readUser?id=${_ID}`)
        .then(response => {setUser(response.data.data)
          console.log('0flpsmpdmlfb;m;glnmf;glmn;lmfglmfgmmpo',response.data.data)
    setLoading(false)
  }
  
  )
}, []) 
console.log('s;kbskvfsjkd bkjsdvjhsd',User)
  return (
    <>
     

    <Fragment>
<Breadcrumb title="User Detail" parent="Base" />
<Container fluid={true}>
<Row>
  <Col sm="12" xl="12">
    <Card>
      <CardHeader>
        <h5>User View</h5>
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
                    Uploaded File:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <img alt="" src={User[0].profile_image?User[0].profile_image:require('../../../assets/images/user/avt-1.jpg')} height="100px" width="100px"/>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Username:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{User[0].user_name}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    First Name:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{User[0].first_name}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Last Name:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{User[0].last_name}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Country:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{User[0].country}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Status:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{User[0].status}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Bio:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{User[0].bio}</p>
                    {/* <CKEditors
                      activeclassName="p10"
                      content={content}
                      events={{
                        change: onChange,
                      }}
                    /> */}
                  </div>
                </FormGroup>

                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Created At:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{moment(User[0].createdAt).format('DD/MM/YYYY')}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Updated At:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{moment(User[0].updatedAt).format('DD/MM/YYYY')}</p>
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
</>
  )
}

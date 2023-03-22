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

export default function SingleProject() {
  const history = useHistory();
  const location = useLocation();
  const _ID = (location.state.state._id);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        
    // backendInstance
    backendInstance
    // axios
    .post(`/api/getVerification`,{id:_ID})
        .then(response => {setProject(response.data.data)
          console.log('0flpsmpdmlfb;m;glnmf;glmn;lmfglmfgmmpo',response.data.data)
    setLoading(false)
  }
  
  )
}, []) 
console.log('s;kbskvfsjkd bkjsdvjhsd',project)
  return (
    <>
     

    <Fragment>
<Breadcrumb title="project Detail" parent="Base" />
<Container fluid={true}>
<Row>
  <Col sm="12" xl="12">
    <Card>
      <CardHeader>
        <h5>project View</h5>
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
                    Logo Image:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <img alt="" src={project[0].project_logo?project[0].project_logo:require('../../../assets/images/user/avt-1.jpg')} height="100px" width="100px"/>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Project Name:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].project_name}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Project Status:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].project_status}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                  Contract Address:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].contract_address}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Email:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].email}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Original:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].original}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Website:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].website}</p>
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
                    Description:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{project[0].description}</p>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <h6 className="col-sm-3 col-form-label text-right f-w-700">
                    Updated At:
                  </h6>
                  <div className="col-xl-5 col-sm-9 col-form-label text-left">
                    <p>{moment(project[0].updatedAt).format('DD/MM/YYYY')}</p>
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

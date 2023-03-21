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
const CollectionSingle = () => {
	const history = useHistory();

    const location = useLocation();
    const _ID = (location.state.state._id);
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        
        backendInstance.get(`api/getCollection/read?id=${_ID}`)
            .then(response => {setCollection(response.data.data)
				setLoading(false)
			}
			
			)
    }, [])        
    return (
        <>
     

            <Fragment>
			<Breadcrumb title="Collection Detail" parent="Base" />
			<Container fluid={true}>
				<Row>
					<Col sm="12" xl="12">
						<Card>
							<CardHeader>
								<h5>Collection View</h5>
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
														<img alt="" src={collection.logo_image} height="100px" width="100px"/>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Title:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{collection.name}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Blockchain:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{collection.blockchain}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Description:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{collection.description}</p>
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
														<p>{moment(collection.createdAt).format('DD/MM/YYYY')}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Updated At:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{moment(collection.updatedAt).format('DD/MM/YYYY')}</p>
													</div>
												</FormGroup>

												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Date Of Posting:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>
															{moment(collection.date_of_posting).format(
																'DD/MM/YYYY'
															)}
														</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Date Of Publishing:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>
															{moment(collection.date_of_publishing).format(
																'DD/MM/YYYY'
															)}
														</p>
													</div>
												</FormGroup>
												{/* <FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Keyword Tag:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left ">
														<p>{collection.keyword_tag}</p>
													</div>
												</FormGroup> */}
											</Form>
											{/* <h6>Seo</h6> */}
											<Form className="theme-form">
												{/* <FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Meta Title:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{collection.meta_title}</p>
													</div>
												</FormGroup> */}
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Link:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<a>{collection.links}</a>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Payment Token:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{collection.payment_token}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Status:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{collection.status}</p>
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
export default CollectionSingle;
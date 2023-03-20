import React, { useState, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import { useLocation,useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import instance from '../../axios';

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
// import { Container, Row, Col, Card } from "reactstrap";
import CKEditors from 'react-ckeditor-component';
// import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const BlogSingle = () => {
	const history = useHistory();
	const [data, setdata] = useState([]);
	const query = new URLSearchParams(useLocation().search);
	const blog_id = query.get('blogId');
	console.log(blog_id);

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
	React.useEffect(() => {
		instance
			.get(`${process.env.REACT_APP_ADMIN_BASE_URL}/api/singleBlog?id=${blog_id}`)
			.then((ress) => {
				console.log(ress.data);
				if (ress.data) {
					setdata(ress.data.data);
					console.log(ress.data);
					// setLoading(false);
				}
			});
	}, []);
	console.log(data);
	// desp
	const [content, setContent] = useState('content');
	const onChange = (evt) => {
		const newContent = evt.editor.getData();
		setContent(newContent);
	};

	return (
		<Fragment>
			<Breadcrumb title="Blog Detail" parent="Base" />
			<Container fluid={true}>
				<Row>
					<Col sm="12" xl="12">
						<Card>
							<CardHeader>
								<h5>Blog</h5>
							</CardHeader>
							{data.map((blog) => (
								<CardBody>
									<Row>
										<Col md="12">
											<Form className="theme-form">

											<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Uploaded File:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<img alt="" src={blog.uploadFile} height="100px" width="100px"/>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Title:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.title}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Author:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.author_name}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Description:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.description}</p>
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
														<p>{moment(blog.createdAt).format('DD/MM/YYYY')}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Updated At:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{moment(blog.updatedAt).format('DD/MM/YYYY')}</p>
													</div>
												</FormGroup>

												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Date Of Posting:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>
															{moment(blog.date_of_posting).format(
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
															{moment(blog.date_of_publishing).format(
																'DD/MM/YYYY'
															)}
														</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Keyword Tag:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left ">
														<p>{blog.keyword_tag}</p>
													</div>
												</FormGroup>
											</Form>
										</Col>
										<Col md="12">
											{/* <h6>Seo</h6> */}
											<h6 className="sub-title mt-0 ml-4">SEO</h6>
											<Form className="theme-form">
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Meta Title:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.meta_title}</p>
													</div>
												</FormGroup>
												{blog.meta_tag?<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Meta Tag:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.meta_tag}</p>
													</div>
												</FormGroup>:null}
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Meta Description:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.meta_description}</p>
													</div>
												</FormGroup>
												{blog.status?<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Status:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blog.status}</p>
													</div>
												</FormGroup>:null}
												
											</Form>
										</Col>
									</Row>
									<Button
                    color="primary"
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
								</CardBody>
							))}
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default BlogSingle;

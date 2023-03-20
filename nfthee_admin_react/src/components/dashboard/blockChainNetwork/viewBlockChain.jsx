import React, { useState, Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import { useLocation,useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import instance from '../../../axios';

import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	ListGroup,
	ListGroupItem,
	Button,
	Form,
	FormGroup,
	TabContent,
	TabPane,
	Media,
} from 'reactstrap';

const viewBlockChain = () => {
	const history = useHistory();
	const [data, setdata] = useState([]);
	// const [loading, setLoading] = useState(true);
	//   console.log(useLocation());
	//   console.log(useParams());
	const query = new URLSearchParams(useLocation().search);
	const blockchain_id = query.get('blockchainId');
	// console.log(category_id);

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	
	React.useEffect(() => {
		instance
			.get(`api/getBlockchain?id=${blockchain_id}`)
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

	return (
		<Fragment>
			<Breadcrumb title="Blockchain Detail" parent="Blockchain" />
			<Container fluid={true}>
				<Row>
					<Col sm="12" xl="12">
						<Card>
							<CardHeader>
								<h5>Blockchain</h5>
							</CardHeader>
							{data.map((blockchain) => (
								<CardBody>
									<Row>
										<Col md="12">
											<Form className="theme-form">
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Name:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blockchain.name}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Icon:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														{/* <p
															dangerouslySetInnerHTML={{
																__html: blockchain.icon,
															}}
														/> */}
														<img src={blockchain.icon} height="32px" width="32px" />
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Description:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blockchain.description}</p>
													</div>
												</FormGroup>

												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Status:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>{blockchain.status}</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Created At:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>
															{' '}
															{moment(blockchain.createdAt).format(
																'DD/MM/YYYY'
															)}
														</p>
													</div>
												</FormGroup>
												<FormGroup className="form-row">
													<h6 className="col-sm-3 col-form-label text-right f-w-700">
														Updated At:
													</h6>
													<div className="col-xl-5 col-sm-9 col-form-label text-left">
														<p>
															{' '}
															{moment(blockchain.updatedAt).format(
																'DD/MM/YYYY'
															)}{' '}
														</p>
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
								</CardBody>
							))}
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default viewBlockChain;

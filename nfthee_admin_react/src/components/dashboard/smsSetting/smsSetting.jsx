import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Breadcrumb from '../../common/breadcrumb.component';
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';
import instance from '../../../axios';

const smsSetting = () => {
	const [data, setdata] = useState([]);
	const [url, setUrl] = useState(url ? url : '');
	const [api, setApi] = useState(api ? api : '');
	const [secret, setSecret] = useState(secret ? secret : '');
	const [sender, setSender] = useState(sender ? sender : '');
	const [provider, setProvider] = useState(provider ? provider : '');
	const [status, setStatus] = useState(status ? status : '');
	const [id, setId] = useState(id ? id : '');

	// console.log('data', data);

	// const query = new URLSearchParams(useLocation().search);
	// const category_id = query.get('categoryId');
	// let history = useHistory();

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	const getData = () => {
		instance
			.get(`api/getSmsDetails`)
			.then((response) => {
				console.log(response.data);

				console.log(response.status);

				if (response.data) {
					console.log(response.data);
					setdata(response.data.data);
					setUrl(response.data.data.url);
					setApi(response.data.data.api);
					setSecret(response.data.data.secret);
					setSender(response.data.data.sender);
					setProvider(response.data.data.provider);
					setStatus(response.data.data.status);
					setId(response.data.data._id);
				}
				// } else {
				// 	setdata([]);
				// 	setUrl('');
				// 	setApi('');
				// 	setSecret('');
				// 	setSender('');
				// 	setProvider('');
				// 	setStatus('');
				// setId(ress.data.data._id);
				// }
			})
			.catch(function(error) {
				if (error.response.status === 400) {
					// console.log(error.response.data);
					// console.log(error.response.status);
					// console.log(error.response.headers);
					console.log('do something');
					// setdata([]);
					setUrl('');
					setApi('');
					setSecret('');
					setSender('');
					setProvider('');
					setStatus('');
					// setId(ress.data.data._id);
				}
			});
	};
	console.log(data);

	// React.useEffect(() => {
	// 	getData();
	// }, []);

	const onAddSms = (e) => {
		const body = {
			url: url,
			api: api,
			secret: secret,
			sender: sender,
			provider: provider,
			status: status,
		};
		console.log(body);

		instance
			.post('api/addSmsDetails', body, {
				// headers: {
				// 	'Content-Type': 'application/json',
				// },
			})
			.then((response) => {
				toast.success(response.data.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// const onUpdateSms = (e) => {
	// 	// history.push(`/dashboard/category/viewCategory`);

	// 	const body = {
	// 		id: id,
	// 		domainName: domainName,
	// 		senderName: senderName,
	// 		senderEmailid: senderEmailid,
	// 		replyEmailid: replyEmailid,
	// 		hostName: hostName,
	// 		hostPort: hostPort,
	// 		host_pass: hostPass,
	// 	};
	// 	console.log(body);

	// 	authAxios
	// 		.post('http://44.198.133.66:8004/api/updateEmail', body, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		})
	// 		.then((response) => {
	// 			// alert(response.message);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	return (
		<Fragment>
			 <ToastContainer />
			<Breadcrumb title=" Sms Setting" parent="dashboard" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Basic form control</h5>
							</CardHeader> */}
							<Form className="form theme-form">
								{/* {data.map((category) => ( */}
								<CardBody>
									{/* {setName(category.name)} */}
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">Url</Label>
												<Input
													className="form-control"
													type="text"
													placeholder="url"
													onChange={(e) => setUrl(e.target.value)}
													value={url}
													name="url"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">Api</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="api"
													onChange={(e) => setApi(e.target.value)}
													value={api}
													name="api"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">Secret</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="secret"
													onChange={(e) => setSecret(e.target.value)}
													value={secret}
													name="secret"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">Sender</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="sender"
													onChange={(e) => setSender(e.target.value)}
													value={sender}
													name="sender"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Provider
												</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="provider"
													onChange={(e) => setProvider(e.target.value)}
													value={provider}
													name="provider"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											{/* <FormGroup>
												<Label htmlFor="exampleFormControlInput1">Status</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="status"
													onChange={(e) => setStatus(e.target.value)}
													value={status}
													name="status"
												/>
											</FormGroup> */}
											<FormGroup>
												<Label style={{ display: 'block' }}>Status:</Label>
												<select
													// onChange={inputsHandler}
													// value={defaultValues.status}
													onChange={(e) => setStatus(e.target.value)}
													value={status}
													className="form-control"
													name="status"
												>
													<option>Select</option>
													<option value="True">Active</option>
													<option value="False">Inactive</option>
												</select>
												{/* <ErrorMessage name="status" /> */}
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											{/* {data._id ? (
												<Button color="primary" onClick={''}>
													Update Sms
												</Button>
											) : (
												<Button color="primary" onClick={onAddSms}>
													Add Sms
												</Button>
											)} */}
											<Button color="primary" onClick={onAddSms}>
												Add Sms
											</Button>
										</Col>
									</Row>
								</CardBody>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default smsSetting;

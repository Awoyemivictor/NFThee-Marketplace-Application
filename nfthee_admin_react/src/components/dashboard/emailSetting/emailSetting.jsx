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

const emailSetting = () => {
	const [data, setdata] = useState([]);
	const [domainName, setDomainName] = useState(domainName ? domainName : '');
	const [senderName, setSenderName] = useState(senderName ? senderName : '');
	const [senderEmailid, setSenderEmailId] = useState(
		senderEmailid ? senderEmailid : ''
	);
	const [replyEmailid, setReplyEmailId] = useState(
		replyEmailid ? replyEmailid : ''
	);
	const [hostName, setHostName] = useState(hostName ? hostName : '');
	const [hostPort, setHostPort] = useState(hostPort ? hostPort : '');
	const [status, setStatus] = useState(status ? status : '');
	const [id, setId] = useState(id ? id : '');
	const [hostPass, setHostPass] = useState(hostPass ? hostPass : '');

	console.log('data', data);

	// const query = new URLSearchParams(useLocation().search);
	// const category_id = query.get('categoryId');
	// let history = useHistory();

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	const getData = () => {
		authAxios.get(`http://44.198.133.66:8004/api/readEmail`).then((ress) => {
			console.log(ress.data.data);
			console.log(ress.data.data._id);
			if (ress.data.data !== null) {
				setdata({ ...ress.data.data });
				setDomainName(ress.data.data.domain_name);
				setHostName(ress.data.data.host_name);
				setHostPort(ress.data.data.host_port);
				setSenderName(ress.data.data.sender_name);
				setSenderEmailId(ress.data.data.sender_emailid);
				setReplyEmailId(ress.data.data.reply_email);
				setStatus(ress.data.data.status);
				setId(ress.data.data._id);
				setHostPass(ress.data.data.host_pass);
			} else {
				setdata(ress.data.data);
				setDomainName('');
				setHostName('');
				setHostPort('');
				setSenderName('');
				setSenderEmailId('');
				setReplyEmailId('');
				setStatus('');
				setHostPass('');
			}
		});
	};

	React.useEffect(() => {
		getData();
	}, []);

	console.log(data);
	// const onUpdateEmailSubmit = (e) => {

	// 	history.push(`/dashboard/category/viewCategory`);

	// 	const body = {
	// 		name: name,
	// 		description: description,
	// 		icon: icon,
	// 		catId: category_id,
	// 	};
	// 	console.log(body);

	// 	authAxios
	// 		.post('http://44.198.133.66:8004/api/updateCategory', body, {
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

	// add email function

	const onAddEmail = (e) => {
		const body = {
			domain_name: domainName,
			sender_name: senderName,
			sender_emailid: senderEmailid,
			reply_email: replyEmailid,
			host_name: hostName,
			host_port: hostPort,
			status: status,
			host_pass: hostPass,
		};
		console.log(body);

		authAxios
			.post('http://44.198.133.66:8004/api/addEmail', body, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				// alert(response.message);
				toast.success(response.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	//  update email

	const onUpdateEmail = (e) => {
		// history.push(`/dashboard/category/viewCategory`);

		const body = {
			id: id,
			domain_name: domainName,
			sender_name: senderName,
			sender_emailid: senderEmailid,
			reply_email: replyEmailid,
			host_name: hostName,
			host_port: hostPort,
			host_pass: hostPass,
			status: status,
		};
		console.log(body);

		authAxios
			.post('http://44.198.133.66:8004/api/updateEmail', body, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				// alert(response.message);
				toast.success(response.data.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Fragment>
			  <ToastContainer />
			<Breadcrumb title="Email Setting" parent="dashboard" />

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
												<Label htmlFor="exampleFormControlInput1">
													Domain Name
												</Label>
												<Input
													className="form-control"
													type="text"
													placeholder="Domain Name"
													onChange={(e) => setDomainName(e.target.value)}
													value={domainName}
													name="Domain_name"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Sender Name
												</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="Sender Name"
													onChange={(e) => setSenderName(e.target.value)}
													value={senderName}
													name="sender_name"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Sender Email Address
												</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="Sender Name"
													onChange={(e) => setSenderEmailId(e.target.value)}
													value={senderEmailid}
													name="sender_email"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Reply Email Address
												</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="Sender Name"
													onChange={(e) => setReplyEmailId(e.target.value)}
													value={replyEmailid}
													name="rply_name"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Host Name
												</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="Sender Name"
													onChange={(e) => setHostName(e.target.value)}
													value={hostName}
													name="host_name"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Host Port
												</Label>

												<Input
													type="text"
													className="form-control"
													placeholder="Sender Name"
													onChange={(e) => setHostPort(e.target.value)}
													value={hostPort}
													name="host_port"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label style={{ display: 'block' }}>Status:</Label>
												<select
													onChange={(e) => setStatus(e.target.value)}
													value={status}
													className="form-control"
													name="status"
												>
													{/* <option>Select</option> */}
													<option value="True">Active</option>
													<option value="False">Inactive</option>
												</select>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											{/* {data[0].name} */}

											{data === null ? (
												<Button color="primary" onClick={onAddEmail}>
													Add Email
												</Button>
											) : (
												<Button color="primary" onClick={onUpdateEmail}>
													Update Email
												</Button>
											)}
										</Col>
									</Row>
								</CardBody>
								{/* ))} */}

								{/* <div className="add-task-btn-wrapper">
                    <span className={"add-task-btn new-"}>
                      <div
                        href=""
                        className="btn btn-primary"
                        onClick={() => onAddCategorySubmit()}
                      >
                        <i className="icon-plus"></i> Submit
                      </div>
                    </span>
                  </div> */}
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default emailSetting;

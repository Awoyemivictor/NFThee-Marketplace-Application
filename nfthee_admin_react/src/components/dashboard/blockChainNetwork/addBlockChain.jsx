import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Breadcrumb from '../../common/breadcrumb.component';
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
// import CKEditors from 'react-ckeditor-component';
import SimpleMDE from 'react-simplemde-editor';
import Dropzone from 'react-dropzone-uploader';
import { ToastContainer, toast } from "react-toastify";
import instance from '../../../axios';


const addBlockChain = () => {
	let history = useHistory();
	const [name, setName] = useState('');
	// const [description, setDescription] = useState('');
	const [icon, setIcon] = useState('');
	const [status, setStatus] = useState('Active');
	const [text, setText] = useState(' ');
	const [selectedFile, setSelectedFile] = useState();
	//desc
	const [content, setContent] = useState('');
	const onChange = (evt) => {
		const newContent = evt.editor.getData();
		setContent(newContent);
	};
	// const handleChange = (e) => {
	// 	console.log(e);
	// 	setText('desc');
	// };

	// const [text, setText] = useState('');

	//desc
	// const onDescChange = (evt) => {
	// 	const newContent = evt.editor.getData();
	// 	setContent(newContent);
	// };

	const handleChange = (text) => {
		setText(text);
	};

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	const getUploadParams = ({ meta }) => {
		return { url: 'https://httpbin.org/post' };
	};


	const handleChangeStatus = ({ meta, file }, status) => {
		// console.log(status);
		if (status === 'done') {
			setSelectedFile(file);
		}
	};

	console.log('selected file',selectedFile)
	const onAddBlockchainSubmit = (e) => {

		const body = {
			name: name,
			description: text,
			icon: selectedFile,
			status: status,
		};
		console.log(body);

		instance
			.post('/api/addBlockchain', body, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				toast.success(response.data.message);
				history.push(`/dashBoard/blockchainDetail`);
				// alert(response.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Fragment>
			<ToastContainer />
			<Breadcrumb title="Add Block Chain" parent="dashboard" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Basic form control</h5>
							</CardHeader>
							<Form className="form theme-form">
								<CardBody>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Block Chain Name
												</Label>
												<Input
													className="form-control"
													type="text"
													placeholder="enter your name"
													onChange={(e) => setName(e.target.value)}
													value={name}
													name="name"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Description
												</Label>
												<SimpleMDE
													id="editor_container"
													onChange={handleChange}
													value={text}
													options={{
														autofocus: true,
														spellChecker: false,
													}}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Block Chain Icon
												</Label>
												<div className="dz-message needsclick">
												<Dropzone
													getUploadParams={getUploadParams}
													onChangeStatus={handleChangeStatus}
													maxFiles={1}
													multiple={false}
													canCancel={false}
													inputContent="Drop A File"
													styles={{
														dropzone: { height: 50 },
														dropzoneActive: { borderColor: 'green' },
													}}
												/>
											</div>
											</FormGroup>
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
													{/* <option>Select</option> */}
													<option value="Active">Active</option>
													<option value="Inactive">Inactive</option>
												</select>
												{/* <ErrorMessage name="status" /> */}
											</FormGroup>
											<Button
												color="primary"
												onClick={() => onAddBlockchainSubmit()}
											>
												Add Blockchain
											</Button>
										</Col>
									</Row>
								</CardBody>
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

export default addBlockChain;

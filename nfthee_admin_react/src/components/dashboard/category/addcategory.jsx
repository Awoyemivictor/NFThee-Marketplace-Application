import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Breadcrumb from '../../common/breadcrumb.component';
import { ToastContainer, toast } from "react-toastify";
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
import SimpleMDE from "react-simplemde-editor";
import Dropzone from 'react-dropzone-uploader';
import { useHistory } from 'react-router';
import instance from '../../../axios';

const addcategory = () => {
	const history=useHistory()
	const [name, setName] = useState('');
	const [icon, setIcon] = useState();
	const [description, setDescription] = useState("");
	// const [content, setContent] = useState('');
	// //desc
	// const onDescChange = (evt) => {
	// 	const newContent = evt.editor.getData();
	// 	setContent(newContent);
	// };

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
			setIcon(file);
		}
	};

	const handleChange = (description) => {
		setDescription(description);
	  };

	const onAddCategorySubmit = (e) => {
		// e.preventDefault();
		// const formdata = new FormData();
		// // formdata.append('image', FileData);
		// formdata.append("name", defaultValues.name);
		// formdata.append("description", defaultValues.description);
		// formdata.append("icon", defaultValues.icon);

		const body = {
			name: name,
			description: description,
			icon: icon,
		};
		console.log(body);

		instance
			.post('/api/addCategory', body, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				toast.success(response.data.message);
				history.push(`/dashboard/category/viewCategory`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Fragment>
			<ToastContainer />
			<Breadcrumb title="Add Category" parent="dashboard" />

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
												<Label htmlFor="exampleFormControlInput1">Name</Label>
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

												{/* <CKEditors
													activeclassName="p10"
													content={content}
													events={{
														change: onDescChange,
													}}
												/> */}
												  <SimpleMDE
													id="editor_container"
													onChange={handleChange}
													value={description}
													options={{
													autofocus: true,
													spellChecker: false,
													}}
												/>

												{/* <Input
                          type="textarea"
                          className="form-control"
                          rows="3"
                          placeholder="describe your icon"
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                          name="description"
                        /> */}
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
										<FormGroup>
												<Label htmlFor="exampleFormControlInput1">
													Category Icon
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
											<Button
												color="primary"
												onClick={() => onAddCategorySubmit()}
											>
												Add Category
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

export default addcategory;

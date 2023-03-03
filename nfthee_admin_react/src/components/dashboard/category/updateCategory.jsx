import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Breadcrumb from '../../common/breadcrumb.component';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
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
const updateCategory = () => {
	const [data, setdata] = useState([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [icon, setIcon] = useState('');

	const query = new URLSearchParams(useLocation().search);
	const category_id = query.get('categoryId');
	let history = useHistory();

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	const handleChange = (description) => {
		setDescription(description);
	  };

	function getData() {
		authAxios
			.get(`${process.env.REACT_APP_ADMIN_RENDER_BASE_URL}/api/getCategory?id=${category_id}`)
			.then((ress) => {
				console.log(ress.data);
				if (ress.data) {
					setdata(ress.data.data);
					setName(ress.data.data[0].name);
					setDescription(ress.data.data[0].description);
					setIcon(ress.data.data[0].icon);
				}
			});
	}

	React.useEffect(() => {
		getData();
	}, []);


	const onUpdateCategorySubmit = (e) => {
	

		

		const body = {
			name: name,
			description: description,
			icon: icon,
			catId: category_id,
		};
		console.log(body);

		authAxios
			.post('http://44.198.133.66:8004/api/updateCategory', body, {
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
			<Breadcrumb title="Update Category" parent="dashboard" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							{/* <CardHeader>
								<h5>Basic form control</h5>
							</CardHeader> */}
							<Form className="form theme-form">
								{data.map((category) => (
									<CardBody>
										{/* {setName(category.name)} */}
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

													{/* <Input
														type="textarea"
														className="form-control"
														rows="3"
														placeholder="describe your icon"
														onChange={(e) => setDescription(e.target.value)}
														value={description}
														name="description"
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
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
												<FormGroup>
													<Label htmlFor="exampleFormControlInput1">Icon</Label>
													<Input
														className="form-control"
														type="text"
														placeholder="Add your icon"
														onChange={(e) => setIcon(e.target.value)}
														value={icon}
														name="icon"
													/>
												</FormGroup>
												<Button
													color="primary"
													onClick={() => onUpdateCategorySubmit()}
												>
													Submit form
												</Button>
											</Col>
										</Row>
									</CardBody>
								))}

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

export default updateCategory;

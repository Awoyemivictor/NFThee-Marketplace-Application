import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb.component';
import axios from 'axios';
import * as yup from 'yup';
import SimpleMDE from 'react-simplemde-editor';
import Dropzone from 'react-dropzone-uploader';

import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Label,
	Button,
} from 'reactstrap';
// import { useForm, Controller } from "react-hook-form";
import BlogService from '../../services/blog.service';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useLocation, useHistory } from 'react-router-dom';

const BlogPost = (props) => {
	const [FileData, setFileData] = useState({ file: '' });
	const [selectedFile, setSelectedFile] = useState();
	//desc
	const [content, setContent] = useState('');
	const onChange = (evt) => {
		const newContent = evt.editor.getData();
		setContent(newContent);
	};
	//image
	const getUploadParams = ({ meta }) => {
		return { url: 'https://httpbin.org/post' };
	};

	const handleChangeStatus = ({ meta, file }, status) => {
		// console.log(status);
		if (status === 'done') {
			setSelectedFile(file);
		}
	};

	const [defaultValues, setDefaultValues] = useState({
		title: '',
		author_name: '',
		sub_description: '',
    description:'',
		date_of_posting: moment(new Date()).format('yyyy-MM-DD'),
		date_of_publishing: moment(new Date()).format('yyyy-MM-DD'),
		status: '',
		meta_tag: '',
		meta_description: 'Draft',
		keyword_tag: '',
	});


	const handleblogChange = (e) => {
		const file = e.target.files[0];

		setSelectedFile((prevState) => ({
			...prevState,
			uploadFile: file,
		}));
		console.log(file);
		setSelectedFile(file === undefined ? 'abc.png' : file);
	};


	// useEffect(() => {
	//   if (blogId) {
	//     BlogService.getBlogById(blogId).then((res) => {
	//       if (res.data) {
	//         const blogData = res.data;
	//         setValue("title", blogData.title);
	//         setValue("authorName", blogData.authorName);
	//         setValue("subDescription", blogData.subDescription);
	//         setValue("description", blogData.description);
	//         setValue("metaTag", blogData.metaTag);
	//         setValue("metaTitle", blogData.metaTitle);
	//         setValue("metaDescription", blogData.metaDescription);
	//         setValue("kewyordTags", blogData.kewyordTags);
	//         setValue("dateofPublishing", new Date(blogData.dateofPublishing));
	//         setValue("dateofPosting", new Date(blogData.dateofPosting));
	//         setBlogData(res.data);
	//         setEditable(false);
	//       }
	//     });
	//   }
	// }, [blogId]);

	// const onCreateBlogSubmit = async (data) => {
	//   if (editable == true) {
	//     data["dateofPublishing"] = moment(data["dateofPublishing"]).format(
	//       "MM/DD/YYYY"
	//     );
	//     data["dateofPosting"] = moment(data["dateofPosting"]).format(
	//       "MM/DD/YYYY"
	//     );
	//     const formdata = new FormData()
	//     formdata.append('image', FileData.image);
	//      console.log(data)
	//     BlogService.createBlog(data)
	//       .then((res) => {
	//         if (res && res.data) {
	//           toast.success(res.message);
	//           onDiscardForm();
	//         }
	//       })
	//       .catch((e) => {});

	//   } else if (editable == false) {
	//     BlogService.updateBlog(blogId, { ...blogData, status: data.status })
	//       .then((res) => {
	//         if (res && res.data) {
	//           toast.success(res.message);
	//           onDiscardForm();
	//           history.push('/blog/blogDetail')
	//         } else {
	//           toast.error("Blog Not able update");
	//         }
	//       })
	//       .catch((e) => {
	//         toast.error("Blog Not able update");
	//       });
	//   }
	// };
	const inputsHandler = (e) => {
		var data = new FormData();
		data.append('uploadFile', selectedFile);
		const { name, value } = e.target;
		setDefaultValues((prevState) => ({
			...prevState,
			[name]: value,
			data,
		}));
	};
	// const inputsHandler1 = (e) =>{
	//   const file = e.target.files[0];
	//   setFileData((prevState) => ({
	//   ...prevState,
	//   'file': file,
	//   }));
	//   console.log(file);
	//   setFileData(file)
	// }

	// data["dateofPublishing"] = moment(data["dateofPublishing"]).format(
	//   "MM/DD/YYYY"
	// );
	// data["dateofPosting"] = moment(data["dateofPosting"]).format(
	//   "MM/DD/YYYY"
	// );
	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	const onCreateBlogSubmit = (e) => {
		e.preventDefault();

		const formdata = new FormData();
		// formdata.append('image', FileData);
		formdata.append('title', defaultValues.title);
		formdata.append('author_name', defaultValues.author_name);
		formdata.append('sub_description', defaultValues.sub_description);
		formdata.append('description', defaultValues.description);
		formdata.append('date_of_posting', defaultValues.date_of_posting);
		formdata.append('date_of_publishing', defaultValues.date_of_posting);
		formdata.append('status', defaultValues.status);
		formdata.append('meta_tag', defaultValues.meta_tag);
		formdata.append('uploadFile', selectedFile);
		formdata.append('meta_title', defaultValues.meta_title);
		formdata.append('meta_description', defaultValues.meta_description);
		formdata.append('keyword_tag', defaultValues.keyword_tag);

		console.log(formdata);
		// const registeredData  = {
		//   title:defaultValues.title,
		//   subDescription:defaultValues.subDescription,
		//   description:defaultValues.description,
		//   metaTitle:defaultValues.metaTitle,
		//   metaDescription:defaultValues.metaDescription,
		//   authorName:defaultValues.authorName,
		//   metaTag:defaultValues.metaTag,
		//   kewyordTags:defaultValues.kewyordTags,
		//   dateofPosting:defaultValues.dateofPosting,
		//   dateofPublishing: defaultValues.dateofPublishing,
		//   status:defaultValues.status,
		//  }
		//  console.log(registeredData)
		authAxios
			.post('http://localhost:8004/api/blog', formdata, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				
			})
			.catch((error) => {
			console.log(error)
			});
	};

	return (
		<Fragment>
			<Breadcrumb title="Add Post" parent="Blog" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Blog post</h5>
							</CardHeader>
							<CardBody className="add-post">
								<form encType="multipart/form-data">
									<Col sm="12">
										<FormGroup>
											<Label>Title :</Label>
											<input
												onChange={inputsHandler}
												value={defaultValues.title}
												className="form-control"
												placeholder="Title"
												type="text"
												name="title"
												// value=""
											/>
											{/* <ErrorMessage name="title" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Author name:</Label>
											<input
												onChange={inputsHandler}
												value={defaultValues.author_name}
												className="form-control"
												placeholder="Author Name"
												type="text"
												name="author_name"
											/>
											{/* <ErrorMessage name="authorName" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Sub Description:</Label>
											<textarea
												onChange={inputsHandler}
												value={defaultValues.sub_description}
												className="form-control"
												placeholder="Sub Description"
												name="sub_description"
											/>
											{/* <ErrorMessage name="subDescription" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Description:</Label>
                      <SimpleMDE
														id="editor_container"
														onChange={(e)=>inputsHandler({target:{name:'description',value:e}})}
														value={defaultValues.description}
														options={{
															autofocus: true,
															spellChecker: false,
														}}
											/>
											{/* <textarea
												onChange={inputsHandler}
												value={defaultValues.description}
												className="form-control"
												placeholder="Description"
												name="description"
											/> */}
											{/* <ErrorMessage name="description" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Date Of Posting:</Label>
											<input
												onChange={inputsHandler}
												value={moment(defaultValues.date_of_posting).format("yyyy-MM-DD")}
												className="form-control"
												type="date"
												placeholder="dateofPosting"
												name="date_of_posting"
											/>
											{/* <ErrorMessage name="dateofPosting" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Date Of Publishing:</Label>

											<input
												onChange={inputsHandler}
												value={moment(defaultValues.date_of_publishing).format("yyyy-MM-DD")}
												className="form-control"
												type="date"
												placeholder="dateofPublishing"
												name="date_of_publishing"
											/>
											{/* <ErrorMessage name="dateofPublishing" /> */}
										</FormGroup>
										<FormGroup>
											<Label style={{ display: 'block' }}>Status:</Label>
											<select
												onChange={inputsHandler}
												value={defaultValues.status}
												className="form-control"
												name="status"
											>
												<option value="Published">Active</option>
												<option value="Unpublished">Inactive</option>
											</select>
											{/* <ErrorMessage name="status" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Meta Tag:</Label>
											<input
												onChange={inputsHandler}
												value={defaultValues.meta_tag}
												className="form-control"
												type="text"
												placeholder="Meta Tag"
												name="meta_tag"
											/>
											{/* <ErrorMessage name="metaTag" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Blog Image:</Label>
											<div className="dz-message needsclick">
												<Dropzone
													getUploadParams={getUploadParams}
													onChangeStatus={handleChangeStatus}
													onChange={handleblogChange}
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
											{/* <input
												onChange={handleblogChange}
												value={defaultValues.image}
												className="form-control"
												type="file"
												placeholder="image"
												name="uploadFile"
											/> */}

											{/* <ErrorMessage name="metaTag" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Meta Title:</Label>
											<input
												onChange={inputsHandler}
												value={defaultValues.meta_title}
												className="form-control"
												type="text"
												placeholder="Meta Title"
												name="meta_title"
											/>
											{/* <ErrorMessage name="metaTitle" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Meta Description:</Label>
											<textarea
												onChange={inputsHandler}
												value={defaultValues.meta_description}
												className="form-control"
												placeholder="Meta Description"
												name="meta_description"
											/>
											{/* <ErrorMessage name="metaDescription" /> */}
										</FormGroup>
										<FormGroup>
											<Label>Keyword Tag:</Label>
											<input
												onChange={inputsHandler}
												value={defaultValues.keyword_tag}
												className="form-control"
												placeholder="Keyword Tag"
												name="keyword_tag"
												type="text"
											/>
											{/* <ErrorMessage name="kewyordTags" /> */}
										</FormGroup>
										<Button
											color="primary"
											type="submit"
											onClick={onCreateBlogSubmit}
										>
											Add Blog
										</Button>
									</Col>
									{/* <div className="btn-showcase">
										<button color="" type="submit" onClick={onCreateBlogSubmit}>
											{' '}
											Post{' '}
										</button>
									</div> */}
								</form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default BlogPost;

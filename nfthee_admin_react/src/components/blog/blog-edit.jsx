import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb.component";
import axios from "axios";
import * as yup from "yup";
import SimpleMDE from "react-simplemde-editor";
import Dropzone from "react-dropzone-uploader";

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
} from "reactstrap";
// import { useForm, Controller } from "react-hook-form";
import BlogService from "../../services/blog.service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { toast } from "react-toastify";
import { useLocation, useHistory } from "react-router-dom";

const BlogEdit = (props) => {
	const history = useHistory()
  const [data, setdata] = useState([]);
  const [FileData, setFileData] = useState({ file: "" });
  const [selectedFile, setSelectedFile] = useState();
  const [showImage, setShowImage]= useState(false)
  //desc
  const [content, setContent] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const blog_id = query.get("blogId");
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
  //image
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    // console.log(status);
    if (status === "done") {
      setSelectedFile(file);
    }
  };

  const [defaultValues, setDefaultValues] = useState({
    title: "",
    author_name: "",
    sub_description: "",
    description: "",
    date_of_posting: "",
    date_of_publishing: "",
    status: "",
    meta_tag: "",
    meta_description: "",
    keyword_tag: "",
  });

  const handleblogChange = (e) => {
    const file = e.target.files[0];

    setSelectedFile((prevState) => ({
      ...prevState,
      uploadFile: file,
    }));
    console.log(file);
    setSelectedFile(file === undefined ? "abc.png" : file);
  };

  const inputsHandler = (e) => {
    var data = new FormData();
    data.append("uploadFile", selectedFile);
    const { name, value } = e.target;
    setDefaultValues((prevState) => ({
      ...prevState,
      [name]: value,
      data,
    }));
  };

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  function getData() {
    authAxios
      .get(` http://localhost:8004/api/singleBlog?id=${blog_id}`)
      .then((ress) => {
        console.log(ress.data);
        if (ress.data) {
          setDefaultValues((prevState) => ({
            ...prevState,
            ...ress.data.data[0],
          }));
          if (ress.data.data[0].uploadFile) {
			setShowImage(true)
            setSelectedFile(ress.data.data[0].uploadFile);
          }
        }
      });
  }

  React.useEffect(async () => {
    await getData();
  }, []);

  const onUpdateBlogSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    // formdata.append('image', FileData);
    formdata.append("title", defaultValues.title);
    formdata.append("author_name", defaultValues.author_name);
    formdata.append("sub_description", defaultValues.sub_description);
    formdata.append("description", defaultValues.description);
    formdata.append("date_of_posting", defaultValues.date_of_posting);
    formdata.append("date_of_publishing", defaultValues.date_of_posting);
    formdata.append("status", defaultValues.status);
    formdata.append("meta_tag", defaultValues.meta_tag);
    formdata.append("uploadFile", selectedFile);
    formdata.append("meta_title", defaultValues.meta_title);
    formdata.append("meta_description", defaultValues.meta_description);
    formdata.append("keyword_tag", defaultValues.keyword_tag);
	formdata.append("blogId",blog_id)

    authAxios
      .post("http://44.198.133.66:8004/api/blog/modify", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
		history.push("/blog/blogDetail")
	  })
      .catch((error) => {
        // setLoading(false);
        alert("ackjdb j");
      });
  };

  return (
    <Fragment>
      <Breadcrumb title="Edit Post" parent="Blog" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Blog Edit</h5>
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
                        onChange={(e) =>
                          inputsHandler({
                            target: { name: "description", value: e },
                          })
                        }
                        value={defaultValues.description}
                        options={{
                          autofocus: true,
                          spellChecker: false,
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Date Of Posting:</Label>
                      <input
                        onChange={inputsHandler}
                        value={moment(defaultValues.date_of_posting).format(
                          "yyyy-MM-DD"
                        )}
                        className="form-control"
                        type="date"
                        name="date_of_posting"
                      />
                      {/* <ErrorMessage name="dateofPosting" /> */}
                    </FormGroup>
                    <FormGroup>
                      <Label>Date Of Publishing:</Label>

                      <input
                        onChange={inputsHandler}
                        value={moment(defaultValues.date_of_publishing).format(
                          "yyyy-MM-DD"
                        )}
                        className="form-control"
                        type="date"
                        name="date_of_publishing"
                        // onChange={(e)=>console.log(e)}
                      />
                      {/* <ErrorMessage name="dateofPublishing" /> */}
                    </FormGroup>
                    <FormGroup>
                      <Label style={{ display: "block" }}>Status:</Label>
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
                      {showImage ? (
                        <div style={{ borderRadius: "5px", display: "flex" }}>
                          <img
                            src={selectedFile}
                            height="100px"
                            width="100px"
                          />
                          <span
                            onClick={() => {
                              setSelectedFile("");
							  setShowImage(false)
                            }}
                            style={{ height: "20px",cursor:"pointer" }}
                          >
                            x
                          </span>
                        </div>
                      ) : (
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
                              dropzoneActive: { borderColor: "green" },
                            }}
                          />
                        </div>
                      )}
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
                      onClick={onUpdateBlogSubmit}
                    >
                      Update Blog
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

export default BlogEdit;

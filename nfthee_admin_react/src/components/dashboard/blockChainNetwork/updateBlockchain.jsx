import React, { useState, Fragment } from "react";
import axios from "axios";
import Breadcrumb from "../../common/breadcrumb.component";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import Dropzone from "react-dropzone-uploader";
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
} from "reactstrap";
import instance from "../../../axios";
const updateBlockchain = () => {
  const [data, setdata] = useState([]);
  // fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [status, setStatus] = useState("Active");
  const [selectedFile, setSelectedFile] = useState();
  const [showImage, setShowImage]= useState(false)
  const query = new URLSearchParams(useLocation().search);
  const blockchain_id = query.get("blockchainId");
  let history = useHistory();

  const handleChange = (description) => {
    setDescription(description);
  };

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    // console.log(status);
    console.log(file,"onchangeeeeee")
    if (status === "done") {
      setIcon(file);
    }
  };

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  function getData() {
    instance
      .get(`api/getBlockchain?id=${blockchain_id}`)
      .then((ress) => {
        console.log(ress.data);
        if (ress.data) {
          setdata(ress.data.data);
          setName(ress.data.data[0].name);
          setDescription(ress.data.data[0].description);
          if(ress.data.data[0].icon){
            setIcon(ress.data.data[0].icon);
            setShowImage(true)
          }
         
          setStatus(ress.data.data[0].status);
        }
      });
  }

  React.useEffect(() => {
    getData();
  }, []);

  const onUpdateBlockchainSubmit = (e) => {
    console.log("icon", icon)
    const body = {
      name: name,
      description: description,
      icon: icon,
      status: status,
      id: blockchain_id,
    };
    console.log(body);

    instance
      .post(`api/editBlockchain`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
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
      <Breadcrumb title="Update blockchain" parent="dashboard" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <Form className="form theme-form">
                {data.map((blockchain) => (
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
                          <Label style={{ display: "block" }}>Status:</Label>
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
                            <option value="InActive">Inactive</option>
                          </select>
                          {/* <ErrorMessage name="status" /> */}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label htmlFor="exampleFormControlInput1">Icon</Label>
                          {showImage ? (
                            <div
                              style={{ borderRadius: "5px", display: "flex" }}
                            >
                              <img src={icon} height="100px" width="100px" />
                              <span
                                onClick={() => {
                                  setIcon('');
                                  setShowImage(false)
                                }}
                                style={{ height: "20px",cursor : "pointer" }}
                              >
                                x
                              </span>
                            </div>
                          ) : (
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
                                  dropzoneActive: { borderColor: "green" },
                                }}
                              />
                            </div>
                          )}
                        </FormGroup>
                        <Button
                          color="primary"
                          onClick={() => onUpdateBlockchainSubmit()}
                        >
                          Submit form
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                ))}
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default updateBlockchain;

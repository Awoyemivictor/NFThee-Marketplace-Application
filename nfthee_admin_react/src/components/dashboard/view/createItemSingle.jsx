import React, {Fragment, useEffect, useState} from "react";
import {useHistory,useLocation} from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb.component";
import "react-data-table-component-extensions/dist/index.css";
// import {Container} from "reactstrap";
import moment from 'moment';

import Swal from "sweetalert2";
import Loader from "./loader";
import {toast} from "react-toastify";
import axios from "axios";
import backendInstance from "../../../backendInstance";
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
const ItemSingle = () => {
    let history = useHistory();
    // debugger
    const location = useLocation();
    const _ID = (location.state.state._id);
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    // const columns = [
    //     {
    //         name: " ID",
    //         selector: "_id",
    //         sortable: true,
    //         emptyValue: () => <em>null</em>
    //     },
    //     {
    //         name: "Title",
    //         selector: "name",
    //         sortable: true,
    //         emptyValue: () => <em>null</em>

    //     },
    //     {
    //         name: "Author",
    //         selector: "author_name",
    //         sortable: true,
    //     },
    //     {
    //         name: "Sub Description",
    //         selector: "sub_description",
    //         sortable: true,
    //     },
    //     {
    //         name: "Dscription",
    //         selector: "description",
    //         sortable: true,
    //     },
    //     {
    //         name: "Posting",
    //         selector: "date_of_posting",
    //         sortable: true,
    //     },
    //     {
    //         name: "Status",
    //         selector: "status",
    //         sortable: true,
    //     },
    //     {
    //         name: "Meta Tag",
    //         selector: "meta_tag",
    //         sortable: true,
    //     },
    //     {
    //         name: "meta Title",
    //         selector: "meta_title",
    //         sortable: true,
    //     },
    //     {
    //         name: "Meta Description",
    //         selector: "meta_description",
    //         sortable: true,
    //     },
    //     {
    //         name: "keyword tag",
    //         selector: "keyword_tag",
    //         sortable: true,
    //     },
    //     {
    //         name: "created At",
    //         selector: "createdAt",
    //         sortable: true,
    //     },
    //     {
    //         name: "updated At",
    //         selector: "updatedAt",
    //         sortable: true,
    //     },
        // {
        //   name: "Action",
        //   selector: "_id",
        //   sortable: true,
        //   cell: (data) => (
        //     <div>
        //       {console.log(data)}
        //       <button
        //         className="btn btn-primary btn-sm"
        //         onClick={() => onViewBlog(data)}
        //         id="1"
        //       >
        //         <i className="fa fa-link"></i>
        //       </button>{" "}
        //       {/* <button
        //         className="btn btn-green btn-sm"
        //         onClick={() => onUpdateBlog(data)}
        //         id="2"
        //       >
        //         <i className="fa fa-pencil"></i>
        //       </button>{" "} */}
        //       <button
        //         className="btn btn-danger btn-sm"
        //         onClick={() => onDel(data)}
        //         id="3"
        //       >
        //         <i className="fa fa-trash"></i>
        //       </button>
        //     </div>
        //   ),
        // },
    // ];


    // const tableData = {
    //     data,
    //     columns,
    // };
    useEffect(() => {
        // if (loading) {
            backendInstance.get(`api/getItem/read?id=${_ID}`).then((res) => {
            if (res.data) {
                setdata(res.data.data);
                console.log("hsvbadjhvsdjhbahiuegdibsdjkb",res.data);
                setLoading(false);
            }
        });
       
    }, []);

//   const deleteBlog = (e) => {
//     const next = [...data];
//  // remove and save the item of interest to your variable
//  const removedItems = next.splice(next.indexOf(e), 1);
//  // your axios function formatted for /delete/:id
//  const deleteCarModel = axios.delete(`http://192.168.0.105:2022/api/admin/blog/delete/${e.id}`);
//  // update react state with the new array
//  setdata(next);
//   };


    return (
        <Fragment>
        <Breadcrumb title="Collection Detail" parent="Base" />
        <Container fluid={true}>
            <Row>
                <Col sm="12" xl="12">
                    <Card>
                        <CardHeader>
                            <h5>Collection View</h5>
                        </CardHeader>
                        {loading?   <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>:
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <Form className="theme-form">
                                           
                                           
                                        <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Uploaded File:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <img alt="" src={data.uploadFile} height="100px" width="100px"/>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Name:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>{data.name}</p>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Blockchain:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>{data.chooseBlockchain}</p>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Status:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>{data.status}</p>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Description:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>{data.designation}</p>
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
                                                B                 <p>{moment(data.createdAt).format('DD/MM/YYYY')}</p>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Updated At:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>{moment(data.updatedAt).format('DD/MM/YYYY')}</p>
                                                </div>
                                            </FormGroup>

                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Date Of Posting:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>
                                                        {moment(data.date_of_posting).format(
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
                                                        {moment(data.date_of_publishing).format(
                                                            'DD/MM/YYYY'
                                                        )}
                                                    </p>
                                                </div>
                                            </FormGroup>
                                          
                                            {/* <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Link:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    {data.links?data.links.map((data,i)=>(
                                                        <a key={i}>{data} </a>
                                                    )):null}
                                                </div>
                                            </FormGroup> */}
                                            <FormGroup className="form-row">
                                                <h6 className="col-sm-3 col-form-label text-right f-w-700">
                                                    Payment Token:
                                                </h6>
                                                <div className="col-xl-5 col-sm-9 col-form-label text-left">
                                                    <p>{data.payment_token}</p>
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
                            </CardBody>}
                
                    </Card>
                </Col>
            </Row>
        </Container>
    </Fragment>
    );
};

export default ItemSingle;

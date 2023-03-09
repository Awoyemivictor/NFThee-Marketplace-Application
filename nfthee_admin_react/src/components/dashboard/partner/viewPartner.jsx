// import React, { Fragment, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import Breadcrumb from "../../common/breadcrumb.component";
// import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
// import "react-data-table-component-extensions/dist/index.css";
// import { Container } from "reactstrap";
// import Swal from "sweetalert2";
// import BlogService from "../../services/blog.service";
// import Loader from "./loader";
// import { toast } from "react-toastify";

// import axios from "axios";

// const Partner = () => {
//   const accessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6IjE4Mi42OC4yMDIuMTQ0IiwiYnJvd3NlciI6ImNocm9tZSIsInBhZ2VOYW1lIjoicGFydG5lciIsImlhdCI6MTY1ODM4ODA0M30.yxwRhxPObnbStDKLVNhDDP5NObqFpmI_PxGNh0dHRqA";
//   const apiUrl = "http://44.198.133.66:8002";
//   const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

// let history = useHistory();

// const [data, setdata] = useState([]);
// const [loading, setLoading] = useState(true);
// const [value, setValue] = useState();
//   for(var i=0;i<Number.MAX_VALUE,i++){
//     setValue(i);
// }
// const columns = [
//   // {
//   //   name: " ID",
//   //   selector: "",
//   //   sortable: true,
//   //   emptyValue:()=><em>null</em>
//   // },
//   // {
//   //   name: "Project Name",
//   //   selector: "project_name",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Project Description",
//   //   selector: "project_desc",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Website",
//   //   selector: "project_website",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Auction Time",
//   //   selector: "project_status",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "status description",
//   //   selector: "project_status_desc",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "nft_artwork",
//   //   selector: "nft_artwork",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Abominted Item",
//   //   selector: "minted_item_count",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Blockchain Mint",
//   //   selector: "blockchain_mint",
//   //   sortable: true,
//   // },

//   // {
//   //   name: "Mint price",
//   //   selector: "mint_price",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Minting Page",
//   //   selector: "is_minting_page",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Partnership",
//   //   selector: "partnership",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "End Day",
//   //   selector: "end_day",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Banner Image",
//   //   selector: "banner_image",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Icon Image",
//   //   selector: "icon_image",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Send Email",
//   //   selector: "send_email_to",
//   //   sortable: true,
//   // },

//   // {
//   //   name: "Created At",
//   //   selector: "createdAt",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Updated At",
//   //   selector: "updatedAt",
//   //   sortable: true,
//   // },
//   // {
//   //   name: "Action",
//   //   selector: "_id",
//   //   sortable: true,
//   //   cell: (data) => (
//   //     <div>
//   //       {console.log(data)}
//   //       <button
//   //         className="btn btn-primary btn-sm"
//   //         onClick={() => onView(data)}
//   //         // id="1"
//   //       >
//   //         <i className="fa fa-link"></i>
//   //       </button>{" "}
//         {/* <button
//           className="btn btn-green btn-sm"
//           onClick={() => onUpdate(data)}
//           id="2"
//         >
//           <i className="fa fa-pencil"></i>
//         </button>{" "} */}
//         <button
//           className="btn btn-danger btn-sm"
//           onClick={() => onDel(data)}
//           // key={id}
//         >
//           <i className="fa fa-trash"></i>
//         </button>
//       </div>
//     ),
//   },
// ];

// const onDel = (data) => {
//   console.log("del");
//   Swal.fire({
//     title: "Are you sure you want to do this?",
//     cancelButtonText: "No!",
//     confirmButtonText: "Yes!",
//     reverseButtons: true,
//     showCancelButton: true,
//   }).then(function(result) {
//     if (result.value) {
//       deleteCollection(data);
//     }
//   });
// };

// const tableData = {
//   data,
//   columns,
// };
// useEffect(() => {
//   authAxios.get("/api/getPartner").then((ress) => {
//     console.log(ress.data);
//     if (ress.data) {
//       setdata(ress.data.data);
//       console.log(ress.data);
//       setLoading(false);
//     }
//   });
// }, []);

// const TableT = (props) => {
//   const [data, setData] = useState([])
//   const fetchTableData = (t, d) => {
//       axios.get("http://192.168.0.105:2022/api/nftteam/all").then((res) => {
//           console.log(res.data)
//           setdata(res.data);
//       });
//   }
//   useEffect(() => {
//       fetchTableData(props.dataset, props.table);
//   }, [])

// const deleteCollection = (e) => {
// axios.delete(`http://192.168.0.105:2022/api/nftteam/delete/${e._id}`).then((res) => {
//   console.log(`${e._id}`);
//   if (res.data) {
//     toast.success(res.message);
//     setdata(data.filter((item) => item._id !== e._id));
//   }
// });

// create a new array object
// const next = [...data];
// remove and save the item of interest to your variable
// const removedItems = next.splice(next.indexOf(e), 1);
// your axios function formatted for /delete/:id
// const deleteCarModel = axios.delete(
//   `http://192.168.0.105:2022/api/nftteam/delete/${e._id}`
// );
// update react state with the new array
//   setdata(next.filter((item) => item._id !== e._id));
// };

// const onView = (e) => {
//   console.log("onView=>", e);
//   history.push(
//     `${process.env.PUBLIC_URL}/dashboard/partner/viewPartner?_id=${e._id}`
//   );
//   console.log();
// };

// const onUpdate = (e) => {
//   console.log("onUpdate=>", e);
//   history.push(`${process.env.PUBLIC_URL}/blog/blogPost?blogId=${e._id}`);
// };
// return (
//   <Fragment>
//     <Breadcrumb title="Partner Details" parent="Partner" />
//     <Container fluid={true}>
//       <DataTableExtensions {...tableData}>
//         <DataTable
//           columns={columns}
//           data={data}
//           noHeader
//           defaultSortField="id"
//           defaultSortAsc={false}
//           highlightOnHover
//           pagination
//           striped
// dense
//           />
//         </DataTableExtensions>
//       </Container>
//     </Fragment>
//   );
// };

// export default Partner;

import React, { useState, Fragment } from 'react';
import axios from 'axios';

import Breadcrumb from '../../common/breadcrumb.component';
import { useLocation, useHistory } from 'react-router';

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
import moment from 'moment';
import instance from '../../../axios';
// import { Container, Row, Col, Card } from "reactstrap";

const ViewPartner = () => {
  const history = useHistory();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(useLocation());
  //   console.log(useParams());
  const query = new URLSearchParams(useLocation().search);
  const partner_id = query.get('partnerId');
  //   console.log(suggestion_id);

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  React.useEffect(() => {
    instance
      .get(`api/getPartner?id=${partner_id}`)
      .then((ress) => {
        console.log(ress.data);
        if (ress.data) {
          setdata(ress.data.data);
          console.log(ress.data);
          // setLoading(false);
        }
      });
  }, []);
  // React.useEff;
  return (
    <Fragment>
      <Breadcrumb title='Partner Detail' parent='Partner' />
      <Container fluid={true}>
        <Row>
          <Col sm='12' xl='12'>
            <Card>
              <CardHeader>
                <h5>Partner</h5>
              </CardHeader>
              {data.map((partner) => (
                <CardBody key={partner._id}>
                  <Row>
                    <Col md='12'>
                      <Form className='theme-form'>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Project Name:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.project_name}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Project Description:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.project_desc}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            project Website:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.project_website}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Project Status:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>{partner.project_status}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Project Status Description:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>{partner.project_status_desc}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Nft Artwork:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <img
                              style={{ height: '100px', width: '150px' }}
                              src={partner.nft_artwork}
                              alt='nft'
                            />
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Minted Item Count:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>{partner.minted_item_coun}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Blockchain Mint:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>{partner.blockchain_mint}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Mint Price:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.mint_price}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Is Minting Page:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.is_minting_page}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Partnership:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>{partner.partnership}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            End Day:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.end_day}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Banner Image:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>
                              {' '}
                              <img
                                style={{ height: '100px', width: '150px' }}
                                src={partner.banner_image}
                                alt='banner'
                              />
                            </p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Icon Image:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>
                              {' '}
                              <img
                                style={{ height: '32px', width: '32px' }}
                                src={partner.icon_image}
                                alt='icon'
                              />
                            </p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Send Email To:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p> {partner.send_email_to}</p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Created At:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>
                              {moment(partner.createdAt).format('DD/MM/YYYY')}
                            </p>
                          </div>
                        </FormGroup>
                        <FormGroup className='form-row'>
                          <h6 className='col-sm-3 col-form-label text-right f-w-700'>
                            Updated At:
                          </h6>
                          <div className='col-xl-5 col-sm-9 col-form-label text-left'>
                            <p>
                              {' '}
                              {moment(partner.updatedAt).format('DD/MM/YYYY')}
                            </p>
                          </div>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>

                  <Button
                    color='primary'
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

export default ViewPartner;

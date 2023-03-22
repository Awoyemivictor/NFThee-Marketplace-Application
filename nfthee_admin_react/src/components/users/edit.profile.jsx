import React, {useState,useEffect,Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb.component'
import {Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Table} from 'reactstrap'
// import backendInstance from "../../../backendInstance";
import backendInstance from "../../backendInstance";


const EditProfile = () => {
// const[user,setUser]=useState([])
const data=JSON.parse(localStorage.getItem('adminLoggedin'))
// console.log(username,lastName)
useEffect(()=>{
    // http://192.168.1.143:8002/api/followingList?id=63737c4fe305d4f9b67d3acd
    backendInstance
    .get(`/user/login`)
        // .then(res=> ( setUser(res.data.data)))
        .then(res=> ( console.log(res.data.data)))


  },[])
  useEffect(()=>{
   
    console.log(data)

  },[])
        return(
            <Fragment>
                <Breadcrumb title="Edit Profile" parent="Users" />
                <Container fluid={true}>
                    <div className="edit-profile">
                        <Row>
                            <Col xl="4">
                                <Card>
                                    <CardHeader>
                                        <h4 className="card-title mb-0">My Profile</h4>
                                        <div className="card-options">
                                            <a href="#javaScript" className="card-options-collapse" data-toggle="card-collapse"><i
                                                className="fe fe-chevron-up"></i></a>
                                            <a href="#javaScript" className="card-options-remove" data-toggle="card-remove"><i
                                                className="fe fe-x"></i></a>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <Row className="mb-2">
                                                <div className="col-auto">
                                                    <img className="img-70 rounded-circle" alt=""
                                                         src={require('../../assets/images/user/11.png')} />
                                                </div>
                                                <div className="col">
                                                    <h4 className="mb-0">{data.username}</h4>
                                                    <p className="mb-4 ">DESIGNER</p>
                                                </div>
                                            </Row>
                                            <Row className="mb-2">
                                                <div className="col">
                                                <h6 className="form-label">First Name</h6>
                                                   <h3 className="mb-0"> {data.firstName}</h3>
                                                <h6 className="form-label">Last Name</h6>
                                                   <h4 className="mb-0">{data.lastName}</h4>
                                                </div>
                                            </Row>
                                            <Row className="mb-2">
                                                <div className="col">
                                                <h6 className="form-label">Phone Number </h6>
                                                  <h3 className="mb-0">  {data.phoneNumber}</h3>
                                                </div>
                                            </Row>
                                            {/* <FormGroup>
                                                <h6 className="form-label">Bio</h6>
                                                <textarea className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
                                            </FormGroup>
                                            <FormGroup>
                                                <label className="form-label">Email-Address</label>
                                                <input className="form-control" placeholder="your-email@domain.com" />
                                            </FormGroup>
                                            <FormGroup>
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" defaultValue="password" />
                                            </FormGroup> */}
                                            {/* <FormGroup>
                                                <label className="form-label">Website</label>
                                                <input className="form-control" placeholder="http://Uplor .com" />
                                            </FormGroup> */}
                                            {/* <div className="form-footer">
                                                <button className="btn btn-primary btn-block">Save</button>
                                            </div> */}
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="8">
                                <Form className="card">
                                    <CardHeader>
                                        <h4 className="card-title mb-0">Edit Profile</h4>
                                        <div className="card-options">
                                            <a href="#javaScript" className="card-options-collapse" data-toggle="card-collapse"><i
                                                className="fe fe-chevron-up"></i></a>
                                            <a href="#javaScript" className="card-options-remove" data-toggle="card-remove"><i
                                                className="fe fe-x"></i></a>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md="5">
                                                <FormGroup>
                                                    <label className="form-label">Company</label>
                                                    <input type="text" className="form-control" placeholder="Company" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6" md="3">
                                                <FormGroup>
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" placeholder="Username" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6" md="4">
                                                <FormGroup>
                                                    <label className="form-label">Email address</label>
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6" md="6">
                                                <FormGroup>
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" placeholder="Company" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6" md="6">
                                                <FormGroup>
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Last Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label className="form-label">Address</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Home Address" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6" md="4">
                                                <FormGroup>
                                                    <label className="form-label">City</label>
                                                    <input type="text" className="form-control" placeholder="City" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6" md="3">
                                                <FormGroup>
                                                    <label className="form-label">Postal Code</label>
                                                    <input type="number" className="form-control"
                                                           placeholder="ZIP Code" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="5">
                                                <FormGroup>
                                                    <label className="form-label">Country</label>
                                                    <select className="form-control btn-square">
                                                        <option defaultValue="0">--Select--</option>
                                                        <option defaultValue="1">Germany</option>
                                                        <option defaultValue="2">Canada</option>
                                                        <option defaultValue="3">Usa</option>
                                                        <option defaultValue="4">Aus</option>
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup className="mb-0">
                                                    <label className="form-label">About Me</label>
                                                    <textarea rows="3" className="form-control"
                                                              placeholder="Enter About your description"></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <div className="card-footer text-right">
                                        <button type="submit" className="btn btn-primary">Update Profile</button>
                                    </div>
                                </Form>
                            </Col>
                            <Col md="12">
                                <Card>
                                    <CardHeader>
                                        <h4 className="card-title mb-0">Add projects And Upload</h4>
                                        <div className="card-options">
                                            <a href="#javaScript" className="card-options-collapse" data-toggle="card-collapse"><i
                                                className="fe fe-chevron-up"></i></a>
                                            <a href="#javaScript" className="card-options-remove" data-toggle="card-remove"><i
                                                className="fe fe-x"></i></a>
                                        </div>
                                    </CardHeader>
                                    <div className="table-responsive">
                                        <Table className="card-table table-vcenter text-nowrap">
                                            <thead>
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <td><a href="#javaScript" className="text-inherit">Untrammelled prevents </a>
                                                </td>
                                                <td>28 May 2018</td>
                                                <td><span className="status-icon bg-success"></span> Completed</td>
                                                <td className="digits">$56,908</td>
                                                <td className="text-right">
                    
                                                    <a href="#javaScript" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                    
                                                    <a href="#javaScript" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                    
                                                    <a href="#javaScript" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#javaScript" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>12 June 2018</td>
                                                <td><span className="status-icon bg-danger"></span> On going</td>
                                                <td className="digits">$45,087</td>
                                                <td className="text-right">
                    
                                                    <a href="#javaScript" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                    
                                                    <a href="#javaScript" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                    
                                                    <a href="#javaScript" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#javaScript" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>12 July 2018</td>
                                                <td><span className="status-icon bg-warning"></span> Pending</td>
                                                <td className="digits">$60,123</td>
                                                <td className="text-right">
                    
                                                    <a href="#javaScript" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                    
                                                    <a href="#javaScript" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                    
                                                    <a href="#javaScript" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#javaScript" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>14 June 2018</td>
                                                <td><span className="status-icon bg-warning"></span> Pending</td>
                                                <td className="digits">$70,435</td>
                                                <td className="text-right">
                    
                                                    <a href="#javaScript" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                    
                                                    <a href="#javaScript" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                    
                                                    <a href="#javaScript" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#javaScript" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>25 June 2018</td>
                                                <td><span className="status-icon bg-success"></span> Completed</td>
                                                <td className="digits">$15,987</td>
                                                <td className="text-right">
                    
                                                    <a href="#javaScript" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                    
                                                    <a href="#javaScript" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                    
                                                    <a href="#javaScript" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
}
export default EditProfile
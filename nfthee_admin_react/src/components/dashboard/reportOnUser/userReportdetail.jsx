import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import { Container } from 'reactstrap';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import backendInstance from '../../../backendInstance';
import axios from 'axios';
import { useHistory } from 'react-router';
import instance from "../../../axios";
import Swal from 'sweetalert2';

export default function UserReport() {
    const [data, setdata] = useState([]);
    let history = useHistory();
    const [changes,setChanges]=useState()
  
    const [loading, setLoading] = useState(true);
  
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    useEffect(async()=>{
  
      await 
      backendInstance
    // axios
      .get(`/api/fetchAllUserReport`)
      .then(res=> {
          let newdta=res.data.data
          setdata(newdta)
      setLoading(false)
      })
     
  
    },[changes,loading])
  
    const columns = [
      
      {
        name: "From",
        selector: 'userId',
        sortable: true,
        cell: (data) => {
          const [modalIsOpen, setModalIsOpen] = useState(false);
    
          const handleOpenModal = () => {
            setModalIsOpen(true);
          };
    
          const handleCloseModal = () => {
            setModalIsOpen(false);
          };
    
          return (
            <>
              <img
                src={data.userId.profile_image||require('../../../assets/images/user/avt-1.jpg')}
                height="32px"
                width="32px"
                onClick={handleOpenModal}
                style={{ cursor: "pointer" }}
              />
               &nbsp;&nbsp; <p>{data.userId.user_name}</p>
              {modalIsOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 9999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={handleCloseModal}
                >
                  <img src={data.userId.profile_image||require('../../../assets/images/user/avt-1.jpg')} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                </div>
              )}
            </>
          );
                }},
                {
                  name: "On",
                  selector: 'reportedUser',
                  sortable: true,
                  cell: (data) => {
                    const [modalIsOpen, setModalIsOpen] = useState(false);
              
                    const handleOpenModal = () => {
                      setModalIsOpen(true);
                    };
              
                    const handleCloseModal = () => {
                      setModalIsOpen(false);
                    };
              
                    return (
                      <>
                        <img
                          src={data.reportedUser.profile_image||require('../../../assets/images/user/avt-1.jpg')}
                          height="32px"
                          width="32px"
                          onClick={handleOpenModal}
                          style={{ cursor: "pointer" }}
                        />
                       &nbsp;&nbsp; <p>{data.reportedUser.user_name}</p>
                        {modalIsOpen && (
                          <div
                            style={{
                              position: "fixed",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: "rgba(0, 0, 0, 0.6)",
                              zIndex: 9999,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onClick={handleCloseModal}
                          >
                            <img src={data.reportedUser.profile_image||require('../../../assets/images/user/avt-1.jpg')} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                          </div>
                        )}
                      </>
                    );
                          }},
          {
            name: 'Report',
            selector: 'action',
            sortable: true,
            width: "10rem",
          },
          {
            name: 'Issue',
            selector: 'report_issue',
            sortable: true,
          },
          {
            name: 'Date/Time',
            selector: 'timeSinceCreated',
            sortable: true,
            width: "10rem",
          },
         
          {
            name: 'Action',
            selector: '_id',
            sortable: true,
            cell: (data) => (
              <div>
               
      
      
             
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => handleView(data)}
                  id='1'
                >
                  <i className='fa fa-eye'></i>
                </button>
                <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(data)}
                          id="2"
                      >
                          <i className="fa fa-trash"></i>
                      </button>
               
              </div>
            ),
          },
        ];
  
   
    const tableData = {
      data,
      columns,
      filterPlaceholder:"filter items",
      filterDigit:0
    };
  //   http://192.168.29.147:8002/api/fetchAllReport
  
    
  const handleDelete = data => {
    Swal.fire({
        title: "Are you sure you want to do this?",
        cancelButtonText: "No!",
        confirmButtonText: "Yes!",
        reverseButtons: true,
        showCancelButton: true,
    }).then(function (result) {
        if (result.value) {
            // instance
            backendInstance
            .post(`/api/deleteUserReport?id=${data._id}`)
                .then(response => {if(response.status===200){
                    setChanges(Math.random())
                }})
        }
    });
  }
  
    const handleView = data => {
      history.push(`/dashboard/userviewReport?id=${data._id}`, {
          state: {
              _id: data._id
          }
      })
  }
    return (
      <Fragment>
      <Breadcrumb title="Report's on User's" parent='CRM' />
      <Container fluid={true}>
        <DataTableExtensions {...tableData} >
          <DataTable
           columns={columns}
           data={data}
           progressPending={loading}
  
            noHeader
            defaultSortField='id'
            defaultSortAsc={false}
            highlightOnHover
            pagination
            striped
            
            // filter={filterDigit}
          />
        </DataTableExtensions>
      </Container>
      {/* <Item/> */}
    </Fragment>
    )
}

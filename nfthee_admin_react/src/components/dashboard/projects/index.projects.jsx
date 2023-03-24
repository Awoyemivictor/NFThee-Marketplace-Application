import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import { Container } from 'reactstrap';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import backendInstance from '../../../backendInstance';
import { useHistory } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
export default function Projects() {

    const [data, setdata] = useState([]);
    let history = useHistory();
  const [checkChnages,setChanges]=useState()
    const [loading, setLoading] = useState(true);
  
       useEffect(()=>{
        // http://localhost:8002/api/getVerification
        backendInstance
        // axios
        .post(`/api/getAllVerification`)
        .then(res=>( setdata(res.data.data)))
        .finally(()=>setLoading(false))
    
      },[loading ,checkChnages ])

      const columns = [
    //     {
    //       name: "Icon",
    //       selector: 'profile_image',
    //       sortable: true,
    // cell: (data) => <img src={data.project_logo||require('../../../assets/images/user/avt-1.jpg')} height='32px' width='32px' />,
  
    //       width: "3rem",
  
    //   },
    {
      name: "Icon",
      selector: 'project_logo',
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
              src={data.project_logo||require('../../../assets/images/user/avt-1.jpg')}
              height="32px"
              width="32px"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            />
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
                <img src={data.project_logo||require('../../../assets/images/user/avt-1.jpg')} style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </div>
            )}
          </>
        );
              }},
        {
          name: 'Project Name',
          selector: 'project_name',
          sortable: true,
          width: "10rem",
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
        },
        {
          name: 'Contract Address',
          selector: 'contract_address',
          sortable: true,
          width: "10rem",
        },
        {
          name: 'Original',
          selector: 'original',
          sortable: true,
          width: "10rem",
        },
        {
          name: 'Website',
          selector: 'website',
          sortable: true,
          wrap:true,
        },
        {
          name: 'Action',
          selector: '_id',
          sortable: true,
          cell: (data) => (
            <div>
              {/* {data.status === 'pending' && (
                <button
                id='verified'
                  className='btn btn-success btn-sm'
                //   onClick={(e) => completeTask(data,e)}
                >
                  <i class='fa fa-check-circle-o' aria-hidden='true'></i>
                </button>
              )}
    
    
              {data.status === 'verified' && (
                <button
                id='pending'
                class="btn btn-warning"
                //   onClick={(e) => completeTask(data,e)}
                >
                 
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </button>
              )} */}
    
              <button
                className='btn btn-primary btn-sm'
                onClick={() => handleView(data)}
                id='3'
              >
                <i className='fa fa-eye'></i>
              </button>
              <button
                className='btn btn-danger btn-sm'
                onClick={() => handleDelete(data)}
                id='4'
              >
                <i className='fa fa-trash'></i>
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


      const handleView = collections => {
        history.push(`/dashboard/view/singleProject?id=${collections._id}`, {
            state: {
                _id: collections._id
            }
        })
        
      
    }


    const handleDelete = collections => {
        Swal.fire({
            title: "Are you sure you want to do this?",
            cancelButtonText: "No!",
            confirmButtonText: "Yes!",
            reverseButtons: true,
            showCancelButton: true,
        }).then(function (result) {
            if (result.value) {
                // axios
                backendInstance
                .post(`/api/deleteVerification`,{id:collections._id})
                    .then(response => {if(response.status===200)setChanges(Math.random())})
            }
        });
    }
  return (
     <Fragment>
      <Breadcrumb title='Project Details' parent='Project' />
      <Container fluid={true}>
        <DataTableExtensions {...tableData}  >
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

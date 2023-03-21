import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import { Container } from 'reactstrap';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import backendInstance from '../../../backendInstance';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Otheruser() {
  const [data, setdata] = useState([]);
  let history = useHistory();

  const [loading, setLoading] = useState(true);

     useEffect(()=>{

      backendInstance
      .get(`/api/signUp/all`)
      .then(res=>( setdata(res.data.data)))
      .finally(()=>setLoading(false))
  
    },[loading  ])

    const columns = [
      {
        name: "Icon",
        selector: 'profile_image',
        sortable: true,
  cell: (data) => <img src={data.profile_image||require('../../../assets/images/user/avt-1.jpg')} height='32px' width='32px' />,

        width: "3rem",

    },
      {
        name: 'Userame',
        selector: 'user_name',
        sortable: true,
        width: "10rem",
      },
      {
        name: 'Email',
        selector: 'email_address',
        sortable: true,
      },
      {
        name: 'Country',
        selector: 'country',
        sortable: true,
        width: "10rem",
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: true,
        width: "10rem",
      },
      {
        name: 'Account Address',
        selector: 'account_address',
        sortable: true,
        wrap:true,
      },
      {
        name: 'Action',
        selector: '_id',
        sortable: true,
        cell: (data) => (
          <div>
            {data.status === 'pending' && (
              <button
              id='verified'
                className='btn btn-success btn-sm'
                onClick={(e) => completeTask(data,e)}
              >
                <i class='fa fa-check-circle-o' aria-hidden='true'></i>
              </button>
            )}
  
  
            {data.status === 'verified' && (
              <button
              id='pending'
              class="btn btn-warning"
                onClick={(e) => completeTask(data,e)}
              >
               
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </button>
            )}
  
            <button
              className='btn btn-primary btn-sm'
              onClick={() => handleView(data)}
              id='3'
            >
              <i className='fa fa-eye'></i>
            </button>
            {/* <button
              className='btn btn-danger btn-sm'
              // onClick={() => handleDeleteItem(data)}
              id='4'
            >
              <i className='fa fa-trash'></i>
            </button> */}
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
    const completeTask=async(collections,e)=>{
      setLoading(true)
   
 await backendInstance.get(`/api/updateUserStatus?id=${collections._id}&&action=${e.target.id}`)
  .then(response => console.log(response.data.data))
  .finally(() => setLoading(false))
  }
  
  const handleView = collections => {
    history.push(`/dashboard/view/singleUser?id=${collections._id}`, {
        state: {
            _id: collections._id
        }
    })
}

  return (
    <Fragment>
      <Breadcrumb title='Users Details' parent='view' />
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

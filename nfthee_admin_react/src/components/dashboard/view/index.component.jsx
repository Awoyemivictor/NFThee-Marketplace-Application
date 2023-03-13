import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from '../../common/breadcrumb.component';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Container } from 'reactstrap';
import Swal from 'sweetalert2';
// import BlogService from "../../services/blog.service";
// import Loader from "./loader";
import { toast } from 'react-toastify';

import axios, { Axios } from 'axios';
import instance from '../../../axios';
import backendInstance from '../../../backendInstance';

const ItemDetail = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  useEffect(() => {
    backendInstance
      .get(`api/admin/getAllItem`)

      .then((response) => setdata(response.data.data))
      .finally(() => setLoading(false));
  }, [loading]);
  const handleSort=(column) => {
    backendInstance
      .get(`api/admin/getAllItem?id=${column.sortField}`)

      .then((response) => setdata(response.data.data))
  
  };

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      filterable:true,
      filterDigit:-1,
      sortField: 'name',
    },
    {
      name: 'About',
      selector: 'about',
      sortable: true,
      truncateText: true,
      maxWidth: '1px',
      sortField: 'about',
      filterable:false,

    },
    {
      name: 'Designation',
      selector: 'designation',
      sortable: true,
      truncateText: true,
      maxWidth: '1px',
      filterable:false,
      sortField: 'designation',
    },
    {
      name: 'Blockchain',
      selector: 'chooseBlockchain',
      sortable: true,
      filterable:false,
      sortField: 'chooseBlockchain'
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      filterable:false,
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
            onClick={() => handleViewItems(data)}
            id='3'
          >
            <i className='fa fa-eye'></i>
          </button>
          <button
            className='btn btn-danger btn-sm'
            onClick={() => handleDeleteItem(data)}
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
    
    // filterPlaceholder:"filter items",
    filterDigit:0
  };
console.log(tableData,tableData.filterPlaceholder)
  const completeTask = (collections,e) => {
    setLoading(true);

   

   
    backendInstance
      .get(`api/getItem/update?id=${collections._id}&&action=${e.target.id}`)
      .then((response) => console.log(response.data.data))
      .finally(() => setLoading(false));
  };

  const handleViewItems = (data) => {
    history.push(
      `${process.env.PUBLIC_URL}/dashboard/view/createItemSingle?id=${data._id}`,
      {
        state: {
          _id: data._id,
        },
      }
    );
  };

  const handleDeleteItem = (data) => {

    let body = { userId: data._id };
    Swal.fire({
      title: 'Are you sure you want to do this?',
      cancelButtonText: 'No!',
      confirmButtonText: 'Yes!',
      reverseButtons: true,
      showCancelButton: true,
    }).then(function(result) {
      if (result.value) {
        backendInstance
          .post(`/api/delete`, body)
          .then((response) => console.info(response.data.data));
      }
    });
  };
//   const customSort = (rows, selector, direction) => {
//     return orderBy(rows, selector, direction);
// };
// onSort={handleSort}

 
  return (
    <Fragment>
      <Breadcrumb title='Collection Details' parent='view' />
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
            onSort={handleSort}
            sortServer
            // filter={filterDigit}
          />
        </DataTableExtensions>
      </Container>
      {/* <Item/> */}
    </Fragment>
  );
};

export default ItemDetail;

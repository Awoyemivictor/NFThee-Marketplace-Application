import React, {Fragment, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb.component";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {Container} from "reactstrap";
import Swal from "sweetalert2";
// import BlogService from "../../services/blog.service";
// import Loader from "./loader";
import {toast} from "react-toastify";

import axios, { Axios } from 'axios';
import instance from "../../../axios";

const ItemDetail = () => {
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    useEffect(() => {
     
        axios.get(`${process.env.REACT_APP_RENDER_BASE_URL}/api/admin/getAllItem`)

            .then(response => setdata(response.data.data))
            .finally(() => setLoading(false))
    }, [loading]);


    const columns = [
        {
            name: "Name",
            selector:'name',
            sortable: true,
        },
        {
            name: "About",
            selector:'about',
            sortable: true,
            truncateText: true,
            maxWidth: '1px',
        },
        {
            name: "Designation",
            selector:"designation",
            sortable: true,
            truncateText: true,
            maxWidth: '1px',
        },
        {
            name: "Blockchain",
            selector: "chooseBlockchain",
            sortable: true,
        },
        {
            name: "Status",
            selector: "status",
            sortable: true,
        },
        {
            name: "Action",
            selector: "_id",
            sortable: true,
            cell: (data) => (
                <div>
                    {data.status === 'pending' && (
          <button 
          className="btn btn-success btn-sm"
          onClick={() => completeTask(data)}
          id="1"
          >
          <i class="fa fa-check-circle-o" aria-hidden="true"></i></button>
        )}
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewItems(data)}
                        id="2"
                    >
                        <i className="fa fa-eye"></i>
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteItem(data)}
                        id="3"
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
	};


    const completeTask=(collections)=>{
        setLoading(true)
     
    console.log(collections._id)
    axios.get(`http://192.168.1.147:8002/api/getItem/update?id=${collections._id}`)
    .then(response => console.log(response.data.data))
    .finally(() => setLoading(false))
    }

    const handleViewItems = data => {
        history.push(`${process.env.PUBLIC_URL}/dashboard/view/createItemSingle?id=${data._id}`, {
            state: {
                _id: data._id
            }
        });
    }

    const handleDeleteItem = data => {
        Swal.fire({
            title: "Are you sure you want to do this?",
            cancelButtonText: "No!",
            confirmButtonText: "Yes!",
            reverseButtons: true,
            showCancelButton: true,
        }).then(function (result) {
            if (result.value) {
                instance.post(`/api/deleteItem/?id=${data._id}`)
                    .then(response => console.info(response.data.data))
            }
        });
    };
    return (
        <Fragment>
            <Breadcrumb title="Collection Details" parent="view"/>
            <Container fluid={true}>
            <DataTableExtensions {...tableData}>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    highlightOnHover
                    pagination
                    striped
                />
                </DataTableExtensions>
            </Container>
            {/* <Item/> */}
        </Fragment>
    );
};

export default ItemDetail;

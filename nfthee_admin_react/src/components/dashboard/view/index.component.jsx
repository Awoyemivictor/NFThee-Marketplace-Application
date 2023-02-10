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
    const [itemsData, setItemsData] = useState([]);
    useEffect(() => {
     
        axios.get("http://192.168.1.4:8002/api/getItem")

            .then(response => setItemsData(response.data.data))
            .finally(() => setLoading(false))
    }, []);


    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "About",
            selector: row => row.about,
            sortable: true,
        },
        {
            name: "Designation",
            selector: row => row.designation,
            sortable: true,
        },
        {
            name: "Blockchain",
            selector: row => row.chooseBlockchain,
            sortable: true,
        },
        {
            name: "Action",
            selector: "_id",
            sortable: true,
            cell: (itemsData) => (
                <div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewItems(itemsData)}
                        id="1"
                    >
                        <i className="fa fa-eye"></i>
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteItem(itemsData)}
                        id="3"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            ),
        },
    ];

    const handleViewItems = itemsData => {
        history.push(`${process.env.PUBLIC_URL}/dashboard/view/createItemSingle?id=${itemsData._id}`, {
            state: {
                _id: itemsData._id
            }
        });
    }

    const handleDeleteItem = itemsData => {
        Swal.fire({
            title: "Are you sure you want to do this?",
            cancelButtonText: "No!",
            confirmButtonText: "Yes!",
            reverseButtons: true,
            showCancelButton: true,
        }).then(function (result) {
            if (result.value) {
                instance.post(`/api/deleteItem/?id=${itemsData._id}`)
                    .then(response => console.info(response.data.data))
            }
        });
    };
    return (
        <Fragment>
            <Breadcrumb title="Collection Details" parent="view"/>
            <Container fluid={true}>
                <DataTable
                    columns={columns}
                    data={itemsData}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    highlightOnHover
                    pagination
                    striped
                />
            </Container>
            {/* <Item/> */}
        </Fragment>
    );
};

export default ItemDetail;

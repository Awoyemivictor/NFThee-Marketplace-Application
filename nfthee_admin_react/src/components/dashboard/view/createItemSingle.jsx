import React, {Fragment, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb.component";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {Container} from "reactstrap";
import {useParams} from "react-router-dom";

import Swal from "sweetalert2";
import Loader from "./loader";
import {toast} from "react-toastify";
import axios from "axios";
import instance from "../../../axios";

const ItemSingle = () => {
    let history = useHistory();
    // debugger
    const {params} = useParams();
    console.log(params);

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        {
            name: " ID",
            selector: "_id",
            sortable: true,
            emptyValue: () => <em>null</em>
        },
        {
            name: "Title",
            selector: "title",
            sortable: true,
            emptyValue: () => <em>null</em>

        },
        {
            name: "Author",
            selector: "author_name",
            sortable: true,
        },
        {
            name: "Sub Description",
            selector: "sub_description",
            sortable: true,
        },
        {
            name: "Dscription",
            selector: "description",
            sortable: true,
        },
        {
            name: "Posting",
            selector: "date_of_posting",
            sortable: true,
        },
        {
            name: "Status",
            selector: "status",
            sortable: true,
        },
        {
            name: "Meta Tag",
            selector: "meta_tag",
            sortable: true,
        },
        {
            name: "meta Title",
            selector: "meta_title",
            sortable: true,
        },
        {
            name: "Meta Description",
            selector: "meta_description",
            sortable: true,
        },
        {
            name: "keyword tag",
            selector: "keyword_tag",
            sortable: true,
        },
        {
            name: "created At",
            selector: "createdAt",
            sortable: true,
        },
        {
            name: "updated At",
            selector: "updatedAt",
            sortable: true,
        },
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
    ];


    const tableData = {
        data,
        columns,
    };

    useEffect(() => {
        // if (loading) {
        axios.post(`http://192.168.0.105:2022/api/nftteam/read?id=${params}`).then((res) => {
            if (res.data) {
                setdata(res.data.ress);
                console.log(res.data);
                setLoading(false);
            }
        });
        // }
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
            <Breadcrumb title="Created Item Details" parent="view"/>
            {/* {loading ? (
        <Loader />
      ) : ( */}
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
            {/* )} */}
        </Fragment>
    );
};

export default ItemSingle;

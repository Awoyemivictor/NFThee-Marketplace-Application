import React, {Fragment, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb.component";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import {Container} from "reactstrap";
import Swal from "sweetalert2";
import instance from "../../../axios";


const CollectionDetail = () => {
    let history = useHistory();

    const [collectionsData, setCollectionsData] = useState([]);
    useEffect(() => {
        instance.get("/api/getCollections")
            .then(response => setCollectionsData(response.data.data))
            .finally(() => setLoading(false))

    }, []);

    const [loading, setLoading] = useState(true);

    // const columns = [
    //     {
    //         name: " userId",
    //         selector: "userId",
    //         sortable: true,
    //     },
    //     {
    //         name: "logo_image",
    //         selector: "logo_image",
    //         sortable: true,
    //     },
    //     {
    //         name: "featured_image",
    //         selector: "featured_image",
    //         sortable: true,
    //     },
    //     {
    //         name: "banner_image",
    //         selector: "banner_image",
    //         sortable: true,
    //     },
    //     {
    //         name: "name",
    //         selector: "name",
    //         sortable: true,
    //     },
    //     {
    //         name: "url",
    //         selector: "url",
    //         sortable: true,
    //     },
    //     {
    //         name: "description",
    //         selector: "description",
    //         sortable: true,
    //     },
    //     {
    //         name: "links",
    //         selector: "links",
    //         sortable: true,
    //     },
    //     {
    //         name: "creator_earnings",
    //         selector: "creator_earnings",
    //         sortable: true,
    //     },
    //     {
    //         name: "blockchain",
    //         selector: "blockchain",
    //         sortable: true,
    //     }, {
    //         name: "payment_token",
    //         selector: "payment_token",
    //         sortable: true,
    //     }, {
    //         name: "display_theme",
    //         selector: "display_theme",
    //         sortable: true,
    //     },
    //     {
    //         name: "explicit_sensitive_content",
    //         selector: "explicit_sensitive_content",
    //         sortable: true,
    //     },
    //     {
    //         name: "Action",
    //         selector: "_id",
    //         sortable: true,
    //         cell: (collections) => (
    //             <div>
    //                 {console.log(collections)}
    //                 <button
    //                     className="btn btn-primary btn-sm"
    //                     onClick={() => onView(collections)}
    //                     id="1"
    //                 >
    //                     <i className="fa fa-link"></i>
    //                 </button>
    //                 {" "}
    //                 {/* <button
    //         className="btn btn-green btn-sm"
    //         onClick={() => onUpdate(data)}
    //         id="2"
    //       >
    //         <i className="fa fa-pencil"></i>
    //       </button>{" "} */}
    //                 <button
    //                     className="btn btn-danger btn-sm"
    //                     onClick={() => onDel(collections)}
    //                     id="3"
    //                 >
    //                     <i className="fa fa-trash"></i>
    //                 </button>
    //             </div>
    //         ),
    //     },
    // ];

    const columns = [
        {
            name: "name",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "url",
            selector: row => row.url,
            sortable: true,
        },
        {
            name: "description",
            selector: row => row.url,
            sortable: true,
        },
        {
            name: "links",
            selector: row => row.links,
            sortable: true,
        },
        {
            name: "Action",
            selector: "_id",
            sortable: true,
            cell: (collections) => (
                <div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewCollection(collections)}
                        id="1"
                    >
                        <i className="fa fa-link"></i>
                    </button>
                    {" "}
                    {/* <button
                        className="btn btn-green btn-sm"
                        onClick={() => onUpdate(data)}
                        id="2"
                      >
                        <i className="fa fa-pencil"></i>
                      </button>{" "} */}
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteCollection(collections)}
                        id="3"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            ),
        },
    ];

    const handleViewCollection = collections => {
        history.push(`${process.env.PUBLIC_URL}/dashboard/view/collectionSingle?id=${collections._id}`, {
            state: {
                _id: collections._id
            }
        })
    }

    const handleDeleteCollection = collections => {
        Swal.fire({
            title: "Are you sure you want to do this?",
            cancelButtonText: "No!",
            confirmButtonText: "Yes!",
            reverseButtons: true,
            showCancelButton: true,
        }).then(function (result) {
            if (result.value) {
                instance.post(`/api/deleteCollection/?id=${collections._id}`)
                    .then(response => console.info(response.data.data))
            }
        });
    }

    return (
        <Fragment>
            <Breadcrumb title="Collection Details" parent="view"/>
            <Container fluid={true}>
                <DataTable
                    columns={columns}
                    data={collectionsData}
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

export default CollectionDetail;

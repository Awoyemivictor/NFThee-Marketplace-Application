import React, {Fragment, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb.component";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import DataTableExtensions from 'react-data-table-component-extensions';

import {Container} from "reactstrap";
import Swal from "sweetalert2";
import instance from "../../../axios";
import axios from "axios";
import { width } from "@mui/system";
import backendInstance from "../../../backendInstance";


const CollectionDetail = () => {
    let history = useHistory();
    const [loading, setLoading] = useState(true);
  const [changes,setChanges]=useState()

    const [data, setdata] = useState([]);
    useEffect(() => {
        backendInstance.get(`api/getAll`)
             .then(response => {
                if(response.status===200)
                {
                    setdata(response.data.data)
                setLoading(false)
            }
        })
             .finally(() => setLoading(false))
     
     }, [loading,changes]);
     

    console.log("dsfsdfsf",data)
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
            name: "Icon",
            selector: 'logo_image',
            sortable: true,
      cell: (data) => <img src={data.logo_image} height='32px' width='32px' />,

            width: "3rem",

        },
        {
            name: "Name",
            selector: 'name',
            sortable: true,
            width: "13rem",

        },
        {
            name: "Blockchain",
            selector: 'blockchain',
            sortable: true,
            width: "13rem",

        },
        {
            name: "Status",
            selector: 'status',
            sortable: true,
            width: "13rem",

        },
        {
            name: "links",
            selector: 'links',
            sortable: true,
            truncateText: true,
            width: "13rem",

            maxWidth: '16rem',
        },
        {
            name: "Description",
            selector: "description",
            sortable: true,
            truncateText: true,
            width: "13rem",
            maxWidth: '13rem',
        },
        {
            name: "Action",
            selector: "_id",
            sortable: true,
            cell: (collections) => (
                <div>
                     
        {collections.status === 'pending' && (
          <button 
          className="btn btn-success btn-sm"
          onClick={(e) => completeTask(collections,e)}
          id='verified'
          >
          <i class="fa fa-check-circle-o" aria-hidden="true"></i></button>
        )}
        {collections.status === 'verified' && (
            <button
            id='pending'
            class="btn btn-warning"
              onClick={(e) => completeTask(collections,e)}
            >
             
              <i class="fa fa-clock-o" aria-hidden="true"></i>
            </button>
          )}
    
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewCollection(collections)}
                        id="2"
                    >
                        <i className="fa fa-eye"></i>
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
    const tableData = {
		data,
		columns,
        filterPlaceholder:'filter collections',
        filterDigit:0
	};


const completeTask=(collections,e)=>{
    // setLoading(true)
 
backendInstance.get(`api/getCollection/update?id=${collections._id}&&action=${e.target.id}`)
.then(response => {if(response.status===200){
    setChanges(Math.random())
}})
}


    const handleViewCollection = collections => {
        history.push(`/dashboard/view/collectionSingle?id=${collections._id}`, {
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
                    .then(response => {if(response.status===200){
                        setChanges(Math.random())
                    }})
            }
        });
    }

    
    return (
        <Fragment>
                
            <Breadcrumb title="Collection Details" parent="view"/>
            <Container fluid={true} >
            <DataTableExtensions {...tableData}>
                <DataTable
                   	columns={columns}
                       data={data}
                       noHeader
                       progressPending={loading} 
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

export default CollectionDetail;

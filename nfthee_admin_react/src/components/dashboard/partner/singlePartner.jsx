import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb.component";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

import Swal from "sweetalert2";
// import Loader from "./loader";
import { toast } from "react-toastify";
import axios from "axios";
import instance from "../../../axios";

const singlePartner = () => {
  let history = useHistory();
  // debugger
  const { params } = useParams();
  console.log(params);

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    // {
    //   name: " ID",
    //   selector: "",
    //   sortable: true,
    //   emptyValue:()=><em>null</em>
    // },
    {
      name: "Project Name",
      selector: "project_name",
      sortable: true,
    },
    // {
    //   name: "Project Description",
    //   selector: "project_desc",
    //   sortable: true,
    // },
    // {
    //   name: "Website",
    //   selector: "project_website",
    //   sortable: true,
    // },
    // {
    //   name: "Auction Time",
    //   selector: "project_status",
    //   sortable: true,
    // },
    // {
    //   name: "status description",
    //   selector: "project_status_desc",
    //   sortable: true,
    // },
    // {
    //   name: "nft_artwork",
    //   selector: "nft_artwork",
    //   sortable: true,
    // },
    // {
    //   name: "Abominted Item",
    //   selector: "minted_item_count",
    //   sortable: true,
    // },
    {
      name: "Blockchain Mint",
      selector: "blockchain_mint",
      sortable: true,
    },

    {
      name: "Mint price",
      selector: "mint_price",
      sortable: true,
    },
    // {
    //   name: "Minting Page",
    //   selector: "is_minting_page",
    //   sortable: true,
    // },
    // {
    //   name: "Partnership",
    //   selector: "partnership",
    //   sortable: true,
    // },
    {
      name: "End Day",
      selector: "end_day",
      sortable: true,
    },
    // {
    //   name: "Banner Image",
    //   selector: "banner_image",
    //   sortable: true,
    // },
    // {
    //   name: "Icon Image",
    //   selector: "icon_image",
    //   sortable: true,
    // },
    {
      name: "Send Email",
      selector: "send_email_to",
      sortable: true,
    },

    // {
    //   name: "Created At",
    //   selector: "createdAt",
    //   sortable: true,
    // },
    // {
    //   name: "Updated At",
    //   selector: "updatedAt",
    //   sortable: true,
    // },
    {
      name: "Action",
      selector: "_id",
      sortable: true,
      cell: (data) => (
        <div>
          {console.log(data)}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onViewBlog(data)}
            id="1"
          >
            <i className="fa fa-eye"></i>
          </button>{" "}
          {/* <button
            className="btn btn-green btn-sm"
            onClick={() => onUpdateBlog(data)}
            id="2"
          >
            <i className="fa fa-pencil"></i>
          </button>{" "} */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDel(data)}
            id="3"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  const onDel = (data) => {
    console.log("del",data);
    Swal.fire({
      title: "Are you sure you want to do this?",
      cancelButtonText: "No!",
      confirmButtonText: "Yes!",
      reverseButtons: true,
      showCancelButton: true,
    }).then(function(result) {
      if (result.value) {
        deleteBlog(data);
      }
    });
  };



  const tableData = {
    data,
    columns,
  };
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const deleteBlog = (e) => {
    const next = [...data];
    // remove and save the item of interest to your variable
    const removedItems = next.splice(next.indexOf(e), 1);
    // your axios function formatted for /delete/:id
    const deleteCarModel = instance.get(
      `api/deletePartner?id=${e._id}`
    );
    // update react state with the new array
    setdata(next);
  };

  const onViewBlog = (e) => {
    console.log("onViewBlog=>", e);
    console.log("onViewBlogId=>", e._id);
    history.push(
      `${process.env.PUBLIC_URL}/dashboard/partner/viewPartner?partnerId=${e._id}`
    );
  };
  useEffect(() => {
    // if (loading) {
    instance.get(`api/getPartner`).then((res) => {
      if (res.data) {
        setdata(res.data.data);
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
      <Breadcrumb title="Partners" parent="Dashboard" />
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

export default singlePartner;

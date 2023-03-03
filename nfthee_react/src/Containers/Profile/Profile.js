import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";
import {useAppSelector} from "../../hooks/useRedux";
import axios from "axios";
import instance from "../../axios";

const Profile = () => {
  const user = useAppSelector(state => state.user.user)

  $(document).ready(function () {
    $('select').niceSelect();
  });

  useEffect(() => {
    $(document).ready(function () {
      //hides dropdown content
      $(".size_chart").hide();

      //unhides first option content
      $("#option1").show();

      //listen to dropdown for change
      $("#size_select").change(function () {
        //rehide content on change
        $('.size_chart').hide();
        //unhides current item
        $('#' + $(this).val()).show();
      });
    });
  })

  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("TokenData"));
  console.log(token === null ? window.location.href = "/walletlogin" : token);
  const LoginStatis = JSON.parse(localStorage.getItem("LoginInfo"));
  const [NameInfo] = useState(LoginStatis !== " " ? "Name" : LoginStatis);
  const [copySuccess, setCopySuccess] = useState("");
  const result1 = token.toString();
  var result = result1.slice(0, 8) + ".." + result1.slice(38, 48);
  console.log(result);
  const [tokenid, setTokenId] = useState(result);

  // if(tokenid === "undefined" ){
  //    window.location.href = "/walletlogin"
  // }
  useEffect(() => { }, []);
  function myFunction() {
    navigator.clipboard.writeText(result1);
    var tooltip = document.getElementById("tooltip");
    tooltip.classList.add('active');
    setTimeout(() => {
      tooltip.classList.remove('active');
    }, 1500);
  }
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  // function myFunction() {
  //   //reversed email text to stop bots
  //   let email = 'moc.liamg@siwel.syhr.yrrah';

  //   let tempInput = document.createElement('INPUT');
  //   document.body.appendChild(tempInput);
  //   tempInput.setAttribute('value', email.split('').reverse().join(''));
  //   tempInput.select();
  //   tempInput.setSelectionRange(0, 99999);
  //   document.execCommand('copy');
  //   document.body.removeChild(tempInput);

  //   var tooltip = document.getElementById("tooltip");
  //   tooltip.classList.add('active');
  //   setTimeout(() => {
  //      tooltip.classList.remove('active');
  //   }, 1500);
  // }
  const [image, setImage] = useState({ preview: "assets/images/avt-5.jpg", raw: "" });
const {_id,email}=JSON.parse(localStorage.getItem('userLoggedIn'))
const[collectionData,setCollectionData]=useState([])
const[itemData,setItemData]=useState([])
const[users,setuser]=useState([])
  useEffect(()=>{

    instance
    .get(`/api/userCollections?id=${_id}`)
    .then(res=>( setCollectionData(res.data.data)))

  },[])
  useEffect(()=>{

    instance
    .get(`/api/userItems?id=${_id}`)
    .then(res=>( setItemData(res.data.data)))


  },[])

  const [changes,setChanges]=useState()

  useEffect(()=>{

    instance
    .get(`/api/signUp/all`)
    .then(res=>( setuser(res.data.data)))

  },[changes])

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
    $(function () {
      $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
      });
    })
  };
  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };
  
  const handlleFollow=(id,e)=>{
    // setChanges(true)
    if(e.target.value==="follow"){
   const formData=new FormData()
   formData.append("id", id);
console.log(id)
   const { data } =  axios({
    method: 'put',
    url: `${process.env.REACT_APP_BASE_URL}/api/userFollow?id=${_id}`,
    data: {
        id: id,
    }
  });
    }
  if(e.target.value==="unfollow"){

 const formData=new FormData()
 formData.append("id", id);
console.log(id)
 const { data } =  axios({
  method: 'put',
  url: `${process.env.REACT_APP_BASE_URL}/api/userUnFollow?id=${_id}`,
  data: {
      id: id,
  }
});
}
setChanges(Math.floor(Math.random() * 10))
// console.log(data);
   
  }
  return (
    <>
      <main>
        <section className="bg-section profile-bg-section">
          <section className="profile-banner-section">
            <div className="profile-banner-image">
              <img
                src="assets/images/Banner4.png"
                alt=""
                className="img-fluid w-100 profile-banner-img"
              />
              <div className="col-lg-12 col-md-12 d-lg-none d-block mobile-dropdown">
                <div className="mt-3">
                  <div className="explore-social-icon d-flex justify-content-end">
                    <div className="user-more-detail">
                      <div className="more">
                        <div className="icon dropdown">
                          <a href="#" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/images/icons/three-dots.png" alt="" /></a>
                          <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/rotate.png" /></span>  Refrash</a>
                            <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/etherscan-logo.png" /></span>Etherscan  </a>
                            <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/share.png" /></span> Share </a>
                            <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/report.png" /></span> Report </a>
                            <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/home.png" /></span>Website </a>
                            {/* <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/eyeicon.png" /></span>Preview </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 d-lg-flex d-none">
              <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-end mt-3">

                  <div className="explore-social-icon">
                    <ul>
                      <li>
                        <div className="user-more-detail">
                          <div className="more">
                            <div className="icon">
                              <a href="#">
                                <img
                                  src="/assets/images/icons/etherscan-logo.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="user-more-detail">
                          <div className="more">
                            <div className="icon">
                              <a href="#">
                                <img
                                  src="/assets/images/icons/rotate.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="user-more-detail">
                          <div className="more">
                            <div className="icon dropdown">
                              <a
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="/assets/images/icons/three-dots.png"
                                  alt=""
                                />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <a className="dropdown-item" href="#">
                                  <span className="dropdown-icon">
                                    <img src="assets/images/icons/share.png" />
                                  </span>
                                  Share
                                </a>
                                <a className="dropdown-item" href="#">
                                  <span className="dropdown-icon">
                                    <img src="assets/images/icons/report.png" />
                                  </span>
                                  Report
                                </a>
                                <a className="dropdown-item" href="#">

                                  <span className="dropdown-icon">
                                    <img src="assets/images/icons/home.png" />
                                  </span>
                                  Website
                                </a>
                                {/* <a className="dropdown-item" href="#">
                                 <span className="dropdown-icon">
                                   <img src="assets/images/icons/eyeIcon.png" /></span> Preview </a> */}

                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-profile-wrapper">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 px-lg-4">
                    <div className="user-profile-icon">
                      <div className="user-box">
                        <img
                          // src="assets/images/avt-5.jpg"
                          src={image.preview}
                          alt=""
                          className="img-fluid user-img"
                        />
                        <span className="edit-img-box" style={{ cursor: "pointer" }}>
                          <input id="select-image" style={{ display: "none" }} type="file" onChange={handleChange} />
                          {/* <input id="profile-image-upload" class="hidden" type="file" onchange="previewFile()" ></input> */}
                          <label htmlFor="select-image">
                            <img src="assets/images/icons/pencil.png" onChange={handleChange} style={{ cursor: "pointer" }} alt="" /> </label>
                        </span>
                      </div>
                    </div>
                    <div className="user-profile-detail">
                      {/* <h3>{NameInfo.firstName === undefined? "John Doe" :NameInfo.firstName + " " + NameInfo.lastName}</h3> */}
                      <h3>{user.user_name}</h3>
                      {/* <span className="tooltiptext" id="myTooltip">Copy to clipboard</span> */}
                      <p class="profile-sub-header mb-3"><img src="assets/images/icons/star-check.png" alt="" /> Created Account {user.createdAt}</p>
                      <div className="d-lg-none d-block mb-4">
                        <a href="#"><span className="profile-sub-header">
                          <img src="assets/images/icons/star-check.png" alt="" /> Created Account 19 Dec 2021</span></a>
                      </div>
                      <a
                        href="#"
                        type="button"
                        className="btn btn-dark tokenId"
                        onClick={myFunction}
                        data-title="Copy Address"
                      >
                        <sapn id="tooltip" class="tooltip ">Copied !</sapn>

                        <img
                          src="assets/images/icons/ethereum-white.png"
                          alt=""
                          className="me-1"
                        />
                        {tokenid}
                      </a>

                      <Link
                        to="/profilesetting"
                        type="button"
                        className="btn btn-violet edit-profile-btn ms-2"
                      >
                        <img
                          src="assets/images/icons/pencil.png"
                          alt=""
                          className="me-1"
                        />
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-profile-tab">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="on-sale-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#on-sale"
                      aria-selected="true"
                    >
                      <img src="assets/images/icons/sale-icon.png" alt="" />
                      On Sale (05)
                    </button>
                    <button
                      className="nav-link"
                      id="following-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#following"
                      aria-selected="false"
                    >
                      <img src="assets/images/icons/followdark.png" alt="" />
                      Following (05)
                    </button>
                    <button
                      className="nav-link"
                      id="created-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#created"
                      aria-selected="false"
                    >
                      <img src="assets/images/icons/create-icon.png" alt="" />
                      Created ({itemData?.length})
                    </button>
                    <button
                      className="nav-link"
                      id="collections-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#collections"
                      aria-selected="false"
                    >
                      <img src="assets/images/icons/pic-icon.png" alt="" />
                      Collections ({collectionData?.length})
                    </button>
                    <button
                      className="nav-link"
                      id="liked-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#liked"
                      aria-selected="false"
                    >
                      <img
                        src="assets/images/icons/heart-icon-black.png"
                        alt=""
                      />
                      Liked (05)
                    </button>
                    <button
                      className="nav-link"
                      id="activity-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#activity"
                      aria-selected="false"
                    >
                      <img src="assets/images/icons/act-line-icon.png" alt="" />
                      Activity (05)
                    </button>
                    {/* <div class="dropdown-menu">
                    <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </div> */}

                    <button
                      className="nav-link dropdown"
                      id="offers-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#offers"
                      aria-selected="false"
                    >
                      <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/icons/percent-icon.png" alt="" />
                        Offers (05)</a>
                      <div class="dropdown-menu offer-dropdown">
                        <a class="dropdown-item" href="#">Offers received</a>
                        <a class="dropdown-item" href="#">Offers made</a>
                      </div>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="on-sale">
                    <div className="container">
                      <div className="col-lg-12 col-md-12">
                        <div className="row mb-4 mb-lg-5">
                          <div className="col-lg-11 col-md-11 mx-auto">
                            <div className="row">
                              <div className="col-lg-5 col-md-5">
                                <div className="profile-search-form">
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="form-control"
                                  />
                                  <span className="ri-search-line search-icon" />
                                </div>
                              </div>
                              <div className="col-lg-7 col-md-7">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6">
                                    <select className="form-select">
                                      <option data-display="single item">
                                        Single Items
                                      </option>
                                      <option value={1}>One</option>
                                      <option value={2}>Two</option>
                                      <option value={3}>Three</option>
                                    </select>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    {/* <select className="form-select">
                                      <option data-display="Active">  Active</option>
                                      <option value={1}>Inactive</option>
                                   </select> */}
                                    <select id="size_select">
                                      <option value="option1">Active</option>
                                      <option value="option2">Inactive</option>
                                    </select>
                                  </div>
                                  {/* <div id="option1" class="size_chart">
                                  Kids
                                </div>
                                <div id="option2" class="size_chart">
                                  Youth
                                </div>   */}
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="top-collection-over-section">
                          <div className="row">
                            <div className="profile-content-wrapper">
                              <div class="row">
                                <div class="col-6">
                                  <h4 className="hd-title ">  Active Listings    </h4>
                                </div>
                                <div class="col-6">
                                  <a href="">  <h4 className="hd-title float-end" style={{ color: "#2081E2" }}> Cancle all listings and offer <i class="las la-info-circle"></i>    </h4></a>
                                </div>
                              </div>
                              <div id="option1" class="size_chart" >
                                <div className="activity-table-container table-responsive">
                                  <table className="table">
                                    <thead>
                                      <tr>

                                        <th scope="col">Item</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Floor Difference</th>
                                        <th scope="col">Expiration Date</th>
                                        <th scope="col"> </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div class="d-flex align-items-center">
                                            <img src="assets/images/icons/activeimg.png" alt="" class="user-img" />
                                            <span class="ms-2">Money Poly</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="price-detail">
                                            <h5><img src="assets/images/icons/ethereum.png" alt="" class="me-1" /> 2.59</h5>
                                            <h6>$52547.30</h6>
                                          </div>
                                        </td>
                                        <td >   At Floor   </td>
                                        <td>  May 16, 2022</td>
                                        <td><a type="button" href="#" className="btn btn-violet edit-profile-btn ms-2">Cancel</a></td>
                                      </tr>

                                    </tbody>
                                  </table>
                                </div>

                                {/* <div className="row"  >
                                <div className="col-lg-2 col-md-4">
                                  <div className="collection-card grad-border">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
                                        <div className="collection-id red">
                                          #1
                                        </div>
                                        <h5 className="collection-point">
                                          + 41.51%
                                        </h5>
                                      </div>
                                      <div className="d-flex">
                                        <a href="#">
                                          <img
                                            className="user_img"
                                            src="assets/images/avatar2.png"
                                            alt=""
                                          />
                                        </a>
                                        <div className="ms-2">
                                          <h5 className="user_name">
                                            Crispin Berry
                                          </h5>
                                          <p className="eth_price">
                                            <img
                                              className="me-1"
                                              src="assets/images/icons/ethereum.png"
                                              alt=""
                                            />
                                            25,368.18
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                  <div className="collection-card grad-border">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
                                        <div className="collection-id blue">
                                          #2
                                        </div>
                                        <h5 className="collection-point">
                                          + 41.51%
                                        </h5>
                                      </div>
                                      <div className="d-flex">
                                        <a href="#">
                                          <img
                                            className="user_img"
                                            src="assets/images/avatar2.png"
                                            alt=""
                                          />
                                        </a>
                                        <div className="ms-2">
                                          <h5 className="user_name">
                                            Crispin Berry
                                          </h5>
                                          <p className="eth_price">
                                            <img
                                              className="me-1"
                                              src="assets/images/icons/ethereum.png"
                                              alt=""
                                            />
                                            25,368.18
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                  <div className="collection-card grad-border">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
                                        <div className="collection-id green">
                                          #3
                                        </div>
                                        <h5 className="collection-point">
                                          + 41.51%
                                        </h5>
                                      </div>
                                      <div className="d-flex">
                                        <a href="#">
                                          <img
                                            className="user_img"
                                            src="assets/images/avatar2.png"
                                            alt=""
                                          />
                                        </a>
                                        <div className="ms-2">
                                          <h5 className="user_name">
                                            Crispin Berry
                                          </h5>
                                          <p className="eth_price">
                                            <img
                                              className="me-1"
                                              src="assets/images/icons/ethereum.png"
                                              alt=""
                                            />
                                            25,368.18
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                  <div className="collection-card grad-border">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
                                        <div className="collection-id purple">
                                          #4
                                        </div>
                                        <h5 className="collection-point">
                                          + 41.51%
                                        </h5>
                                      </div>
                                      <div className="d-flex">
                                        <a href="#">
                                          <img
                                            className="user_img"
                                            src="assets/images/avatar2.png"
                                            alt=""
                                          />
                                        </a>
                                        <div className="ms-2">
                                          <h5 className="user_name">
                                            Crispin Berry
                                          </h5>
                                          <p className="eth_price">
                                            <img
                                              className="me-1"
                                              src="assets/images/icons/ethereum.png"
                                              alt=""
                                            />
                                            25,368.18
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                  <div className="collection-card grad-border">
                                    <div className="card-body">
                                      <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
                                        <div className="collection-id yellow">
                                          #5
                                        </div>
                                        <h5 className="collection-point">
                                          + 41.51%
                                        </h5>
                                      </div>
                                      <div className="d-flex">
                                        <a href="#">
                                          <img
                                            className="user_img"
                                            src="assets/images/avatar2.png"
                                            alt=""
                                          />
                                        </a>
                                        <div className="ms-2">
                                          <h5 className="user_name">
                                            Crispin Berry
                                          </h5>
                                          <p className="eth_price">
                                            <img
                                              className="me-1"
                                              src="assets/images/icons/ethereum.png"
                                              alt=""
                                            />
                                            25,368.18
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              </div>
                              <div className="row" id="option2" class="size_chart">
                                No Data
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="following">
                    
                    2{users.filter(res=>res.user_name).map((data)=>( <table className="table" >
                                    <thead>
                                      <tr>

                                        <th scope="col">userName</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Floor Difference</th>
                                        <th scope="col">Expiration Date</th>
                                        <th scope="col"> </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div class="d-flex align-items-center">
                                            <img src="/assets/images/icons/activeimg.png" alt="" class="user-img" />
                                            <span class="ms-2">{data.user_name}</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="price-detail">
                                            <h5><img src="/assets/images/icons/ethereum.png" alt="" class="me-1" /> 2.59</h5>
                                            <h6>$52547.30</h6>
                                          </div>
                                        </td>
                                        <td >   At Floor   </td>
                                        <td>  May 16, 2022</td>
                                        <td>
                                          {/* <a type="button" href="#" className="btn btn-violet edit-profile-btn ms-2">Follow</a> */}
                                     {data.followers.includes(_id)? <button
                                     value="unfollow"
                                 
                                       onClick={(e)=>handlleFollow(data._id,e)}
                                       >
                                       unfollow
                                       </button>:<button
                                     value="follow"
                                 
                                       onClick={(e)=>handlleFollow(data._id,e)}
                                       >
                                       follow
                                       </button>}
                                      


                                        </td>
                                      </tr>

                                    </tbody>
                                  </table>
                                  ))}
                  </div>
                  <div className="tab-pane fade" id="created">
                   3 
                  </div>
                  <div className="tab-pane fade" id="collections">
                    4<div className="row">
                    {collectionData.map((collection, index) => {
        return (
          <div className="col-12 col-sm-3 " key={index}>
              <div className="live-auction-area">
                <div className="auction-card-two mb-4 ">
                  <div className="card-body">
                    <div className="auction-create-by">
                      <img
                        src="/assets/images/img2.png"
                        alt=""
                        className="avatar-icon img-fluid"
                      />
                      <span className="creator-name">
                        {console.log({ collection })}
                        Created By @
                        {collection?.name ? collection?.name : 'undefined'}
                      </span>
                    </div>
                    <div className="card-media">
              <Link to={`/exploredetail/${collection._id}`}>

                        <img
                          // src={'/assets/images/featured-img7.jpg'}
                          src={
                            collection?.uploadFile
                              ? `${process.env.REACT_APP_BASE_URL}/fileUpload/${collection?.uploadFile?.filename}`
                              : '/assets/images/featured-img7.jpg'
                          }
                          alt=""
                          className="img-fluid"
                        />
          </Link>
                    </div>
                    <div className="card-title mb-2 pb-2 border-bottom-0">
                      <div className='c-card-detail'>
                        <h5>
                          <a href="#">{collection?.name}</a>
                        </h5>
                        <h6>
                          {collection?.about ? collection?.about : 'undefined'}
                        </h6>
                      </div>
                      <div className="eth-price">
                        <div className="bid-title">
                          <span></span>
                        </div>
                        <h6>
                          <img
                            src="/assets/images/icons/ethereum.png"
                            alt=""
                            className="me-1"
                          />
                          {!collection?.putOnMarketplace ? (
                            <small className="font-weight-light">Bids</small>
                          ) : collection?.putOnMarketplace?.price ? (
                            <span>{collection?.putOnMarketplace?.price}</span>
                          ) : (
                            <span>
                              {collection?.putOnMarketplace?.minimumBid}
                            </span>
                          )}
                        </h6>
                      </div>
                    </div>
                    <div className="meta-info">
                        {/* Buy Now */}
                      {/* <button className="wishlist-button ms-auto" tabIndex={0}>
                        <span
                          className="number-like d-flex"
                          onClick={() => handleAddFavorite(collection)}
                        >
                          <i className="ri-heart-line me-1" /> 25
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
      </div>
                  </div>
                  <div className="tab-pane fade" id="liked">
                    5
                  </div>
                  <div className="tab-pane fade" id="activity">
                    6
                  </div>
                  <div className="tab-pane fade" id="offers">
                    7
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Profile;

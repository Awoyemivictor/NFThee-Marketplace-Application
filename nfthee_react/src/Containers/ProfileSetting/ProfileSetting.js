import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Link,useHistory, redirect } from "react-router-dom";
import Swal from "sweetalert2";

function ProfileSetting() {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("TokenData"));
  console.log(token===null ? window.location.href = "/walletlogin":token );
  useEffect(() => {}, []);
  function myFunction() {
    navigator.clipboard.writeText(result1);
    var tooltip = document.getElementById("tooltip");
      tooltip.classList.add('active');
      setTimeout(() => {
         tooltip.classList.remove('active');
      }, 1500);   
  }
  const [copySuccess, setCopySuccess] = useState("");

  const [profile, setProfile] = useState(null);
  const [banner, setBanner] = useState(null);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profile_image:"assets/images/avt-5.jpg",
    banner_image:"assets/images/Banner4.png",
    bio: '',
    website: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
})
 

 
  const handleChange = (e) => {
    if (e.target.name === "profile_image" || e.target.name === "banner_image") {
      if (e.target.files.length) {
        setUserData({
          ...userData,
          [e.target.name]: e.target.files[0]
        });
        if (e.target.name === "profile_image") {
          setProfile(URL.createObjectURL(e.target.files[0]));
        } else {
          setBanner(URL.createObjectURL(e.target.files[0]));
        }
      }
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      });
    }
  };
  
// console.log("><<<><<<<>>>>>>>>>>>>>>>>>>>>>>>>>",userData.profile_image,userData.banner_image,";khsdkfgdiu ")
  const handleData=(e)=>{

  
      e.preventDefault();
      const formData = new FormData();
      formData.append("username", userData.username);
      formData.append("email", userData.email);
      formData.append("bio", userData.bio);
      formData.append("website", userData.website);
      formData.append("facebook", userData.facebook);
      formData.append("instagram", userData.instagram);
      formData.append("linkedin", userData.linkedin);
      formData.append("youtube", userData.youtube);
      formData.append("profile_image", userData.profile_image);
      formData.append("banner_image", userData.banner_image);
    
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/updateProfile`, formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    
    
  }
  console.log(userData)
  const result1 = token.toString();
   var result = result1.slice(0, 8) + ".." + result1.slice(38, 48);
  // console.log(result);
  const [tokenid, setTokenId] = useState(result);
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  return (
    <>
  <main>
  <section className="bg-section profile-bg-section setting-profile-section">
    <section className="profile-banner-section">
      <div className="profile-banner-image">
    
        <img src={banner?banner:userData.banner_image} alt="" className="img-fluid w-100 profile-banner-img" />
        <span className="edit-img-box">
        <input id="select-Banner"  type="file" name="banner_image" style={{
            opacity: 0,
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(1px, 1px, 1px, 1px)"
          }} onChange={handleChange} />
         <lable htmlFor="select-Banner" >
                    <img src="assets/images/icons/pencil.png"  onClick={() => document.getElementById("select-Banner").click()} alt="" className="me-1" />
                    </lable>
        </span>
      </div>
      <div className="setting-profile-wrapper mb-4">
        <div className="container-fluid px-lg-4">
          <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
              <div className="setting-profile-icon">
                <div className="user-box">
                  <img src={profile?profile:userData.profile_image} alt="" className="img-fluid user-img" />
                  <span className="edit-img-box">
                  <input id="select-profile"  type="file" name="profile_image" style={{
            opacity: 0,
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(1px, 1px, 1px, 1px)"
          }} onChange={handleChange} />
                  <lable htmlFor="select-profile" >
                    <img src="assets/images/icons/pencil.png"  onClick={() => document.getElementById("select-profile").click()} alt="" className="me-1" />
                    </lable>
                  </span>
                </div> 
              </div> 
              <sapn id="tooltip" class="tooltip copyTooltip" >Copied !</sapn>
                  <div className="text-center">
                    <a href="#" type="button" className="btn btn-dark tokenId" onClick={myFunction} onMouseOut={outFunc} data-title="Copy Address"> {tokenid}</a>
                 </div> 

            </div>
            
          </div>
        </div> 
      </div>
     
    </section>
    <section className="setting-profile-tab pt-4 pt-lg-5">
      <div className="container-fluid px-lg-4">
        <div className="row align-items-start">
          <div className="col-lg-3 col-md-3">
            <h4 className="setting-title">Settings</h4>
            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-selected="true">
                <div className="tab-icons">
                  <img src="assets/images/icons/profile-icon-black.png" alt="" className="me-3" />
                </div> Profile
              </button>
              <button className="nav-link" id="offers-tab" data-bs-toggle="pill" data-bs-target="#offers" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/heart-icon-black.png" alt="" className="me-3" />
                </div> Offers
              </button>
              <button className="nav-link" id="account-support-tab" data-bs-toggle="pill" data-bs-target="#account-support" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/currency-rates-icon-black.png" alt="" className="me-3" />
                </div> Account Support
              </button>
              <button className="nav-link" id="earnings-tab" data-bs-toggle="pill" data-bs-target="#earnings" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/eye-icon-black.png" alt="" className="me-3" />
                </div> Earnings
              </button>
              <button className="nav-link" id="notification-tab" data-bs-toggle="pill" data-bs-target="#notification" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/notification-bell-1.png" alt="" className="me-3" />
                </div> Notifications
              </button>
               <button className="nav-link" id="setting-tab" data-bs-toggle="pill" data-bs-target="#payment" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/Payment.png" alt="" className="me-3" style={{width:"28px"}} />
                </div> Payment (Card Payment)
              </button>  
              <button className="nav-link" id="setting-tab" data-bs-toggle="pill" data-bs-target="#rewards" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/rewardblack.png" alt="" className="me-3" />
                </div> Staking Information
              </button>
              {/* <Link to="/requestform">  */}
              <button onClick={()=>history.push("/requestform")} className="nav-link" id="setting-tab" data-bs-toggle="pill" data-bs-target="#rewards" type="button" role="tab" aria-selected="false">
                <div className="tab-icons">
                  <img src="assets/images/icons/dotted-arrow-right.png" alt="" className="me-3" />
                </div> Submit A Request
              </button>
              {/* </Link> */}
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="profile" role="tabpanel">
                <div className="setting-profile-detail-wrapper">
                  <div className="setting-profile-detail mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="title mb-0">Enter Your Details</h3>
                      <button className="btn btn-violet">Preview</button>
                    </div>
                    <form>
                      {/* <div className="mb-3">
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                      </div> */}
                      <div className="mb-3">
                        <input type="text" className="form-control" id="username" name="username" onChange={handleChange} placeholder="Username" />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" id="email" name="email" onChange={handleChange} placeholder="Email address" />
                      </div>
                      <span className="subtitle-text">Add Your Email Address To Receive Notifications About Your Activity On Foundation. This Will Not Be Shown On Your Profile.</span>
                    </form>
                  </div>
                  <div className="setting-profile-detail mb-4">
                    <h3 className="title">Switch  Blockchain</h3>
                    <form>
                      <div className="mb-3">
                        <div className="wallet-address-wrapper">
                          <div className="d-flex align-items-center wallet-name">
                            <span className="wallet-image-box">
                              <img src="assets/images/icons/ethereum-pink.png" alt=""  />
                            </span>
                            <div className="wallet-name-detail ms-2">
                              <h3>ETH</h3>
                              <h6>Ethereum</h6>
                            </div>
                          </div>
                          <div>
                            <button className="btn btn-violet">Change</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="setting-profile-detail mb-4">
                    <h3 className="title">Enter Your Bio</h3>
                    <form>
                      <div className="mb-3">
                        <textarea className="form-control" id="bio" name="bio" onChange={handleChange} rows={3} placeholder="Enter your bio here" defaultValue={""} />
                      </div>
                    </form>
                  </div>
                  <div className="setting-profile-detail mb-4">
                    <div className="setting-profile-detail mb-4">
                      <h3 className="title">Add links to your social media profiles.</h3>
                      <form className="social-media-profile-form">
                        <div className="mb-3 social-icon-wrapper">
                          <img src="assets/images/icons/attachment-icon.png" alt="" className="social-icon" />
                          <input type="text" className="form-control" id="website" name="website" onChange={handleChange} placeholder="Website" />
                        </div>
                        <div className="mb-3 social-icon-wrapper">
                          <img src="assets/images/icons/facebook-icon.png" alt="" className="social-icon" />
                          <input type="text" className="form-control" id="facebook" name="facebook" onChange={handleChange} placeholder="Facebook" />
                        </div>
                        <div className="mb-3 social-icon-wrapper">
                          <img src="assets/images/icons/instagram-icon.png" alt="" className="social-icon" />
                          <input type="text" className="form-control" id="instagram" name="instagram" onChange={handleChange} placeholder="instagram" />
                        </div>
                        <div className="mb-3 social-icon-wrapper">
                          <img src="assets/images/icons/linkedin-icon.png" alt="" className="social-icon" />
                          <input type="text" className="form-control" id="linkedin" name="linkedin" onChange={handleChange} placeholder="Linkedin" />
                        </div>
                        <div className="mb-3 social-icon-wrapper">
                          <img src="assets/images/icons/youtube-icon.png" alt="" className="social-icon" />
                          <input type="text" className="form-control" id="youtube" name="youtube" onChange={handleChange} placeholder="Youtube" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-12 col-md-12">
                      <button className="btn btn-violet w-100" onClick={handleData}>Update Profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="offers" role="tabpanel">2</div>
              <div className="tab-pane fade" id="account-support" role="tabpanel">3</div>
              <div className="tab-pane fade" id="earnings" role="tabpanel">4</div>
              <div className="tab-pane fade" id="notification" role="tabpanel">
              <div className="setting-profile-detail-wrapper">
                  <div className="setting-profile-detail mb-4 mb-lg-5">
                    <h3 className="title mb-2">Enter Your Details</h3>
                    <h4 className="sub-title">Turn On/Off Events To Receive Through The Selected Notifications Methods.</h4>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Liked Item Activity</h4>
                          <h5 className="event-type-subtitle mb-0">When Any Activities Occurred On Items You Like</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Listing Activity</h4>
                          <h5 className="event-type-subtitle mb-0">When You List Any Item In Fixed Price Or Auction</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Item Sold</h4>
                          <h5 className="event-type-subtitle mb-0">When Someone Purchases One Of Your Items</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Bid Activity</h4>
                          <h5 className="event-type-subtitle mb-0">When The Auction You Started Receives Bids</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Outbid</h4>
                          <h5 className="event-type-subtitle mb-0">When An Offer You Placed Is Exceeded By Another User</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Auction Expiration</h4>
                          <h5 className="event-type-subtitle mb-0">When The Auction You Started Ends Without Bids</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Buy Offer Received</h4>
                          <h5 className="event-type-subtitle mb-0">When Someone Sends A Buy Offer To One Of Your Items</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content border-bottom mb-3 pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">My Buy Offer Activity</h4>
                          <h5 className="event-type-subtitle mb-0">When Your Buy Offer Gets Accepted Or Rejected</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                  <div className="event-type-content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img src="assets/images/icons/notification-bell-2.png" alt="" className="me-1" />
                        <div className="ms-2 ms-lg-3">
                          <h4 className="event-type-title">Item Transfer</h4>
                          <h5 className="event-type-subtitle mb-0">When You Send Or Receive An Item</h5>
                        </div>
                      </div>
                      <label className="switch  ms-2">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="payment" role="tabpanel">payment</div> 

              <div className="tab-pane fade" id="rewards" role="tabpanel">Rewads</div> 
            </div>
          </div>
        </div>
      </div>
    </section>
   </section>
      </main>
    </>
  );
}

export default ProfileSetting;

import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import instance from '../axios'
function ApplyVerification() {

  const [formData, setFormData] = useState({
    project_name: "",
    contract_address:'',
    choose_blockchain:'ethereum',
    project_status: "sold out",
    project_about: "",
    website: "",
    twitter: "",
    discord: "",
    description: "",
    project_icon: "",
    project_banner: "",
    project_logo: "",
    art_draft: "",
    royality_fee_distribution: "yes",
    royality_fee_rate: "",
    json_accessible: "yes",
    email: "",
    original: "yes",
    inspired_from: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const [iconImg,setIconImg]=useState()
const [bannerImg,setBannerImg]=useState()
const [logoImg,setLogoImg]=useState()
const [artImg,setArtImg]=useState()
  const handleIconImg = (e) => {
    const file = e.target.files[0];
    setIconImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      project_icon: file.length === 0 ? "abc.png" : file,
    });
  };
  const handleBannerImg = (e) => {
    const file = e.target.files[0];
    setBannerImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      project_banner: file.length === 0 ? "abc.png" : file,
    });
  };

  const handleLogoImg = (e) => {
    const file = e.target.files[0];
    setLogoImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      project_logo: file.length === 0 ? "abc.png" : file,
    });
  };

  const handleArtImg = (e) => {
    const file = e.target.files[0];
    setArtImg(URL.createObjectURL(file))
    setFormData({
      ...formData,
      art_draft: file.length === 0 ? "abc.png" : file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", formData);
const{original} =formData
    const formdataN = new FormData();

    formdataN.append('project_name',formData.project_name);
    formdataN.append('contract_address',formData.contract_address);
    formdataN.append('choose_blockchain',formData.choose_blockchain);
    formdataN.append('project_status',formData.project_status);
    formdataN.append('project_about',formData.project_about);
    formdataN.append('website',formData.website);
    formdataN.append('twitter',formData.twitter);
    formdataN.append('discord',formData.discord);
    formdataN.append('description',formData.description);
    formdataN.append('project_icon',formData.project_icon);
    formdataN.append('project_banner',formData.project_banner);
    formdataN.append('project_logo',formData.project_logo);
    formdataN.append('art_draft',formData.art_draft);
    formdataN.append('royality_fee_distribution',formData.royality_fee_distribution);
    formdataN.append('royality_fee_rate',formData.royality_fee_rate);
    formdataN.append('json_accessible',formData.json_accessible);
    formdataN.append('email',formData.email);
    formdataN.append('original',formData.original);
    if(original!=='yes'){
    formdataN.append('inspired_from',formData.inspired_from);
    }
    // 
    instance
      .post(`/api/addVerification`, formdataN, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        //handle success
        console.log(response);
       if(response.status===200){ 
        Swal.fire({
          icon: "success",
          title: "Submit Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        setFormData({
          project_name: "",
          contract_address:'',
          choose_blockchain:'ethereum',
          project_status: "sold out",
          project_about: "",
          website: "",
          twitter: "",
          discord: "",
          description: "",
          project_icon: "",
          project_banner: "",
          project_logo: "",
          art_draft: "",
          royality_fee_distribution: "yes",
          royality_fee_rate: "",
          json_accessible: "yes",
          email: "",
          original: "yes",
          inspired_from: "",
        })
      setArtImg()
      setBannerImg()
      setIconImg()
      setLogoImg()
      window.scrollTo(0,0)
      }


      })
      .catch((error) => {
        if (!error.response) {
          // network error
          this.errorStatus = "Error: Network Error"
          Swal.fire({
            icon: "error",
            title: this.errorStatus,
            showConfirmButton: false,
            timer: 2500,
          });;
        } else {
          this.errorStatus = error.response.data.message;
          Swal.fire({
            icon: "error",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
     
  };


  console.log('first',iconImg)
  return (
    <> 
 <main>
        <section className="bg-section become-partner-section">
        <section class="apply_verification">
          <div className="become-partner-wrapper">
            <form className="container" onSubmit={handleSubmit}>
              <div className="section-heading text-center mb-lg-5 mb-4">
                <h2 className="section-title mb-1">Apply For Verification</h2> 
                <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
              </div>
              <div className="col-lg-8 col-md-8 mx-auto p-0">
                <div className="partner-form-wrapper">
                  <div className="partner-form-content">
                    <div className="head-section d-flex align-items-center  ">
                      <h2 className="heading-title mb-0 ">Apply Verification Form </h2><img className='ms-2' style={{height: "35px"}} src="assets/images/icons/star-check.png" alt=""/>
                    </div>
                    <div className="body-section">
                      <div className="form-group mb-3">
                        <label className="form-label">Project Name<span>*</span></label>
                        <input type="text"required name='project_name' value={formData.project_name} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Contract address of its NFT</label>
                        <textarea type="text" required="required" name='contract_address' value={formData.contract_address} onChange={handleChange} className="form-control mb-2" rows={4} defaultValue={""} />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Which Blockchain is Your Project on?</label>
                        <select required name='choose_blockchain' value={formData.choose_blockchain} onChange={handleChange}  className="form-control form-select">
                          <option value='Ethereum'>Ethereum</option>
                          <option value='Polygon'>Polygon</option>
                          <option value='Harmony'>Harmony</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">What is current status of project</label>
                        <select required name='project_status' value={formData.project_status} onChange={handleChange} className="form-control form-select">
                          <option value="sold out">Sold Out</option>
                          <option value="mint now">Mint Now</option>
                          <option value="before minting">Before Minting</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Tell us more about your project</label>
                        <textarea required type="text" name='project_about' value={formData.project_about} onChange={handleChange} className="form-control mb-2" rows={4} defaultValue={""} />
                      </div>
                      <h5 className="heading-title1 ">Links and description to display on your Collection page </h5>
                      <div className="form-group mb-3">
                        <label className="form-label">Website<span>*</span></label>
                        <input required type="text" name='website' value={formData.website} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Twitter link</label>
                        <input  type="text" name='twitter' value={formData.twitter} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Discord link</label>
                        <input  type="text" name='discord' value={formData.discord} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Project Description</label>
                        <textarea type="text" required="required" name='description' value={formData.description} onChange={handleChange} className="form-control mb-2" rows={4} defaultValue={""} />
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Project icon (512x512, square version, no gif files)<span>*</span></h5>
                        <label htmlFor="project_icon" id className="img-upload-box">
                        <img src={iconImg?iconImg:"assets/images/icons/upload.png"} alt="project_logo" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input required id="project_icon" name='project_icon' onChange={handleIconImg} type="file" />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Project banner (A rough size at 1200x400,  safe area is 800x400, no gif files )<span>*</span></h5>
                        <label htmlFor="project_banner" id className="img-upload-box">
                          <img src={bannerImg?bannerImg:"assets/images/icons/upload.png"} alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input required id="project_banner" name='project_banner' onChange={handleBannerImg} type="file" />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Project logo (Anysize, transparent, with text of project name) </h5>
                        <label htmlFor="project_logo" id className="img-upload-box">
                          <img src={logoImg?logoImg:"assets/images/icons/upload.png"} alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input required id="project_logo" name='project_logo'  onChange={handleLogoImg} type="file"  />
                        </label>
                      </div>
                      <div className="upload-area mb-3">
                        <h5 className="heading-title1">Art Drafts of NFTs (Please attach some images of the production process.) </h5>
                        <label htmlFor="art_draft" id className="img-upload-box">
                          <img src={artImg?artImg:"assets/images/icons/upload.png"} alt="" className="img-fluid" />
                          <p>Drop your files here or Click to browse</p>
                          <input required id="art_draft" name='art_draft'  onChange={handleArtImg} type="file" />
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Do you want a Royalty fee distribution?<span>*</span></label>
                        <select required name='royality_fee_distribution' value={formData.royality_fee_distribution} onChange={handleChange} className="form-control form-select">
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Type your desired Royalty fee rate below (Max 3%)</label>
                        <input required type="text" name='royality_fee_rate' value={formData.royality_fee_rate} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Is your NFT's metadata json accessible from tokenURI contract method?</label>
                        <select required name='json_accessible' value={formData.json_accessible} onChange={handleChange} className="form-control form-select">
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">How can we Email you?<span>*</span></label>
                        <input required type="text" name='email' value={formData.email} onChange={handleChange} className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">Are your NFTs original?</label>
                        <select required name='original' value={formData.original} onChange={handleChange} className="form-control form-select">
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label">If previous answer is No, What NFTs are you inspired from?</label>
                        <input required={formData.original==='yes'?true:false} disabled={formData.original==='yes'?true:false} type="text" name='inspired_from' value={formData.inspired_from} onChange={handleChange} className="form-control" />
                      </div>
                      <h5 className="heading-title1">Because we receive so many inquiries, we will only email you if your application is approved. If your application is not approved, we will not email you. We usually email you within 2-3 business days. </h5>
                      <div className="mt-4">
                        <button className="btn btn-violet w-100">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        </section>
      </main>
    </>
  )
}

export default ApplyVerification;
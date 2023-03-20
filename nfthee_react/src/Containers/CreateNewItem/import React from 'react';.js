import React from 'react';
import {useEffect, useState} from 'react'
import axios from "../axios"
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { useHistory,useParams } from 'react-router-dom';  
import $ from 'jquery';   
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
 
function Step1({nextStep }) {
  const history =  useHistory();
  const {id}=useParams()
  // alert(id)
  console.log(id)
  const [selectedFile1, setSelectedFile1] = useState({profileImage:""}); 
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const[editData, setEditData] = useState([])
  const [loading, setLoading] = useState(false)  
  const [inputField , setInputField] = useState({
        firstName: "", 
        middleName: "", 
        lastName:"",
        dateOfBirth:"",
        fatherName:"",
        gender:"", 
        email:"", 
        mobileNumber:"",  
        socialProfile:"",  
        address:"",  
        state:"",  
        city: "", 
        country: "", 
        postalCode: "", 
         companyId: "", 
    }) 
  const Info = JSON.parse(localStorage.getItem('loginInfo'));
  const getInfo1 =Info.response.id;

  const inputsHandler1 = (e) =>{
    const file = e.target.files[0];
    setSelectedFile1((prevState) => ({
    ...prevState,
    'file': file,
    }));
    console.log(file);
    setSelectedFile1(file===undefined ? "abc.png": file)
  }
  const inputsHandler = (e) =>{
        const { name, value } = e.target;
        setInputField((prevState) => ({
        ...prevState,
            [name]: value,  
            })); 
          } 

const [value, onChange] = useState(new Date());
const dateformat = moment(value._d).format("DD-MM-YYYY");
  // console.log(dateformat) 
    const submitButton = async (e) =>{  
    // e.preventDefault();   
    const cId = JSON.parse(localStorage.getItem('companyId'));
    const Info = JSON.parse(localStorage.getItem('loginInfo'));
    const getInfo1 =Info.response.id;
 
    const formdata = new FormData(); 
    formdata.append('id', 0); 
    formdata.append('companyId', cId);  
    formdata.append('firstName', inputField.firstName); 
    formdata.append('middleName', inputField.middleName); 
    formdata.append('lastName', inputField.lastName); 
    formdata.append('dateOfBirth', inputField.dateOfBirth); 
    formdata.append('fatherName', inputField.fatherName); 
    formdata.append('gender', inputField.gender); 
    formdata.append('email', inputField.email); 
    formdata.append('mobileNumber', inputField.mobileNumber); 
    formdata.append('profileImage',selectedFile1); 
    formdata.append('address', inputField.address); 
    formdata.append('state', inputField.state); 
    formdata.append('city', inputField.city); 
    formdata.append('country', inputField.country); 
    formdata.append('postalCode', inputField.postalCode); 
    formdata.append('socialProfile',inputField.socialProfile); 
 
      const formDatastring = JSON.stringify(formdata)
      console.log(formDatastring)
      setLoading(false)
    // axios.post('/api/addEmployeeDetails',registeredData )
   await axios.post('/api/addEmployeePersonalDetails',formdata, {
    headers: { "Content-Type": "multipart/form-data" },} )
    .then(response =>{   
    sessionStorage.setItem('responceId', JSON.stringify(response.data.response)); 
    sessionStorage.setItem('responSt', JSON.stringify(response.data.status));  
    if(response.data.status === 0){
      setLoading(false)
      nextStep(1);
      var element = document.getElementById("pills-step2-tab");
      element.classList.add("active");
      var element = document.getElementById("pills-step1-tab");
      element.classList.add("");
       }else{
        setLoading(false)
          swal(response.data.response, {
              buttons: false,
              icon: "error",
              timer: 3000,
            });
          }  
      }  ) 
      .catch(error=>{ 
        console.log(error)
      })        
      }  

      useEffect(async ()=>{  
        const editid = id;
        await axios.get('/api/getAllEmployeeInfoById?id='+editid+'')
        .then(response => { console.log(response) 
          const edit=response.data.response.employeeRegistration;
              console.log(edit)  
          setEditData(response.data.response.employeeRegistration) 
          setInputField((prevState) => ({
            ...prevState,
            firstName:response.data.response.employeeRegistration.firstName,
            middleName:response.data.response.employeeRegistration.middleName,
            lastName:response.data.response.employeeRegistration.lastName,
            dateOfBirth:response.data.response.employeeRegistration.dateOfBirth,
            fatherName:response.data.response.employeeRegistration.fatherName,
            gender:response.data.response.employeeRegistration.gender,
            email:response.data.response.employeeRegistration.email,
            mobileNumber:response.data.response.employeeRegistration.mobileNumber,
            profileImage:response.data.response.employeeRegistration.profileImage,
            address:response.data.response.employeeRegistration.address,
            state:response.data.response.employeeRegistration.state,   
            city:response.data.response.employeeRegistration.city,               
            country:response.data.response.employeeRegistration.country,               
            postalCode:response.data.response.employeeRegistration.postalCode,               
            socialProfile:response.data.response.employeeRegistration.socialProfile,               
            }));
        })   
        .catch(error=>console.log(error))  
      },[]) 

      const submitButton1 = (e) =>{  
        // e.preventDefault();  
        const cId = JSON.parse(localStorage.getItem('companyId'));
        const editid = id; 
        const registeredData1 = { 
          firstName:inputField.firstName, 
          middleName:inputField.middleName,  
          lastName:inputField.lastName,  
          dateOfBirth:inputField.dateOfBirth,  
          fatherName:inputField.fatherName,  
          gender:inputField.gender,   
          email:inputField.email, 
          mobileNumber:inputField.mobileNumber, 
          profileImage:inputField.profileImage, 
          address:inputField.address, 
          state:inputField.state, 
          city:inputField.city, 
          country:inputField.country, 
          postalCode:inputField.postalCode, 
          socialProfile:inputField.socialProfile, 

          companyId: cId,
      }  
      axios.put('/api/updateEmployeePersonalInfo?id='+editid+'',registeredData1 )
      .then(response =>{  
        console.log(response.response); 
        if(response.data.status === 0){
          swal(response.data.response, {
          buttons: false,
          timer: 2000,
          });
        } 
        history.push('/reportemployeelist')
        }) 
      .catch(error=>{ 
        console.log(error)
      })
    }
 
 
   $(function(){
    var dtToday = new Date(); 
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString(); 
      var maxDate = year + '-' + month + '-' + day;
      // alert(maxDate);
      $('.txtDate').attr('max', maxDate);
  });

  return (
  <>
   {loading &&  
            <div className="spinner">
            <span>Loading...</span>
            <div className="half-spinner"></div>
            </div>
   }

  <form onSubmit={handleSubmit(!id ?(submitButton) :(submitButton1))}>
   {/* <form onSubmit={handleSubmit(!id ? submitButton : submitButton1)}> */}
  <div className="tab-pane fade active show" id="pills-step1" role="tabpanel" aria-labelledby="pills-step1-tab">
                          <div className="mt-4">
                            <div className="col-lg-12">
                              <div className="row mb-3">
                                <div className="col-lg-4">
                                  <div className="form-group" {...register("firstName", { required:!id? true: false,  minLength:2,  maxLength:30, pattern: /[a-zA-Z][a-zA-Z ]{1,}/ })}>
                                    <label htmlFor="First Name" >First Name <span className='req'> *</span>  </label>
                                    <input type="text" className="form-control"  onChange={inputsHandler} value={inputField.first_name} name='firstName'placeholder="Employee First Name" required={!id ? '': "required" }  />
                                  </div>
                                  {/* {errors.employeeName && <p style={{color:"red"}}>Employee Name is Required </p>} */}
                                  <span className="d-flex">  {errors.firstName && errors.firstName.type ==='required'&& <p style={{color:"red"}}>Employee First Name  is Required  </p>}</span> 
                                  <span className="d-flex">  {errors.firstName && errors.firstName.type ==='pattern'&& <p style={{color:"red"}}>Employee First Name  is Required  </p>}</span> 
                                  <span className="d-flex">  {errors.firstName && errors.firstName.type ==='minLength'&& <p style={{color:"red"}}>Minimum 2 Characters </p>}</span> 
                                 </div>

                                 <div className="col-lg-4">
                                  <div className="form-group" >
                                    <label htmlFor="Middle Name">Middle Name</label>
                                    <input type="text" className="form-control"  onChange={inputsHandler} value={inputField.middleName} name='middleName'placeholder="Employee Middle Name" required={!id ? '': "required" }  />
                                  </div> 
                                 </div>
                                 <div className="col-lg-4">
                                  <div className="form-group" {...register("lastName", { required:!id? true: false,  minLength:2,  maxLength:30, pattern: /[a-zA-Z][a-zA-Z ]{1,}/ })}>
                                    <label htmlFor="Last Name"> Last Name <span className='req'> *</span> </label>
                                    <input type="text" className="form-control"  onChange={inputsHandler} value={inputField.lastName} name='lastName'placeholder="Employee Last Name" required={!id ? '': "required" }  />
                                  </div>
                                  {/* {errors.lastName && <p style={{color:"red"}}>Employee Name is Required </p>} */}
                                  <span className="d-flex">  {errors.lastName && errors.lastName.type ==='required'&& <p style={{color:"red"}}>Employee Last Name  is Required  </p>}</span> 
                                  <span className="d-flex">  {errors.lastName && errors.lastName.type ==='pattern'&& <p style={{color:"red"}}>Employee Last Name  is Required  </p>}</span> 
                                  <span className="d-flex">  {errors.lastName && errors.lastName.type ==='minLength'&& <p style={{color:"red"}}>Minimum 2 Characters </p>}</span> 
                                 </div>

                                 <div className="col-lg-4">
                                  <div className="form-group"  >
                                    <label htmlFor="Last Name"> Father Name   </label>
                                    <input type="text" className="form-control"  onChange={inputsHandler} value={inputField.fatherName} name='fatherName'placeholder="Employee Father Name" required={!id ? '': "required" }  />
                                  </div> 
                                 </div>
                                      {/* 
                                <div className="col-lg-6">
                                  <div className="form-group" {...register("employeeCode", { required:!id? true: false,  minLength:2,  maxLength:30, pattern: /[a-zA-Z][a-zA-Z ]{1,}/ })}>
                                    <label htmlFor="Employee Code">Employee Code</label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={ inputField.employeeCode } name='employeeCode' placeholder="Employee Code" required={!id ? '': "required" } readOnly={!id? false: true}   />
                                    </div>
                                    {errors.employeeCode && <p style={{color:"red"}}>Employee Code Required</p>} 
                                </div> */}

                                <div className="col-lg-4">
                                  <div className="form-group"  {...register("dateOfBirth", { required:!id? true: false,  minLength:3,  maxLength:30,})}  >
                                    <label htmlFor="Joining Date">  Date Of Birth <span className='req'> *</span> </label>
                                    {/* <input  type="date" id="txtDate" className="form-control" onChange={inputsHandler} value={inputField.joiningDate} name='joiningDate' placeholder="Joining Date"  required={!id ? '': "required" }/> */}
                                    <input type="date" className="form-control txtDate" onChange={inputsHandler} value={inputField.dateOfBirth} name='dateOfBirth'    />
                                  </div> 
                                  {errors.dateOfBirth && <p style={{color:"red"}}> Joining Date is Required </p>} 
                                </div>

                                <div className="col-lg-4"  >
                                  <div className="form-group" {...register("mobileNumber", { required:!id? true: false, minLength:10,  maxLength:10, pattern: /^[+-]?\d*(?:[.,]\d*)?$/})}>
                                    <label htmlFor="contact Number">Contact Number  <span className='req'> *</span> </label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.mobileNumber} name='mobileNumber' placeholder="Contact Number"  required={!id ? '': "required" }  />
                                  </div>  
                                  <span className="d-flex">  {errors.mobileNumber && errors.mobileNumber.type ==='required'&&<p style={{color:"red"}}>Mobile Number is Required </p>}</span>
                                        <span className="d-flex">  {errors.mobileNumber && errors.mobileNumber.type ==='minLength'&&<p style={{color:"red"}}>Mobile Number Should be 10 Digits </p>}</span>
                                        <span className="d-flex">  {errors.mobileNumber && errors.mobileNumber.type ==='maxLength'&&<p style={{color:"red"}}>Mobile Number Should be 10 Digits </p>}</span>
                                        <span className="d-flex">  {errors.mobileNumber && errors.mobileNumber.type ==='pattern'&&<p style={{color:"red"}}>Enter Valid Mobile Number     </p>}</span>
                                 </div>

                                <div className="col-lg-4"  >
                                  <div className="form-group" style={{position: 'relative'}} {...register("email", { required:!id? true: false, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}>
                                    <label htmlFor="Employee Personal Email Id">Employee Personal Email Id <span className='req'> *</span></label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.email} name='email' placeholder="Employee Personal Email" required={!id ? '': "required" } readOnly={!id? false: true}  />
                                    {/* <span style={{position: 'absolute', top: '40px', right: '15px'}}>@gmail.com</span> */}
                                  </div>
                                 <span className="d-flex">  {errors.email && errors.email.type ==='required'&& <p style={{color:"red"}}>Employee Personal Email is Required</p>}</span>
                                <span className="d-flex">  {errors.email && errors.email.type ==='pattern'&& <p style={{color:"red"}}>That is not a valid email </p>}</span>
                                 </div>


                                {/* <div className="col-lg-6" >
                                  <div className="form-group" style={{position: 'relative'}} {...register("employeeOfficialEmail", { required:!id? true: false, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}>
                                    <label htmlFor="Employee Official Email id">Employee Official Email id</label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.employeeOfficialEmail} name='employeeOfficialEmail' placeholder="Username eg.@companyname.net"  required={!id ? '': "required" } readOnly={!id? false: true}  />
                                  </div>
                                  <span className="d-flex">  {errors.employeeOfficialEmail && errors.employeeOfficialEmail.type ==='required'&& <p style={{color:"red"}}>Employee Official Email   is Required  </p>}</span> 
                                  <span className="d-flex">  {errors.employeeOfficialEmail && errors.employeeOfficialEmail.type ==='pattern'&& <p style={{color:"red"}}>That is not a valid email </p>}</span>
                                 </div>
                                  */}
                                   <div className="col-lg-4">
                                  <div className="form-group" {...register("gender", { required:!id? true: false  })} >
                                    <label htmlFor="Date of Birth">Gender <span className='req'> *</span> </label>
                                    <select className="form-select" aria-label="Default select example" onChange={inputsHandler} value={inputField.gender} name='gender' >
                                    <option  value="">Select...</option> 
                                      <option value="One">Male</option>
                                      <option value="Two">Female</option>
                                      <option value="Three">Other</option>
                                    </select> 
                                  </div> 
                                  {errors.gender && <p style={{color:"red"}}>Gender is Required </p>}
                                  </div>

                                  <div className="col-lg-4">
                                  <div className="form-group" {...register("education", { required:!id? true: false ,  pattern: /[a-zA-Z][a-zA-Z ]{1,}/ })}>
                                    <label htmlFor="Education">Education</label>
                                    <input type="text" className="form-control" placeholder="Education" onChange={inputsHandler} value={inputField.education} name='education'  />
                                  </div>
                                  {errors.education && <p style={{color:"red"}}>Education is Required </p>}
                                </div>  


                                   <div className="col-lg-6">
                                  <div className="form-group" >
                                    <label htmlFor="Date of Birth">Profile Image </label>
                                    <input type="file" className="form-control"  onChange={inputsHandler1} value={selectedFile1.profileImage}    name='profileImage'accept="image/jpeg,image/png "  />
                                  </div>
                                   
                                  </div>
                                  <div className="col-lg-6">
                                  <div className="form-group" >
                                    <label htmlFor="Date of Birth">Social Profile </label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.socialProfile}   name='socialProfile'placeholder="eg. LinkedIn, Facebook, Github link" required={!id ? '': "required" }  />

                                  </div> 
                                  </div>

                                 <div className="col-lg-3"  >
                                  <div className="form-group" style={{position: 'relative'}} >
                                    <label htmlFor="country">Country</label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.country} name='country' placeholder="country" required={!id ? '': "required" } />
                                    {/* <span style={{position: 'absolute', top: '40px', right: '15px'}}>@gmail.com</span> */}
                                  </div>
                                </div>

                                <div className="col-lg-3" >
                                  <div className="form-group" style={{position: 'relative'}} >
                                    <label htmlFor="state">State </label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.state} name='state' placeholder="State"  required={!id ? '': "required" }/>
                                  </div>
                                </div>

                                 <div className="col-lg-3"  >
                                  <div className="form-group" style={{position: 'relative'}}  >
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.city} name='city' placeholder="City" required={!id ? '': "required" } />
                                    {/* <span style={{position: 'absolute', top: '40px', right: '15px'}}>@gmail.com</span> */}
                                  </div>
                                 </div>

                                <div className="col-lg-3" >
                                  <div className="form-group" style={{position: 'relative'}} >
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <input type="text" className="form-control" onChange={inputsHandler} value={inputField.postalCode} name='postalCode' placeholder="Postal Code"  required={!id ? '': "required" }/>
                                  </div> 
                                 </div>

                                <div className="col-lg-12">
                                  <div className="form-group" >
                                    <label htmlFor="leaving">Employee Address</label>
                                    <input type="text" className="form-control" id="leaving" placeholder="Employee Address" onChange={inputsHandler} value={inputField.address} name='address'  required={!id ? '': "required" } />
                                  </div>
                               </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 text-right">
                                  {/* <a href="#" className="btn disabled" >Cancel</a> */}
                                  {/* <a href="#" className="btn bg-violet" onClick={submitButton} >NEXT</a> */}
                                  {/* <a href="#" className="btn bg-violet"  type='submit' >NEXT</a> */}
                                  { !id ? <button type='submit'className="btn bg-violet" >NEXT</button> :  <button type='submit'className="btn bg-violet" >Update</button>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div></form>
  </>);
}

export default Step1;
 


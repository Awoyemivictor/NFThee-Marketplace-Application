import {useState, useEffect} from 'react'
import {countries} from "./CountryData"
import axios from "../../axios"
import {useHistory, NavLink, Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2'
import {Magic} from "magic-sdk";
import {requestForToken} from '../../../src/firebase-config';

function Register() {
    const {register, handleSubmit, clearErrors, formState: {errors}, trigger} = useForm();
    let magic = new Magic("pk_live_A57B8D59D07E9901");

    const history = useHistory();
    const data = JSON.parse(localStorage.getItem('userLoggedIn'));
    const tok = JSON.parse(localStorage.getItem('TokenData'));
if(data&&tok!=null){
    history.push('/')
}
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [usertoken, setUsertoken] =useState("")
    useEffect(() => {
        requestForToken().then((data) =>{
            setUsertoken(data)
        }).catch((e)=>{
            console.log("error",e)
        })
    });

    const [userData, setUserData] = useState({
        user_name: '',
        first_name: '',
        last_name: '',
        email_address: '',
        country: '',
        token_id:''
    })


    console.log(register,":><><<<<>>>>")
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const value = e.target.value       
        userData.token_id = usertoken
        setUserData({
            ...userData,
            [e.target.name]: value
        })
        // console.log(userData)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        if (userData.first_name === "" && userData.last_name === "" && userData.user_name === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Value Cannot Be Empty !',
            })
        } else if (userData.email_address) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "email is valid",
                showConfirmButton: false,
                timer: 1500,
            });
            history.push({pathname: '/register_verify', state: userData})
        } else {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "please provide valid email",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    return (
        <>
            {/*
      { loading &&
    <div className="spinner">
      <span>Loading...</span>
      <div className="half-spinner"></div>
    </div>
   } */}

            <main>
                <section className="login-reg-bg">
                    <div className="container-fluid px-lg-5">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="left-section">
                                    <div className="head-section text-center">
                                        <h2>Discover Largest NFT Marketplace</h2>
                                        <p>Buy &amp; Sell Digital Item</p>
                                    </div>
                                    <div className="log-image-wrapper">
                                        <img src="assets/images/nft-bg.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="right-section">
                                    <form>
                                        <div className="form-container">
                                            <div className="form-head-content text-center">
                                                <h3>Registration</h3>
                                                <p>Please Enter Your Details To Register</p>
                                            </div>
                                            <div className="form-body-content">
                                                <div className="form">
                                                    <div className="mb-3" {...register("user_name", {
                                                        required: true,
                                                        minLength: 2,
                                                        maxLength: 10
                                                    })} >
                                                        <input className="form-control" onChange={handleChange}
                                                               name="user_name" value={userData.user_name}
                                                               placeholder="User Name"/>
                                                        <span
                                                            className="d-flex mt-1 ml-2">  {errors.user_name && errors.user_name.type === 'required' &&
                                                            <p style={{color: "red"}}>Username is Required </p>}</span>
                                                        <span
                                                            className="d-flex mt-1 ml-2">  {errors.user_name && errors.user_name.type === 'maxLength' &&
                                                            <p style={{color: "red"}}>Enter Valid Username </p>}</span>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="mb-3"  {...register("first_name", {
                                                                required: true,
                                                                minLength: 2,
                                                                maxLength: 10
                                                            })}>
                                                                <input type="text" className="form-control"
                                                                       onChange={handleChange} name="first_name"
                                                                       value={userData.first_name}
                                                                       placeholder="First Name"/>
                                                                <span
                                                                    className="d-flex mt-1 ml-2">  {errors.first_name && errors.first_name.type === 'required' &&
                                                                    <p style={{color: "red"}}>First Name is
                                                                        Required </p>}</span>
                                                                <span
                                                                    className="d-flex mt-1 ml-2">  {errors.first_name && errors.first_name.type === 'maxLength' &&
                                                                    <p style={{color: "red"}}>Enter Valid First
                                                                        Name </p>}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="mb-3"  {...register("last_name", {
                                                                required: true,
                                                                minLength: 2,
                                                                maxLength: 10
                                                            })}>
                                                                <input type="text" className="form-control"
                                                                       onChange={handleChange} name="last_name"
                                                                       value={userData.last_name}
                                                                       placeholder="Last Name"/>
                                                                <span
                                                                    className="d-flex mt-1 ml-2">  {errors.last_name && errors.last_name.type === 'required' &&
                                                                    <p style={{color: "red"}}>Last Name is
                                                                        Required </p>}</span>
                                                                <span
                                                                    className="d-flex mt-1 ml-2">  {errors.last_name && errors.last_name.type === 'maxLength' &&
                                                                    <p style={{color: "red"}}>Enter Valid Last
                                                                        Name </p>}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3" {...register("email_address", {
                                                        required: true,
                                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                                                    })} >
                                                        <input type="email" className="form-control"
                                                               onChange={handleChange} name="email_address"
                                                               value={userData.email_address}
                                                               placeholder="Email Address"/>
                                                        <span
                                                            className="d-flex mt-1 ml-2">  {errors.email_address && errors.email_address.type === 'required' &&
                                                            <p style={{color: "red"}}>Email is Required </p>}</span>
                                                        <span
                                                            className="d-flex mt-1 ml-2">  {errors.email_address && errors.email_address.type === 'pattern' &&
                                                            <p style={{color: "red"}}>That is not a valid
                                                                email </p>}</span>
                                                    </div>
                                                    {/* <div className="mb-3">
                          <input type="text" className="form-control" onChange={inputsHandler} name="phone" value={inputField.phone}  placeholder="Phone Number" />
                        </div> */}
                                                    <div className="mb-3" {...register("country", {required: true})}>
                                                        <select
                                                            className="form-select countrypicker form-control w-100 mb-3"
                                                            style={{webkitAppearance: "menulist", height: "45px"}}
                                                            data-live-search="true" placeholder='Country'
                                                            onChange={handleChange} name="country"
                                                            value={userData.country}>
                                                            {countries.map((item, index) => {
                                                                return (<>
                                                                    <option className="opion"
                                                                            value={item.code}>{item.name}</option>
                                                                </>)
                                                            })}
                                                        </select>

                                                        {/* <select className="country-select selectpicker countrypicker"data-live-search="true" onChange={inputsHandler} name="country" value={inputField.country}>
                             </select>
                                       */}
                                                        <span
                                                            className="d-flex mt-1 ml-2">  {errors.country && errors.country.type === 'required' &&
                                                            <p style={{color: "red"}}>Country is Required</p>}</span>

                                                    </div>
                                                    {/* <div className="mb-3">
                          <input type="password" className="form-control"  onChange={inputsHandler} name="password" value={inputField.password} placeholder="Password" />
                        </div>
                        <div className="mb-3">
                          <input type="password" className="form-control"  onChange={inputsHandler} name="confirmPassword" value={inputField.confirmPassword}  placeholder="Confirm Password" />
                        </div> */}
                                                    {/* <div className="mb-3">
                          <button onClick={()=>{history.push('/magiclink')}} className="btn btn-violet-outline text-uppercase w-100 bg-transparent">SEND ME MAGIC LINK</button>
                        </div> */}

                                                    <div className="mb-3">
                                                        <button
                                                            onClick={(e) => handleSignup(e)}
                                                            className="btn btn-violet text-uppercase w-100">SEND ME
                                                            MAGIC
                                                            LINK
                                                        </button>
                                                    </div>
                                                    <p className="acc-area"> Already Have An Account? <span><Link
                                                        to="/login">Sign In</Link></span></p>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register;

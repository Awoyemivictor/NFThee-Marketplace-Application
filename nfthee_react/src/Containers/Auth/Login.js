import {useState, useEffect} from "react";
import instance from "../../axios";
import {useHistory, NavLink, Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import {Magic} from "magic-sdk";
import {useParams} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../hooks/useRedux";
import {setUser} from "../../redux/userSlice";
import {setMeta} from "../../redux/metaSlice";
import {requestForToken} from '../../../src/firebase-config';
import axios from "axios";


function Login() {
    const dispatch = useAppDispatch()
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [userToken, setUserToken] = useState();
    // console.info(instance)
    // console.warn(useAppSelector(state => state));
    // console.warn(user)
    const {params} = useParams();
    // console.log(params);
    
    useEffect(() => {
        requestForToken().then((data) =>{
            setUserToken(data)
        }).catch((e)=>{
            console.log("error",e)
        })
    });

    // let name, value;

    // const URI = `http://localhost:3000/walletlogin`;

    // const URI = `${window.location.origin}/walletlogin`;

    let magic = new Magic("pk_live_A57B8D59D07E9901");


    const [formData, setFormData] = useState({email: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    // console.log(formData.email);

    // const handleClick = async (e) => {
    //     e.preventDefault();
    // console.log("formDtata", formData.email);
    // const email = formData.email;
    // console.log(email);
    // const redirectURI = `${window.location.origin}/walletlogin`;
    // console.log(redirectURI);
    //     if (email) {
    // console.log(email);

    //        magic.auth.loginWithMagicLink({ email, redirectURI });
    //       // render();
    //     }
    // console.log(didToken)
    //     await axios
    //         .get(`http://localhost:2022/api/login/email?email_address=${email}`, {})
    //         .then((response) => {
    //             // console.log(response.data);
    //             if (response.data) {
    //                 Swal.fire({
    //                     position: "top-center",
    //                     icon: "success",
    //                     title: "email is valid",
    //                     showConfirmButton: false,
    //                     timer: 1500,
    //                 });
    //                 const didToken = magic.auth.loginWithMagicLink({email});
    //                 history.push('/walletlogin')
    //                 console.log(didToken)
    //             } else {
    //                 Swal.fire({
    //                     position: "top-center",
    //                     icon: "error",
    //                     title: "please provide valid email",
    //                     showConfirmButton: false,
    //                     timer: 1500,
    //                 });
    //             }
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             // console.log(error);
    //             setLoading(false);
    //             Swal.fire({
    //                 position: "top-center",
    //                 icon: "error",
    //                 title: "Please Provide Your Email Address",
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             });
    //         });
    // };

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("e.preventDefault()",e.preventDefault(),e.target.value)
        // const redirectURI = `${window.location.origin}/walletlogin`;
        // const didToken = await magic.auth.loginWithMagicLink({email, redirectURI})
        // localStorage.setItem("tokenMagic", didToken)
        //
        // const res = await authLogin(email, didToken)
        //
        // if(res.status === 200) {
        //     const userMetaData = await magic.user.getMetadata()
        //     setUserData(userMetaData)
        // }
        //
        // console.info(userData)
        // await history.push('/walletlogin')
        //
        // // console.warn(user)
        // // window.close()
        if (email) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "email is valid",
                showConfirmButton: false,
                timer: 1500,
            });
            await instance.get(`/api/login/email?email_address=${email}`).then(response => {
            localStorage.setItem("userLoggedIn",JSON.stringify(response.data.data))
            console.log("lofin data frontend",response.data.data)
            let payload = {email_address:response.data.data.email_address, token_id:userToken}

            if(!response.data.data.token_id){
                instance.post('/api/addLoginToken',payload).then((res)=>{
                    console.log("res--------",res)
                }).catch((e)=>{
                    console.log("eorror--------",e)
                })
            }else{
                instance.post('/api/addLoginToken',payload).then((res)=>{
                    console.log("res--------",res)
                }).catch((e)=>{
                    console.log("eorror--------",e)
                })
            }
            
        })
        } else {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "please provide valid email",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        const didToken = await magic.auth.loginWithMagicLink({
            email,
            redirectURI: new URL('/walletlogin', window.location.origin).href
        })

        const res = await instance.get(`/api/login/email?email_address=${email}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + didToken,
            }
        }).then(response => {
        localStorage.setItem("userLoggedIn",JSON.stringify(response.data.data))
            dispatch(setUser(response.data.data))})
            .catch(err => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "User doesn't exist",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
        console.log("resp-----",res)
        if (res.status === 200) {
            const userMetaData = await magic.user.getMetadata()
            await dispatch(setMeta(userMetaData))
        }
        history.push('/walletlogin')
    }


    const [loading, setLoading] = useState(false);
    // const [registerData, setRegisterData] = useState(false);

    return (
        <>
            {loading && (
                <div className="spinner">
                    <span>Loading...</span>
                    <div className="half-spinner"></div>
                </div>
            )}
            <main>
                <section className="login-reg-bg ">
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
                                    <div className="form-container">
                                        <div className="form-head-content text-center">
                                            <h3>Login</h3>
                                            <p>Please Enter Your Details To Login</p>
                                        </div>
                                        <form>
                                            <div className="form-body-content">
                                                <div className="form">

                                                    <div className="mb-4">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            name="email"
                                                            value={email}
                                                            required="required"
                                                            placeholder="Email"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <Link to="/walletlogin">
                                                            <button
                                                                type="submit"
                                                                onClick={(e) => handleLogin(e)}
                                                                className="btn btn-violet-outline text-uppercase w-100 bg-transparent">
                                                                SEND ME MAGIC LINK
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <p className="acc-area"> Already Have An Account? <span>
                                                    <Link to="/register">Sign Up</Link>
                                                  </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;


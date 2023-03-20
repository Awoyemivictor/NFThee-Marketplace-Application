import {useEffect,useState} from 'react'
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { languages, link_menu_profile, link_main_menu } from "../Components/Layout/Data"
import i18next from "i18next";
import parse from "html-react-parser";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
function LaunchPage() {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");
  const {register,handleSubmit,clearErrors,formState: { errors },} = useForm();
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode); 
  function langFlag(currentLanguageCode) {
    switch (currentLanguageCode) {
      case "en":
        return "../../assets/images/icons/united-states.png";
      case "dutch":
        return "../../../assets/images/icons/dutch.png";
      case "fr":
        return "../../assets/images/icons/fr.png";
      case "ger":
        return "../../assets/images/icons/ger.png";
      case "cn":
        return "../../assets/images/icons/ch.png";
      case "span":
        return "../../assets/images/icons/span.png";
      case "portu":
        return "../../assets/images/icons/portu.png";
      case "jpn":
        return "../../assets/images/icons/jpn.png";
      case "arabic":
        return "../../assets/images/icons/arabic.png";
     
    }
  } 
    const [countdownDate, setCountdownDate] = useState(new Date('07/25/2022').getTime());
    const [state, setState] = useState({ days: 0,hours: 0, minutes: 0, seconds: 0,});  
    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    }, []);  
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
  
        const distanceToDate = countdownDate - currentTime;
  
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
  
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
  
        setState({ days: days, hours: hours, minutes, seconds });
      }
    }
    const [inputField , setInputField] = useState({  email: '' })  
    const inputsHandler = (e) =>{
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
             [name]: value,
         }));           
         } 
    const submitButton = (e) =>{ 
      // e.preventDefault();
        const registered  = { 
           email:inputField.email,  
       } 
        // setLoading(true)
       
         axios.post('https://admin.nfthee.com/api/subscribe',registered) 
         .then(response =>{ 
          console.log(response);
          // setLoading(false)
          if(response.data.success === true){ 
            Swal.fire({ 
              icon: "success",
              title: response.data.message,
              showConfirmButton: false,
              timer: 3000,
            });
        //  history.push('/');
        window.location.href = "/";
         console.log(response);  
       }else{  
            
       } 
         ;})
         .catch(error=>{  
          console.log( error+"hiii")
          Swal.fire({ 
            icon: "error",
            title: "Value Cannot Be Empty",
            showConfirmButton: false,
            timer: 1500,
          });
        //  setLoading(false)
          
      })  
            
        //  } 
         setInputField((prevState) => ({
          ...prevState,
          email:inputField.email,
          password:""
         }));
     } 
     
  return (
    <>
      <section className="coming-soon-section"> 
              <div className="image-wrap" />
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-12 p-0">
                    <div className="coming-content-wrapper">
                      <header className="text-center launchheader">
                        <a href><img src="assets/images/icons/light-logo.png" alt="" className="logo img-fluid" /></a>
                        <div className="dropdown language-dropdown   launchlang ">
                        <span data-bs-toggle="dropdown" aria-expanded="false" className='languageInLaunch'>
                          <img src={langFlag(currentLanguageCode)} alt="" className="img-fluid"/> 
                          {currentLanguageCode}
                        </span>
                        <ul className="dropdown-menu" >
                          {languages.map(({ code, name, flag, country_code }) => (
                            <li key={country_code} >
                              <a href="#"className={classNames("dropdown-item", {disabled: currentLanguageCode === code, })} 
                                onClick={() => { i18next.changeLanguage(code);}}> 
                                <img src={flag} alt="" className="img-fluid" />
                                {name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>     
                      </header>
                      <main>
                        <div className="launch-content-section">
                          <div className="col-lg-10 col-md-10 mx-auto pt-4 pb-5">
                            <div className="text-center">
                              <h3 className="text-heading text-uppercase">{t("launching.Stay Tuned")}!</h3>
                              <h4 className="title-heading">
                              {t("launching.To all NFT Artists, collectors, enthusiasts")}
                              </h4>
                              <p className="para-desc mb-0">
                              {t("launching.NFThee is set to become the most user friendly")} <br />
                              {t("launching.First 1000 verified")} <br />
                              {t("launching.And the  first 10.000")} 
                              </p>
                            </div>
                          </div>
                          <div className="launch-notice-section">
                            <h4 className="heading-title">
                              <span> {t("launching.Most important notices")}</span>
                            </h4>
                            <div className="notice-card-wrapper">
                              <ul className="justify-content-center d-flex flex-wrap ">
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">{t("launching.Only 2% fee")}</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">{parse(t("launching.that same fee will go back"))}</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">{parse(t("launching.Our own Thee token"))}</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {parse(t("launching.All languages available"))}
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {parse(t("launching.Multi wallets supported"))} 
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {parse(t("launching.Multi chains (ETH, SOL, BNB, Polygon, Harmony)"))} 
                                  </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center"> {t("launching.Gas-Free")} </div>
                                  </div>
                                </li>
                          
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center"> {t("launching.Rewards system")} </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {parse(t("launching.Android and Apple app"))} 
                                      
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {parse(t("launching.Active support team to delete scams and answer questions"))} 
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center"> {t("launching.Pay with card")} </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {parse(t("launching.Easy collection upload"))} 
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {t("launching.Multi listing")}  
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center"> 
                                    {t("launching.2 layer")}   
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="notice-card">
                                    <div className="border-gradient d-flex align-items-center">
                                    {t("launching.Minting? No problem")}  
                                      
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="count-down-wrapper">
                            <h3>  {parse(t("launching.Count down with us on www.nfthee.com"))}
                            <a href="#" className="text-decoration-underline">www.nfthee.com.</a>
                              <img src="assets/images/icons/smile.png" alt="" /></h3>
                            <p>
                            {t("launching.And make sure you will be among the first 1000 to take")}
                            </p>
                            <div className="count-down-area" id="countdown">
                              <ul>
                                <li><span > {state.days || '0'} </span>{t("launching.Days")} </li>
                                <li><span > {state.hours || '0'} </span> {t("launching.Hours")}</li>
                                <li><span > {state.minutes || '0'}</span> {t("launching.Min")}</li>
                                <li><span > {state.seconds || '0'}</span> {t("launching.Sec")}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="launch-email-wrapper">
                            <h3>{t("launching.Early access")}?</h3>
                            <form onSubmit={handleSubmit(submitButton)}>
                            <div className="launch-email-form"> 
                        <div>
                        <input  {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, })} type="text" className="email-input" onChange={inputsHandler} name="email" value={inputField.email} placeholder={t("launching.Enter Your Email Address")}  />
                        <p className="d-flex mt-1 ml-2 mb-0">  {errors.email && errors.email.type === "required" && ( <p style={{ color: "white" }}>{t("launching.email_requird")}  </p> )} </p>
                            <p className="d-flex mb-0">  {errors.email && errors.email.type === "pattern" && ( <p style={{ color: "white" }}> {t("launching.invalid_email")}</p> )} </p>
                        </div>
                              <div className="email-button text-center">
                                <button type="submit" className="btn"><span>{t("launching.send")}</span></button>
                              </div>  
                            </div> 
                                </form>
                          </div>
                        
                          
                          <div className="launch-social-icon-wrapper">
                            <h6>{t("launching.Interested? Follow us on")}</h6>
                            <div className="explore-social-icon">
                              <ul>
                                <li><a target="_blank" href="https://discord.com/invite/9ZrSTsDj8H" className="icon-box"><img src="assets/images/icons/discord-icon.png" alt="" /></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/nfthee.io/" className="icon-box"><img src="assets/images/icons/instagram-icon-large.png" alt="" /></a></li>
                                <li><a target="_blank" href="mailto:support@nfthee.com" className="icon-box"><img src="assets/images/icons/mail-icon.png" alt="" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </main>
                      <footer className="text-center">
                        <small className="mb-0 footer-title">©2022 <a href="#">NFThee</a>, Inc. All rights reserved.</small>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
      </section>
    </>
  )
}

export default LaunchPage;


// <li><span id="days" />days {state.days || '0'}</li>
// <li><span id="hours" />Hours {state.hours || '00'}</li>
// <li><span id="minutes" />Min {state.minutes || '00'}</li>
// <li><span id="seconds" />Sec {state.seconds || '00'}</li>
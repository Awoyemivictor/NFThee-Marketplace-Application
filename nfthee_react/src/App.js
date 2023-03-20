import { Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/Scroll";
import { routes } from "./Constants/routes";
import { Footer, Navbar } from "./Components/Layout";
import LaunchPage from "./Components/LaunchPage";
import Loader from "./Components/Loader/Loader";
import {onMessageListener,requestForToken} from "../src/firebase-config";
import { useEffect,useState } from "react";
import instance from "./axios";

// import MultipleFileInput from "./Containers/CreateNewItem/formTest";
function App() {
  const ldata = JSON.parse(localStorage.getItem('userLoggedIn'));

 const [checkChanges,setChanges]=useState()
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted" &&ldata._id) {
      // Generate Token
      await requestForToken().then((data) =>{
        console.log("Token Gen", data);
        setChanges(data)
        let paload={email_address:ldata.email_address,token_id:data}
        instance.post('/api/addLoginToken',paload)
        .then(res=> localStorage.setItem('userLoggedIn',JSON.stringify(res.data.data)))
      })
        .catch((e)=>{
          console.log("error",e)
      })
        
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, [checkChanges]);

  useEffect(()=>{
    // onMessageListener();
    onMessageListener();
  },[]);
  
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  const currentPath = window.location.pathname;
  console.log(currentPath);

  return (
    <>  
     <Loader />     
    {/* {currentPath === "/launchpage" && <LaunchPage />} */}
      <Navbar checkChanges={checkChanges} setChanges={setChanges} /> 
      <ScrollToTop/>
      <Switch> 
        {routeComponents}
      <Redirect to="/" />
      </Switch>
      <Footer />
      {/* <LaunchPage /> */}

      {/* <MultipleFileInput/> */}
     
    </>
  );
}

export default App;

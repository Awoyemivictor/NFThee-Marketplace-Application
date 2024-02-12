import { Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/Scroll";
import { routes } from "./Constants/routes";
import { Footer, Navbar } from "./Components/Layout";
import LaunchPage from "./Components/LaunchPage";
import Loader from "./Components/Loader/Loader";
import {onMessageListener,requestForToken} from "../src/firebase-config";
import { useEffect,useState } from "react";
import instance from "./axios";
import { getUserAddress } from "./Config/constants";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Swal from "sweetalert2";

// import MultipleFileInput from "./Containers/CreateNewItem/formTest";
function App() {
  const ldata = JSON.parse(localStorage.getItem('userLoggedIn'));
  const [toggle, setToggle] = useState();
  const verifyWallet=async()=>{
  const address=await getUserAddress();
  if(isAuth()){
    
   await 
  //  axios
   instance
   .post('/api/checkWalletAddress',{account_address:address ,id:ldata._id})
    .then(res=>{
      if(res.data.data===false){
        Swal.fire({
          icon: "error",
          title: "Connect Wallet ",
          text: 'Which you used during Login',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    })
  }
}



 const [checkChanges,setChanges]=useState()
  async function requestPermission() {
  //  if(isAuth()){ 
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
  // }
  }


  useEffect(() => {
     axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}/api/getToggle`)
  .then(res=>setToggle(res.data.data[0].toggleValue))
    verifyWallet()
    requestPermission();
  }, [useLocation().pathname,checkChanges]);

  useEffect(()=>{
    // onMessageListener();
    onMessageListener();
  },[]);
  

  function isAuth() {
    return ldata && ldata._id&&ldata.status==='verified';
  }

  

  function ProtectedRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth() ? <Component {...props} /> : <Redirect to="/wait" />
        }
      />
    );
  }

  //if i want to add more routes
  // const protectedPaths = ['/createnewitem', '/protectedpath2', '/protectedpath3'];
  // const updatedRoutes = routes.map((route) =>
  //   protectedPaths.includes(route.path) ? { ...route, protected: true } : route
  // );
  
//for single route
  const updatedRoutes = routes.map((route) =>
    route.path === '/createnewitem' ? { ...route, protected: true } : route
  );


  // Map the routes to Route components, and use the ProtectedRoute component for the protected routes
  const routeComponents = updatedRoutes.map(({ path, component, protected: isProtected }, key) =>
    isProtected ? (
      <ProtectedRoute exact path={path} component={component} key={key} />
    ) : (
      <Route exact path={path} component={component} key={key} />
    )
  );
   // Update the 'routes' array to make the '/createnewitem' route protected
  



  
  // const routeComponents = routes.map(({ path, component }, key) => (
  //   <Route exact path={path} component={component} key={key} />
  // ));
  // const currentPath = window.location.pathname;
  // console.log(currentPath);

  return (
    <>  
     <Loader />     
    {/* {currentPath === "/launchpage" && <LaunchPage />} */}
      <Navbar checkChanges={checkChanges} setChanges={setChanges} toggle={toggle} /> 
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

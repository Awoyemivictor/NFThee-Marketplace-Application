import { Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/Scroll";
import { routes } from "./Constants/routes";
import { Footer, Navbar } from "./Components/Layout";
import LaunchPage from "./Components/LaunchPage";
import Loader from "./Components/Loader/Loader";
// import MultipleFileInput from "./Containers/CreateNewItem/formTest";
function App() {

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  const currentPath = window.location.pathname;
  console.log(currentPath);

  return (
    <>  
     <Loader />     
    {/* {currentPath === "/launchpage" && <LaunchPage />} */}
      <Navbar /> 
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

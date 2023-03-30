import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/common/scroll-to-top";

import "./index.scss";
import "./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf"
import App from "./components/app";

// Signin page
import Signin from "./auth/signin";

// Pages

// Authentication Page
import Login from "./components/pages/authentication/login";
import LoginWithBgImage from "./components/pages/authentication/login-bg-image";
import LoginWithBgVideo from "./components/pages/authentication/login-bg-video";
import Register from "./components/pages/authentication/register";
import RegisterWithBgImage from "./components/pages/authentication/register-bg-image";
import RegisterWithBgVideo from "./components/pages/authentication/register-bg-video";
import UnlockUser from "./components/pages/authentication/unlock-user";
import ForgetPassword from "./components/pages/authentication/forget-password";
import ResetPassword from "./components/pages/authentication/reset-password";
import Maintenance from "./components/pages/maintenance";

// Comming-Soon Page
import Comingsoon from "./components/pages/comingsoon/comingsoon";
import ComingsoonImg from "./components/pages/comingsoon/comingsoon-Img";
import ComingsoonVideo from "./components/pages/comingsoon/comingsoon-video";

// Error Page
import Error400 from "./components/pages/errors/error-400";
import Error401 from "./components/pages/errors/error-401";
import Error403 from "./components/pages/errors/error-403";
import Error404 from "./components/pages/errors/error-404";
import Error500 from "./components/pages/errors/error-500";
import Error503 from "./components/pages/errors/error-503";

import SamplePage from "./components/pages/sample-page";
import Search from "./components/pages/search/search";
import SmsSetting from './components/dashboard/smsSetting/smsSetting';

// Dashboards
import Default from "./components/dashboard/default/index.component";

//otherUser
import Otheruser from "./components/dashboard/otherusers/index.otheruser"
import SingleUser from "./components/dashboard/otherusers/usersSingle";
//projects
import Projects from "./components/dashboard/projects/index.projects";
import SingleProject from "./components/dashboard/projects/projectSingle";
//Nft report
import ReportDetail from "./components/dashboard/reportOnNft/report-details";
import VeiwReport from "./components/dashboard/reportOnNft/viewReport"
//User's report
import UserReport from "./components/dashboard/reportOnUser/userReportdetail";
import ViewUserReport from "./components/dashboard/reportOnUser/viewUserReport";
//market place
import MarketPlace from "./components/dashboard/marketplace/index.marketplace";
// import View from "./components/dashboard/view/CreateItemDetail";
import View from "./components/dashboard/view/index.component";
import component from "./components/dashboard/view/index.component";
import collection from "./components/dashboard/view/index.collection";
import ItemSingle from "./components/dashboard/view/createItemSingle";
import CollectionSingle from "./components/dashboard/view/collectionSingle";
import Partner from "./components/dashboard/partner/viewPartner";
import AddBlockChain from "./components/dashboard/blockChainNetwork/addBlockChain";
import ViewPartner from "./components/dashboard/partner/viewPartner";
import AddPartner from "./components/dashboard/partner/addPartner";
import PartnerSingle from "./components/dashboard/partner/singlePartner";

import Category from "./components/dashboard/category/viewCategory";
import Singlecategory from "./components/dashboard/category/singleCategory";
import Addcategory from "./components/dashboard/category/addcategory";
import UpdateCategory from "./components/dashboard/category/updateCategory";
import CategoryD from "./components/dashboard/category/viewCategory";

import Ecommerce from "./components/dashboard/ecommerce/index.component";
import Business from "./components/dashboard/business/index.component";
import Crm from "./components/dashboard/crm/index.component";
import GeneralWidget from "./components/widget/general-widget";
import ChartWidget from "./components/widget/chart-widget";

import SuggestionDetails from "./components/dashboard/suggestion/suggestion-details";
import blockchainDetails from "./components/dashboard/blockChainNetwork/blockchain-detail";
import ViewSuggestion from "./components/dashboard/suggestion/viewSuggestion";
import viewBlockChain from "./components/dashboard/blockChainNetwork/viewBlockChain";
import UpdateBlockchain from './components/dashboard/blockChainNetwork/updateBlockchain';
// UI Base
import StateColor from "./components/ui/base/state-color";
import Typography from "./components/ui/base/typography";
import HelperClasses from "./components/ui/base/helper-classes";
import Grid from "./components/ui/base/grid";
import TagPills from "./components/ui/base/tag-pills";
import ProgressBaar from "./components/ui/base/progress-bar";
import Modal from "./components/ui/base/modal";
import Alert from "./components/ui/base/alert/alert";
import PopOver from "./components/ui/base/popover/popover";
import ToolTip from "./components/ui/base/tooltip/tooltip";
import Spinners from "./components/ui/base/spinners";
import DropDowns from "./components/ui/base/dropDown/dropdown";
import TabReactstrap from "./components/ui/base/tabs/tabReactstrap";
import Tabline from "./components/ui/base/tabs/tabline";
import Navs from "./components/ui/base/nav/navs";
import Accordian from "./components/ui/base/accordian/accordian";
import Shadow from "./components/ui/base/shadow";
import List from "./components/ui/base/list";

// UI Advance
import SweetAlerts from "./components/ui/advance/sweet-alert";
import Breadcrumbs from "./components/ui/advance/breadcrumb";
import Ribbons from "./components/ui/advance/ribbons";
import Steps from "./components/ui/advance/Steps/steps";
import RangeSlider from "./components/ui/advance/range-slider";
import Toastr from "./components/ui/advance/toastr";

import Scrollable from "./components/ui/advance/scrolling";
import Rating from "./components/ui/advance/rating";
import Dropzone from "./components/ui/advance/dropzone";
import Tour from "./components/ui/advance/tour";
import ImageCropper from "./components/ui/advance/imagecrop";
import Pagination from "./components/ui/advance/pagination";
import Sticky from "./components/ui/advance/sticky";
import Carousel from "./components/ui/advance/carousel";

import Pricing from "./components/pricing/pricing";

// Icons
import FlagIcon from "./components/icon/flag-icon";
import FontAwesome from "./components/icon/font-awesome";
import IcoIcon from "./components/icon/ico-icon";
import ThemifyIcon from "./components/icon/themify-icon";
import Whethericon from "./components/icon/whether-icon";

// Buttons
import DefaultButton from "./components/buttons/default-button";
import FlatButton from "./components/buttons/flat-button";
import EdgeButton from "./components/buttons/edge-button";
import RaisedButton from "./components/buttons/raised-button";
import GroupButton from "./components/buttons/group-button";

// Forms
import FormValidation from "./components/forms/form-control/form-validation";
import BaseInput from "./components/forms/form-control/baseInput";
import InputGroup from "./components/forms/form-control/InputGroup";
import MegaOption from "./components/forms/form-control/MegaOption";
import CheckboxandRadio from "./components/forms/form-control/CheckboxandRadio";

// Form Layout
import FormDefault from "./components/forms/form-layout/formDefault";
import FormWizard1 from "./components/forms/form-layout/form-wizard-1/Formwizard1";

// Forms widgets
import Datepicker from "./components/forms/form-widget/datepicker";
import Timepicker from "./components/forms/form-widget/timepickerComponent/timepicker";
import Typeahead from "./components/forms/form-widget/typeaheadComponent/typeahead";

// Tables
import BasicTabels from "./components/tables/basic-table";
import BorderTable from "./components/tables/border-table";
import SizingTable from "./components/tables/sizing-table";
import StylingTable from "./components/tables/styling-table";
import DataTable from "./components/tables/data-tables";

// Cards
import BasicCards from "./components/cards/basic-cards";
import CreativeCards from "./components/cards/creative-cards";
import TabCard from "./components/cards/tab-card";
import DraggingCards from "./components/cards/dragging-cards";

// Timeline
import Timeline1 from "./components/timelines/timeline";
import Timeline2 from "./components/timelines/timeline2";

// Charts
import Apexcharts from "./components/charts/apexCharts/apex-charts";
import GoogleCharts from "./components/charts/googleCharts/chart-google";
import KnobChart from "./components/charts/knobChart/knob-chart";
import Chartsjs from "./components/charts/charJsCharts/chart-js";
import Chartist from "./components/charts/chartistCharts/chartist";

//Maps
import LeafletMapComponent from "./components/maps/leaflet-map";
import GoogleMap from "./components/maps/google-map";

// Editors
import CkEditor from "./components/editor/ck-editor";
import AceCodeEditor from "./components/editor/ace-code-editor";
import MdeEditor from "./components/editor/mde-editor";

// Users
import UserProfile from "./components/users/user.profile";
import UserCards from "./components/users/user.cards";
import EditProfile from "./components/users/edit.profile";

// Gallery
import ImageGallery from "./components/gallery/image.gallery";
import Imagewithdesc from "./components/gallery/image-with-desc";
import Mesonrygallery from "./components/gallery/mesonry-gallery";
import Mesonrydesc from "./components/gallery/mesonry-desc";
import ImageHover from "./components/gallery/image.hover";

// Support ticket
import SupportTicket from "./components/support-ticket/support-ticket";

// Calander
import BasicCalendar from "./components/calendar/basic-calendar";
import DraggableCalendar from "./components/calendar/draggable-calendar";

// Blog
import BlogDetail from "./components/blog/blog-detail";
import BlogSingle from "./components/blog/blog-single";
import BlogPost from "./components/blog/blog-post";
import BlogEdit from "./components/blog/blog-edit"

// Applicaiton

// Chat app
import ChatApp from "./components/applications/chat/chatapp";

// Contact app
import ContactApp from "./components/applications/contact-app/contact-app";
import NewUser from "./components/applications/contact-app/new-user";
import EditUser from "./components/applications/contact-app/edit-user";

// Todo app
import TodoApp from "./components/applications/todo/todo.app";
import TodoFirebase from "./components/applications/todo-firebase/todo.firebase";

// Ecommerce app
import Product from "./components/applications/ecommerce-app/product";
import ProductPage from "./components/applications/ecommerce-app/productpage";
import ProductList from "./components/applications/ecommerce-app/productlist";
import Cart from "./components/applications/ecommerce-app/Cart";
import Wishlist from "./components/applications/ecommerce-app/Wishlist";
import Checkout from "./components/applications/ecommerce-app/Checkout";
import Invoice from "./components/applications/ecommerce-app/Invoice";
import PaymentDetails from "./components/applications/ecommerce-app/paymentdetails";
import OrderHistory from "./components/applications/ecommerce-app/OrderHistory";
import { useHistory } from "react-router-dom";

// Email app
import EmailApp from "./components/applications/email/email";
import emailSetting from "./components/dashboard/emailSetting/emailSetting";
// import Productdetails from './components/applications/ecommerce-app/paymentdetails';

const Root = () => {
  const abortController = new AbortController();
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("isUser")
  );
  const history = useHistory();

  useEffect(() => {
    setCurrentUser(localStorage.getItem("isUser"));
  }, [currentUser]);

  // useEffect(() => {
  //   console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
  //   console.disableYellowBox = true;
  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path={`/login`} component={Signin} />
          <Route path={`/pages/login`} component={Login} />
          <Route path={`/pages/login-image`} component={LoginWithBgImage} />
          <Route path={`/pages/login-video`} component={LoginWithBgVideo} />
          <Route path={`/pages/register`} component={Register} />
          <Route
            path={`/pages/register-image`}
            component={RegisterWithBgImage}
          />
          <Route
            path={`/pages/register-video`}
            component={RegisterWithBgVideo}
          />
          <Route path={`/pages/unlock-user`} component={UnlockUser} />
          <Route path={`/pages/forget-password`} component={ForgetPassword} />
          <Route path={`/pages/reset-password`} component={ResetPassword} />
          <Route path={`/pages/maintenance`} component={Maintenance} />

          <Route path={`/pages/errors/error400`} component={Error400}></Route>
          <Route path={`/pages/errors/error401`} component={Error401}></Route>
          <Route path={`/pages/errors/error403`} component={Error403}></Route>
          <Route path={`/pages/errors/error404`} component={Error404}></Route>
          <Route path={`/pages/errors/Error500`} component={Error500}></Route>
          <Route path={`/pages/errors/error503`} component={Error503}></Route>

          <Route path={`/pages/comingsoon`} component={Comingsoon}></Route>
          <Route
            path={`/pages/comingsoonImg`}
            component={ComingsoonImg}
          ></Route>
          <Route
            path={`/pages/comingsoonVideo`}
            component={ComingsoonVideo}
          ></Route>

          {currentUser != "null" ? (
            <App>
              <Route
                exact
                path={`/`}
                render={() => {
                  return <Redirect to={`/login`} />;
                }}
              />

              <Route exact path={`/dashboard/default`} component={Default} />
              <Route exact path={`/dashboard/view`} component={View} />
              <Route
                exact
                path={`/dashboard/view/index.collection`}
                component={collection}
              />
              <Route
                exact
                path={`/dashboard/view/index.otheruser`}
                component={Otheruser}
              />
               <Route
                exact
                path={`/dashboard/view/index.marketplace`}
                component={MarketPlace}
              />
              <Route
                exact
                path={`/dashboard/view/index.projects`}
                component={Projects}
              />
              <Route
                exact
                path={`/dashboard/view/singleProject`}
                component={SingleProject}
              />
              <Route
                exact
                path={`/dashboard/view/singleUser`}
                component={SingleUser}
              />
              <Route
                exact
                path={`/dashboard/view/index.component`}
                component={component}
              />
              <Route
                exact
                path={`/dashboard/view/createItemSingle`}
                component={ItemSingle}
              />
              <Route
                exact
                path={`/dashboard/view/collectionSingle`}
                component={CollectionSingle}
              />
              <Route exact path={`/dashboard/partner`} component={Partner} />
              <Route
                exact
                path={`/dashboard/partner/viewPartner`}
                component={ViewPartner}
              />
              <Route
                exact
                path={`/dashboard/partner/addPartner`}
                component={AddPartner}
              />
              <Route
                exact
                path={`/dashboard/partner/singlePartner`}
                component={PartnerSingle}
              />

              <Route exact path={`/dashboard/category`} component={Category} />

              <Route
                exact
                path={`/dashboard/addcategory`}
                component={Addcategory}
              />

              <Route
                exact
                path={`/dashboard/singlecategory`}
                component={Singlecategory}
              />
              <Route
                exact
                path={`/dashboard/updatecategory`}
                component={UpdateCategory}
              />
              <Route
                exact
                path={`/dashboard/emailsetting`}
                component={emailSetting}
              />
              <Route
                exact
                path={`/dashboard/category/viewCategory`}
                component={CategoryD}
              />

                <Route
                exact
                path={`/dashboard/nftreportdetail`}
                component={ReportDetail}
              />
               <Route
                exact
                path={`/dashboard/userreportdetail`}
                component={UserReport}
              />
              <Route
                exact
                path={`/dashboard/suggestiondetails`}
                component={SuggestionDetails}
              />
              <Route
                exact
                path={`/dashboard/addBlockChain`}
                component={AddBlockChain}
              />
              <Route
                exact
                path={`/dashboard/smssetting`}
                component={SmsSetting}
              />
              <Route
                exact
                path={`/dashBoard/viewBlockChain`}
                component={viewBlockChain}
              />
              <Route
                exact
                path={`/dashBoard/blockchainDetail`}
                component={blockchainDetails}
              />
              <Route
                exact
                path={`/dashboard/updateBlockChain`}
                component={UpdateBlockchain}
              />
              <Route
                exact
                path={`/dashboard/viewSuggestion`}
                component={ViewSuggestion}
              />
                <Route
                exact
                path={`/dashboard/nftviewReport`}
                component={VeiwReport}
              />
              <Route
                exact
                path={`/dashboard/userviewReport`}
                component={ViewUserReport}
              />

              <Route path={`/dashboard/ecommerce`} component={Ecommerce} />
              <Route path={`/dashboard/business`} component={Business} />
              <Route path={`/dashboard/crm`} component={Crm} />

              <Route path={`/general-widget`} component={GeneralWidget} />
              <Route path={`/chart-widget`} component={ChartWidget} />

              <Route path={`/ui/base/state-color`} component={StateColor} />
              <Route path={`/ui/base/typography`} component={Typography} />
              <Route
                path={`/ui/base/helper-classes`}
                component={HelperClasses}
              />
              <Route path={`/ui/base/grid`} component={Grid} />
              <Route path={`/ui/base/tag-pills`} component={TagPills} />
              <Route path={`/ui/base/progress`} component={ProgressBaar} />
              <Route path={`/ui/base/modal`} component={Modal} />
              <Route path={`/ui/base/alert`} component={Alert} />
              <Route path={`/ui/base/popover`} component={PopOver} />
              <Route path={`/ui/base/tooltip`} component={ToolTip} />
              <Route path={`/ui/base/dropdowns`} component={DropDowns} />
              <Route path={`/ui/base/spinners`} component={Spinners} />
              <Route
                path={`/ui/base/tab-bootstrap`}
                component={TabReactstrap}
              />
              <Route path={`/ui/base/tab-line`} component={Tabline} />
              <Route path={`/ui/base/navs`} component={Navs} />
              <Route path={`/ui/base/accordian`} component={Accordian} />
              <Route path={`/ui/base/shadow`} component={Shadow} />
              <Route path={`/ui/base/list`} component={List} />

              <Route path={`/ui/advance/carousel`} component={Carousel} />
              <Route path={`/ui/advance/sweet-alert`} component={SweetAlerts} />
              <Route path={`/ui/advance/breadcrumbs`} component={Breadcrumbs} />
              <Route path={`/ui/advance/ribbons`} component={Ribbons} />
              <Route path={`/ui/advance/steps`} component={Steps} />
              <Route
                path={`/ui/advance/range-slider`}
                component={RangeSlider}
              />
              <Route path={`/ui/advance/toastr`} component={Toastr} />

              <Route path={`/ui/advance/scrollable`} component={Scrollable} />
              <Route path={`/ui/advance/rating`} component={Rating} />
              <Route path={`/ui/advance/dropzone`} component={Dropzone} />
              <Route path={`/ui/advance/tourComponent`} component={Tour} />
              <Route
                path={`/ui/advance/imageCropper`}
                component={ImageCropper}
              />
              <Route path={`/ui/advance/pagination`} component={Pagination} />
              <Route path={`/ui/advance/stickyNotes`} component={Sticky} />

              <Route
                path={`/ui/leaflet-maps`}
                component={LeafletMapComponent}
              />
              <Route path={`/ui/google-maps`} component={GoogleMap} />

              <Route path={`/applications/pricing`} component={Pricing} />

              <Route path={`/applications/chat-app`} component={ChatApp} />

              <Route
                path={`/applications/contact-app`}
                component={ContactApp}
              />
              <Route path={`/applications/new-user`} component={NewUser} />
              <Route
                path={`/applications/edit-user/:id`}
                component={EditUser}
              />

              <Route path={`/applications/todo-app`} component={TodoApp} />
              <Route
                path={`/applications/todo-firebase-app`}
                component={TodoFirebase}
              />
              <Route path={`/applications/email-app`} component={EmailApp} />
              <Route
                path={`/applications/users/user-profile`}
                component={UserProfile}
              />
              <Route
                path={`/applications/users/user-cards`}
                component={UserCards}
              />
              <Route
                path={`/applications/users/edit-profile`}
                component={EditProfile}
              />

              <Route
                path={`/applications/calendar/basic-calendar`}
                component={BasicCalendar}
              />
              <Route
                path={`/applications/calendar/draggable-calendar`}
                component={DraggableCalendar}
              />

              <Route
                path={`/applications/gallery/image-gallery`}
                component={ImageGallery}
              />
              <Route
                path={`/applications/gallery/image-with-desc`}
                component={Imagewithdesc}
              />
              <Route
                path={`/applications/gallery/mesonry-gallery`}
                component={Mesonrygallery}
              />
              <Route
                path={`/applications/gallery/mesonry-desc`}
                component={Mesonrydesc}
              />
              <Route
                path={`/applications/gallery/image-hover`}
                component={ImageHover}
              />

              <Route
                path={`/applications/ecommerce/product`}
                component={Product}
              />
              <Route
                path={`/applications/ecommerce/product-detail/:id`}
                component={ProductPage}
              />
              <Route path={`/applications/ecommerce/cart`} component={Cart} />
              <Route
                path={`/applications/ecommerce/wishlist`}
                component={Wishlist}
              />
              <Route
                path={`/applications/ecommerce/checkout`}
                component={Checkout}
              />
              <Route
                path={`/applications/ecommerce/invoice`}
                component={Invoice}
              />
              <Route
                path={`/applications/ecommerce/product-list`}
                component={ProductList}
              />
              <Route
                path={`/applications/ecommerce/payment-details`}
                component={PaymentDetails}
              />
              <Route
                path={`/applications/ecommerce/orderhistory`}
                component={OrderHistory}
              />

              <Route
                path={`/applications/support-ticket`}
                component={SupportTicket}
              />

              <Route path={`/pages/sample-page`} component={SamplePage} />

              <Route path={`/icon/flag-icon`} component={FlagIcon} />
              <Route path={`/icon/font-awesome`} component={FontAwesome} />
              <Route path={`/icon/ico-icon`} component={IcoIcon} />
              <Route path={`/icon/themify-icon`} component={ThemifyIcon} />
              <Route path={`/icon/whether-icon`} component={Whethericon} />

              <Route
                path={`/button/default-button`}
                component={DefaultButton}
              />
              <Route path={`/button/flat-button`} component={FlatButton} />
              <Route path={`/button/edge-button`} component={EdgeButton} />
              <Route path={`/button/raised-button`} component={RaisedButton} />
              <Route path={`/button/group-button`} component={GroupButton} />

              <Route
                path={`/forms/form-validation`}
                component={FormValidation}
              />
              <Route path={`/forms/baseInput`} component={BaseInput} />
              <Route path={`/forms/inputGroup`} component={InputGroup} />
              <Route path={`/forms/megaOptions`} component={MegaOption} />
              <Route
                path={`/forms/radio-checkbox`}
                component={CheckboxandRadio}
              />
              <Route path={`/forms/formDefault`} component={FormDefault} />
              <Route path={`/forms/formWizard`} component={FormWizard1} />

              <Route path={`/form-widget/datepicker`} component={Datepicker} />
              <Route path={`/form-widget/timepicker`} component={Timepicker} />
              <Route path={`/form-widget/typeahead`} component={Typeahead} />

              <Route path={`/table/basic`} component={BasicTabels} />
              <Route path={`/table/border`} component={BorderTable} />
              <Route path={`/table/sizing`} component={SizingTable} />
              <Route path={`/table/styling`} component={StylingTable} />
              <Route path={`/table/datatable`} component={DataTable} />

              <Route path={`/cards/basicCards`} component={BasicCards} />
              <Route path={`/cards/creativeCards`} component={CreativeCards} />
              <Route path={`/cards/tabCard`} component={TabCard} />
              <Route path={`/cards/draggingCards`} component={DraggingCards} />

              <Route path={`/editor/ckEditor`} component={CkEditor} />
              <Route path={`/editor/mdeEditor`} component={MdeEditor} />
              <Route path={`/editor/acecodeEditor`} component={AceCodeEditor} />

              <Route path={`/timelines/timeline1`} component={Timeline1} />
              <Route path={`/timelines/timeline2`} component={Timeline2} />

              <Route path={`/blog/blogDetail`} component={BlogDetail} />
              <Route path={`/blog/blogSingle`} component={BlogSingle} />
              <Route path={`/blog/blogPost`} component={BlogPost} />
              <Route path={`/blog/blogEdit`} component={BlogEdit} />

              <Route path={`/search/searchpage`} component={Search} />

              <Route path={`/charts/apexCharts`} component={Apexcharts} />
              <Route path={`/charts/googleChart`} component={GoogleCharts} />
              <Route path={`/charts/knobChart`} component={KnobChart} />
              <Route path={`/charts/chartJs`} component={Chartsjs} />
              <Route path={`/charts/chartistComponent`} component={Chartist} />
            </App>
          ) : (
            <Redirect to={`/login`} />
          )}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

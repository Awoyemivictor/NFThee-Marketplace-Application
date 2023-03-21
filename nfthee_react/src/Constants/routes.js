import * as RoutePath from "./routePath";
import Home from "../Containers/Home";
import Explore from "../Containers/Explore/Explore";
import ExploreNft from "../Containers/Explore/ExploreNft";
import Activity from "../Containers/Activity";
import HowItWorks from "../Containers/HowItWorks";
import CreateNewItem from "../Containers/CreateNewItem";
import Profile from "../Containers/Profile/Profile";
import OtherUser from "../Containers/OtherUser/OtherUser";
import TermsCondition from "../Containers/TermsCondition";
import Privacy from "../Containers/Privacy";
import Partners from "../Containers/Partners";
import HelpCenter from "../Containers/HelpCenter";
import TopSeller from "../Containers/TopSeller";
import TopCollectionCard from "../Containers/TopCollectionCard";
import ExploreDetail from "../Containers/Explore/ExploreDetail";
import ExploreFilter from "../Containers/Explore/ExploreFilter";
import WalletLogin from "../Containers/WalletLogin";
import ProfileSetting from "../Containers/ProfileSetting";
import Blog from "../Containers/Blog";
import BlogDetail from "../Containers/BlogDetail";
import Login from "../Containers/Auth/Login";
import Register from "../Containers/Auth/Register";
import Registration_Veriyfy from "../Containers/Auth/Registration_Veriyfy";
import Login_Verify from "../Containers/Auth/Login_Verify";
import MagicLink from "../Containers/Auth/MagicLink";
import Collectibles from "../Containers/Collectibles";
import LiveAuction from "../Containers/LiveAuction";
import About from "../Containers/About";
import MyCollections from "../Components/Mycollection/MyCollections";
import Suggestions from "../Components/Suggestions";
import BecomePartner from "../Containers/Partners/BecomePartner";
import DropDetail from "../Containers/Home/DropDetail";
import ApplyVerification from "../Components/ApplyVerification";
import RequestForm from "../Containers/HelpCenter/RequestForm"
import Rewards from "../Containers/HowItWorks/Rewards";
import Favorites from "../Components/Favorites"
import GetListed from "../Components/Mycollection/GetListed";
import StepTwo from "../Components/Mycollection/StepTwo";

// EXPLORE...
import ExploreSolana from "../Containers/Explore/BlockchainsViews/ExploreSolana";
import ExploreEthereum from "../Containers/Explore/BlockchainsViews/ExploreEthereum";
import ExploreBinance from "../Containers/Explore/BlockchainsViews/ExploreBinance";
import ExplorePolygon from "../Containers/Explore/BlockchainsViews/ExplorePolygon";
import ExploreHarmony from "../Containers/Explore/BlockchainsViews/ExploreHarmony";
//Wait for Verification
import Wait from "../Containers/Wait/Wait";



export const routes = [
  {
    path: RoutePath.HOME,
    component: Home,
  },
  {
    path:RoutePath.WAIT,
    component:Wait
  },
  {
    path: RoutePath.EXPLORE,
    component: Explore,
  },
  {
    path: RoutePath.EXPLORENFT,
    component: ExploreNft,
  },
  {
    path: RoutePath.ACTIVITY,
    component: Activity,
  },
  {
    path: RoutePath.HOWITWORKS,
    component: HowItWorks,
  },
  {
    path: RoutePath.CREATENEWITEM,
    component: CreateNewItem,
    protected: true
  },
  {
    path: RoutePath.PROFILE,
    component: Profile,
  },
  {
    path: RoutePath.OtherUser,
    component: OtherUser,
  },
  {
    path: RoutePath.TERMSCONDITION,
    component: TermsCondition,
  },
  {
    path: RoutePath.PRIVACY,
    component: Privacy,
  },
  {
    path: RoutePath.PARTNERS,
    component: Partners,
  },
  {
    path: RoutePath.HELPCENTER,
    component: HelpCenter,
  },
  {
    path: RoutePath.TOPSELLER,
    component: TopSeller,
  },
  {
    path: RoutePath.TOPCOLLECTIONCARD,
    component: TopCollectionCard,
  },
  {
    path: RoutePath.EXPLOREDETAIL,
    component: ExploreDetail,
  },
  {
    path: RoutePath.EXPLOREFILTER,
    component: ExploreFilter,
  },
  {
    path: RoutePath.WALLETLOGIN,
    component: WalletLogin,
  },
  {
    path: RoutePath.PROFILESETTING,
    component: ProfileSetting,
  },
  {
    path: RoutePath.BLOG,
    component: Blog,
  },
  {
    path: RoutePath.BLOGDETAIL,
    component: BlogDetail,
  },

  {
    path: RoutePath.LOGIN,
    component: Login,
  },
  {
    path: RoutePath.REGISTER,
    component: Register,
  },
  {
    path: RoutePath.REGISTRATION_VERIFY,
    component: Registration_Veriyfy,
  },
  {
    path: RoutePath.LOGIN_VERIFY,
    component: Login_Verify,
  },
  {
    path: RoutePath.MAGICLINK,
    component: MagicLink,
  },
  {
    path: RoutePath.COLLECTIABLES,
    component: Collectibles,
  },
  {
    path: RoutePath.LIVEAUCTION,
    component: LiveAuction,
  },
  {
    path: RoutePath.ABOUT,
    component: About,
  },
  {
    path: RoutePath.MYCOLLECTIONS,
    component: MyCollections,
  },
  {
    path: RoutePath.SUGGESTIONS,
    component: Suggestions,
  },
  {
    path: RoutePath.BECOMEPARTNER,
    component: BecomePartner,
  },
  {
    path: RoutePath.DROPDETAIL,
    component: DropDetail,
  },
  {
    path: RoutePath.APPLYVERIFICATION,
    component: ApplyVerification,
  },
  {
    path: RoutePath.REQUESTFORM,
    component: RequestForm,
  },
  {
    path: RoutePath.REWARDS,
    component: Rewards,
  },
  {
    path: RoutePath.FAVORITES,
    component: Favorites,
  },
  {
    path: RoutePath.GETLISTED,
    component: GetListed,
  },
  {
    path: RoutePath.STEPTWO,
    component: StepTwo,
  },
  {
    path: RoutePath.EXPLORE_SOL,
    component: ExploreSolana
  },
  {
    path: RoutePath.EXPLORE_ETH,
    component: ExploreEthereum
  },
  {
    path: RoutePath.EXPLORE_ETH,
    component: ExploreEthereum
  },
  {
    path: RoutePath.EXPLORE_POLYGON,
    component: ExplorePolygon
  },
  {
    path: RoutePath.EXPLORE_HARMONY,
    component: ExploreHarmony
  },
  {
    path: RoutePath.EXPLORE_BINANCE,
    component: ExploreBinance
  },
];

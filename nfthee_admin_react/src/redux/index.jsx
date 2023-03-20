import { combineReducers } from 'redux';
import ChatApp from './chatapp/reducer';
import BlogApp from './blog/reducer';
import TodoApp from './todoapp/reducer';
import EmailApp from './emailapp/reducer'
import Ecommerce from './ecommerce/Product/reducer'
import Filters from './ecommerce/Filter/reducer'
import Wishlist from './ecommerce/Wishlist/reducer'
import Cart from './ecommerce/cart/reducer'
import Customizer from './customizer/reducer'

const reducers = combineReducers({
    data:Ecommerce,
    filters:Filters,
    Wishlistdata:Wishlist,
    Cartdata:Cart,
    TodoApp,
    ChatApp,
    EmailApp,
    Customizer,
    BlogApp
});

export default reducers;
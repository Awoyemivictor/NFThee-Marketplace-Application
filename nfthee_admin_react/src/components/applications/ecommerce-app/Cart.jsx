import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component'
import {Container,Row,Col,Card,CardHeader,CardBody,Table,Button} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux' 
import {getCartTotal} from '../../../services/ecommerce.service'
import {Link} from 'react-router-dom'
import { XCircle } from 'react-feather';
import {ADD_TO_CART} from '../../../redux/actionTypes'
import {decrementQty,removeFromCart} from '../../../redux/ecommerce/Product/action'

const  Cart = () =>  {
    const cart = useSelector(content => content.Cartdata.cart);
    const symbol = useSelector(content => content.data.symbol);
    const dispatch = useDispatch();

    const incrementQty = (product , quantity) => {
        dispatch({type:ADD_TO_CART,payload:{product, quantity}})
    }

    const decrementQuantity = (id) => {
        dispatch(decrementQty(id))
    }

    const removefromcart = (item) => {
        dispatch(removeFromCart(item))
    }
  
    return (
      <Fragment>
        <Breadcrumb title="Cart" parent="Ecommerce"/>
        {
        cart ?
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Cart</h5>
              </CardHeader>
              <CardBody className="cart">
                <div className="order-history table-responsive wishlist">
                  <Table borderless>
                    <thead>
                      <tr>
                        <th>Prdouct</th>
                        <th>Prdouct Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className="title-orders">
                            <td colSpan="12">New Orders</td>
                        </tr>
                        {cart.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img className="img-fluid img-60" src={item.img}  alt=""/>
                                    </td>
                                    <td>
                                        <div className="product-name">
                                            <a href="#javaScript">{item.category}</a>
                                        </div>
                                    </td>
                                    <td>{symbol}{item.price}</td>
                                    <td>
                                        <fieldset className="qty-box">
                                            <div className="input-group">
                                                <span className="input-group-prepend">
                                                    <Button  className="quantity-left-minus"  onClick={() => decrementQuantity(item.id)}>
                                                        <i className="fa fa-angle-left"></i>
                                                    </Button>
                                                </span>
                                                <input type="text" name="quantity" value={item.qty} readOnly={true} style={{textAlign:"center"}} className="form-control input-number" />
                                                <span className="input-group-append">
                                                    <Button  className="quantity-right-plus"  onClick={() => incrementQty(item, 1)}>
                                                        <i className="fa fa-angle-right"></i>
                                                    </Button>
                                                </span>
                                            </div>
                                        </fieldset>
                                    </td>
                                    <td>
                                        <a href="#javaScript" onClick={() => removefromcart(item)}><XCircle /></a>
                                    </td>
                                    <td>{symbol} {item.price * item.qty}</td>
                                </tr>

                            )
                        })}
                        <tr>
                            <td colSpan="5" className="total-amount"><h6 className="mb-0 f-w-600">Total Price :</h6></td>
                            <td><span>{symbol}{getCartTotal(cart)}</span></td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                            <Link
                              to={`${process.env.PUBLIC_URL}/applications/ecommerce/product`}
                            ><Button color="primary">continue shopping</Button>
                            </Link>
                                  </td>
                            <td>
                            <Link
                              to={`${process.env.PUBLIC_URL}/applications/ecommerce/checkout`}
                            >
                              <Button color="primary">check out</Button>
                            </Link>
                             </td>
                        </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      :
      <section className="cart-section section-b-space">
          <Container fluid={true}>
              <Row>
                  <Col sm="12">
                      <div>
                          <Col sm="12" className="empty-cart-cls text-center">
                              <img src="" className="img-fluid mb-4" alt="" />
                              <h3>
                                  <strong>Your Cart is Empty</strong>
                              </h3>
                              <h4>Explore more shortlist some items.</h4>
                          </Col>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  }
      </Fragment>
    );
}

export default Cart
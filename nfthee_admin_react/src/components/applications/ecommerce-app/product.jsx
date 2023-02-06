import React,{useState,useEffect,Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb.component'
import { useSelector, useDispatch } from 'react-redux';
import {Container,Row,Col,Card,CardHeader,CardBody,Button,ListGroup,Form,FormGroup,Input,Media,Modal, ModalHeader,ModalBody,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import {GET_LIST,SEARCH_BY,SORT_BY,ADD_TO_CART,ADD_TO_WISHLIST} from '../../../redux/actionTypes'
import {Grid,List} from 'react-feather'
import {Link,useHistory} from 'react-router-dom'
import errorImg from '../../../assets/images/search-not-found.png';
import Allfilters from './filters/allfilters'
import Carousal from './filters/Carousal'
import {getVisibleproducts} from '../../../services/ecommerce.service'

const  Product = (props) =>  {
  
    const history = useHistory();
    const dispatch = useDispatch()
    const data = useSelector(content => content.data.productItems);
    // eslint-disable-next-line 
    const [layoutColumns, setLayoutColumns] = useState(3);
    
    const symbol = useSelector(content => content.data.symbol);
    const [open, setOpen] = useState(false);
    const [sidebaron, setSidebaron] = useState(true);
    const [singleProduct, setSingleProduct] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    // eslint-disable-next-line
    const [stock, setStock] = useState('');
    const [filterSidebar, setFilterSidebar] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const filters = useSelector(content => content.filters);
    const products = getVisibleproducts(data, filters)

    
    useEffect(() => {
      dispatch({ type: GET_LIST })
    });
    
    const filterSortFunc = (event) => {
      dispatch({ type: SORT_BY, sort_by: event })
    }

    const gridLayout = () => {
      document.querySelector(".product-wrapper-grid").classList.remove("list-view");
      var elems = document.querySelector(".gridRow").childNodes;
      [].forEach.call(elems, function (el) {
        el.className = '';
        el.classList.add('col-xl-3');
        el.classList.add('col-sm-6');
        el.classList.add('xl-4')
      });
    }

    const listLayout = () => {
      document.querySelector(".product-wrapper-grid").classList.add("list-view");
      var elems = document.querySelector(".gridRow").childNodes;
      [].forEach.call(elems, function (el) {
        el.className = '';
        el.classList.add('col-xl-12');
      });
    }

    const LayoutView = (layoutColumns) => {
      if (!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
        var elems = document.querySelector(".gridRow").childNodes;
        [].forEach.call(elems, function (el) {
          el.className = '';
          el.classList.add('col-xl-' + layoutColumns);
        });
      }
    }

    const onClickFilter = () => {
      if (sidebaron) {
        setSidebaron(false)
        document.querySelector(".product-wrapper").classList.add('sidebaron');
      } else {
        setSidebaron(true)
        document.querySelector(".product-wrapper").classList.remove('sidebaron');
      }
    }


    const onOpenModal = (productId) => {
        setOpen(true);
        products.forEach((product, i) => {
          if (product.id === productId) {
            setSingleProduct(product)
          }
        })
      };

    const onCloseModal = () => {
      setOpen(false)
    };


  const minusQty = () => {
    if (quantity > 1) {
      setStock('InStock')
      setQuantity(quantity - 1)
    }
  }

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const plusQty = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1)
    } else {
      setStock('Out of Stock !')
    }
  }

    const addcart = (product, qty) => {
      dispatch({ type: ADD_TO_CART, payload: { product, qty } })
      history.push(`${process.env.PUBLIC_URL}/applications/ecommerce/cart`);
    }

    const addWishList = (product) => {
      dispatch({ type: ADD_TO_WISHLIST, payload: {product} });
      history.push(`${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`);
    }
  

    const handleSearchKeyword = (keyword) => {
      setSearchKeyword(keyword)
      dispatch({ type: SEARCH_BY, search: keyword })
    }

    const onClickDetailPage = (product) => {
      const id = product.id;
      history.push(`${process.env.PUBLIC_URL}/applications/ecommerce/product-detail/${id}`)
    }

    return (
         <Fragment>
        <Breadcrumb title="Product" parent="Ecommerce"/>
        <Container fluid={true} className="product-wrapper">
          <div className="product-grid">
           <div className="feature-products">
                <Row>
                  <Col md="6" className="products-total">
                    <div className="square-product-setting d-inline-block">
                      <a className="icon-grid grid-layout-view" onClick={gridLayout} href="#javaScript"  >
                        <Grid/>
                      </a>
                    </div>
                    <div className="square-product-setting d-inline-block">
                      <a className="icon-grid m-0 list-layout-view" onClick={listLayout} href="#javaScript" >
                        <List/>
                        </a>
                    </div>
                    <span className="d-none-productlist filter-toggle" onClick={() => setFilterSidebar(!filterSidebar)} >
                      <h6 className="mb-0">Filters
                      <span className="ml-2">
                        <i className="toggle-data fa fa-chevron-down"></i>
                      </span>
                      </h6>
                    </span>
                    <div className="grid-options d-inline-block">
                      <ListGroup as="ul">
                        <li>
                          <a className="product-2-layout-view" onClick={() => LayoutView(6)} href="#javaScript" >
                          <span className="line-grid line-grid-1 bg-primary"></span>
                          <span className="line-grid line-grid-2 bg-primary"></span>
                          </a>
                        </li>
                        <li><a className="product-3-layout-view" onClick={() => LayoutView(4)} href="#javaScript" >
                          <span className="line-grid line-grid-3 bg-primary"></span>
                          <span className="line-grid line-grid-4 bg-primary"></span>
                          <span className="line-grid line-grid-5 bg-primary"></span>
                          </a>
                        </li>
                        <li>
                          <a className="product-4-layout-view" onClick={() => LayoutView(3)} href="#javaScript" >
                          <span className="line-grid line-grid-6 bg-primary"></span>
                          <span className="line-grid line-grid-7 bg-primary"></span>
                          <span className="line-grid line-grid-8 bg-primary"></span>
                          <span className="line-grid line-grid-9 bg-primary"></span>
                          </a>
                        </li>
                      </ListGroup>
                    </div>
                  </Col>
                  <Col md="6" className="text-right">
                    <span className="f-w-600 m-r-5">Showing Products 1 - 24 Of 200 Results</span>
                    <div className="select2-drpdwn-product select-options d-inline-block" onChange={(e) => filterSortFunc(e.target.value)}>
                      <select className="form-control btn-square" name="select">
                        <option value="Featured">Featured</option>
                        <option value="LowestPrices">Lowest Prices</option>
                        <option value="HighestPrices">Highest Prices</option>
                      </select>
                    </div>
                  </Col>
                </Row>  
                <Row>
                  <Col sm="3">
                    <div className={`product-sidebar ${filterSidebar ? '' : 'open'}`}>
                      <div className="filter-section">
                        <Card>
                          <CardHeader>
                            <h6 className="mb-0 f-w-600">Filters
                            <span className="pull-right">
                              <i className="fa fa-chevron-down toggle-data" onClick={onClickFilter}></i>
                            </span>
                            </h6>
                          </CardHeader>
                          <div className="left-filter">
                            <CardBody className="filter-cards-view animate-chk">
                              <Allfilters/>
                              <Carousal/>
                              <div className="product-filter text-center mt-2">
                              </div>
                            </CardBody>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </Col>
                  <Col md="9" sm="12">
                    <Form>
                      <FormGroup className="m-0">
                        <Input 
                          className="form-control"
                          type="text"
                          placeholder="search"
                          defaultValue={searchKeyword}
                          onChange={(e) => handleSearchKeyword(e.target.value)}
                          />
                          <i className="fa fa-search"></i>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row> 
              </div>
              
                <div className="product-wrapper-grid">
                {searchKeyword.length > 0 ?
                  <div className="search-not-found text-center">
                    <div>
                      <img className="img-fluid second-search" src={errorImg} alt="" />
                      <p>Sorry, We didn't find any results matching this search</p>
                    </div>
                  </div>
                :
                <Row className="gridRow">
                {products ? products.map((item, i) =>
                  <div className={`${layoutColumns === 3 ? 'col-xl-3 col-sm-6 xl-4 col-grid-box' : 'col-xl-' + layoutColumns}`} key={i}>
                    <Card>
                      <div className="product-box">
                        <div className="product-img">
                        {(item.status === 'sale') ?
                            <span className="ribbon ribbon-danger">
                              {item.status}
                            </span> : ''}
                          {(item.status === '50%') ?
                            <span className="ribbon ribbon-success ribbon-right">
                              {item.status}
                            </span> : ''}
                          {(item.status === 'gift') ?
                            <span className="ribbon ribbon-secondary ribbon-vertical-left">
                              <i className="icon-gift">{item.status}</i>
                            </span> : ''}
                          {(item.status === 'love') ?
                            <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                              <i className="icon-heart">{item.status}</i>
                            </span> : ''}
                          {(item.status === 'Hot') ?
                            <span className="ribbon ribbon ribbon-clip ribbon-warning">
                              {item.status}
                            </span> : ''}
                          <img className="img-fluid" src={item.img} alt="" />
                          <div className="product-hover">
                              <ul>
                              <li>
                                <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`}>
                                <Button color="default" onClick={() => addcart(item, quantity)}>
                                  <i className="icon-shopping-cart"></i>
                                </Button>
                                </Link>
                              </li>
                              <li>
                                <Button color="default" data-toggle="modal"
                                  onClick={() => onOpenModal(item.id)}>
                                  <i className="icon-eye"></i>
                                </Button>
                              </li>
                              <li>
                              <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`}>
                                <Button color="default"  onClick={() => addWishList(item)} >
                                  <i className="icon-heart"></i>
                                </Button>
                              </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-details">
                          <h5>
                            <a onClick={() => onClickDetailPage(item)} className="font-primary" href="#javaScript">
                              {item.name}
                            </a>
                          </h5>
                          <p>{item.note}</p>
                          <div className="product-price">
                            <del>
                              {symbol} {item.discountPrice} </del>
                            {symbol} {item.price}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  ) : ''}

                  <Modal className="modal-lg modal-dialog-centered product-modal" isOpen={open}>
                    <ModalBody>
                        <ModalHeader toggle={onCloseModal}>
                          <div className="product-box row">
                              <Col lg="6" className="product-img">
                                <Media className="img-fluid" src={singleProduct.img} alt=""/>
                              </Col>
                              <Col lg="6" className="product-details  text-left">
                                <h4>{singleProduct.category}</h4>
                                <div className="product-price">
                                <del>{symbol}{singleProduct.discountPrice}</del>
                                {symbol}{singleProduct.price}
                                </div>
                                <div className="product-view">
                                  <h6 className="f-w-600">Product Details</h6>
                                  <p className="mb-0">{singleProduct.discription}</p>
                                </div>
                                <div className="product-size">
                                  <ul>
                                      <li>
                                        <Button color="outline-light">M</Button>
                                      </li>
                                      <li>
                                        <Button color="outline-light">L</Button>
                                      </li>
                                      <li>
                                        <Button color="outline-light">Xl</Button>
                                      </li>
                                  </ul>
                                </div>
                                <div className="product-qnty">
                                  <h6 className="f-w-600">Quantity</h6>
                                  <fieldset>
                                    <InputGroup className="bootstrap-touchspin">
                                      <InputGroupAddon addonType="prepend">
                                        <Button color="primary btn-square" className="bootstrap-touchspin-down" onClick={minusQty}><i className="fa fa-minus"></i></Button>
                                      </InputGroupAddon>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText className="bootstrap-touchspin-prefix" style={{display:"none"}}></InputGroupText>
                                      </InputGroupAddon>
                                      <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)}  style={{display:"block"}}/>
                                      <InputGroupAddon addonType="append">
                                        <InputGroupText className="bootstrap-touchspin-postfix" style={{display:"none"}}></InputGroupText>
                                      </InputGroupAddon>
                                      <InputGroupAddon addonType="append" className="ml-0">
                                        <Button color="primary btn-square" className="bootstrap-touchspin-up"  onClick={plusQty}><i className="fa fa-plus"></i></Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </fieldset>
                                  <div className="addcart-btn">
                                  <Button color="primary" className="mr-2 mt-2" onClick={() => addcart(singleProduct, quantity)}>Add to Cart</Button>
                                  <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product-detail/1`}><Button color="primary" className="mr-2 mt-2">View Details</Button></Link>
                                  </div>
                                </div>
                              </Col>
                          </div>
                        </ModalHeader>
                      </ModalBody>                          
                  </Modal>
              </Row>
                }
              </div>
              </div>   
         </Container>
         </Fragment>
    );
}

export default Product;
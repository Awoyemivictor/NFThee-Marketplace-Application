import React, {Fragment,useState} from 'react';
import CountUp from 'react-countup';
import Breadcrumb from '../common/breadcrumb.component'
import { Container,Row,Col,Card} from 'reactstrap'

const UserProfile = () => {

        const [url, setUrl] = useState();

        const background = require('../../assets/images/bg-profile.png');

        const readUrl = (event) => {
            if (event.target.files.length === 0)
                return;
            var mimeType = event.target.files[0].type;
    
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                setUrl(reader.result)
            }
        }

        return(
            <Fragment>
                <Breadcrumb title="User Profile" parent="Users" />
                <Container fluid={true}>
                    <div className="user-profile">
                        <Row>
                            <Col sm="12">
                                <Card className="hovercard text-center">
                                    <div className="cardheader" style ={ { backgroundImage: "url("+background+")" } }></div>
                                    <div className="user-image">
                                        <div className="avatar">
                                            <img alt="" src={url ? url : require('../../assets/images/user/11.png')} />
                                        </div>
                                        <div className="icon-wrapper">
                                            <i className="icofont icofont-pencil-alt-5">
                                                <input className="upload" type="file" onChange={(e) => readUrl(e)} />
                                            </i>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <Row>
                                            <Col sm="6" xl="4" className="order-sm-1 order-xl-0">
                                                <Row>
                                                    <Col md="6">
                                                        <div className="ttl-info text-left">
                                                            <h6><i
                                                                className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email
                                                            </h6>
                                                            <span>Marekjecno@yahoo.com</span>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="ttl-info text-left">
                                                            <h6><i className="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;BOD
                                                            </h6>
                                                            <span>02 January 1988</span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm="12" xl="4" className="order-sm-0 order-xl-1">
                                                <div className="user-designation">
                                                    <div className="title">
                                                        <a  href="#javaScript">Mark jecno</a>
                                                    </div>
                                                    <div className="desc mt-2">designer</div>
                                                </div>
                                            </Col>
                                            <Col sm="6"  xl="4" className="order-sm-2 order-xl-2">
                                                <Row>
                                                    <Col md="6">
                                                        <div className="ttl-info text-left">
                                                            <h6><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Contact
                                                                Us</h6>
                                                            <span>India +91 123-456-7890</span>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="ttl-info text-left">
                                                            <h6><i
                                                                className="fa fa-location-arrow"></i>&nbsp;&nbsp;&nbsp;Location
                                                            </h6>
                                                            <span>B69 Near Schoool Demo Home</span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <hr />
                                            <div className="social-media">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#javaScript"><i
                                                        className="fa fa-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a href="#javaScript"><i
                                                        className="fa fa-google-plus"></i></a></li>
                                                    <li className="list-inline-item"><a href="#javaScript"><i
                                                        className="fa fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a href="#javaScript"><i
                                                        className="fa fa-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a href="#javaScript"><i
                                                        className="fa fa-rss"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="follow">
                                                <Row>
                                                    <div className="col-6 text-md-right border-right">
                                                        <div ><CountUp className="follow-num counter" end={25869} duration={5} /></div>
                                                        <span>Follower</span>
                                                    </div>
                                                    <div className="col-6 text-md-left">
                                                        <div ><CountUp className="follow-num counter" end={659887} duration={8} /></div>
                                                        <span>Following</span>
                                                    </div>
                                                </Row>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col sm="12">
                                <Card>
                                    <div className="profile-img-style">
                                        <Row>
                                            <Col sm="8">
                                                <div className="media">
                                                    <img className="img-thumbnail rounded-circle mr-3"
                                                         src={require('../../assets/images/user/11.png')}
                                                         alt="Generic placeholder" />
                                                        <div className="media-body align-self-center">
                                                            <h5 className="mt-0 user-name">JOHAN DIO</h5>
                                                        </div>
                                                </div>
                                            </Col>
                                            <Col sm="4" className="align-self-center">
                                                <div className="float-sm-right">
                                                    <small>10 Hours ago</small>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr />
                                            <p>you are going to use a passage of Lorem Ipsum, you need to be sure there
                                                isn't anything embarrassing hidden in the middle of text. All the Lorem
                                                Ipsum generators on the Internet tend to repeat predefined chunks as
                                                necessary, making this the first true generator on the Internet.</p>
                                            <div className="img-container">
                                                <div id="aniimated-thumbnials">
                                                        <a href="#javaScript">
                                                            <img src={require('../../assets/images/profile-style-img3.png')}
                                                                 alt="gallery"
                                                                 className="img-fluid rounded"/>
                                                        </a>

                                                </div>
                                            </div>
                                            <div className="like-comment mt-4">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item border-right pr-3">
                                                        <label className="m-0"><a href="#javaScript"><i
                                                            className="fa fa-heart"></i></a>&nbsp;&nbsp;Like</label>
                                                        <span><CountUp className="ml-2 counter" end={2659}/></span>

                                                    </li>
                                                    <li className="list-inline-item ml-2">
                                                        <label className="m-0"><a href="#javaScript"><i
                                                            className="fa fa-comment"></i></a>&nbsp;&nbsp;Comment</label>
                                                        <span><CountUp className="ml-2 counter" end={569}/></span>
                                                    </li>
                                                </ul>

                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col sm="12">
                                <Card>
                                    <div className="profile-img-style">
                                        <Row>
                                            <Col sm="8">
                                                <div className="media">
                                                    <img className="img-thumbnail rounded-circle mr-3"
                                                         src={require('../../assets/images/user/11.png')}
                                                         alt="Generic placeholder" />
                                                        <div className="media-body align-self-center">
                                                            <h5 className="mt-0 user-name">JOHAN DIO</h5>
                                                        </div>
                                                </div>
                                            </Col>
                                            <Col sm="4" className="align-self-center">
                                                <div className="float-sm-right">
                                                    <small>10 Hours ago</small>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr/>
                                            <p>you are going to use a passage of Lorem Ipsum, you need to be sure there
                                                isn't anything embarrassing hidden in the middle of text. All the Lorem
                                                Ipsum generators on the Internet tend to repeat predefined chunks as
                                                necessary, making this the first true generator on the Internet.</p>
                                            <div className="row mt-4 pictures" id="aniimated-thumbnials-2">
                                                <Col sm="6">
                                                    <a href="#javaScript">
                                                        <img src={require('../../assets/images/profile-style-img.png')}
                                                             alt="gallery"
                                                             className="img-fluid rounded"/>
                                                    </a>
                                                </Col>
                                                <Col sm="6">
                                                    <a href="#javaScript">
                                                        <img src={require('../../assets/images/profile-style-img.png')}
                                                             alt="gallery"
                                                             className="img-fluid rounded mb-0"/>
                                                    </a>
                                                </Col>
                                            </div>

                                            <div className="like-comment mt-4">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item border-right pr-3">
                                                        <label className="m-0"><a href="#javaScript"><i
                                                            className="fa fa-heart"></i></a>&nbsp;&nbsp;Like</label>
                                                        <span><CountUp className="ml-2 counter" end={2659}/></span>
                                                    </li>
                                                    <li className="list-inline-item ml-2">
                                                        <label className="m-0"><a href="#javaScript"><i
                                                            className="fa fa-comment"></i></a>&nbsp;&nbsp;Comment</label>
                                                        <span><CountUp className="ml-2 counter" end={659}/></span>
                                                    </li>
                                                </ul>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col sm="12">
                                <Card>
                                    <div className="profile-img-style">
                                        <Row>
                                            <Col sm="8">
                                                <div className="media">
                                                    <img className="img-thumbnail rounded-circle mr-3"
                                                         src={require('../../assets/images/user/11.png')}
                                                         alt="Generic placeholder" />
                                                        <div className="media-body align-self-center">
                                                            <h5 className="mt-0 user-name">JOHAN DIO</h5>
                                                        </div>
                                                </div>
                                            </Col>
                                            <Col sm="4" className="align-self-center">
                                                <div className="float-sm-right">
                                                    <small>10 Hours ago</small>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr />
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                                roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                                the cites of the word in classical literature, discovered the
                                                undoubtable source .Contrary to popular belief, Lorem Ipsum is not
                                                simply random text. It has roots in a piece of classical Latin
                                                literature from 45 BC, making it over 2000 years old. Richard
                                                McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                                looked up one of the more obscure Latin words, consectetur, from a Lorem
                                                Ipsum passage, and going through the cites of the word in classical
                                                literature, discovered the undoubtable source</p>

                                            <div className="like-comment mt-4">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item border-right pr-3">
                                                        <label className="m-0"><a href="#javaScript"><i
                                                            className="fa fa-heart"></i></a>&nbsp;&nbsp;Like</label>
                                                        <span><CountUp className="ml-2 counter" end={2289}/></span>
                                                    </li>
                                                    <li className="list-inline-item ml-2">
                                                        <label className="m-0"><a href="#javaScript"><i
                                                            className="fa fa-comment"></i></a>&nbsp;&nbsp;Comment</label>
                                                        <span><CountUp className="ml-2 counter" end={469}/></span>
                                                    </li>
                                                </ul>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col sm="12">
                                <Card>
                                    <div className="profile-img-style">
                                        <Row>
                                            <Col sm="8">
                                                <div className="media">
                                                    <img className="img-thumbnail rounded-circle mr-3"
                                                         src={require('../../assets/images/user/11.png')}
                                                         alt="Generic placeholder" />
                                                        <div className="media-body align-self-center">
                                                            <h5 className="mt-0 user-name">JOHAN DIO</h5>
                                                        </div>
                                                </div>
                                            </Col>
                                            <Col sm="4" className="align-self-center">
                                                <div className="float-sm-right">
                                                    <small>10 Hours ago</small>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr />
                                            <Row>
                                                <Col lg="12" xl="4">
                                                            <a href="#javaScript">
                                                                <img src={require('../../assets/images/blog/img.png')} alt="gallery"
                                                                     className="img-fluid rounded"/>
                                                            </a>

                                                    <div className="like-comment mt-4 like-comment-sm-mb">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item border-right pr-3">
                                                                <label className="m-0"><a href="#javaScript"><i
                                                                    className="fa fa-heart"></i></a>&nbsp;&nbsp;Like</label>
                                                                <span><CountUp className="ml-2 counter" end={2659}/></span>
                                                            </li>
                                                            <li className="list-inline-item ml-2">
                                                                <label className="m-0"><a href="#javaScript"><i
                                                                    className="fa fa-comment"></i></a>&nbsp;&nbsp;Comment</label>
                                                                <span><CountUp className="ml-2 counter" end={579}/></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl="6">
                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random
                                                        text. It has roots in a piece of classical Latin literature from
                                                        45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia, looked up
                                                        one of the more obscure Latin words, consecteturContrary to
                                                        popular belief, Lorem Ipsum is not simply random text. It has
                                                        roots in a piece of classical Latin literature from 45 BC,
                                                        making it over 2000 years old. Richard McClintock, a Latin
                                                        professor at Hampden-Sydney College in Virginia, looked up one
                                                        of the more obscure Latin words, consectetur</p>
                                                </Col>
                                            </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
}
export default UserProfile

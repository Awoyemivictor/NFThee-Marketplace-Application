import React, { Fragment } from 'react';
import {Container,Col} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import chatdata from '../../../data/chat.members'

const Rightsidebar = (props) => {

    const history = useHistory();
    var images = require.context('../../../assets/images', true);
     
    const dynamicImage = (image) => {
      return images(`./${image}`);
    }

    const RedirectTochat = () => {
        history.push(`${process.env.PUBLIC_URL}/applications/chat-app`)
      }

    const onCancel = () => {
        document.querySelector(".quickview-wrapper").classList.remove("open")
    }

    return (
        <Fragment>
            <div className="quickview-wrapper" id="quickview-wrapper">
                <Container className="p-0">
                    <div className="modal-header p-l-20 p-r-20">
                        <Col sm="8" className="p-0">
                            <h6 className="modal-title font-weight-bold">FRIEND LIST</h6>
                        </Col>
                        <Col sm="4" className="text-right p-0">
                            <i className="icon-settings mr-2"></i>
                            <i className="icon-close destroy" onClick={onCancel}></i>
                        </Col>
                    </div>
                </Container>
                <div className="friend-list-search mt-0">
                    <input type="text" placeholder="search friend"/>
                    <i className="fa fa-search"></i>
                </div>
                <div className="p-l-30 p-r-30">
                    <div className="chat-box">
                        <div className="people-list friend-list">
                            <ul className="list">
                            {chatdata.map((member,i) => {
                                return(
                                <li className="clearfix quickview-trigger" key={i} onClick={RedirectTochat}>
                                    <img src={dynamicImage(member.thumb)} className="rounded-circle user-image" alt="" />
                                    <div className="about">
                                        <div className="name">{member.name}</div>
                                        <div className="status">{member.status}</div>
                                    </div>
                                </li>
                                  )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}

export default Rightsidebar;
import React, { useEffect, useState } from "react";
import {Col,Row,Card,CardBody} from "reactstrap";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import CountUp from 'react-countup';
import backendInstance from "../../../backendInstance";
// const[usersData,setUsersData]=useState([])


const BoxRowOne = () => {
 const[usersData,setUsersData]=useState([])
 const[usersCollections,setUsersCollections]=useState([])
 const[usersLikes,setUsersLikes]=useState([])


        const primary = localStorage.getItem('primary_color') 
        const secondary = localStorage.getItem('secondary_color') 
        
useEffect(()=>{
    // http://192.168.1.143:8002/api/followingList?id=63737c4fe305d4f9b67d3acd
    backendInstance
    .get(`/api/signup/all`)
        .then(res=> ( setUsersData(res.data.data.length)))

  },[])
  useEffect(()=>{
    // http://192.168.1.143:8002/api/followingList?id=63737c4fe305d4f9b67d3acd
    backendInstance
    .get(`/api/getCollection`)
        .then(res=> ( setUsersCollections(res.data.data.length)))
        // .then(res=> ( console.log(res.data.data.length)))


  },[])
  useEffect(()=>{
    backendInstance
    .get(`/api/getItem`)
        .then(res => {
            const allPosts = res.data.data;
            let totalLikes = 0;
            allPosts.forEach(post => {
              totalLikes += post.likes.length;
            });
            setUsersLikes(totalLikes);
          })

  },[])
        return (
            <Row>
                <Col xl="3" lg="6" sm="6">
                    <Card>
                        <CardBody>
                            <div className="stat-widget-dashboard">
                                <div className="media">
                                    <img className="mr-3" src={require('../../../assets/images/dashboard-icons/document.png')} alt="Generic placeholder" />
                                    <div className="media-body text-right">
                                        <h4 className="mt-0"><CountUp className="font-primary" end={usersCollections} /></h4>
                                        <span>New projects</span>
                                    </div>
                                </div>
                                <div className="dashboard-chart-container-small">
                                    <Sparklines data={[25, 50, 30, 40, 60, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]} >
                                        <SparklinesLine color="#00c292" />
                                    </Sparklines>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" lg="6" sm="6">
                    <Card>
                        <CardBody>
                            <div className="stat-widget-dashboard">
                                <div className="media">
                                    <img className="mr-3" src={require('../../../assets/images/dashboard-icons/operator.png')} alt="Generic placeholder" />
                                    <div className="media-body text-right">
                                        <h4 className="mt-0 "><CountUp className="font-secondary" end={usersData} /></h4>
                                        <span>New Clients</span>
                                    </div>
                                </div>
                                <div className="dashboard-chart-container-small">
                                    <Sparklines data={[5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]} >
                                        <SparklinesLine color="#00c292" />
                                    </Sparklines>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" lg="6" sm="6">
                    <Card>
                        <CardBody>
                            <div className="stat-widget-dashboard">
                                <div className="media">
                                    <img className="mr-3" src={require('../../../assets/images/dashboard-icons/chat.png')} alt="Generic placeholder"/>
                                    <div className="media-body text-right">
                                        <h4 className="mt-0 counter font-success"><CountUp className="font-success" end={46} /></h4>
                                        <span>Message</span>
                                    </div>
                                </div>
                                <div className="dashboard-chart-container-small">
                                    <Sparklines data={[25, 50, 30, 40, 60, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]} >
                                        <SparklinesLine color="#00c292" />
                                    </Sparklines>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" lg="6" sm="6">
                    <Card>
                        <CardBody>
                            <div className="stat-widget-dashboard">
                                <div className="media">
                                    <img className="mr-3" src={require('../../../assets/images/dashboard-icons/like.png')} alt="Generic placeholder"/>
                                    <div className="media-body text-right">
                                        <h4 className="mt-0"><CountUp className="font-info" end={usersLikes} /></h4>
                                        <span>New Likes</span>
                                    </div>
                                </div>
                                <div className="dashboard-chart-container-small">
                                    <Sparklines data={[5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]} >
                                        <SparklinesLine color="#59a6fe" />
                                    </Sparklines>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
}

export default BoxRowOne
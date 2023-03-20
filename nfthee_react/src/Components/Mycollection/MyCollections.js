import React from 'react'
import { Link,useHistory} from 'react-router-dom'
import $ from "jquery"; 

function MyCollections() {
  const collection = [
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
    { title: 'Metroverse', title2:'By Metroverse',text:'Metroverse Is A Land Trading NFT Strategy Game On Ethereum. Collect, Trade, And Stake Your City Blocks To Earn The $MET Utility Token' },
 ]
 const Tab =()=>{ 
 $(window).load(function(){
  $('#tab a[href="#create-collection]').tab('show');
}); 
}
  return (
    <>
 <section className="bg-section">
        <div className="container">
          <div className="section-heading text-center mb-3">
            <h2 className="section-title mb-1">My Collections</h2>
            <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
          </div>
          <div className="collection-header-section text-center mb-lg-5 mb-4">
            <div>
              <h6>Create , Curate And Manage Collections Of Unique NFT's To Share And Sell</h6>
              <div className="d-flex align-items-center justify-content-center mt-3">
              <Link to="/createnewitem#create-collection" >  <button className="btn btn-violet">Create a Collection</button></Link>  
                <div className="user-more-detail ms-3">
                  <div className="more">
                    <div className="icon dropdown">
                      <a href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill" /></a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <Link  className="dropdown-item" to="/getlisted"><span className="dropdown-icon"><img src="assets/images/icons/import.png" /></span>  Import an exsiting smart contract</Link>
                        <a className="dropdown-item" target="_blank" href="https://studio.manifold.xyz/"> <span className="dropdown-icon"><img src="assets/images/icons/manifold-studio.png" /></span> Mint with Manifold Studio </a>
                        <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/nfthee-logo.png" /></span> Mint on NFThee</a>
                        <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/mintbase.png" /></span> Mint on Mintbase</a>
                        <a className="dropdown-item" href="#"> <span className="dropdown-icon"><img src="assets/images/icons/zora.png" /></span> Mint on Zora </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabbable-gallery my-collection-card">
            <div className="row">
              {collection.map((data, index)=>{
                return(<> 
              <div className="col-lg-4 col-md-4 my-1">
                <div className="item-content">
                  <div className="tabbable-card">
                    <div className="card-img-block">
                      <img className="img-fluid" src="assets/images/featured-img2.png" alt="" />
                      <span className="edit-img-box"><img src="assets/images/icons/pencil.png" alt="" className="edit-icon" /></span>
                    </div>
                    <div className="card-body pt-5">
                      <img src="assets/images/avt-4.jpg" alt="" className="profile" />
                      <h5 className="card-title">{data.title}</h5>
                      <h6 className="card-title2">{data.title2}</h6>
                      <p className="card-text">{data.text}</p>
                    </div>
                  </div>
                </div>
              </div> 
              </>)
              })} 
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyCollections;
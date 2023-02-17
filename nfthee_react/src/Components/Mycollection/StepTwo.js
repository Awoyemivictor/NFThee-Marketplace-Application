import React from 'react'

function StepTwo() {
  return (
    <>
     <section className="bg-section contract-address-section">
        <div className="container">
          <div className="section-heading text-center mb-lg-5 mb-4">
            <h2 className="section-title mb-1">Enter Your Contact Address</h2>
            <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
          </div>
          <div className="col-lg-10 col-md-10 mx-auto p-0">
            <div className="contract-wrapper">
              <div className="contract-header mb-4 mb-lg-5">
                <h3 className="title">What is the address of your ERC721 or ERC1155 contract on your mainnet Network?</h3>
              </div>
              <div className="contract-body">
                <div className="contract-item-content mb-4">
                  <h4 className="contract-item-title">Select Blockchain</h4>
                  <div className="row">
                    <div className="col-lg-9 col-md-9">
                      <select className="form-select form-control d-block">
                        <option selected>Ethereum</option>
                        <option value={1}>Polygon</option>
                        <option value={2}>Solana</option>
                        <option value={3}>Binance</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="contract-item-content">
                  <h4 className="contract-item-title">Enter Contract Address</h4>
                  <div className="row">
                    <div className="col-lg-9 col-md-9">
                      <input type="text" className="form-control" placeholder="e.g. 0x1ed3... or destination.eth" />
                    </div>
                  </div>
                </div>
                <div className="row pt-3 pt-lg-5">
                  <div className="col-lg-9 col-md-9">
                    <a className="btn btn-violet w-100" href="#">Submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
    </>
  )
}

export default StepTwo
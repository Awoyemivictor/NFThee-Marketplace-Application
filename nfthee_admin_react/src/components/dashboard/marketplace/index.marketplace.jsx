import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import { Container } from 'reactstrap';
import {
  handleSetRoyaltyUpperLimit,
  handleChangeServiceFees,
} from '../../../config/settterFunctions';
import axios from 'axios';
import instance from '../../../axios';

export default function MarketPlace() {
  const [accord, setAccord] = useState(false);
  const [accord1, setAccord1] = useState(false);
  const [accord2, setAccord2] = useState(false);
  const [royalty, setRoyalty] = useState();
  const [royaltyLimit, setRoyaltyLimit] = useState();
  const [toggle, setToggle] = useState();
  const[changes,setChanges]=useState()

  const handletoggle=()=>{
setTimeout(() => {
  instance
  .post('http://192.168.29.147:8004/api/addToggle',{toggle:toggle?false:true})
}, 3000);

  }
  const handleSetRoyalty = async (e) => {
    e.preventDefault();
    console.log(royalty);
    await handleChangeServiceFees(royalty);
  };
  const handleRoyaltyLimit = async (e) => {
    e.preventDefault();
    console.log(royaltyLimit);
    await handleSetRoyaltyUpperLimit(royaltyLimit);
  };
  
 useState(()=>{
  instance.get('http://192.168.29.147:8004/api/getToggle')
  .then(res=>setToggle(res.data.data[0].toggleValue))
 })
  console.log("first",toggle)
   
    return (
    <Fragment>
      <Breadcrumb title='Marketplace ' parent='Dashboard' />
      <Container fluid={true}>
        <div id='accordion'>
          <div class='card'>
            <div class='card-header' id='headingOne'>
              <h5 class='mb-0'>
                <button
                  class='btn '
                  data-toggle='collapse'
                  onClick={() => setAccord((prevState) => !prevState)}
                  data-target='#collapseOne'
                  aria-expanded={accord ? 'true' : 'false'}
                  aria-controls='collapseOne'
                >
                  Set Marketplace Fees
                </button>
              </h5>
            </div>

            <div
              id='collapseOne'
              class={accord ? 'collapse show' : 'collapse'}
              aria-labelledby='headingOne'
              data-parent='#accordion'
            >
              <div class='card-body'>
                <form onSubmit={handleSetRoyalty}>
                  <div class='form-group'>
                    <label for='setRoyality'>Set Marketplace Fees</label>
                    <input
                      type='text'
                      onChange={(e) => setRoyalty(e.target.value)}
                      id='setRoyality'
                      class='form-control'
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card-header' id='headingThree'>
              <h5 class='mb-0'>
                <button
                  class='btn'
                  data-toggle='collapse'
                  onClick={() => setAccord1((prevState) => !prevState)}
                  data-target='#collapseTwo'
                  aria-expanded={accord1 ? 'true' : 'false'}
                >
                  Update Royalty Upper Limit
                </button>
              </h5>
            </div>
            <div
              id='collapseTwo'
              className={accord1 ? 'collapse show' : 'collapse'}
              aria-labelledby='headingThree'
              data-parent='#accordion'
            >
              <div class='card-body'>
                <form onSubmit={handleRoyaltyLimit}>
                  <div class='form-group'>
                    <label for='upperRoyalityLimt'>
                      Update Royalty Upper Limit
                    </label>
                    <input
                      type='text'
                      onChange={(e) => setRoyaltyLimit(e.target.value)}
                      id='upperRoyalityLimt'
                      class='form-control'
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class='card'>
            <div class='card-header' id='headingThree'>
              <h5 class='mb-0'>
                <button
                  class='btn'
                  data-toggle='collapse'
                  onClick={() => setAccord2((prevState) => !prevState)}
                  data-target='#collapseTwo'
                  aria-expanded={accord2 ? 'true' : 'false'}
                >
                  Change Marketplace Status
                </button>
              </h5>
            </div>
            <div
              id='collapseTwo'
              className={accord2 ? 'collapse show' : 'collapse'}
              aria-labelledby='headingThree'
              data-parent='#accordion'
            >
              <div class='card-body'>
                <form onSubmit={handleRoyaltyLimit}>
                  <div class='form-group'>
                    <label for='upperRoyalityLimt'>
                      Update Royalty Upper Limit
                    </label>
                    <input
                      type='text'
                      onChange={(e) => setRoyaltyLimit(e.target.value)}
                      id='upperRoyalityLimt'
                      class='form-control'
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class='card'>
            <div class='card-header' id='headingThree'>
              <h5 class='mb-0'>
               
                Search Bar Disable
                <div className='mobile-sidebar'>
<div className='media-body text-right switch-sm'>
  <label className='switch'>
    <input
      type='checkbox'
      id='sidebar-toggle'
      defaultChecked={toggle}
      onClick={(e)=>{setToggle(toggle?false:true)
     handletoggle()}}
    />
    <span className='switch-state'></span>
  </label>
</div>
</div>
              </h5>
              
            </div>
          
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

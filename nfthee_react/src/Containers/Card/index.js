import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ item ,index}) {
  return (
    
    <div className="col-lg-3 col-md-4">
      <div className="collection-card grad-border">
        <div className="card-body" key={index}>
        <Link to={`/explorefilter/${item._id}`}>

          <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pb-2">
            <div className={`collection-id red`}>#{index+1}</div>
            <div className="collection-time-detail">
              <ul>
                <li>
                  {' '}
                  <a>
                    <h5>24hr</h5>
                    <h6>+24%</h6>
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a>
                    <h5>7d</h5>
                    <h6>12%</h6>
                  </a>{' '}
                </li>
                <li className="d-flex align-items-end">
                  {' '}
                  <a>
                    <h6>+41.51%</h6>
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex border-bottom mb-2 pb-2">
            {' '}
            <a href="#">
              {' '}
              <img
                className="user_img"
                src={item.logo_image||"/assets/images/avatar2.png"}
                alt=""
              />{' '}
            </a>
            <div className="ms-2">
              <h5 className="user_name">{item.name}</h5>
              <div className="d-flex">
                <p className="eth_price">
                  <img
                    className="me-1"
                    src="/assets/images/icons/ethereum.png"
                    alt=""
                  />
                  25,368.18
                </p>
                <p className="eth_volume ms-2">
                  <img
                    className="me-1"
                    src="/assets/images/icons/tag-black.png"
                    alt=""
                  />
                  25,368.18
                </p>
              </div>
            </div>
          </div>
          <div className="collection-card-detail">
            <ul>
              <li>
                {' '}
                <a>
                  <h5>Floor Price</h5>
                  <h6>3.13</h6>
                </a>{' '}
              </li>
              <li>
                {' '}
                <a>
                  <h5>Owners</h5>
                  <h6>3.6K</h6>
                </a>{' '}
              </li>
              <li>
                {' '}
                <a>
                  <h5>Items</h5>
                  <h6>5.6K</h6>
                </a>{' '}
              </li>
            </ul>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

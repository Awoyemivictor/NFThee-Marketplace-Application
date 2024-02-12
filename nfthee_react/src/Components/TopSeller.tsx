import { profile } from "console";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

interface TopSellerProps {
  _id: string;
  user_name: string;
  price: string;
  profile_image: string;
  index: number;
  number?: string;
  className?: string;
}

export const TopSeller = ({
  _id,
  user_name,
  profile_image,
  price,
  index,
  number,
  className,
}: TopSellerProps) => {
  // const ldata = JSON.parse(localStorage.getItem("userLoggedIn"));

  return (
    <div className={`col-md-2 col-sm-6 `} key={index}>
      <div className="seller-author-box">
        <div className="author-avatar">
          <Link to={ `/users/${_id}`}>
            <img
              src={profile_image || "/images/avt-2.jpg"}
              alt=""
              className=""
            />
          </Link>
          <div className="badge">
            <img src="/images/icons/star-check.png" alt="" />
          </div>
        </div>
        <div className="author-information">
          {number && (
            <h6 className="number-block">
              <span>#{number}</span>
            </h6>
          )}
          <h5>{user_name}</h5>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
};

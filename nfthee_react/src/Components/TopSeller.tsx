import React from "react";

interface TopSellerProps {
  name: string;
  price: string;
  img: string;
  index: number;
  number?: string;
  className?: string
}

export const TopSeller = ({
  name,
  img,
  price,
  index,
  number,
  className
}: TopSellerProps) => {
  return (
    <div className={`col ${className}`} key={index}>
      <div className="seller-author-box">
        <div className="author-avatar">
          <img src={img} alt="" className="" />
          <div className="badge">
            <img src="images/icons/star-check.png" alt="" />
          </div>
        </div>
        <div className="author-information">
          {number && (
            <h6 className="number-block">
              <span>#{number}</span>
            </h6>
          )}
          <h5>{name}</h5>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
import React from "react";

interface CheckboxProps {
  value: string;
  name: string;
  img: string;
  handleSelectFilters: any;
  boxName: string;
}

export const CheckBox = ({
  value,
  name,
  img,
  handleSelectFilters,
  boxName,
}: CheckboxProps) => {
  return (
    <div className="custom-checkbox" key={value}>
      <div className="form-check">
        <input
          className="form-check-input "
          type="checkbox"
          id={value}
          name={boxName}
          onClick={(e) => handleSelectFilters(name, e)}
        />
        <label className="form-check-label " htmlFor={value}>
          <img src={img} alt="" className="me-1 checkbox-img rounded" />
          <span className="ml-2">{name}</span>
        </label>
      </div>
    </div>
  );
};

// style={{verticalAlign: "middle",font: "normal normal 600 16px/20px SF Pro Display Regular",
// letterSpacing: "0.6px",color: "#1E063E"}}

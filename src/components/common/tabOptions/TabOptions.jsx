import React from "react";
import "./TabOptions.css";

const tabs = [
  {
    id: 1,
    name: "MOBILE RECHARGE",
    class: "fa-solid fa-mobile",
  },
  {
    id: 2,
    name: "DTH RECHARGE",
    class: "fa-solid fa-tv",
  },
  {
    id: 3,
    name: "LOANS",
    class: "fa-solid fa-indian-rupee-sign",
  },
  {
    id: 4,
    name: "NEWS",
    class: "fa-solid fa-newspaper",
  },
  {
    id: 5,
    name: "PROMOTIONS",
    class: "fa-solid fa-bullhorn",
  },
  {
    id: 6,
    name: "Gas Booking",
    class: "fa-solid fa-fire-burner",
  },
  {
    id: 7,
    name: "MORE",
    class: "fa-solid fa-bars",
  },
];

function TabOptions() {
  return (
    <div className="tabBar-heading">
      <div className="tabBar d-flex">
        {tabs.map((val) => {
          return (
            <div className="single-tab">
              <i className={val.class + " single-component cur-po"}></i>
              <span className="single-component-name">{val.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabOptions;

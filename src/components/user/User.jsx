import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Nav from "../nav/Nav";
import "./user.css";
import { user } from "../cloud/CloudImage";

const User = () => {
  return (
    <div>
      <Nav />
      <div className="user1">
        <LazyLoadImage className="user1" src={user.user1} />
      </div>
      <div className="user2">
        <LazyLoadImage className="user2" src={user.user2} />
        <LazyLoadImage className="user7" src={user.user7} />
      </div>
      <div className="user3">
        <LazyLoadImage className="user3" src={user.user3} />
      </div>
      <div className="user4">
        <LazyLoadImage className="user4" src={user.user4} />
      </div>
      <div className="username">
        <h2>Mr ABAKILIKI YORUBA</h2>
        <p className="wallet">
          WALLET BALANCE: <span className="amount">$12,000.406</span>
        </p>
      </div>
      <div className="market">
        <button className="market1">See Market Trends</button>
        <button className="market2">Transaction Histry</button>
      </div>
    {/* <div className="prop">
    <LazyLoadImage className="user5" src={user.user5} />
    <LazyLoadImage className="user6" src={user.user6} />
    </div> */}
    </div>
  );
};

export default User;
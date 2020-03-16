import React from "react";
import './DisplayUser.css'

const DisplayUser = props => {
  const { name, img, phone, email,salary,username} = props.userInfo;
  return (
    <div className="userData-container">
      <div className="userImg-container">
        <img src={img} alt="" />
      </div>
      <div className="userInfo-container">
        <div className="info">
          <h3>Name : {name}</h3>
          <h4>User Name : {username}</h4>
          <h6>Email : {email}</h6>
          <h6>Phone Number : {phone}</h6>
          <h6>User salary : ${salary} </h6>
        </div>
        <div className="addBtn">
          <button onClick={()=>props.addCounter(props.userInfo)} className="add-btn">
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;

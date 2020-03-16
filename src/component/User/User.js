import React, { useState } from "react";
import FackData from "../../Fack-data/FackData";
import DisplayUser from '../DisplayUser/DisplayUser'

const User = props => {
  const [usersInfo, setUsersInfo] = useState(FackData);

  const addCounter = (userInfo) => {
  console.log(userInfo);
  
  }
  
  

  return (
    <div>
      {usersInfo.map(userInfo => (
        <DisplayUser addCounter={addCounter} userInfo={userInfo}></DisplayUser>
      ))}
    </div>
  );
};

export default User;

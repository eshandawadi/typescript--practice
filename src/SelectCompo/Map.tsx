import React, { useEffect, useState } from "react";
import axios from "axios";

import Users from "../SelectCompo/Users";

const Map = () => {
  return (
    <div>
      {Users.map((user) => {
        return <div>
       
          <div>{user.name}</div>
          <div>{user.id}</div>
          <div>{user.position}</div>
          </div>;
      })}
    </div>
  );
};

export default Map;

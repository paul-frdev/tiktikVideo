import React, { useReducer } from "react";

import { NextPage } from "next";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  return (
    <div>
      <div className="block m-2 ml-4 mt-3">
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Sidebar;

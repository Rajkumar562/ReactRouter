import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  // userid will be the same name that is taken in the previous file main.jsx
  // useParams is a hook that is used to get the parameters of the URL
  return <div className="text-center text-white bg-gray-500 text-xl p-4">User: {userid}</div>;
}

export default User;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Rajkumar562")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   });

  const data = useLoaderData();
  // useLoaderData is a hook that is used to get the data from the loader function
  return (
    <div className="text-center text-white bg-gray-500 text-xl p-4">
      Github Repos: {data.public_repos}
      {/* <img src={data.avatar_url} alt="Github profile photo" width={300} /> */}
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Rajkumar562");
  return response.json();
};

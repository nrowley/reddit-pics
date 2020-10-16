import React, { useState, useEffect } from "react";

export default function Reddit({ subReddit }) {
  const getData = () => {
    fetch(`https://www.reddit.com/r/${subReddit}.json`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        //TODO: pass error to navbar component?
        console.log(error);
      });
  };

  useEffect(() => {
    //prevent fetch called when page loads
    if (subReddit != null) {
      getData();
    }
  });
  return (
    <div>
      <h1>{subReddit}</h1>
    </div>
  );
}

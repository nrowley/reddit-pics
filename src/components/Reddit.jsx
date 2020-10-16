import React, { useState, useEffect } from "react";
import Post from "./Post.jsx";

export default function Reddit({ subReddit }) {
  const redditUrl = "https://www.reddit.com";

  const [data, setData] = useState(null);
  const getData = () => {
    fetch(`https://www.reddit.com/r/${subReddit}.json`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
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
      <h3>{subReddit}</h3>
      <div className="container">
        {data !== null
          ? data.data.children.map((post) => {
              return <Post imageUrl={post.data.thumbnail} title={post.data.title} link={post.data.permalink} />;
            })
          : false}
      </div>
    </div>
  );
}

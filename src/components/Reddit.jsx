import React, { useState, useEffect } from "react";
import Post from "./Post.jsx";

export default function Reddit({ subReddit }) {
  const redditUrl = "https://www.reddit.com";
  const [data, setData] = useState(null);

  //fetch data when prop.subreddit changes
  useEffect(() => {
    if (subReddit !== null) {
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
          console.log(error);
        });
    }
  }, [subReddit]);

  return (
    <div className="container-fluid">
      <h1>{subReddit !== null ? `r/${subReddit}` : "Search!"}</h1>
      <div className="container-fluid">
        <div className="row">
          {data !== null
            ? data.data.children.map((post) => {
                return <Post key={post.data.id.toString()} imageUrl={post.data.thumbnail} title={post.data.title} link={redditUrl + post.data.permalink} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

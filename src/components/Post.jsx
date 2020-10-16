import React from "react";

/*
Component for each reddit post.
*/

export default function Post({ imageUrl, title, link }) {
  return (
    <div>
      <img src={imageUrl} alt={title}></img>
    </div>
  );
}

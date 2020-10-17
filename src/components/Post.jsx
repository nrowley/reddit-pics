import React from "react";
import PropTypes from "prop-types";

function Post({ imageUrl, title, link }) {
  return (
    <div className="card m-1" style={{ width: "200px", height: "300px" }}>
      <a href={link}>
        <img className="card-img-top" src={imageUrl} alt={title} href={link} style={{ maxWidth: "200px", maxHeight: "200px", minWidth: "150px", minHeight: "150px" }}></img>
      </a>
      <div className="card-body">
        <p className="card-title">{title.length > 40 ? title.substring(0, 40) + "..." : title}</p>
      </div>
    </div>
  );
}
Post.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Post;

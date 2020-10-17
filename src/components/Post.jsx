import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

function Post({ imageUrl, title, link }) {
  return (
    <div className="col-sm">
      <img src={imageUrl} alt={title}></img>
    </div>
  );
}

Post.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Post;

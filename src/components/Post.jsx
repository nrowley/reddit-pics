import React from "react";
import PropTypes from "prop-types";

function Post({ imageUrl, title, link }) {
  return (
    <div className="col-sm">
      <img src={imageUrl} alt={title} style={{ maxWidth: "200px", maxHeight: "200px", minWidth: "150px", minHeight: "150px" }}></img>
    </div>
  );
}
Post.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Post;

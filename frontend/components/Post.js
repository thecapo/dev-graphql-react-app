import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import DeletePost from "./DeletePost";
import PostStyles from "../components/styles/PostStyles";
import Title from "../components/styles/Title";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props;
    // const postSplit = post.ingredients.split(", ");
    return (
      <PostStyles>
        {post.image ? (
          <img src={post.image} alt={post.title} />
        ) : (
          <img src="../static/no-image.png" alt="no image" />
        )}
        <Title>
          <Link
            href={{
              pathname: "/post",
              query: { id: post.id }
            }}
          >
            <a>{post.text}</a>
          </Link>
        </Title>
        <div className="buttonList">
          <Link
            href={{
              pathname: "/post",
              query: { id: post.id }
            }}
          >
            <a>Read Post</a>
          </Link>
          <Link
            href={{
              pathname: "/update",
              query: { id: post.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <DeletePost id={post.id}>Delete Post</DeletePost>
        </div>
      </PostStyles>
    );
  }
}

export default Post;

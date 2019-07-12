import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import DeletePost from "./DeletePost";
import styled from "styled-components";
import Error from "./ErrorMessage";

const SinglePostDiv = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding-bottom: 50px;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
  .buttonList {
    display: grid;
    text-align: center;
    width: 100%;
    border-top: 1px solid #e1e1e1;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: #e1e1e1;
    & > * {
      background: black;
      border: 0;
      font-family: "radnika_next";
      font-size: 1rem;
      padding: 0.3rem;
      text-decoration: none;
      color: white;
    }
  }
  .titleSingle {
    display: block;
    text-align: center;
    list-style: none;
    font-size: 30px;
    text-decoration-line: underline;
  }
`;

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      id
      text
      name
      avatar
      user {
        id
        name
      }
    }
  }
`;

class SinglePost extends Component {
  render() {
    return (
      <Query
        query={SINGLE_POST_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.post) return <p>No post found...</p>;
          const post = data.post;
          return (
            <React.Fragment>
              <Head>
                <title>DEV-GRAPHQL-REACT | {post.text}</title>
              </Head>
              <SinglePostDiv>
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.text}
                    className="center"
                  />
                ) : (
                  <img src="../static/no-image.png" alt="no image" />
                )}
                <div className="titleSingle">{post.text.toUpperCase()}</div>
                <div className="buttonList">
                  <Link href="/">
                    <a>Back</a>
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
              </SinglePostDiv>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default SinglePost;
export { SINGLE_POST_QUERY };

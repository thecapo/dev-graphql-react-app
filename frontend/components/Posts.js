import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Post from "./Post";

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      id
      text
      name
      avatar
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  li {
    float: left;
    padding-right: 30px;
  }
`;

class Posts extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_POSTS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <PostsList>
                {data.posts.map(post => (
                  <Post post={post} key={post.id} />
                ))}
              </PostsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Posts;
export { ALL_POSTS_QUERY };

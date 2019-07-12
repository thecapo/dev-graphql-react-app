import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_POSTS_QUERY } from "./Posts";

const DELETE_POST_MUTATION = gql`
  mutation DELETE_POST_MUTATION($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

class DeletePost extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_RECIPES_QUERY });
    data.recipes = data.recipes.filter(
      recipe => recipe.id !== payload.data.deletePost.id
    );
    cache.writeQuery({ query: ALL_POSTS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_POST_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deletePost, { error }) => (
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this item?")) {
                deletePost().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeletePost;

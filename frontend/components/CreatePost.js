import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { ALL_POSTS_QUERY } from "./Posts";

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $text: String!
    $name: String!
    $avatar: String
  ) {
    createPost(
      text: $text
      name: $name
      avatar: $avatar
    ) {
      id
      text
      name
      avatar
    }
  }
`;

class CreatePost extends Component {
  state = {
    text: "",
    name: "res.data.posts.name",
    avatar: "res.data.posts.avatar",
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_POST_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_POSTS_QUERY }]}
      >
        {(createPost, { loading, error }) => (
          <Form
          data-test="form"
          onSubmit={async e => {
            e.preventDefault();
            const res = await createPost();
            Router.push({
              pathname: "/posts",
              query: { id: res.data.createPost.id }
            });
          }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="textPost">
                Say Something...
                <textarea
                  id="textPost"
                  name="textPost"
                  placeholder="Enter Post..."
                  required
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </label>
              <button type="sumbit">Create</button>
            </fieldset>

          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreatePost;
export { CREATE_POST_MUTATION };

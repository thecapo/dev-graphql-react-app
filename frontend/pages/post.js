import SinglePost from "../components/SinglePost";

const Post = props => (
  <div>
    <SinglePost id={props.query.id} />
  </div>
);

export default Post;

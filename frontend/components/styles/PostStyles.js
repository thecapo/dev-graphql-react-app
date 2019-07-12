import styled from "styled-components";

const PostStyles = styled.div`
  background: white;
  border: 1px solid #ededed;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  ul {
    margin: auto;
    padding: 0px 40px;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid #e1e1e1;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: #e1e1e1;
    margin-top: 20px;
    & > * {
      background: black;
      border: 0;
      font-family: "radnika_next";
      font-size: 1.3rem;
      padding: 0.3rem;
      text-decoration: none;
      color: white;
      /* transform: skew(-5deg) rotate(-1deg); */
    }
  }
`;

export default PostStyles;

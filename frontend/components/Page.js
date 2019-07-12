import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

// theme can be added here

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: black;
  }
  button { font-family: 'radnika_next'; }
`;

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <GlobalStyle />
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}

export default Page;

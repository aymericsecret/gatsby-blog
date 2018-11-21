import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeaderWrapper = styled.div`
  position: relative;
  margin: 0 0 20px 0;
  height: 60vh;
  overflow: hidden;
`;
const HeaderContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  padding: 0 40px;
`;


export default class Header extends Component {
  componentDidUpdate = () => {
    console.log(this.props);

    if (this.props.location.pathname === '/') {
      console.log(this.props.location.pathname);
    } else {
      console.log('yo');
      console.log(this.wrapper);
      // this.wrapper.animate([
      //   { height: '60vh' },
      //   { height: '20vh' },
      // ], {
      //   duration: 300,
      //   fill: 'forwards',
      //   easing: 'cubic-bezier(0.86, 0.07, 1)',
      //   iterations: 1,
      // });
    }
  }

  render() {
    const { data } = this.props;

    return (
      <HeaderWrapper ref={(wrapper) => { this.wrapper = ReactDOM.findDOMNode(wrapper); }}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
            <Link
              to="/about"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
          About
            </Link>
          </h1>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

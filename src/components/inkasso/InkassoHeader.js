import React from 'react';
import styled from 'styled-components';

import InkassoHeaderImg from '../../assets/gfx/about-web.jpg';

const HeaderContainer = styled.div`
  background-image: url(${InkassoHeaderImg});
  //   background-position: left;
  background-size: cover;
  background-position: center;
  width: 100%;
  overflow: hidden;
  height: 700px;
`;
const HeaderOverlay = styled.h1`
  background: rgba(34, 53, 85, 0.3);
  height: 100vh;
`;
const InkassoHeadline = styled.div`
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  top: 40%;
  // text-shadow: 0px 5px 10px rgba(0, 0, 0, 1);
`;

class InkassoHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer>
          <HeaderOverlay>
            <InkassoHeadline>Inkasso</InkassoHeadline>
          </HeaderOverlay>
        </HeaderContainer>
      </React.Fragment>
    );
  }
}

export default InkassoHeader;

import React from 'react';
// import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import HeaderBg from '../../assets/gfx/headerbg-web.jpg';

const HomeContainer = styled.div`
  background-image: url(${HeaderBg});
  background-position: left;
  background-size: cover;
  width: 100%;
  overflow: hidden;
  height: 100vh;
`;
const HomeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 0.8s linear;
  background: rgba(34, 53, 85, 0.35);
`;
const HomeColumns = styled.div`
  float: left;
  height: 100%;
  width: 33.3333%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(34, 53, 85, 0.7);
  }
  &:hover div {
    transition: all 0.3s ease-in-out;
    font-size: 3.4rem;
  }
`;
const ColumnText = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  & div {
    transition: all 0.3s ease-in-out;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    cursor: pointer;
    // text-shadow: 0px 5px 10px rgba(0, 0, 0, 1);
  }
`;

class FrontpageColumns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeContainer ref={(ref) => (this.home = ref)}>
          <HomeOverlay>
            <HomeColumns>
              <ColumnText>
                <Fade bottom>
                  <div onClick={() => console.log('privat')}>Specialer</div>
                </Fade>
              </ColumnText>
              {/*
                                
                  <Link to={"/privat"}>
                  <Fade bottom>
                      <div>PRIVAT</div>
                  </Fade>
              </Link>
              */}
            </HomeColumns>
            <HomeColumns>
              <ColumnText>
                <Fade bottom>
                  <div onClick={() => console.log('Inkasso')}>Personer</div>
                </Fade>
              </ColumnText>
            </HomeColumns>
            <HomeColumns>
              <ColumnText>
                <Fade bottom>
                  <div onClick={() => console.log('Erhverv')}>Om Os</div>
                </Fade>
              </ColumnText>
            </HomeColumns>

            <Fade cascade bottom>
              <div
                onClick={this.props.scrollToOffices}
                className="icon-scroll"
              />
            </Fade>
          </HomeOverlay>
        </HomeContainer>
      </React.Fragment>
    );
  }
}

export default FrontpageColumns;

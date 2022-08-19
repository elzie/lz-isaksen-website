import React from 'react';
import styled from 'styled-components';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   // Redirect,
//   // NavLink,
//   // Link,
// } from 'react-router-dom';

import PrivatHeader from '../components/privat/PrivatHeader';
import PrivatContent from '../components/privat/PrivatContent';
import FrontpageConsulationFeature from '../components/frontpage/FrontpageConsultationFeature';
import FrontpageFooter from '../components/frontpage/FrontpageFooter';

const PrivatContainer = styled.div``;

class Privat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowScrollY: 0,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
    this.props.showNav();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      windowScrollY: Math.floor(window.scrollY),
    });
    this.props.isScrolledFromTop(this.state.windowScrollY);
  };
  render() {
    return (
      <PrivatContainer>
        <PrivatHeader />

        <PrivatContent
          showNav={this.props.showNav}
          stickMenuToTop={this.props.stickMenuToTop}
          unstickMenuFromTop={this.props.unstickMenuFromTop}
        />
        <FrontpageConsulationFeature />
        <FrontpageFooter />
      </PrivatContainer>
    );
  }
}

export default Privat;

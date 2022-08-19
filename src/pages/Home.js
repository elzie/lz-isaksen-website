import React from 'react';
// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';
// import Navigation from '../components/Navigation';

import FrontpageColumns from '../components/frontpage/FrontpageColumns';
import FrontpageContactFeature from '../components/frontpage/FrontpageContactFeature';
import FrontpageOfficesFeature from '../components/frontpage/FrontpageOfficesFeature';
import FrontpageNewsFeature from '../components/frontpage/FrontpageNewsFeature';
import FrontpageConsultationFeature from '../components/frontpage/FrontpageConsultationFeature';
import FrontpageFooter from '../components/frontpage/FrontpageFooter';

const HomeContainer = styled.div`
  // overflow: ${(props) => (props.burgerMenuIsOpen ? 'hidden' : 'visible')};
  // height: ${(props) => (props.burgerMenuIsOpen ? '100vh' : 'auto')};
  // transition: all 1s ease-in-out;
`;

class Home extends React.Component {
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
  scrollToOffices = (e) => {
    console.log('scrooll me!');
    scrollToComponent(this.offices, {
      offset: -72,
      align: 'top',
      duration: 1000,
    });
  };
  render() {
    return (
      <HomeContainer burgerMenuIsOpen={this.state.burgerMenuIsOpen}>
        <FrontpageColumns scrollToOffices={this.scrollToOffices} />
        <FrontpageOfficesFeature
          ref={(section) => {
            this.offices = section;
          }}
        />
        <FrontpageNewsFeature />
        <FrontpageConsultationFeature />
        <FrontpageFooter />
      </HomeContainer>
    );
  }
}

export default Home;

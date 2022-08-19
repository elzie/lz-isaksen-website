import React from 'react';
import styled from 'styled-components';

import AboutHeader from '../components/about/AboutHeader';
import AboutContent from '../components/about/AboutContent';
import AboutAssociates from '../components/about/AboutAssociates';
import FrontpageConsulationFeature from '../components/frontpage/FrontpageConsultationFeature';
import FrontpageFooter from '../components/frontpage/FrontpageFooter';

const AboutUsContainer = styled.div``;

class AboutUs extends React.Component {
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
      <AboutUsContainer>
        <AboutHeader />
        <AboutContent />
        <AboutAssociates />
        <FrontpageConsulationFeature />
        <FrontpageFooter />
      </AboutUsContainer>
    );
  }
}

export default AboutUs;

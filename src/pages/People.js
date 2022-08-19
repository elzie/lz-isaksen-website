import React from 'react';
import styled from 'styled-components';

import PeopleStaff from '../components/people/PeopleStaff';
import FrontpageConsulationFeature from '../components/frontpage/FrontpageConsultationFeature';
import FrontpageFooter from '../components/frontpage/FrontpageFooter';

const PeopleContainer = styled.div``;

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.stickMenuToTop();
  }
  componentWillUnmount() {
    this.props.unstickMenuFromTop();
  }

  render() {
    return (
      <PeopleContainer>
        <PeopleStaff />
        <FrontpageConsulationFeature />
        <FrontpageFooter />
      </PeopleContainer>
    );
  }
}

export default People;

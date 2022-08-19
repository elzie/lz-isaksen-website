import React from 'react';
import styled from 'styled-components';

import ContactHeader from '../components/contact/ContactHeader';
import ContactOffices from '../components/contact/ContactOffices';
import ContactForm from '../components/contact/ContactForm';
import FrontpageConsulationFeature from '../components/frontpage/FrontpageConsultationFeature';
import FrontpageFooter from '../components/frontpage/FrontpageFooter';

const ContactContainer = styled.div``;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowScrollY: 0,
    };
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
      <ContactContainer>
        <ContactHeader />
        <ContactOffices />
        <ContactForm />
        <FrontpageConsulationFeature />
        <FrontpageFooter />
      </ContactContainer>
    );
  }
}

export default Contact;

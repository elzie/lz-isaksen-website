import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ConsultationBg from '../../assets/gfx/spacer-reverse.jpg';

const Container = styled.div`
  height: 404px;
  background: url(${ConsultationBg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  font-family: 'Poppins', sans-serif;
`;
const Overlay = styled.div`
  background: rgba(34, 53, 85, 0.35);
  height: 100%;
  position: relative;
  & div {
    position: relative;
    top: 50px;
    width: 700px;
    margin: auto;
  }
`;
const ConsultText = styled.div`
  text-align: center;
  color: white;
  & h1 {
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
  }
`;

const ContactButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s ease-in-out;
  color: #223555;
  display: block;
  width: 13rem;
  margin: 1rem auto;
  cursor: pointer;
  &:hover {
    background: hsla(0, 0%, 100%, 0.7);
  }
`;
class FrontpageConsultationFeature extends React.Component {
  render() {
    return (
      <Container>
        <Overlay>
          <div>
            <ConsultText>
              <h1>Bestil en gratis konsultation</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ContactButton>
                Kontakt&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </ContactButton>
            </ConsultText>
          </div>
        </Overlay>
      </Container>
    );
  }
}

// export default FrontpageContactFeature;
export default FrontpageConsultationFeature;

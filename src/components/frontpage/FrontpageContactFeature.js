import React from 'react';
// import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

import ContactBg from '../../assets/gfx/in.png';

const Container = styled.div`
  background: #223555 url(${ContactBg});
  background-size: 95%;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 180px;
`;
// const TextContainer = styled.div`
//   color: #fff;
//   width: 500px;
//   margin: 0 auto;
//   font-size: 1.1rem;
//   text-align: center;
// `;
const FA = styled.div`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  top: -50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

// const ContactButton = styled.button`
//   background: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 0.5rem 2rem;
//   font-size: 1.1rem;
//   font-weight: 700;
//   font-family: 'Poppins', sans-serif;
//   transition: all 0.2s ease-in-out;
//   color: #223555;
//   display: block;
//   width: 13rem;
//   margin: 1rem auto;
//   cursor: pointer;
//   &:hover {
//     background: hsla(0, 0%, 100%, 0.7);
//   }
// `;

class FrontpageContactFeature extends React.Component {
  render() {
    return (
      <Container>
        <FA>
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            onClick={this.props.scrollToOffices}
          />
        </FA>
        {
          // <Fade bottom>
          //   <TextContainer>
          //     Advokatfirmaet Isaksen & Nomanni er en moderne advokatvirksomhed,
          //     som blev etableret i 1978. <br /> Advokatfirmaet har kontorer i
          //     Aarhus og Odder.
          //   </TextContainer>
          // </Fade>
          // <Fade bottom>
          //   <ContactButton>
          //     Kontakt&nbsp;
          //     <FontAwesomeIcon icon={faArrowRight} />
          //   </ContactButton>
          // </Fade>
        }
      </Container>
    );
  }
}

// export default FrontpageContactFeature;
export default FrontpageContactFeature;

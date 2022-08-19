import React from 'react';
import styled from 'styled-components';
import Bread from '../Bread';
import AarhusImage from '../../assets/gfx/contact-aarhus.jpg';
import OdderImage from '../../assets/gfx/contact-odder.jpg';

import ContactAarhus from './ContactAarhus';
import ContactOdder from './ContactOdder';

const OfficesContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 25px 0;
`;

const Headline = styled.h1`
  color: #223555;
  font-weight: 400;
  margin: 1rem 0;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
`;

const Box = styled.div`
  border: 1px solid #919aaa;
  border-radius: 13px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`;

const BoxImage = styled.div`
  height: 320px;
  background: papayawhip;
  border-radius: 12px;
  background-size: cover;
  background-position: center center;
`;
const BoxImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(34, 53, 85, 0.1);
  border-radius: 12px;
`;

const City = styled.div`
  background: #223555;
  width: 180px;
  text-align: center;
  margin: auto;
  color: #fff;
  // padding: 0.4rem 3rem;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  border-radius: 0 0 10px 10px;
`;

const TextContainer = styled.div`
  padding: 2rem 3rem;
`;

const OfficeHeading = styled.div`
  color: #223555;
  font-weight: 700;
  font-size: 1.3rem;
  // padding: 0 0 15px 0;
`;
const TextBold = styled.div`
  padding: 15px 0 0 0;
  font-weight: bolder;
  font-size: 1rem;
`;
const TextReg = styled.div`
  font-size: 1em;
`;
const ReadMore = styled.div``;
class ContactContent extends React.Component {
  render() {
    return (
      <OfficesContainer>
        <Bread text={'Kontakt'} />
        <Headline>Kontakt</Headline>
        <GridTemplate>
          <Box>
            <BoxImage style={{ backgroundImage: `url(${AarhusImage})` }}>
              <BoxImageOverlay>
                <City>Aarhus</City>
              </BoxImageOverlay>
            </BoxImage>
            <TextContainer>
              <OfficeHeading>Aarhus Kontor</OfficeHeading>
              <TextBold>Viby Ringvej 2 B, 4. sal</TextBold>
              <TextReg>8260 Viby J.</TextReg>

              <TextBold>Tlf. nr.</TextBold>
              <TextReg>12345678</TextReg>

              <TextBold>E-mail:</TextBold>
              <TextReg>aarhus@isaksennomanni.dk</TextReg>

              <ReadMore>LÆS MERE</ReadMore>
            </TextContainer>
          </Box>
          <Box>
            <BoxImage style={{ backgroundImage: `url(${OdderImage})` }}>
              <BoxImageOverlay>
                <City>Odder</City>
              </BoxImageOverlay>
            </BoxImage>
          </Box>
        </GridTemplate>
      </OfficesContainer>
    );
  }
}

export default ContactContent;

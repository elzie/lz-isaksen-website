import React from 'react';

import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import OfficeAarhusImg from '../../assets/gfx/offices_aarhus-web.jpg';
import OfficeOdderImg from '../../assets/gfx/offices_odder-web.jpg';

const Container = styled.div`
  background: none;
  min-height: calc(100vh - 72px);
  // border-bottom: 1px solid black;
  // display: flex;
  // justify-content: center;
  // text-align: center;
  padding-top: 50px;
`;
const Header = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #223555;
  font-size: 2rem;
  font-weight: 700;
  margin: auto;
  display: block;
  width: 400px;
  text-align: center;
  text-transform: uppercase;
`;
const Teaser = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #223555;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 50px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
`;
const OfficeAarhus = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${OfficeAarhusImg});
  background-position: center;
  background-size: 100% 100%;
  // margin: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  // float: left;
  font-family: 'Poppins', sans-serif;
  position: relative;
`;
const OfficeOdder = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${OfficeOdderImg});
  background-position: left;
  background-size: 100% 100%;
  // margin: 20px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // float: left;
  font-family: 'Poppins', sans-serif;
  position: relative;
`;

const City = styled.div`
  margin: auto;
  background: #223555;
  font-size: 1.2rem;
  font-weight: 700;
  width: 10rem;
  line-height: 1.7rem;
  text-align: center;
  border-radius: 0 0 12px 12px;
  position: relative;
  z-index: 100;
  color: white;
`;
const AddressAarhus = styled.div`
  transition: all 0.3s linear;
  width: 100%;
  height: calc(100% - 140px);
  padding-top: 140px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  background: #223555;
  top: 0;
  opacity: 0;
  font-family: 'Poppins', sans-serif;
  & div {
    padding: 3rem;
  }
  &:hover {
    opacity: 80%;
  }
  h3 {
    font-size: 26px;
    padding-top: 0.3rem;
    padding-bottom: 1.2rem;
    color: white;
    text-align: center;
  }
  p {
    font-weight: 200;
    font-size: 18px;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;
const AddressOdder = styled.div`
  transition: all 0.3s linear;
  width: 100%;
  height: calc(100% - 140px);
  padding-top: 140px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  background: #223555;
  top: 0;
  opacity: 0;
  font-family: 'Poppins', sans-serif;
  & div {
    padding: 3rem;
  }
  &:hover {
    opacity: 80%;
  }
  h3 {
    font-size: 26px;
    padding-top: 0.3rem;
    padding-bottom: 1.2rem;
    color: white;
    text-align: center;
  }
  p {
    font-weight: 200;
    font-size: 18px;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;
const Bold = styled.p`
  font-weight: 800 !important;
`;
const ContactButton = styled.button`
  text-transform: uppercase;

  position: relative;
  margin-top: 80px;
  font-weight: bolder;
  bottom: 0;
  color: white;
  background: none;
  border: none;
  width: 100%;
  // margin: auto;
  font-size: 1.1rem;
`;

class FrontpageOfficesFeature extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Header>
            <Fade bottom>Kontor</Fade>
          </Header>
          <Fade bottom>
            <Teaser>Du finder vores kontorer i både Aarhus og Odder.</Teaser>
          </Fade>
          <GridContainer>
            <div>
              <OfficeAarhus>
                <City>Aarhus</City>
                <AddressAarhus>
                  <div>
                    <h3>Advokatfirmaet Isaksen &amp; Nomanni I/S</h3>

                    <Bold>Viby Ringvej 2 B, 4. sal</Bold>

                    <p>8260 Viby J.</p>
                    <p>&nbsp;</p>
                    <p>Tlf. nr.</p>

                    <Bold>12345678</Bold>

                    <p>&nbsp;</p>
                    <p>E-mail:</p>

                    <Bold>aarhus@isaksennomanni.dk</Bold>

                    <ContactButton>
                      Læs mere &nbsp;
                      <FontAwesomeIcon icon={faArrowRight} />
                    </ContactButton>
                  </div>
                </AddressAarhus>
              </OfficeAarhus>
            </div>
            <div>
              <OfficeOdder>
                <City>Odder</City>
                <AddressOdder>
                  <div>
                    <h3>Advokatfirmaet Isaksen &amp; Nomanni I/S</h3>

                    <Bold>Banegårdsgade 2</Bold>

                    <p>8300 Odder</p>
                    <p>&nbsp;</p>
                    <p>Tlf. nr.</p>

                    <Bold>87654321</Bold>

                    <p>&nbsp;</p>
                    <p>E-mail:</p>

                    <Bold>odder@isaksennomanni.dk</Bold>

                    <ContactButton>
                      Læs mere &nbsp;
                      <FontAwesomeIcon icon={faArrowRight} />
                    </ContactButton>
                  </div>
                </AddressOdder>
              </OfficeOdder>
            </div>
          </GridContainer>
        </div>
      </Container>
    );
  }
}

export default FrontpageOfficesFeature;

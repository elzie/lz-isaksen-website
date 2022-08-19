import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/gfx/logoB.svg';

import Fade from 'react-reveal/Fade';
const Container = styled.div`
  background: none;
  // min-height: 450px;
`;
const SocialMedia = styled.div`
  height: 150px;

  text-align: center;
  display: flex;
  align-items: top;
  & div {
    margin: auto;
  }
  & img {
    height: 55px;
    padding-top: 1em;
  }
  i {
    color: #223555;
    position: relative;
    top: -20px;
    border: 1px solid #223555;
    padding: 0.4em;
    box-sizing: border-box;
    font-size: 18px;
    border-radius: 5px;
    margin-left: 1em;
    text-align: center;
    transition: all 0.2s;
    min-width: 36px;
    &:hover {
      cursor: pointer;
      color: white;
      background: #223555;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  justify-content: space-between;
`;
const FooterSide = styled.div`
  background: #223555;
  height: 250px;
  color: white;
`;
const Left = styled.div`
  padding: 40px 40px 40px 0;
  text-align: right;
  h3 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
`;

const Right = styled.div`
  padding: 40px 0 40px 40px;
  text-align: left;
  h3 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
`;

const CompanyName = styled.div`
  font-weight: bold;
  margin: 0 0 10px;
`;

const BoldP = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const RegP = styled.div`
  font-size: 14px;
`;

const Sitemap = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  justify-content: space-around;
  padding: 30px 50px 0 50px;
  div {
    // background: #223555;
    width: 100%;
    font-size: 16px;
  }
  h3 {
    font-size: 22px;
    color: #223555;
    text-transform: uppercase;
    margin: 0 0 10px 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
`;

const Copyright = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #223555;
  font-size: 0.8rem;
  line-height: 2.5rem;
  font-weight: 300;
  width: 100%;
  text-align: center;
  height: 2.5rem;
  background: #ffffff;
  z-index: 10;
  position: relative;
`;

class FrontpageFooter extends React.Component {
  render() {
    return (
      <Container>
        <SocialMedia>
          <Fade bottom>
            <div>
              <img src={Logo} alt="CompanyLogo" />
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </div>
          </Fade>
        </SocialMedia>
        <GridContainer>
          <FooterSide>
            <Left>
              <Fade bottom>
                <div>
                  <h3>Aarhus Kontor</h3>
                  <CompanyName>
                    Advokatfirmaet Isaksen & Nomanni I/S
                  </CompanyName>
                  <BoldP>Viby Ringvej 2B, 4. sal</BoldP>
                  <RegP style={{ marginBottom: '5px' }}>8260 Viby J.</RegP>
                  <RegP>Tlf. nr.</RegP>
                  <BoldP style={{ marginBottom: '5px' }}>861140000</BoldP>
                  <RegP>E-mail:</RegP>
                  <BoldP>aarhus@isaksennomanni.dk</BoldP>
                </div>
              </Fade>
            </Left>
          </FooterSide>
          <Sitemap>
            <div>
              <Fade bottom>
                <h3>Specialer</h3>
                <ul>
                  <li>Privat</li>
                  <li>Erhverv</li>
                  <li>Inkasso</li>
                </ul>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <h3>Om os</h3>
                <ul>
                  <li>Om os</li>
                  <li>Personer</li>
                  <li>Nyheder</li>
                  <li>Kontoret</li>
                </ul>
              </Fade>
            </div>
            <div>
              <Fade bottom>
                <h3>Info</h3>
                <ul>
                  <li>Privatlivspolitik</li>
                  <li>Forretningsbetingelser</li>
                  <li>Klientoplysninger</li>
                  <li>Presse / logo / fotos</li>
                </ul>
              </Fade>
            </div>
          </Sitemap>
          <FooterSide>
            <Right>
              <Fade bottom>
                <div>
                  <h3>Odder Kontor</h3>
                  <CompanyName>
                    Advokatfirmaet Isaksen & Nomanni I/S
                  </CompanyName>
                  <BoldP>Banegårdsgade 2</BoldP>
                  <RegP style={{ marginBottom: '5px' }}>8300 Odder</RegP>
                  <RegP>Tlf. nr.</RegP>
                  <BoldP style={{ marginBottom: '5px' }}>87654321</BoldP>
                  <RegP>E-mail:</RegP>
                  <BoldP>odder@isaksennomanni.dk</BoldP>
                </div>
              </Fade>
            </Right>
          </FooterSide>
        </GridContainer>
        <Copyright>Copyright @ 2020, Made by SM Marketing</Copyright>
      </Container>
    );
  }
}

export default FrontpageFooter;

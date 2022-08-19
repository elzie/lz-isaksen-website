import React from 'react';
import styled from 'styled-components';
import Bread from '../Bread';
import '../people/PeopleStaff.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const AboutContentContainer = styled.div`
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

  a {
    text-decoration: none;
  }
`;

const InfoText = styled.div``;

class AboutContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
    };
  }
  render() {
    return (
      <AboutContentContainer>
        <Bread text={'Om os'} />
        <Headline>Om Isaksen & Nomanni</Headline>
        <GridTemplate>
          <Link to={'/personer'}>
            <div
              className={
                'listItem ' + (this.state.type === 1 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.setState({ type: 1 })}>
                <i className={'fa fa-chevron-right'} />
                <p>Personer</p>
              </button>
            </div>
          </Link>
          <Link to="/nyheder">
            <div
              className={
                'listItem ' + (this.state.type === 1 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.setState({ type: 1 })}>
                <i className={'fa fa-chevron-right'} />
                <p>Nyheder</p>
              </button>
            </div>
          </Link>
          <Link to={'/inkasso'}>
            <div
              className={
                'listItem ' + (this.state.type === 1 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.setState({ type: 1 })}>
                <i className={'fa fa-chevron-right'} />
                <p>Inkasso</p>
              </button>
            </div>
          </Link>
          <Link to={'/kontakt'}>
            <div
              className={
                'listItem ' + (this.state.type === 1 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.setState({ type: 1 })}>
                <i className={'fa fa-chevron-right'} />
                <p>Kontakt</p>
              </button>
            </div>
          </Link>
        </GridTemplate>
        <InfoText>
          <p>
            Advokatfirmaet Isaksen & Nomanni er en moderne advokatvirksomhed,
            som blev etableret i 1978. Advokatfirmaet har kontorer i Aarhus og
            Odder.
          </p>
          <p>
            Vi lægger vægt på at være den rigtige samarbejdspartner for både
            private og erhvervsvirksomheder. Vores klienter kommer fra alle
            sider af erhvervslivet: håndværksmestre, detailhandlende,
            produktionsvirksomheder, pengeinstitutter, koncerner og børsnoterede
            selskaber. Desuden rådgiver vi forsyningsselskaber, foreninger og
            private personer.
          </p>
          <p>
            Vi satser på effektivitet og dermed konkurrencedygtighed gennem
            maksimal brug af informationsteknologi. Vi har de mest avancerede
            edb-systemer, direkte adgang til alle relevante databaser og
            registre indenfor jura og erhvervsliv, og en rationel intern
            sagsbehandling.
          </p>
          <p>
            Advokatfirmaet Isaksen & Nomanni er en moderne advokatvirksomhed med
            en lokal profil og med kunder fra hele landet. Vi har et netværk af
            gode samarbejdspartnere i ind- og udland, og kan løse juridiske
            problemer, uanset om det er helt lokalt eller rækker uden for
            landets grænser.
          </p>
          <p>Se vores profilfilm optaget på vores kontor i Odder på Youtube.</p>
          <p>
            Advokatfirmaet Isaksen & Nomanni og advokater i firmaet er medlem af
            / samarbejder med viste foreninger og organisationer.
          </p>
        </InfoText>
      </AboutContentContainer>
    );
  }
}

export default AboutContent;

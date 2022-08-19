import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   // Redirect,
//   // NavLink,
//   Link,
// } from 'react-router-dom';

const Container = styled.div``;

const Content = styled.div`
  max-width: 1250px;
  margin: auto;
`;
const Headline = styled.h1`
  color: #223555;
  font-weight: 400;
  margin: 1rem 0;
`;
const InfoText = styled.div``;
class DigitalTinglysning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 680);
    // this.props.stickMenuToTop();
  }
  componentWillUnmount() {
    // this.props.unstickMenuFromTop();
  }

  render() {
    return (
      <Container>
        <Content>
          <Headline>Digital tinglysning</Headline>
          <InfoText>
            <p>
              Tinglysning af skødet er den juridiske og offentlige registrering
              af ejerskiftet.
            </p>
            <p>
              Al tinglysning foregår digitalt på{' '}
              <a href="http://www.tinglysning.dk/">www.tinglysning.dk</a>.
            </p>
            <h4>Det digitale skøde</h4>
            <p>
              Det digitale skøde dannes på baggrund af de oplysninger, der
              indtastes af anmelderen. Disse indtastninger danner et digitalt
              skøde på 2 – 3 sider, der kan udskrives.
            </p>
            <h4>Hvem opretter og kontrollerer</h4>
            <p>
              I langt de fleste ejendomshandeler er det enten sælgers eller
              købers boligadvokat, der opretter det digitale skøde.
            </p>
            <p>
              Er det ikke din boligadvokat, der skal opretter det digitale skøde
              (berigtigelse), kan du omvendt forvente, at din boligadvokat
              kontrollerer udkastet, som den anden parts rådgiver har oprettet,
              inden din boligadvokat beder dig om at signere skødet.
            </p>
            <h4>Digital underskrift eller fuldmagt</h4>
            <p>
              Du skal som køber eller sælger underskrive det digitale skøde med
              digital signatur.
            </p>
            <p>
              Du kan vælge at gøre dette selv ved brug af din NemID, eller du
              kan vælge at give din boligadvokat en fuldmagt, så boligadvokaten
              kan underskrive/signere skødet på dine vegne.
            </p>
            <p>
              Det er et krav, at du har en Nem-ID, hvis du selv ønsker at
              underskrive skødet{' '}
              <a href="http://www.www.nemid.nu/">www.nemid.nu</a>.
            </p>
            <h4>Endelig tinglysning</h4>
            <p>
              Når det digitale skøde er tinglyst - uden præjudicerende
              (belastende) retsanmærkninger - vil både køber og købers bank
              modtage et udskrift af skødet som dokumentation, ligesom sælgers
              pengeinstitut vil modtage meddelelse om, at sælgers provenu fra
              salget af ejendommen kan frigives enten helt eller delvist.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default DigitalTinglysning;

import React from 'react';
import styled from 'styled-components';
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
class KoebAndelsbolig extends React.Component {
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
          <Headline>Køb af andelsbolig</Headline>
          <InfoText>
            <p>
              Styr uden om de dårlige andelsboligforeninger - få kyndig
              køberrådgivning af din boligadvokat.
            </p>
            <p>Vi er eksperter inden for andelsboligområdet.</p>
            <p>
              Når du køber en andelsbolig køber du så at sige en ret til at bebo
              en lejlighed i en andelsboligforening.
            </p>
            <p>
              Andelsboliger er typisk billigere end tilsvarende ejerboliger, men
              der betales en større månedlig boligafgift (husleje) til at dække
              andelsboligforeningens udgifter til driften og afdrag og renter på
              andelsboligforeningens lån.
            </p>
            <p>
              En andelsboligforening har typisk store lån i ejendommen, derfor
              er det vigtigt at få undersøgt , at det er en sund forening, du
              køber en andelslejlighed i.
            </p>
            <p>
              Prisen er fastlagt ud fra vedtægterne i andelsboligforeningen, men
              der kan ske fejl ved beregningen, og det er derfor meget vigtigt
              at du sikrer dig, at prisen er fastsat korrekt og ud fra aktuelle
              tal.
            </p>
            <p>
              Reglerne om ejerskifteforsikring og tilstandsrapport gælder ikke
              ved køb og salg af andelsbolig, så det er en god ide at gennemgå
              andelslejligheden med en håndværker, inden du skriver under på en
              overdragelsesaftale eller købsaftale.
            </p>
            <p>
              Når lejligheden er overtaget, skal den gennemgås for fejl og
              mangler og der skal fremsættes krav overfor sælger og
              andelsboligforeningens bestyrelsen inden for typisk 2-3 uger.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default KoebAndelsbolig;

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
class KoebPaaTvangsauktion extends React.Component {
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
          <Headline>Køb på tvangsauktion</Headline>
          <InfoText>
            <p>
              Når du ønsker at købe en ejendom på tvangsauktion, er det vigtigt,
              at du søger rådgivning hos din boligadvokat.
            </p>
            <p>
              Ved tvangsauktioner er der ingen forbrugerretlig beskyttelse, som
              beskytter køber. Inden der afgives et bud er det blandt andet
              vigtigt at være opmærksom på, om der er lejekontrakter eller andre
              forhold på ejendommen, som du bliver bundet af.
            </p>
            <p>
              Kontakt din boligadvokat for en gennemgang af salgsopstillingen
              m.m. og rådgivning inden du afgiver bud, så er du bedre klædt på
              til at afgive dit bud på tvangsauktionen.
            </p>
            <p>
              Der er ingen fortrydelsesret ved tvangsauktioner, og dit bud er
              bindende. Vi hjælper også gerne med budafgivelse i fogedretten.
            </p>
            <p>
              Er du højstbydende og vinder auktionen, skal der stilles "den
              lille" sikkerhed inden du forlader fogedretten. Det er typisk
              mellem kr. 15.000,- og kr. 30.000,-, og den skal betales kontant
              (ikke dankort), banknoteret eller ved en advokatindeståelse.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default KoebPaaTvangsauktion;

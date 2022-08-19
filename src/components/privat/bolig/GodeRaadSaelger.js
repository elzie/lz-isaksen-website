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
class GodeRaadSaelger extends React.Component {
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
          <Headline>10 gode råd til sælger</Headline>
          <InfoText>
            <p>1. Underskriv aldrig en købsaftale uden advokatforbehold.</p>
            <p>
              2. Indhent altid flere vurderinger af din bolig, inden du indgår
              aftale med en rådgiver om salg.
            </p>
            <p>
              3. Aftal en kort formidlingsperiode, hvis ejendomsmægleren er
              optimistisk med hensyn til ejendommens salgbarhed til den udbudte
              pris.
            </p>
            <p>4. Forsøg altid at få en "solgt eller gratis" aftale.</p>
            <p>
              5. Lad din boligadvokat gennemgå formidlingsaftalen, inden du
              skriver under.
            </p>
            <p>
              6. Før du underskriver formidlingsaftalen, skal du forlange, at
              der laves en salgsopstilling, et salgsbudget og en
              provenuberegning.
            </p>
            <p>
              7. Gennemgå oplysningerne i salgsbudgettet og salgsopstillingen
              for at sikre, at oplysningerne er i overensstemmelse med din egen
              viden. Rådfør dig altid med din boligadvokat eller bank om
              indfrielsesmåde og kurssikring af gamle lån, som køber ikke skal
              overtage.
            </p>
            <p>
              8. Oplys loyalt om dit kendskab til fejl og mangler i boligen-
              også selv om ingen spørger.
            </p>
            <p>
              9. Vær opmærksom på, at såfremt du som sælger ønsker at opnå
              ansvarsfrihed for fejl og mangler, kræves det, at køber, inden
              købsaftalen indgås, modtager tilstandsrapport, tilbud om
              ejerskifteforsikring og oplysninger om retsvirkningerne af, at
              disse dokumenter foreligger samt et uigenkaldeligt, skriftligt
              tilbud fra dig som sælger om, at du betaler halvdelen af præmien
              på købers ejerskifteforsikring, såfremt køber tegner en sådan.
            </p>
            <p>
              10. Inden du indgår en aftale med en rådgiver om at sælge din
              bolig, skal du få en præcis og skriftlig aftale om prisen og de
              nærmere vilkår for rådgiverens arbejde (formidlingsaftale) - og
              husk, du kan forhandle om prisen!
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default GodeRaadSaelger;

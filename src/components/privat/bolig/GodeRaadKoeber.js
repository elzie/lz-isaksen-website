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
class GodeRaadKoeber extends React.Component {
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
          <Headline>10 gode råd til køber</Headline>
          <InfoText>
            <p>1. Underskriv aldrig en købsaftale uden et advokatforbehold.</p>
            <p>
              2. Vær altid sikker på, at boligens pris ligger indenfor din
              økonomiske formåen. Få din boligadvokat eller bank til at lave et
              rådighedsbudget, som tager højde for alle udgifter og de ændrede
              skatteforhold, herunder dine personlige skatteforhold m.m.
            </p>
            <p>
              3. Foretag altid en grundig besigtigelse af ejendommen. Undgå
              såvidt muligt "åbent hus arrangementer" eller bed om at få lov at
              se ejendommen endnu engang. Medbring evt. en bygningssagkyndig -
              eller måske har du en håndværker i familien.
            </p>
            <p>
              4. Orienter dig så vidt muligt om prisniveauet i kvarteret eller
              spørg dine egne rådgivere - bank eller boligadvokat - om prisen er
              rigtig.
            </p>
            <p>
              5. Husk altid, at tilstandsrapporten ikke er nogen
              garantierklæring for, hvordan boligen er, og at kvaliteten og
              indholdet af rapporterne kan være forskellige. Overvej altid
              grundigt om der bør tegnes ejerskifteforsikring.
            </p>
            <p>
              6. Husk altid at spørge efter energimærke og energiplan. Du skal
              have disse oplysninger, inden du underskriver købsaftalen. En
              dårlig energimæssig tilstand bør give sig udslag i boligens pris.
            </p>
            <p>
              7. Vær opmærksom på, at den finansiering som mægler tilbyder i
              købsaftalen ikke nødvendigvis er den billigste. Rådfør dig altid
              med din boligadvokat eller din egen bank omkring det endelige valg
              af finansiering og evt. kurssikring heraf. Husk at nogle rådgivere
              (banker og ejendomsmæglere) samtidig tjener penge på at sælge de
              produkter, de rådgiver om.
            </p>
            <p>
              8. Hvis du køber lejlighed skal du være specielt opmærksom på
              økonomien i ejer- eller andelsboligforeningen, som du senere
              bliver medlem af.
            </p>
            <p>
              9. Hvis du som ugift køber en bolig med din samlever, bør du altid
              overveje at få udarbejdet en samejeoverenskomst og et testamente,
              ligesom I bør overveje at tegne krydsende livsforsikringer.
            </p>
            <p>
              10. Vælg dine rådgivere med omhu - din boligadvokat er din garanti
              for et godt boligkøb. Husk at ejendomsmægleren er sælgers
              repræsentant!
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default GodeRaadKoeber;

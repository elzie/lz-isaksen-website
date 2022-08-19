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

const PriceTable = styled.div`
  th {
    text-align: left;
  }
  tr {
  }
  td {
    // border-bottom: 1px solid #ccc;
    padding: 5px;
    width: 100px;
  }
`;
class FastePriser extends React.Component {
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
          <Headline>Faste priser</Headline>
          <InfoText>
            <p>
              Som din boligadvokat har vi valgt at indføre faste priser for køb
              og salg af fast ejendom. På denne måde er du sikker på ikke at få
              en grim overraskelse, når advokatregningen kommer.
            </p>

            <PriceTable>
              <table style={{ width: '100%' }}>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <h3>Køb af bolig</h3>
                    </td>
                    <td></td>
                    <td>
                      <h3>10.500,- kr.</h3>
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
              <p>
                Prisen er fast og omfatter vores samlede honorar for juridisk
                assistance i forbindelse med køb af bolig, herunder afholdelse
                møde med dig på vores kontor eller pr. telefon, godkendelse af
                købsaftalen, kontrol og ekspedition af digitalt skøde, kontrol
                og ekspedition af refusionsopgørelse og iøvrigt telefonsamtaler
                og korrespondance, oprettelse og journalisering.
              </p>
              <p>
                Prisen for rådgivning ved køb af andelsbolig er 9.000 kr. - for
                rådgivning ved indgåelse af aftale om færdighusprojekt 10.500
                kr. - for rådgivning ved indgåelse af entrepriseaftale om
                opførelse af bolig 10.500 kr.
              </p>
              <p>
                Er der tale om en liebhaver ejendom til en købspris på 7.000.000
                kr. eller derover er prisen for rådgivning 13.500 kr. inkl.
                moms.
              </p>
              <p>
                Passer din situation ikke på beskrivelserne, så kontakt os - så
                aftaler vi en fast pris netop for dig.
              </p>
              <table style={{ width: '100%' }}>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <h3>Salg af bolig</h3>
                    </td>
                    <td></td>
                    <td>
                      <h3>8.750,- kr.</h3>
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
              <p>
                Prisen er fast og omfatter vores samlede honorar for juridisk
                assistance i forbindelse med salg af din bolig, herunder
                afholdelse af møde med dig på vores kontor eller pr. telefon,
                godkendelse af købsaftalen, oprettelse, ekspedition og
                tinglysning af digitalt skøde, udarbejdelse og ekspedition af
                refusionsopgørelse og iøvrigt telefonsamtaler og korrespondance,
                oprettelse og journalisering.
              </p>
              <p>
                Passer din situation ikke på beskrivelserne, så kontakt os - så
                aftaler vi en fast pris netop for dig.
              </p>
              <h4>Advarsel</h4>
              <p>
                Mange aktører annoncerer med "skødeskrivning" til
                discountpriser.
              </p>
              <p>
                Seriøs partsrepræsentation og rådgivning i forbindelse med køb
                og salg af fast ejendom indebærer langt mere end blot at skrive
                et skøde - og der er som bekendt ofte sammenhæng mellem kvalitet
                og pris. Desuden udgør "skødeskrivningen" den mindste del af
                vores ydelse.
              </p>
              <p>
                Godkendelse af købsaftalens juridiske og finansielle indhold og
                den dertil knyttede rådgivning og den lovpligtige
                forsikringsdækning af det hermed forbundne ansvar er
                "kerneydelsen" fra boligadvokaten. Selve udarbejdelsen af skødet
                er en underordnet ting set i forhold hertil. Vær opmærksom på,
                at det er ulovligt for ejendomsmægleren at repræsentere køberen
                i en sag, hvor mægleren også repræsenterer sælger.
              </p>
              <p>
                Vi tilbyder ikke "skødeskrivning" - men seriøs og uafhængig
                rådgivning.
              </p>
              <p style={{ textAlign: 'right', fontStyle: 'italic' }}>
                Alle priser er angivet inkl. moms. ekskl. afgifter, gebyrer og
                lign. Priserne gælder for villaer, sommerhuse, andelsboliger og
                ejerlejligheder, hvor boligen er solgt eller købt via
                ejendomsmægler, og hvor der foreligger en underskrevet
                købsaftale. Der tages forbehold for prisændringer.
              </p>
            </PriceTable>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default FastePriser;

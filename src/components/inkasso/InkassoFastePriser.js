import React from 'react';
import styled from 'styled-components';

const InkassoContainer = styled.div``;

const InkassoSubContent = styled.div`
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
    min-width: 145px;
  }
`;

class InkassoFastePriser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // window.scrollTo(0, 0);
    // this.props.stickMenuToTop();
  }
  componentWillUnmount() {
    // this.props.unstickMenuFromTop();
  }

  render() {
    return (
      <InkassoContainer>
        <InkassoSubContent>
          <Headline>Faste priser</Headline>
          <InfoText>
            <p>
              Vores priser er afhængige af, om din kunde betaler efter at kravet
              er taget til inkasso. Hvis din kunde ikke betaler, tager vi
              konsekvensen, og nedsætter vores salær helt ned til 500 kr.
            </p>
            <p>
              Hvis du ønsker No Cure No Pay løsningen, kan du læse mere om vores
              tilbud om abonnementsinkasso her.
            </p>
            {/* TODO : make link  */}
            <h3>Priser på inkasso</h3>
            <PriceTable>
              <table style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4>Basisinkasso</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Basisinkasso omfatter oprettelse og journalisering,
                      indledende undersøgelser af kravet, beregning af renter og
                      rykkergebyrer, fremsendelse af inkassoskrivelse og evt.
                      opfølgende telefonisk henvendelse til debitor.
                    </td>
                    <td></td>
                    <td>
                      <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
                        500,- kr.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Udvidet inkasso</h4>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Udvidet inkasso omfatter oprettelse og journalisering,
                      indledende undersøgelser af kravet, beregning af renter og
                      rykkergebyrer, fremsendelse af inkassoskrivelse og evt.
                      opfølgende telefonisk henvendelse til debitor samt
                      indbringelse af sagen for domstolene ved betalingspåkrav.
                    </td>
                    <td></td>
                    <td>
                      <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
                        700,- kr.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Priser på tillægsydelser (ifm. inkasso)</h4>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Fogedservice</h4>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Indbringelse af sagen for fogedretten</td>
                    <td></td>
                    <td>250,- kr.</td>
                  </tr>
                  <tr>
                    <td>
                      Møde i fogedretten (omkostning pålægges debitor) -
                      variabel efter tilkendt mødesalær
                    </td>
                    <td></td>
                    <td>800,- kr.</td>
                  </tr>
                  <tr>
                    <td>Tinglysning af udlæg</td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>Orientering til 3. mand om udlæg</td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>Anmodning om politifremstilling</td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Afdragsservice</h4>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Oprettelse og administration af afdragsordning (10
                      måneder)
                    </td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>
                      Udsendelse af rykker ved afdragsordning (hvis debitor ikke
                      betaler)
                    </td>
                    <td></td>
                    <td>75,- kr.</td>
                  </tr>
                  <tr>
                    <td>Afregning af a conto beløb &lt; 10.000 kr.</td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>RKI Service</h4>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>RKI registrering af debitor</td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Andre tillægsydelser</h4>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Indhentelse af adresseoplysning</td>
                    <td></td>
                    <td>150,- kr.</td>
                  </tr>
                  <tr>
                    <td>Anmeldelse af krav overfor kurator eller likvidator</td>
                    <td></td>
                    <td>200,- kr.</td>
                  </tr>
                  <tr>
                    <td>Andet</td>
                    <td></td>
                    <td>'efter medgået tid'</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <h4>Gratis for dig</h4>
                      Som hovedregel vil sagens behandling være gratis for dig,
                      når din kunde betaler. Din kunde vil nemlig blive pålagt
                      at betale inkassoomkostningerne. Hvis du vælger
                      tillægsydelser, vil du komme til at betale herfor, idet
                      disse omkostninger ikke kan kræves betalt af din kunde.
                      Som eksempel på tillægsydelser, kan f.eks. nævnes
                      registrering af din kunde i RKI, administration af
                      afrdragsordning mv.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Få penge tilbage selvom din kunde ikke betaler!</h4>
                      Hvis din kunde ikke kan betale, er der desværre kun dig
                      til at betale… dog nedsætter vi som nævnt prisen og du vil
                      kunne få refunderet den betalte moms, få evt. betalt skat
                      retur og der er naturligvis fradrag for alle udgifter ved
                      inkassoarbejdet. På denne måde kan du få penge retur,
                      selvom din kunde ikke betaler!
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Få penge tilbage selvom din kunde ikke betaler!</h4>
                      Du kan også vælge vores løsning med No Cure No Pay. På
                      denne måde kan du sende alle dine inkassosager til os -
                      uden at betale noget som helst! Du kan læse mere om vores
                      abonnementsinkasso her.
                      {/* TODO : make link  */}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontStyle: 'italic', textAlign: 'right' }}>
                      Alle priser er angivet ekskl. moms og ekskl. gebyrer,
                      herunder retsafgifter. Der tages forbehold for
                      prisændringer. Priser for basis og udvidet inkasso finder
                      anvendelse på inkassosager med hovedstol på min. 2.500 kr.
                      og maks. 50.000 kr. For sager mellem 50.000 kr. og 100.000
                      kr. tillægges 300 kr. Priser for basis og udvidet inkasso
                      finder anvendelse, såfremt omkostninger til
                      inkassoarbejdet ikke betales af debitor.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </PriceTable>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default InkassoFastePriser;

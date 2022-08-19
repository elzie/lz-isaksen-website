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
class InkassoSagensForloeb extends React.Component {
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
          <Headline>Sagens forløb</Headline>
          <InfoText>
            <p>Forløbet af en inkassosag kan groft inddeles i 3 stadier:</p>
            <p>1) Udenretlig inkasso</p>
            <p>2) Indenretlig inkasso</p>
            <p>3) Tvangsinddrivelse</p>
            <h4>1) Udenretlig inkasso</h4>
            <p>
              Udenretlig inkasso er en betegnelse for den del af
              sagsbehandlingen, der foregår uden for domstolenes regi.
              Fremsendelse af rykkerskrivelser, inkassoskrivelse, aftale om
              afdragsordninger, indberetning til kreditoplysningsbureauer osv.
              hører under denne del af sagens behandling.
            </p>
            <p>
              Den udenretlige inkasso afsluttes oftes ved, at der indgås en
              aftale med debitor om betaling, og såfremt dette ikke kan lade sig
              gøre, vil sagen overgå til indenretlig inkasso. Sagen kan gå
              direkte til tvangsinddrivelse, hvis debitor anerkender at skylde
              beløbet, men der ikke opnås en aftale med debitor om betaling.
            </p>
            <h4>2) Indenretlig inkasso</h4>
            <p>
              Indenretlig inkasso er omvendt betegnelsen for den del af
              sagsbehandlingen, der foregår inden for domstolenes regi. Dette
              kan enten være ved fogedretten (betalingspåkrav) eller de
              almindelige domstole (stævning). Det kan være nødvendigt med
              indenretlig behandling af sagen, såfremt det ikke er muligt at få
              kontakt til debitor eller opnå en fornuftig aftale om betaling.
            </p>
            <p>
              For sager med en hovedstol på mindre end 100.000 kr. foregår den
              indenretlige del af sagsbehandlingen ved fogedretten ved
              indgivelse af et betalingspåkrav. I sager med en hovedstol på mere
              end 100.000 kr. indgives en stævning ved de almindelige domstole.
            </p>
            <p>
              Den indenretlige inkasso afsluttes ved, at der afsiges dom over
              debitor (stævning) eller at der gives en påtegning
              (betalingspåkrav), hvorefter gælden er fastslået af domstolene.
              Dette fundament kan bruges til at tvangsinddrive gælden.
            </p>
            <h4>3) Tvangsinddrivelse</h4>
            <p>
              Tvangsinddrivelse af gæld foregår i fogedretten, hvor debitor bor.
            </p>
            <p>
              Debitor har pligt til at møde i fogedretten og vil blive afhørt om
              sine økonomiske forhold under strafansvar.
            </p>
            <p>
              Er det ikke muligt for debitor at betale gælden - eventuelt ved
              afdragsvis betaling - vil der blive foretaget udlæg i debitors
              ejendele. Alle ejendele med økonomisk værdi kan "udlægges" på nær
              nogle få særligt undtagne ejendele. Ejendelene kan tvangssælges,
              hvis debitor ikke betaler gælden.
            </p>
            <p>
              Den tvangsmæssige inddrivelse afsluttes oftes ved at debitor har
              betalt gælden. I nogle tilfælde ejer debitor ikke ejendele med
              økonomisk værdi og debitor kan ikke betale gælden, hvorfor gælden
              må afskrives på grund af debitors insolvens.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default InkassoSagensForloeb;

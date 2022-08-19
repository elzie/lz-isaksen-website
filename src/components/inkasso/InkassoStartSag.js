import React from 'react';
import styled from 'styled-components';

const InkassoContainer = styled.div``;

const InkassoStartSagContent = styled.div`
  max-width: 1250px;
  margin: auto;
`;

const Headline = styled.h1`
  color: #223555;
  font-weight: 400;
  margin: 1rem 0;
`;

const InfoText = styled.div``;
class InkassoStartSag extends React.Component {
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
        <InkassoStartSagContent>
          <Headline>Start Inkassosag</Headline>
          <InfoText>
            <p>
              Det er nemt at starte en inkassosag hos os. Du udfylder bare
              skemaet online - og så er du igang. Du modtager straks en
              ordrebekræftelse og debitor vil modtage en henvendelse fra os
              dagen efter! Du er naturligvis også velkommen til at sende sagen
              pr. mail på post@isaksennomanni.dk.
            </p>
            <p>
              Din inkassosag vil blive behandlet i henhold til vores almindelige
              forretningsbetingelser og afregnet i overensstemmelse med vores
              faste priser på inkassoydelser, som du finder her på siden.
            </p>
            <p>
              Hvis du er tvivl om noget, skal du ikke tøve med at ringe til os
              eller sende os en mail. Se her, hvordan du kontakter os.
            </p>
            <p>
              Vi gennemgår alle oplysninger og vedhæftede bilag, som du sender
              til os, forinden vi tager kravet til inkasso. Så er vi sikre på,
              at der ikke opstår fejl. Hvis vi mangler oplysninger, kontakter vi
              dig.
            </p>
            <p>
              Når du starter en sag via vores hjemmeside - uden for abonnement -
              skal du vedhæfte kopi af faktura(er) og rykkerskrivelser. Filer af
              typen .PDF, .DOC, .DOCX., JPG, JPEG, GIF, TIF og PNG kan
              vedhæftes.
            </p>
            <p>
              Vær opmærksom på, at oplysninger og vedhæftede filer udveksles
              ukrypteret.
            </p>

            {/** TODO : make form */}
          </InfoText>
        </InkassoStartSagContent>
      </InkassoContainer>
    );
  }
}

export default InkassoStartSag;

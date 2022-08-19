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
class SikkerhedOgForsikring extends React.Component {
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
      <InkassoContainer>
        <InkassoSubContent>
          <Headline>Sikkerhed og forsikring</Headline>
          <InfoText>
            <h4>Forlang sikkerhed</h4>
            <p>
              At kræve sikkerhed for kundens betaling kan betyde, at du undgår
              dårlige betalere.
            </p>
            <p>
              Den nemmeste måde at sikre, at din kunde betaler regningen er jo
              naturligvis at kræve forudbetaling. Dette er dog ikke altid muligt
              rent forretningsmæssigt.
            </p>
            <p>Alternativet kan være at kræve bankgaranti.</p>
            <p>
              En bankgaranti anvendes typisk ved større leverancer. At stille en
              bankgaranti koster din kunde penge, men med en korrekt udformet
              garanti, vil der ikke senere opstå problemer med betalingen.
            </p>
            <p>
              Forinden du stiller krav om bankgaranti, bør du overveje, hvad
              eventuelle manglende betaling fra kunden vil kunne betyde for din
              virksomhed.
            </p>
            <p>
              Kontakt os, hvis du har spørgsmål til, hvorledes en bankgaranti
              bør udformes, så du sikres betaling fra dine kunder.
            </p>
            <h4>Kreditforsikring</h4>
            <p>
              Det er muligt at tegne forsikring mod manglende betaling. Flere
              forsikringsselskaber tilbyder sådan forsikring. Vi kan hjælpe dig
              med at vurdere behovet og mulighederne for at tegne en en
              kreditforsikring for din virksomhed.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default SikkerhedOgForsikring;

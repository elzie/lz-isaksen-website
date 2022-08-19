import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
class InkassoGodeRaad extends React.Component {
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
          <Headline>6 gode råd</Headline>
          <InfoText>
            <p>
              Du kan selv gøre forskellige ting for at undgå dårlige betalere.
              Dårlige betalere kan være dyre bekendtskaber, men der er heldigvis
              ting, som du selv kan gøre for at undgå at bruge tid på at rykke
              for betaling og sende kravet til inkasso.
            </p>
            <h4>1 - Hvem handler du med?</h4>
            <p>
              Hvem handler du med og skal der indhentes kreditvurdering eller
              foretages andre undersøgelser af kundens kreditværdighed?
            </p>
            <p>
              Hvem handler du med -{' '}
              <Link to="/inkasso/6-gode-raad/hvem-handler-du-med">
                læs mere her...
              </Link>
            </p>

            <h4>2 - Sikkerheder og forsikring</h4>
            <p>
              En mulighed for at undgå dårlige betalere kan være at kræve
              forudbetaling eller bankgaranti. Alternativt at tegne en
              kreditforsikring.
            </p>
            <p>
              Sikkerheder og forsikring -{' '}
              <Link to="/inkasso/6-gode-raad/sikkerhed-og-forsikring">
                læs mere her...
              </Link>
            </p>

            <h4>3 - Klare, skriftlige aftaler</h4>
            <p>
              Sørg for at have klare, skriftlige aftaler med din kunde. Dette
              kan hindre tab på dine kunder.
            </p>
            <p>
              Klare skriftlige aftaler -{' '}
              <Link to="/inkasso/6-gode-raad/klare-skriftlige-aftaler">
                læs mere her...
              </Link>
            </p>

            <h4>4 - Faktura og rykker</h4>
            <p>
              Send din faktura med det samme. Og vent heller ikke med at rykke
              for betaling.
            </p>
            <p>
              Faktura og rykkere -{' '}
              <Link to="/inkasso/6-gode-raad/faktura-og-rykker">
                læs mere her...
              </Link>
            </p>

            <h4>5 - Renter</h4>
            <p>
              Selvom reglerne for renteberegning er forskellige for forbrugere
              og erhvervsdrivende, bør du ikke snyde dig selv for renter, når
              din kunde betaler for sent.
            </p>
            <p>
              Renter -{' '}
              <Link to="/inkasso/6-gode-raad/renter">læs mere her...</Link>
            </p>
            <h4>6 - Reklamationer</h4>
            <p>
              Hvis din kunde reklamerer, bør der tages stilling med det samme.
            </p>
            <p>
              Reklamationer -{' '}
              <Link to="/inkasso/6-gode-raad/reklamationer">
                læs mere her...
              </Link>
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default InkassoGodeRaad;

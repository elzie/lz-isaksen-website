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
class InkassoIkkeBureau extends React.Component {
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
          <Headline>Ikke et bureau</Headline>
          <InfoText>
            <p>
              Når du bruger os til dine inkassosager, bliver dine sager
              behandlet af advokater. Du får din egen advokat, som behandler
              alle dine inkassosager. Hermed er du sikret, at alle faglige
              normer er overholdt, idet alle vores advokater deltager i
              efteruddannelse - og ikke bare på inkassoområdet.
            </p>
            <p>
              Du opnår også adgang til rådgivning på andre områder, idet du
              naturligvis altid er velkommen til at kontakte din advokat for
              spørgsmål om andet end inkasso. Vi kan således rådgive dig på alle
              væsentlige områder indenfor erhvervslivet.
            </p>
            <p>
              Du ringer bare til din advokat - eller sender en e-mail. Så får du
              hurtigt et klart svar.
            </p>
            <h4>Advokatinkasso</h4>
            <p>
              Inkassobureauer og andre virksomheder, der ikke er
              advokatvirksomheder, kan ikke tilbyde at gennemføre dine sager ved
              domstolene med en retssag. En retssag er nødvendig, hvis din kunde
              f.eks. har indsigelser overfor dit krav om betaling.
            </p>
            <p>
              Ved at bruge os, undgår du således at din sag behandles af flere
              forskellige sagsbehandlere eller virksomheder, der fordyrer og
              forlænger sagsbehandlingen.
            </p>
            <h4>Råd og vejledning</h4>
            <p>
              Vi sætter en ære i at du altid får en faglig korrekt vejledning -
              og hurtigt svar på dine spørgsmål.
            </p>
            <p>
              Derfor er du altid velkommen til at ringe til os, hvis du har
              spørgsmål.
            </p>
            <p>
              Vi har lavet en vejledning om rykkerskrivelser, som du kan læse.
              Så er du sikker på ikke at snyde dig selv, når du rykker for
              betaling af dine fakturaer.
            </p>
            <p>
              Du kan også læse en masse gode råd under punktet "Gode råd" - så
              er du klædt ordentlig på til at møde eventuelle dårlige betalere.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default InkassoIkkeBureau;

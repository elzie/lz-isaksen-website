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
class Advokatforbehold extends React.Component {
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
          <Headline>Advokatforbehold</Headline>
          <InfoText>
            <p>
              Husk altid at få et advokatforbehold - hvad enten du er køber
              eller sælger. Så er du godt hjulpet! Det er din garanti for, at
              din boligadvokat kan rådgive dig.
            </p>
            <p>
              Ofte er det den største investering du gør i livet – og mange ting
              kan gå galt, hvis du ikke bruger en boligadvokat.
            </p>
            <p>
              Det er vigtigt, at du altid betinger dig, at din boligadvokat skal
              godkende din bolighandel - hvad enten du er køber eller sælger.
              Advokatforbeholdet skal stå i købsaftalen.
            </p>
            <h4>For køber</h4>
            <p>
              Som køber har du typisk en lovbestemt fortrydelsesret.
              Fortrydelsesretten er på 6 hverdage fra den sidst parts skriftlige
              tiltræden af købsaftalen. Hvis du vil bruge fortrydelsesretten
              koster det en kontant kompensation til sælger på 1 % af den
              kontante købesum.
            </p>
            <p>
              Et advokatforbehold er en "ekstra" fortrydelsesret, der løber
              sideløbende med den lovbestemte fortrydelsesret. Og den er gratis.
            </p>
            <p>
              Et advokatforbehold giver din boligadvokat ret til at ændre,
              præcisere, tilføje i og i værste fald annullere købsaftalen, uden
              omkostninger til sælger eller til sælgers ejendomsmægler.
            </p>
            <p>
              En af de vigtigste grunde til at få indføjet et advokatforbehold
              er, at selvom du er godkendt af banken til købet, så har
              kreditforeningen ikke endeligt godkendt dig og boligen til
              belåning. Denne godkendelse kommer typisk 10-14 dage efter at
              begge parter har skrevet under, og dermed efter
              fortrydelsesfristen er udløbet.
            </p>
            <p>
              Du skal som køber selv sørge for, at advokatforbeholdet er
              indføjet i købsaftalen. Forbeholdet skal stå anført i købsaftalens
              punkt 16 under individuelle vilkår.
            </p>
            <h4>For sælger</h4>
            <p>
              For en sælger er det mindst ligeså vigtigt at sikre sig, at
              advokatforbeholdet er indføjet i købsaftalen.
            </p>
            <p>
              Du har nemlig som sælger ikke nogen lovbestemt fortrydelsesret. Et
              advokatforbehold i købsaftalen vil give dig en tilsvarende ret for
              din boligadvokat til at ændre, præcisere, tilføje i og i værste
              fald annullere købsaftalen.
            </p>
            <h4>Advokatforbeholdet</h4>
            <p>
              Husk altid at bruge et advokatforbehold og kontakt os meget gerne
              inden du underskriver købsaftalen.
            </p>
            <p>
              Købers advokatforbehold skal helst være formuleret som følger:
            </p>
            <p style={{ fontWeight: 'bold' }}>
              ”Købers underskrift på nærværende købsaftale er betinget af, at
              købers advokat kan godkende købsaftalen i dens helhed. Godkendelse
              skal være meddelt sælgers ejendomsmægler senest den XXX kl.
              16.00.”
            </p>
            <p>
              Ved anvendelse af forbeholdet som sælger, skal advokatforbeholdet
              helst være formuleret som følger:
            </p>
            <p style={{ fontWeight: 'bold' }}>
              ”Sælgers underskrift på nærværende købsaftale er betinget af, at
              sælgers advokat kan godkende købsaftalen i dens helhed.”
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default Advokatforbehold;

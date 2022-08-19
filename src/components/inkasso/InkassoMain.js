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

const InkassoContainer = styled.div``;

const InkassoStartSagContent = styled.div`
  max-width: 1250px;
  margin: auto;
`;

const InfoText = styled.div``;
class InkassoMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    // this.props.stickMenuToTop();
  }
  componentWillUnmount() {
    // this.props.unstickMenuFromTop();
  }

  render() {
    return (
      <InkassoContainer>
        <InkassoStartSagContent>
          <InfoText>
            <p>
              Som erhvervsdrivende vil du sandsynligvis på et eller andet
              tidspunkt komme ud for dårlige betalere. Og du vil måske komme ud
              for, at lige meget hvor mange aftaler du laver med din kunde, så
              sker betaling bare ikke. Alligevel tøver mange erhvervsdrivende
              med at henvende sig til en advokat, der kan tage kravet til
              retslig inkasso.
            </p>
            <p style={{ fontWeight: 'bold' }}>
              Måske mener du, <br />
              at det er besværligt, <br />
              at det er for dyrt og <br />
              at det tager for lang tid.
            </p>
            <p>Ikke hos Advokatfirmaet Isaksen & Nomanni!</p>
            <p>
              Det er <span style={{ fontWeight: 'bold' }}>NEMT</span>. Du sender
              bare et skema og en kopi af den ubetalte faktura - så ordner vi
              resten!
            </p>
            <p>
              Det er ofte <span style={{ fontWeight: 'bold' }}>GRATIS</span>. I
              det tilfælde din kunde indfrier fordringen, vil inkassosagen ofte
              være gratis for dig, idet din kunde bliver pålagt at betale
              omkostningerne.
            </p>
            <p>
              Det kan tage lidt <span style={{ fontWeight: 'bold' }}>TID</span>.
              Gennemførelse af en inkassosag kan tage tid, hvis sagen skal forbi
              domstolene. Sagsbehandlingstiden hos domstolene og din kundes
              handlinger kan medføre, at det kan tage lidt tid at gennemføre
              inkassosagen.
            </p>
            <h4>No-nonsense, kompetent og effektiv inkasso til faste priser</h4>
            <p>
              Dine sager behandles af advokater og specialuddannede
              advokatsekretærer på et advokatkontor. Ikke en studerende eller en
              kontormedarbejder på et inkassobureau, der ikke besidder den
              fornødne viden og uddannelelse. Dette sikrer dig adgang til
              specialviden - ikke bare om inkassoreglerne, men også al
              lovgivning, der har betydning for en effektiv inddrivelse af dine
              fordringer.
            </p>
            <p>
              Vi følger dine sager til dørs. Dine sager bliver ikke afsluttet,
              bare fordi debitor har indsigelser, eller på anden måde forsøger
              at undgå at betale. Vi kan som advokater gennemføre retssager som
              en naturlig forlængelse af inkassosagen og videreføre sagen i
              fogedretten for at tvangsinddrive fordringen.
            </p>
            <p>
              Og du er sikker på, at dine henvendelser bliver besvaret hurtigt.
              Hos os bliver dine henvendelser ikke lagt i en bunke i
              vindueskarmen. Vi vender altid hurigt tilbage - enten pr. e-mail
              eller med en opringning.
            </p>
            <p>
              Vores sagsbehandling er effektiviseret og rationaliseret, så du
              kan være sikker på, at dine inkassosager ekspederes med det samme.
              Og vi deler din interesse i, at sagerne fremmes mest muligt.
            </p>
          </InfoText>
        </InkassoStartSagContent>
      </InkassoContainer>
    );
  }
}

export default InkassoMain;

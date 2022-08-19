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
class Renter extends React.Component {
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
          <Headline>Renter</Headline>
          <InfoText>
            <h4>Forbrugere</h4>
            <p>
              Overfor forbrugere kan du kræve rentebetaling 30 dage fremsendelse
              af din faktura. Hvis din betalingsfrist er længere, kan renter
              beregnes fra betalingsfristens udløb.
            </p>
            <p>
              Der kan alene pålægges rente svarende til den officielle
              udlånsrente med tillæg af 7 %. Dette fremgår af Renteloven. Renten
              reguleres 2 gange årligt; den 1. juli og 1. januar.
            </p>
            <p>
              Du må ikke overfor forbrugere kræve en højere rente (gælder dog
              ikke pengeudlån, kontokort og lignende).
            </p>
            <h4>Erhvervsdrivende</h4>
            <p>
              Hvis ikke du har aftalt andet med din kunde, må du beregne renter
              som anført ovenfor vedrørende forbrugere.
            </p>
            <p>
              Der er dog intet i vejen for, at du aftaler andet med en
              erhvervsdrivende - både i forhold til starttidspunktet for
              renteberegningen og rentesatsen.
            </p>
            <p>
              Det er ikke nok at fremsende en faktura med en bemærkning om en
              bestemt rentesats. Aftalen om renteberegning, der fraviger
              Renteloven, skal ske senest samtidig med aftalen om levering.
            </p>
            <p>
              Vi kan hjælpe dig med at udforme almindelige
              forretningsbetingelser, så du ikke skal nøjes med Rentelovens
              rentesats, hvis det skulle ske, at din kunde ikke betaler til
              tiden.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default Renter;

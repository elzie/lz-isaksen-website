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
class HvemHandlerDuMed extends React.Component {
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
          <Headline>Hvem handler du med?</Headline>
          <InfoText>
            <p>
              Det er yderst vigtigt at finde ud af, hvem det er, du handler med.
              Lidt firkantet kan man sige, at der findes 4 forskellige typer af
              kunder;
            </p>
            <h4>1) Fysiske personer</h4>
            <p>
              Dette omfatter personligt drevne virksomheder og forbrugere. Hvis
              en kunde præsenterer sig med et virksomhedsnavn, bør du finde ud
              af, om der er tale om en personligt drevet virksomhed eller et
              selskab. Hvis der ikke er tale om et selskab, bør du anføre
              ejerens navn i forlængelse af virksomhedsnavnet; f.eks.
              "InterVenture ved Per Larsen" - og ikke bare "InterVenture". Rent
              juridisk findes "InterVenture" ikke!
            </p>
            <p>
              Du bør også bede om virksomhedens CVR nr. Alternativt kan du søge
              på www.cvr.dk (Det Centrale Virksomhedsregister).
            </p>
            <p>
              Er det ikke personen, der ejer virksomheden, der foretager en
              bestilling, bør du få oplyst bestillerens navn.
            </p>
            <h4>2) Selskaber</h4>
            <p>
              Dette omfatter primært anpartsselskaber (APS) og aktieselskaber
              (A/S). Hvis en kunde præsenterer sig med et selskabsnavn, bør du
              finde ud af, om selskabsnavnet er korrekt oplyst. Du bør bede om
              virksomhedens CVR nr. Alternativt kan du søge på www.cvr.dk (Det
              Centrale Virksomhedsregister).
            </p>
            <p>
              I forbindelse med afgivelse af bestilling, bør du bede om navnet
              på den, der bestiller.
            </p>
            <h4>3) Foreninger og organisationer</h4>
            <p>
              Dette omfatter private foreninger og organisationer, så som f.eks.
              idrætsforeninger.
            </p>
            <p>
              Du bør bede om foreningens CVR nr. Det er dog ikke alle
              foreninger, der har et CVR nr.
            </p>
            <p>
              I forbindelse med afgivelse af bestilling, bør du bede om navnet
              på den, der bestiller samt få oplyst personens funktion i
              foreningen.
            </p>
            <h4>4) Offentlige myndigheder og institutioner</h4>
            <p>
              Dette omfatter offentlige myndigheder, som f.eks. kommuner, og
              institutioner, som f.eks. skoler.
            </p>
            <p>
              Du bør bede om EAN nummer. Alle offentlige myndigheder og
              instituioner har et EAN nummer.
            </p>
            <p>
              I forbindelse med afgivelse af bestilling, bør du bede om navnet
              på den, der bestiller samt få oplyst personens funktion hos den
              offentlige myndighed eller institution.
            </p>
            <h4>Kreditvurdering</h4>
            <p>
              Forinden du indgår en endelig aftale med din kunde, kan kundens
              kreditværdighed undersøges. Dette er ikke en garanti for at du
              modtager betaling, men kan være en hjælp til din vurdering af, om
              du bør yde kredit til kunden.
            </p>
            <p>
              Flere virksomheder tilbyder at foretage kreditvurderinger mod
              betaling, men du kan også selv foretage nogle undersøgelser -
              eventuelt med hjælp fra os. Hvis du er kunde hos os, kan vi nemlig
              hjælpe dig med indhente kreditoplysninger uden at du behøver at
              tegne abonnementer hos kreditoplysningsbureauer.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default HvemHandlerDuMed;

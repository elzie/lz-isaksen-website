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
class SkriftligeAftaler extends React.Component {
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
          <Headline>Klare, skriftlige aftaler</Headline>
          <InfoText>
            <h4>Klare aftaler</h4>
            <p>
              Det er vigtigt, at både din kunde og du er enige om, hvad jeres
              aftaler går ud på. En senere tvivl kan betyde, at din kunde
              undlader at betale, hvilket kan medføre udgifter for dig.
            </p>
            <p>
              Det er langt nemmere at få ryddet eventuel tvivl af vejen, inden
              der indgås en endelig aftale med din kunde.
            </p>
            <h4>Skriftlige aftaler</h4>
            <p>
              Det er ikke muligt at skrive alle elementer af en aftale ned - og
              det er heller ikke altid pratisk muligt. Mundtlige aftaler er lige
              så bindende som skriftlige, men det kan være svært at bevise
              indholdet af en mundtlig aftale.
            </p>
            <p>
              Derfor bør du som det mindste bekræfte de vigtigste elementer i en
              aftale over for din kunde i en ordrebekræftelse. Dette omfatter
              naturligvis en pris, hvis der er aftalt en fast pris. Alternativt
              kan timepris, stykpris eller lignende angives.
            </p>
            <p>
              I en ordrebekræftelse kan dine almindelige forretningsbetingelser
              anføres. Hvis du ønsker hjælp til at udforme dine almindelige
              forretningsbetingelser, hjælper vi gerne med dette.
            </p>
            <p>
              Klare, skriftlige aftaler fra din side vil med sikkerhed opleves
              professionelt af dine kunder.
            </p>
            <h4>Senere ændringer til det aftalte</h4>
            <p>
              Såfremt der på et tidspunkt forinden levering aftales ændringer
              til den oprindelige aftale, bør dette også skriftligt bekræftes
              overfor din kunde. Her er det vigtigt at eventuelle ændringer i
              prisen anføres.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default SkriftligeAftaler;

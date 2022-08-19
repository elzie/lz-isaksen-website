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
class Reklamationer extends React.Component {
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
          <Headline>Reklamationer</Headline>
          <InfoText>
            <p>
              Skulle det vise sig, at din kunde ikke er tilfreds med din ydelse,
              bør kunden altid opfordres til straks at fremsende en skriftlig
              reklamation.
            </p>
            <p>
              Kundens reklamation bør behandles straks og svar på reklamation
              bør ske skriftligt.
            </p>
            <p>
              Hvis du afviser reklamationen, men kunden fastholder sin
              reklamation, bør du kontakte os for en drøftelse af dine
              muligheder. Det er ikke muligt at tage et krav til inkasso,
              såfremt kunden har reklameret (medmindre der er tale om en
              åbenbart grundløs reklamation).
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default Reklamationer;

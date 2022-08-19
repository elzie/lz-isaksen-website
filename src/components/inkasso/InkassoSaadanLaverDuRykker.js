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
class SaadanLaverDuRykker extends React.Component {
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
          <Headline>Sådan laver du en rykker</Headline>
          <InfoText>
            <p>
              Reglerne om rykkerskrivelser findes i renteloven og inkassoloven.
            </p>
            <p>
              Der må beregnes et rykkergebyr på 100 kr. (ikke momsbelagt) pr.
              rykkerskrivelse, dog maksimalt gebyrer for 3 rykkerskrivelser.
            </p>
            <p>Rykkerne må udsendes med min. 10 dages mellemrum.</p>
            <p>
              et er ikke et krav, at debitor skal modtage 3 rykkerskrivelser,
              dog skal sidste rykkerskrivelse inden kravet overdrages til
              inkasso indeholde en advarsel til debitor om, at der kan pålægges
              yderligere omkostninger.
            </p>
            <p>Du kan hente "Vejledning om rykkerskrivelser" her.</p>
            {/** TODO : file download */}
            <h4>Tekstforslag til første betalingspåmindelse</h4>
            <p>
              1. betalingspåmindelse må først sendes efter udløbet af
              betalingsfristen/forfaldstidspunket.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Vi har ikke har modtaget Deres indbetaling af forfaldne regninger.
              Derfor sender vi denne betalingspåmindelse.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Har De allerede betalt de(t) skyldige beløb inden for de sidste
              par dage, kan De se bort fra denne henven- delse. Hvis De har
              glemt at betale Deres regning(er), beder vi Dem straks indbetale
              beløbet. Beløbet bedes betalt til [giro/bankkonto].
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Kontoudtog og kopi af skyldige fakturaer er vedlagt. [Hvis
              fakturaer ikke vedlægges skal betalingspåmindelsen indeholde en
              beskrivelse af kravet]
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Der beregnes et gebyr på 100 kr. for denne betalingspåmindelse.
            </p>
            <h4>Tekstforslag til anden betalingspåmindelse</h4>
            <p>
              2. betalingspåmindelse må først sendes tidligst 10 dage efter 1.
              betalingspåmindelse.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Vi har stadig ikke modtaget Deres indbetaling af forfaldne
              regninger. Derfor sender vi denne betalingspåmindelse.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Det skyldige beløb på [beløb] kr. skal betales straks. Beløbet
              bedes betalt til [giro/bankkonto].
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Kontoudtog og kopi af skyldige fakturaer er vedlagt. [Hvis
              fakturaer ikke vedlægges skal betalingspåmindelsen indeholde en
              beskrivelse af kravet]
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Der beregnes et gebyr på 100 kr. for denne betalingspåmindelse.
            </p>
            <h4>
              Tekstforslag til sidste betalingspåmindelse forinden inkasso
            </h4>
            <p>
              Sidste betalingspåmindelse må først sendes tidligst 10 dage efter
              tidligere betalingspåmindelse.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              På trods af tidligere påmindelse har vi stadig ikke modtaget Deres
              indbetaling.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Vi opfordrer Dem derfor til straks at indbetale det skyldige beløb
              på [beløb] kr. Beløbet bedes betalt til [giro/bankkonto].
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Kontoudtog og kopi af skyldige fakturaer er vedlagt. [Hvis
              fakturaer ikke vedlægges skal betalingspåmindelsen indeholde en
              beskrivelse af kravet]
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Der beregnes yderligere 100 kr. i gebyr for denne
              betalingspåmindelse
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Såfremt det skyldige beløb ikke betales senest 10 dage fra dato,
              vil kravet uden yderligere varsel blive overdraget til inkasso,
              hvorved der påløber yderligere omkostninger, som skal betales af
              Dem.
            </p>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default SaadanLaverDuRykker;

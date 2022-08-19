import React from 'react';
import styled from 'styled-components';

import ClausEriksen from '../../assets/gfx/inkasso/clauseriksen.jpg';
import MichaelSvanholm from '../../assets/gfx/inkasso/michaelsvanholm.jpg';
import ThomasChristensen from '../../assets/gfx/inkasso/thomaschristensen.jpg';

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
          <Headline>Hvad siger andre?</Headline>
          <InfoText>
            <div>
              <h3>IT Basen ApS, Claus Eriksen</h3>
              <p style={{ fontWeight: 'bold' }}>
                Inkasso var meget billigere end jeg troede…
              </p>
              <img
                style={{ float: 'right', margin: '20px' }}
                src={ClausEriksen}
                alt="Claus Eriksen"
              />
              <p>
                Claus Eriksen, der er indehaver af IT Basen ApS i Viby, blev
                positivt overrasket, da han første gang måtte sende en skyldner
                til inkasso hos Advokatfirmaet Isaksen & Nomanni.
              </p>
              <p>
                <span style={{ fontStyle: 'italic' }}>
                  "Jeg tænkte jo umiddelbart, at det er tusindekrone-sedler, man
                  skal tælle op, når man sætter en advokat i gang med en opgave.
                  Det er jo det man hører. Så da jeg fik at vide, at en
                  basisinkasso kostede 500 kroner, blev jeg positivt
                  overrasket."
                </span>
                &nbsp; siger Claus Eriksen.
              </p>
              <p>
                Han havde godt 10.000 kroner til gode hos en kunde. Penge, som
                han selv havde rykket, rykket og rykket for. Men uden held.
              </p>
              <p>
                <span style={{ fontStyle: 'italic' }}>
                  "Men da advokaten blev koblet på, så skal jeg love for, at der
                  kom gang i tingene. Det viste sig, at jeg havde glemt at give
                  klienten ti dages frist i mine rykkerskrivelser, så det
                  klarede advokaten for mig med et brev. Da de ti dage så var
                  gået sendte advokaten inkassobrevet med trussel om fogedretten
                  og to dage senere havde jeg mine penge."
                </span>
                &nbsp; fortæller Claus Eriksen, der oplevede at hjælpen var
                stort set gratis.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                "For de fik jo også indkasseret de rykkergebyrer, der skulle
                have været betalt undervejs. Så jeg tror alt i alt, at jeg endte
                med at betale et par hundrede kroner."
              </p>
              <p>
                For Claus Eriksen er inkasso imidlertid ikke blot et spørgsmål
                om at få pengene inddrevet.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                "Det er næsten endnu vigtigere, at man kan fortsætte det gode
                samarbejde med kunden. Ved at bruge en advokat til at sige alle
                de grimme ting, så oplever jeg, at det er lettere at komme
                videre bagefter."
              </p>
            </div>
            <div>
              <h3>Ad Media ApS, Michael Svanholm</h3>
              <img
                style={{ float: 'right', margin: '20px' }}
                src={MichaelSvanholm}
                alt="Michael Svanholm"
              />
              <p style={{ fontWeight: 'bold' }}>
                En let og effektiv måde at få sine penge på
              </p>

              <p>
                Michael Svanholm fra AD Media i Aarhus har brugt Advokatfirmaet
                Isaksen & Nomanni til at inddrive tilgodehavender i flere år. Og
                med stor succes.
              </p>
              <p>
                <span style={{ fontStyle: 'italic' }}>
                  "Vi bruger dem vel i snit til 15-20 sager om året. Vores
                  virksomhed laver profilbrochurer, der er baseret på annoncer
                  og nogle af annoncørerne er desværre ikke så flinke til at
                  betale deres regninger. Vores tilgodehavender er typisk mellem
                  4.500 og 25.000 kroner, og det tager simpelthen for lang tid
                  for os, at få pengene hjem selv."
                </span>
                &nbsp; siger Michael Svanholm, der oplever en stor succesrate
                med inkassosagerne hos Isaksen & Nomanni.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                "Vi har en god dialog med vores advokat, der løser opgaverne til
                en fornuftig pris. Jeg overdrager blot sagsmaterialet til ham og
                så kører det uden mere besvær. Det giver mig ro i maven, for jeg
                synes helt principielt, at man skal betale sine regninger, hvis
                man har købt en vare. Derfor følger vi helt konsekvent op på
                alle skyldnere. Og det kan godt betale sig.
              </p>
            </div>
            <div>
              <h3>Responshuset I/S, Thomas Christensen</h3>
              <p style={{ fontWeight: 'bold' }}>
                Effektiv indsats sikrede os 97.000 kroner
              </p>
              <img
                style={{ float: 'right', margin: '20px' }}
                src={ThomasChristensen}
                alt="Thomas Christensen"
              />
              <p>
                Det så til at begynde med rigtigt skidt ud for Thomas
                Christensen, der driver Responshuset i Århus. En tidligere kunde
                skyldte Thomas Christensen 97.000 kroner. Og trods utallige
                henvendelser per brev og telefon, var der ingen respons og slet
                ingen penge fra skyldneren.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                "Vi satte så Isaksen & Nomanni på opgaven, for 97.000 kroner er
                altså et beløb, som jeg godt gider at slås for, siger Thomas
                Christensen, der fra sidelinjen så sagen gå hele vejen til
                fogedretten."
              </p>
              <p>
                Her udeblev modparten og Thomas Christensen fik dom for, at ikke
                bare det skyldige beløb, men også sagens omkostninger skulle
                betales af kunden.
              </p>
              <p>
                <span style={{ fontStyle: 'italic' }}>
                  "Og det var selvfølgelig fint. Bortset fra, at kunden påstod,
                  at der ikke var nogen penge at komme efter."
                </span>
                &nbsp; fortæller Thomas Christensen.
              </p>
              <p>
                <span style={{ fontStyle: 'italic' }}>
                  "Vores advokat var imidlertid meget grundig. Han fandt ud af,
                  at ejeren af virksomheden havde penge stående på en konto. Dem
                  gjorde han udlæg i og dagen efter havde vi alle pengene
                  stående på vores konto. Uden at det havde kostet os en krone.
                  Så kan man kun være tilfreds."
                </span>
                &nbsp; siger Thomas Christensen.
              </p>
            </div>
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default InkassoGodeRaad;

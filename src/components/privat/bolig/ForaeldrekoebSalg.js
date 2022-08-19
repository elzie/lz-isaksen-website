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
class ForaeldrekoebSalg extends React.Component {
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
          <Headline>Forældrekøb og -salg</Headline>
          <InfoText>
            <p>
              Et forældrekøb kan være en fordel, når børnene flytter hjemmefra
              for f.eks. at studere i enten Århus eller København.
            </p>
            <p>
              Som boligadvokater er vi specialiserede i rådgivning om køb og
              salg af fast ejendom - og naturligvis også forældrekøb.
            </p>
            <h4>Hvad er forældrekøb</h4>
            <p>
              Et forældrekøb er et køb af en bolig, hvor forældrene køber en
              ejerlighed eller villa og lejer boligen ud til barnet.
            </p>
            <p>
              Forældrekøb kan også være de voksne "børn", som køber en lejlighed
              og lejer den ud til deres gamle mor eller far. Det kaldes i daglig
              tale for "omvendt forældrekøb".
            </p>
            <h4>Fordele</h4>
            <p>
              Som din boligadvokat kan vi oplyse dig, hvilke fordele, du har ved
              at købe en forældrekøbslejlighed. Eksempekvis kan vi rådgive om,
              at den unge kan søge boligsikring til dækning af huslejen, og
              forældrene kan fratrække driftsudgifter og renter på lånene, der
              finansierer købet. Hertil kommer, at der over tid vil ske en
              opsparing i boligen via tilbagebetaling af afdrag på lånene.
            </p>
            <h4>Er udlejning tilladt</h4>
            <p>
              Som din boligadvokat vil vi sikre. at udlejning fra forældre til
              børn er tilladt i henholdvis ejerforeningen eller
              andelsforeningen. Vi undersøger bl.a. ejerforeningens vedtægt og
              de servitutter, der måtte være tinglyst på ejendommen, herunder om
              udlejning kræver forudgående godkendelse af ejerforeningens eller
              andelsforeningens bestyrelse.
            </p>
            <h4>Lejeloven</h4>
            <p>
              Udlejningen til den unge er omfattet af reglerne i lejeloven. Der
              er ikke noget krav om indgåelse af en skriftlig lejekontrakt, men
              det vil være et krav, når der skal søges boligsikring og som
              dokumentation overfor skattemyndighederne. Vi kan naturligvis
              hjælpe med at få lavet en skriftlig lejekontrakt, så der ikke
              senere opstår problemer i forhold til ansøgning om boligsikring og
              dokumentation for den aftalte husleje og lejevilkårerne i øvrigt.
            </p>
            <h4>Markedsvilkår</h4>
            <p>
              For at undgå problemer i forhold til ansøgning om boligsikring og
              i relation til SKAT er det et krav, at lejeaftalen indgås på
              markedsvilkår. Størrelsen på lejen skal være i overensstemmelse
              med "markedslejen"(eksklusive forbrug m.v.). Markedslejen er den
              leje, der ville kunne opnås, hvis lejemålet blev udlejet til en
              vilkårlig tredjemand. Hvis lejen er fastsat for lav, skal
              forældrene betale skat af "markedslejen" og ikke den aftalte leje.
              Og er huslejen for høj, kan der opstå problemer, når den unge skal
              søge om boligsikring. I kommuner, hvor husleje er reguleret f.eks.
              København, Frederiksberg, Aarhus og Odense, bør huslejen
              fastsættes med udgangspunkt i reglerne om omkostningsbestemt leje.
            </p>
            <h4>Boligsikring</h4>
            <p>
              Den unge betragtes juridisk som enhver anden lejer og den unge kan
              derfor ansøge om boligsikring hos kommunen.
            </p>
            <p>
              Reglerne om boligsikring er komplicerede, men udgangspunktet er,
              at der kan opnås et tilskud til huslejen på 15 % af huslejen for
              de første 65 m2 bolig.
            </p>
            <p>
              Er der mere end 65 m2 i lejemålet, ydes der kun forholdsmæssigt
              tilskud til de overskydende m2. Er der mere end en person i
              lejemålet, hæves grænsen på 65 m2 med 20 m2 for hver yderligere
              person.
            </p>
            <p>
              Der er et loft for, hvor stort et tilskud en lejer kan opnå. Det
              er muligt at foretage en forlods beregning på{' '}
              <a href="http://www.borger.dk/">www.borger.dk</a>, af den
              boligsikring man kan opnå, inden man som lejer indleverer en
              egentlig ansøgning om boligsikring til bopælskommunen.
            </p>
            <p>Boligsikring er skattefri indkomst for modtageren.</p>
            <h4>Hvis den unge fremlejer</h4>
            <p>
              Fremlejer den unge et eller flere værelser er indtægten herved
              skattefri for den unge. Dette forudsætter dog, at
              fremlejeindtægten (inkl. forbrug) er mindre end 2/3 af huslejen
              (ekskl. forbrug). Er lejeindtægten større, beskattes det
              overskydende beløb som personlig indkomst for den unge.
            </p>
            <p>
              Lejeindtægt modreges i boligsikring og det er vigtigt, at
              eventuelle fremlejeindtægter oplyses overfor
              boligsikringskontoret.
            </p>
            <h4>Lejeindtægten</h4>
            <p>
              Lejeindtægt er skattepligtig indkomst for forældrene og beskattes
              som personlig indkomst.
            </p>
            <p>
              Til gengæld har forældrene fradrag i den personlige indkomst for
              driftsudgifter – såsom ejendomsskat, fællesudgifter og
              omkostninger forbundet med vedligehold mv.
            </p>
            <p>
              Renteudgifter på lån, som forældrene har optaget i forbindelse med
              købet af boligen kan kun fradrages i kapitalindkomsten, og således
              ikke i den personlige indkomst. Anvender forældrene
              virksomhedsskatteordningen eller kapitalafkastordningen, vil det
              være muligt helt eller delvist at trække renteudgifter fra i den
              personlige indkomst.
            </p>
            <h4>Virksomhedsskatteordningen</h4>
            <p>
              Udlejning er i skattemæssig henseende erhvervsmæssig virksomhed.
              Det er begrundelsen for, at forældrene har mulighed for at anvende
              virksomhedsskatteordningen.
            </p>
            <p>
              Ved at anvende virksomhedsskatteordningen opnår forældrene fradrag
              i den personlige indkomst for renteudgifter. Omvendt forudsætter
              anvendelse af virksomhedsskatteordningen, at forældrene hvert år
              aflægger et egentligt regnskab for den erhvervsmæssige virksomhed.
              En eventuel udgift til revisor vil være fradragsberettiget.
            </p>
            <h4>Kapitalafkastordningen</h4>
            <p>
              Som et alternativ til virksomhedsskatteordningen kan forældrene
              vælge at anvende kapitalafkastordningen. Ved at anvende
              kapitalafkastordningen opnår forældrene mulighed for at fratrække
              en procentsats, (i 2011 – 2 %) af boligens kontantværdi ved
              anskaffelsen uden fradrag for prioritetsgæld, i den personlige
              indkomst, fremfor at skulle opgøre og fratrække de faktiske
              udgifter.
            </p>
            <p>
              Det beløb, der fratrækkes i den personlige indkomst ved brug af
              kapitalafkastordningen, tillægges samtidigt forældrenes
              kapitalindkomst.
            </p>
            <p>
              Det vil afhænge af forældrenes indtægter, værdien af boligen og de
              løbende omkostninger ved at eje boligen, om det bedst kan betale
              sig at anvende den ene eller den anden ordning.
            </p>
            <h4>Fortjeneste ved salg</h4>
            <p>
              En fortjeneste ved et senere salg af boligen, vil være
              skattepligtig. Fortjenesten beskattes som kapitalindkomst.
            </p>
            <p>
              Sælges boligen til den unge vil det, være muligt at begrænse den
              skattepligtige fortjeneste, hvis købesummen fastsættes til 15 %
              under den senest offentliggjorte ejendomsvurdering.
            </p>
            <h4>SKAT</h4>
            <p>
              SKAT har en række gode artikler om enmet på deres hjemmeside{' '}
              <a href="http://www.skat.dk/">www.skat.dk</a>.
            </p>
            <h4>Hvorfor forældrekøb</h4>
            <p>
              Det bærende element ved et forældrekøb, bør ikke være udsigten til
              en fortjeneste ved selve udlejningen. Der vil kun sjældent være et
              overskud. En eventuel fortjeneste ved salg vil naturligt først
              være en realitet ved selve salget af boligen.
            </p>
            <h4>Alternativ</h4>
            <p>
              Et alternativ til et forældrekøb kunne være at yde den unge et lån
              - f.eks. til udbetaling, handelsomkostninger og eventuelle
              flytteomkostninger. Endvidere kan det være en hjælp for den unge,
              hvis forældrene kan kautionere overfor bank og/eller
              realkreditinstitut for tilbagebetaling af lån.
            </p>
            <p>
              Ved at hjælpe den unge på disse måder, undgås arbejdet med
              aflæggelse af årlige regnskaber vedrørende udlejningsvirkomheden,
              ligesom en eventuel fortjeneste ved et salg af boligen vil være
              skattefri (for den unge).
            </p>
            <p>
              Ulemperne ved, at den unge selv køber en bolig er at den unge ikke
              har mulighed for at få bolisikring. Herudover skal der betales
              sædvanlig ejendomsværdiskat. Og den unge vil heller ikke kunne
              opnå samme ret til fradrag for renteudgifter, som forældrene ved
              brug af virksomhedsskatteordningen eller kapitalafkastordningen.
            </p>
            <h3>Forældresalg</h3>
            <p>Skal sommerhuset overdrages til børnene?</p>
            <p>
              Det kan have store skattemæssige konsekvenser for dig at overdrage
              sommerhuset til børnene, hvis du ikke søger rådgivning hos din
              advokat. Du risikerer, at der ikke er taget højde for en lang
              række forhold, herunder også, at sommerhuset overdrages til en
              højere pris end hvad du kan ifølge reglerne.
            </p>
            <p>
              Hvis alle forhold ikke afklares inden overdragelsen, risikerer du,
              at det overdragne sommerhus bliver en del af en dine børns
              eventuelle skilsmisse, eller at børnene bliver uvenner, fordi der
              ikke er regler for deres sameje om sommerhuset.
            </p>
            <p>
              Som din boligadvokat sørger vi for alt, når en ejendom skal
              overdrages fra forældre til børn.
            </p>
            <p>
              Som din boligadvokat rådgiver vi om købesummens størrelse og dine
              muligheder i relation til beskatning. Vi udarbejder købsaftale og
              andre dokumenter, f.eks. lånedokumenter, gavebreve og pantebreve,
              og vi tinglyser overdragelsen og eventuelle pantebreve digitalt.
            </p>
            <p>
              Som din boligadvokat rådgiver vi også om mulighederne for at gøre
              ejendommen til særeje for børnene, og om retningslinjerne for
              børnenes sameje af ejendommen. Og meget mere.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default ForaeldrekoebSalg;

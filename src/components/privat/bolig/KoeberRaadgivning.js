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
class KoeberRaadgivning extends React.Component {
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
          <Headline>Køberrådgivning</Headline>
          <InfoText>
            <p>
              Som din boligadvokat arbejder vi efter princippet om "Ingen
              bolighandel - ingen advokatregning". Når du vælger os som din
              boligadvokat, kan vi hjælpe dig med alle aspekter af din
              bolighandel, såsom besigtigelse, vurdering, prisforhandling,
              finansiering, skødeskrivning m.v.
            </p>
            <p>
              Vi arbejder med faste priser - så du ved hvad det koster fra
              starten af. Hvis du kun har brug for hjælp fra os i mere begrænset
              omfang kan dette naturligvis også aftales.
            </p>
            <p>
              Som din boligadvokat har vi fokus på, at du kommer trygt gennem
              dit boligkøb - vi tilbyder uafhængig og seriøs rådgivning. Vi har
              mere end 12.000 succesfulde bolighandler bag os.
            </p>
            <p>
              Hvis du har spørgsmål, er du altid velkommen til at kontakte os
              for en uformel drøftelse af dit boligkøb.
            </p>
            <p>
              Nedenfor kan du læse mere om det, vi kan hjælpe med: en slags
              tjek-liste.
            </p>
            <p>
              Begynd med at kontakte os - så kan du ganske uforpligtende få et
              tilbud på, hvad vi som boligadvokater kan hjælpe dig med!
            </p>
            <h4>Din privatøkonomi</h4>
            <p>
              At købe bolig er ofte den største økonomiske dispostion, du kommer
              ud for i dit liv. Næsten alle har brug for at låne penge til et
              boligkøb.
            </p>
            <p>
              Vi kan gennemgå din økonomi sammen med dig, og give dig svar på,
              om du kan skaffe den nødvendige udbetaling, om din økonomi kan
              bære de løbende udgifter til afdrag, renter, skat, vedligeholdelse
              osv. Men også om du kan forvente at blive godkendt som låntager i
              banker og kreditforeninger og give dig svar på de skattemæssige
              spørgsmål, som bolighandlen giver anledning til.
            </p>
            <p>
              Som din bolligadvokat kan vi også rådgive dig om dine muligheder
              for at sikre dig selv og din familie, herunder hvorvidt det er
              fornuftigt at oprette testamente, lave en samejeoverenskomst,
              ægtepagt osv.
            </p>
            <h4>Boligens pris</h4>
            <p>
              Vi kan hjælpe dig med at finde ud af, om prisen for boligen er
              rimelig.
            </p>
            <p>
              Ejendomsmæglerens opgave er at sælge boliger - vores opgave er at
              rådgive dig.
            </p>
            <p>
              Vi benytter vores lokalkendskab, vores viden om tidligere
              ejendomshandler og de tilgængelige oplysninger om den konkrete
              ejendoms størrelse, vedligeholdelse osv.
            </p>
            <p>
              Hvis du ønsker det, kan vi også foretage en besigtigelse af
              ejendommen.
            </p>
            <h4>Anvendelighed</h4>
            <p>
              Lang transport mellem hjem og arbejde kan være både dyr og
              besværlig.
            </p>
            <p>
              Beliggenheden af skoler, institutioner, indkøbsmuligheder m.v. kan
              også spille en stor rolle for, om du finder dig til rette i din
              nye bolig.
            </p>
            <p>
              Vi hjælper dig med at bedømme prisen i forhold til boligens
              anvendelighed for netop dig.
            </p>
            <h4>Fortrydelsesret og advokatforbehold</h4>
            <p>
              Når du skriver under på en købsaftale er din underskrift bindende.
              Det er derfor altid en god idé at lade din boligadvokat gennemgå
              aftalen, inden du skriver under.
            </p>
            <p>
              Alternativet hertil er, at du indsætter en advokatforbehold i
              købsaftalen. Så får du mulighed for at overveje situationen igen
              efter, at du har drøftet handlen med din boligadvokat.
            </p>
            <p>
              Udover et advokatforbehold har køber en lovbestemt fortrydelsesret
              på 6 hverdage. Hvis du som køber fortryder handlen, skal du betale
              1% af købesummen til sælger. Et advokatforbehold er gratis.
            </p>
            <h4>Tilstandsrapport og ejerskifteforsikring</h4>
            <p>
              Typisk får sælger lavet en tilstandsrapport, som siger noget om
              boligens ”sundhedstilstand”.
            </p>
            <p>
              Vi rådgiver dig om indholdet af tilstandsrapporten og hjælper dig
              med at vurdere, om der er forhold, der skal undersøges nærmere. I
              mange tilfælde kan det være en god ide at få en fagkyndig til at
              gennemgå huset.
            </p>
            <p>
              Du skal også kende dine rettigheder i forhold til en
              ejerskifteforsikring, blandt andet muligheden for at rejse krav
              mod forsikringsselskabet, hvis det viser sig, at der er mangler
              ved boligen.
            </p>
            <p>
              Det kan også være en mulighed at indhente et alternativt tilbud på
              en egnet ejerskifteforsikring. Som din boligadvokat rådgiver vi
              også om det.
            </p>
            <h4>Forsikringer</h4>
            <p>
              Alle ejerboliger skal være brandforsikret, hvis der er pant i
              ejendommen. Herudover skal du overveje, hvilke andre forsikringer,
              der skal tegnes.
            </p>
            <p>
              Som din boligadvokat gennemgår vi boligens forsikringsforhold og
              vejleder dig om hvilke forsikringer, som f.eks. husforsikring,
              bygningskaskoforsikring, ejerskifteforsikring og indboforsikring,
              der bør tegnes.
            </p>
            <h4>Energiforhold</h4>
            <p>
              Der er øget fokus på energiforbruget i boligen og boligens
              energiforbrug kan få betydelige økonomiske konsekvenser for dig
              som køber.
            </p>
            <p>
              Som din boligadvokat vejleder vi dig om reglerne for
              energimærkning og energiplan.
            </p>
            <h4>Miljøforhold</h4>
            <p>
              Som din boligadvokat orienterer vi dig om eventuelle
              forureningsproblemer og andre miljøforhold, herunder om der er
              noteret et affaldsdepot på den ejendom, du vil købe.
            </p>
            <p>
              Sådanne forhold spiller en stor rolle for boligens pris og for
              muligheden for at sælge den igen.
            </p>
            <h4>Finansiering</h4>
            <p>
              Finansieringen af din bolig skal passe sammen med din økonomi og
              dine planer.
            </p>
            <p>
              Som din boligadvokat rådgiver vi dig om, hvordan du bedst
              sammensætter en finansiering, som passer til dine ønsker nu og til
              fremtiden.
            </p>
            <p>
              Vores rådgivning omfatter, hvad der er den mest fordelagtige
              finansiering for dig og vi gennemgår fordele og ulemper ved de
              forskellige lånetyper. Som din boligadvokat rådgiver vi også om de
              skattemæssige forhold i forbindelse med valg af lån.
            </p>
            <p>
              Det er værd at vide, at vi som boligadvokater - i forhold til
              ejendomsmæglere, forsikringsselskaber og pengeinstitutter - ikke
              må modtage provisioner fra eksempelvis pengeinstitutter,
              realkreditinstitutter, pantebrevsselskaber og
              forsikringsselskaber. Derfor kan vi altid give dig et helt
              uvildigt råd om den bedste løsning.
            </p>
            <h4>Kurssikring</h4>
            <p>
              Når du køber en bolig skal du tage stilling til om dine lån skal
              kurssikres.
            </p>
            <p>
              Som din boligadvokat vil vi rådgive dig om fordele og ulemper i
              din situation, og gennem et tal-eksempel får du overblik over
              økonomiske konsekvenser af manglende kurssikring ved en ugunstig
              kursudvikling.
            </p>
            <h4>Servitutter, byrder og hæftelser</h4>
            <p>
              Som din boligadvokat er vi din garant for, at ejendommens tilstand
              med hensyn til servitutter, byrder og hæftelser er i
              overensstemmelse med, hvad der fremgår af salgsopstillingen eller
              andre oplysninger, du har fået af sælgeren.
            </p>
            <h4>Købsaftalen</h4>
            <p>
              Som din boligadvoktat gennemgår vi udkastet til købsaftale og de
              andre dokumenter, så du er sikker på, at købsaftalen er udformet
              på en betryggende måde for dig.
            </p>
            <p>
              Og hvis det er nødvendigt tager vi forhandlingen med sælgeren om
              den rigtige udformning af købsaftalen.
            </p>
            <h4>Skøde og økonomisk opgørelse</h4>
            <p>
              Som din boligadvokat klarer vi al papirarbejdet i forbindelse med
              bolighandelen, herunder:
            </p>
            <ul>
              <li>Udarbejdelse af det digitale skøde</li>
              <li>
                Udarbejdelse af refusionsopgørelse - med fordeling af de
                udgifter, sælgeren skal betale, og de udgifter den nye ejer skal
                bære
              </li>
              <li>
                Udarbejdelse af sælgerpantebrev, hvis et sådant skal udstedes
              </li>
              <li>Tinglysning af dokumenter</li>
              <li>Frigivelse af købesummen og afslutning af handelen</li>
            </ul>
            <p>
              Hvis skødet ikke kan tinglyses uden anmærkninger, sørger vi for,
              at sælger bringer det pågældende forhold i orden, inden købesummen
              frigives.
            </p>
            <h4>Andre spørgsmål</h4>
            <p>
              Anskaffelse af en ny bolig kan ofte være en meget god anledning
              til at vurdere om du har sikret dig selv og din famlie godt nok
              rent økonomisk. Mange vælger at leve "papirløst" og har børn fra
              et tidligere forhold. Dette kan gøre det ekstra nødvendigt at få
              klarlagt, hvad der skal ske, såfremt uheldet er ude.
            </p>
            <p>
              Du kan få rabat på at få lavet et testamente, en ægtepagt, en
              lejekontrakt, en samejeoverenskomst hvis du får det lavet samtidig
              med, at du bruger os som boligadvokat.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default KoeberRaadgivning;

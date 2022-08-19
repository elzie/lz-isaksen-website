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
class SaelgerRaadgivning extends React.Component {
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
          <Headline>Sælgerrådgivning</Headline>
          <InfoText>
            <p>
              Når du skal sælge din bolig, har du brug for uafhængig og seriøs
              rådgivning. Som din boligadvokat, har vi har stor erfaring inden
              for rådgivning ved salg af bolig - og vi kan tilbyde
              konkurrencedygtige priser.
            </p>
            <p>
              Du kan vælge at lade os hjælpe dig med alle led i bolighandlen –
              vi påtager os dog ikke selve salgsarbejdet.
            </p>
            <p>
              Som din boligadvokat kan vi besigtige din bolig, herunder komme
              med en prisvurdering, forhandling af formidlingsaftale med
              ejendomsmægler, bistand til ”selvsalg” og i den forbindelse
              prisforhandlinger med en eventuel køber osv.
            </p>
            <p>
              Hvis du imidlertid kun har brug hjælp i mere begrænset omfang, kan
              dette naturligvis også aftales.
            </p>
            <p>
              Nedenfor kan du læse mere om det, vi som boligadovkater kan hjælpe
              med: en slags tjekliste.
            </p>
            <p>
              Begynd med at kontakte os - så kan du få et tilbud på, hvad vi som
              specialiserede boligadvokater kan hjælpe dig med!
            </p>
            <h4>Boligen skal sættes til salg</h4>
            <p>
              Hvis du har truffet beslutningen om at sælge, skal der i første
              omgang findes en køber.
            </p>
            <p>
              Vi kan rådgive dig om fordele og ulemper ved at benytte
              forskellige salgskanaler, f.eks. salg gennem ejendomsmægler, ”sælg
              selv-metoden” - eventuelt med bistand fra os osv.
            </p>
            <p>
              Hvis du vælger at benytte en ejendomsmægler kan vi gennemgå et
              udkast til formidlingsaftale med henblik på at sikre, at vilkårene
              er rimelige for dig som sælger. Vi ser blandt andet se på aftalens
              varighed, rimeligheden af den foreliggende plan for markedsføring
              af boligen, ejendomsmæglerens salær m.m.
            </p>
            <h4>Boligens pris</h4>
            <p>
              Vi kan rådgive dig om, til hvilken pris din bolig realistisk kan
              sælges.
            </p>
            <p>
              I en sådan situation kan vi udnytte vores lokalkendskab, viden om
              tidligere ejendomshandler og de foreliggende oplysninger om den
              konkrete ejendoms størrelse, vedligeholdelsestilstand osv.
            </p>
            <p>
              Hvis du ønsker det, kan vores rådgivning om prisen ske på grundlag
              af en besigtigelse af boligen.
            </p>
            <h4>Finansiering</h4>
            <p>
              Vi kan rådgive dig om, med hvilke finansieringsforslag ejendommen
              skal udbydes og om den mest fordelagtige indfrielsesmetode for
              eventuelt indestående pantehæftelser, som ikke skal overtages af
              køberen.
            </p>
            <p>
              Som boligadvokat informerer vi dig tillige om muligheden for at
              kurssikre din indfrielse, hvilket kan give dig sikkerhed for dit
              provenu ved salg af ejendommen.
            </p>
            <p>
              Det er værd at vide, at vi som boligadvokater ikke må modtage
              provisioner fra eksempelvis pengeinstitutter,
              realkreditinstitutter, pantebrevsselskaber og
              forsikringsselskaber. Derfor kan vi altid give dig et helt
              uvildigt råd om den bedste løsning.
            </p>
            <h4>Kurssikring</h4>
            <p>
              I vores rådgivning klarlægger vi, om du i forbindelse med handlen
              bærer en kursrisiko.
            </p>
            <h4>Tilstandsrapport og ejerskifteforsikring</h4>
            <p>
              Som boligadvokater vejleder vi dig grundigt om reglerne i lov om
              forbrugerbeskyttelse ved erhvervelse af fast ejendom m.v.,
              herunder om fordelene og ulemperne ved at fremlægge
              tilstandsrapport og tilbud om ejerskifteforsikring.
            </p>
            <p>
              Såfremt du ønsker det, sørger vi for, at de nødvendige dokumenter
              udarbejdes eller indhentes og giver en vurdering af betydningen
              heraf ved salgsplanlægningen.
            </p>
            <h4>Energimærke og energiplan</h4>
            <p>
              Vores rådgivning omfatter vejledning om de pligter du har som
              boligsælger efter reglerne for energimærkning og energiplan efter
              den særlige lov om fremme af energi- og vandbesparelser i
              bygninger.
            </p>
            <h4>Købers fortrydelsesret</h4>
            <p>
              Som din boligadvokat vil vi også vejlede dig om reglerne om
              køberens fortrydelsesret efter lov om forbrugerbeskyttelse ved
              erhvervelse af fast ejendom m.v.
            </p>
            <h4>Loyal oplysningspligt</h4>
            <p>Som sælger har du en loyal oplysningspligt overfor køber.</p>
            <p>
              Den loyale oplysningspligt indebærer, at du som sælger altid skal
              fortælle alt, hvad du ved om husets tilstand for at undgå
              problemer senere.
            </p>
            <p>
              Som din boligadvokat hjælper vi dig med at opfylde din loyale
              oplysningspligt med hensyn til din boligs forhold.
            </p>
            <h4>Skattemæssige forhold</h4>
            <p>
              Som din boligadvokat afklarer vi det skatte- og afgiftsmæssige
              forhold ved et salg af bolig, herunder hvorvidt en avance er
              skattepligtig.
            </p>
            <h4>Købsaftalens indgåelse</h4>
            <p>
              Som din boligadvokat bistår vi med udarbejdelse af købsaftale
              eller gennemgår et udkast hertil fra mægleren eller køberen. Vi
              gennemgår også de mange bilag og det med småt med henblik på at
              sikre, at købsaftalen er udformet på en betryggende måde for dig.
            </p>
            <p>
              Købsaftalen kan gøres betinget af advokatforbehold, hvilket vi
              naturligvis vil rådgive dig om.
            </p>
            <p>
              Hvis du ønsker det, kan vi som specialiserede boligadvokater
              deltage i forhandlingerne med køberen om den nærmere udformning af
              købsaftalen.
            </p>
            <h4>Økonomisk opgørelse</h4>
            <p>
              Når købsaftalen er indgået, er der nogle forholdsregler, som skal
              iagttages.
            </p>
            <p>
              Som din boligadvokat sikrer vi, at skødet udfærdiges og ekspederes
              korrekt, herunder at der ikke gives endeligt skøde, før køberen
              har opfyldt sine forpligtelser.
            </p>
            <p>
              Som din boligadvokat sikrer vi også, at gældsovertagelsen m.v.
              ekspederes korrekt, således at du bliver frigjort for
              forpligtelser, der påhviler dig efter skæringsdagen.
            </p>
            <p>
              Som din boligadvokar sørger vi for, at handlens ekspeditioner sker
              så praktisk og omkostningsbesparende som muligt.
            </p>
            <h4>Andre spørgsmål</h4>
            <p>
              Ændring af boligforhold kan ofte være en meget god anledning til
              at vurdere om du har sikret dig selv og din famlie godt nok
              økonomisk. Mange vælger at leve "papirløst" og har børn fra et
              tidligere forhold. Dette kan gøre det ekstra nødvendigt at få
              klarlagt, hvad der skal ske, såfremt uheldet er ude.
            </p>
            <p>
              Vores rådgivning vil omfatte sådanne forhold - og det er værd at
              bemærke, at vores priser på at få lavet et testamente, en
              ægtepagt, en lejekontrakt, en samejekontrakt osv. er lavere, når
              du samtidig bruger os som din boligadvokat.
            </p>
            <h4>Faglig kvalitet</h4>
            <p>
              Når du vælger at bruge os som din boligadvokat kan du være sikker
              på, at få en rådgivning og bistand, som svarer til højeste faglige
              standard.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default SaelgerRaadgivning;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
class FakturaOgRykker extends React.Component {
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
          <Headline>Faktura og rykker</Headline>
          <InfoText>
            <h4>Faktura</h4>
            <p>
              Der er ingen gode grunde til at vente med at fremsende faktura for
              den ydelse, du har leveret. Fremsend en faktura til din kunde
              umiddelbart efter levering.
            </p>
            <p>
              Din kundes tilfredshedskurve vil typisk falde jo længere tid, der
              går efter levering. Et gammelt ordsprog siger, at regningen skal
              sendes medens kunden stadig har tårer i øjnene...
            </p>
            <p>
              En faktura skal naturligvis overholde lovgivningens krav, men
              derudover bør din faktura være overskuelig og udspecificeret, så
              kunden har en mulighed for at se, hvorledes denne er sammensat.
            </p>
            <h4>Betalingsfrist</h4>
            <p>
              Hvis ikke der er aftalt en betalingsfrist, er du berettiget til at
              kræve betaling med det samme. Der findes dog inden for visse
              brancher kutymer eller traditioner, men udgangspunktet er altså
              "netto kontant", hvilket betyder "med det samme".
            </p>
            <p>
              Du bør overveje, om der er nogen konkret begrundelse for at yde
              dine kunder en lang betalingsfrist. Du har jo foretaget levering,
              så hvorfor skal du vente f.eks. 30 dage med modtage betalingen?
            </p>
            <h4>Rykkere</h4>
            <p>
              Såfremt din kunde ikke betaler efter betalingsfristens udløb, bør
              der omgående sendes en betalingspåmindelse. Det kan virke
              provokerende på din kunde at modtage en rykker efter kort tids
              overskridelse af betalingsfristen.
            </p>
            <p>
              Betalingspåmindelsen bør dog angive, at betaling skal ske inden 10
              dage, idet der i modsat fald kan påløbe rykkergebyr. Samtidig bør
              du allerede i betalingspåmindelsen beregne renter.
            </p>
            <p>
              Såfremt kunden fortsat ikke betaler dit tilgodehavende efter
              udløbet af 10-dages fristen, bør der omgående sendes en
              rykkerskrivelse. Du er berettiget til at opkræve 100 kr. (ikke
              momspligtigt) i rykkergebyr. Igen skal det fremgå af
              rykkerskrivelsen, at betaling skal ske inden 10 dage.
            </p>
            <p>
              I henhold til lovgivningen er du berettiget til at opkræve i alt
              100 kr. i rykkergebyr pr. rykker, du sender til kunden - dog
              maksimalt 3 gebyrer.
            </p>
            <p>
              Det er ikke et krav, at du udsender 3 rykkere forinden du kan tage
              kravet til inkasso. Dette kan ske allerede efter 1.
              rykkerskrivelse. Det er dog et krav, at der i hver rykker
              indrømmes kunden en frist på 10 dage til at betale kravet.
              Endvidere er det et krav, at det i den sidste rykkerskrivelse, som
              du sender til kunden, er anført, at manglende betaling kan medføre
              at kravet tages til inkasso, hvorved, der kan påføres yderligere
              omkostninger, der skal betales af kunden.
            </p>
            <p>
              Har kunden ikke betalt efter din sidste rykkerskrivelse, bør
              kravet straks tages til inkasso - og der er her, at vi kan tilbyde
              forskellige løsninger.
            </p>
            <h4>Kompensationsgebyr</h4>
            <p>
              For krav som opstår den 1. marts 2013 eller senere - dvs. krav,
              der forfalder til betaling den 1. marts eller senere - har du ret
              til et fast kompensationsbeløb på 310 kr. til dækning af
              inddrivelsesomkostninger. Dette kompensationsgebyr kan pålægges
              uden fremsendelse af rykkerskrivelser, advarsler, påkrav eller
              andet, og påvirker ikke din ret til renter, rykkergebyrer eller
              sædvanlige inddrivelsesomkostninger (inkassoomkostninger).
            </p>
            <p>
              Du kan kun pålægge kunden at betale kompensationsgebyr, hvor både
              du og kunden er erhvervsdrivende og har handlet indenfor jeres
              erhverv.
            </p>
            <h4>Vejledning</h4>
            <p>
              Vi har udarbejdet en vejledning om rykkere, som du kan downloade
              eller printe ud. Vejledningen indeholder også forslag til
              formulering af dine rykkerskrivelser, så du er sikker på, at
              lovgivningens regler overholdes. Hvis du ønsker at læse
              vejledningen her på siden, kan du læse artiklen{' '}
              <Link to="/inkasso/saadan-laver-du-en-rykker">
                "Sådan laver du en rykker".
              </Link>
            </p>
            {/**TODO Make link */}
          </InfoText>
        </InkassoSubContent>
      </InkassoContainer>
    );
  }
}

export default FakturaOgRykker;

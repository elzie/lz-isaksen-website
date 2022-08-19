import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Content = styled.div`
  max-width: 1250px;
  margin: auto;
`;

const InfoText = styled.div``;
class BoligMain extends React.Component {
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
          <InfoText>
            <p>
              Køb eller salg af bolig er sandsynligvis den vigtigste og største
              handel, de fleste mennesker foretager i løbet af livet.
              Konsekvenserne af en bolighandel rækker mange år ud i fremtiden,
              og det er derfor vigtigt, at handlen foregår i fuld tryghed.
            </p>
            <p>
              Som køber eller sælger skal du sørge for at få en kvalificeret og
              uafhængig rådgivning fra en boligadvokat, der ved noget om køb og
              salg af fast ejendom.
            </p>
            <p>
              Vi har mere end 12.000 succesfulde bolighandler bag os, og vi har
              faste priser og arbejder med faste priser.
            </p>
            <p>Her kan du læse mere om:</p>
            <ul>
              <li>
                <Link to="/privat/bolig/koeber-raadgivning">
                  Køberrådgivning
                </Link>
              </li>
              <li>
                <Link to="/privat/bolig/saelger-raadgivning">
                  Sælgerrådgivning
                </Link>
              </li>
            </ul>
            {/** TODO : make links */}
            <p>
              Rådgivningen kan - og bør - dreje sig om blandt andet selve
              handelsvilkårene, finansieringen af købet, betydningen af købet
              for din privatøkonomi samt udfærdigelse af nødvendige dokumenter
              til sikring af, at handlen - og indgåede aftaler i øvrigt, også
              efterfølgende juridisk falder på plads som aftalt mellem parterne.
            </p>
            <p>
              Ved valg af rådgivere og samarbejdspartnere skal du være opmærksom
              på, at ikke alle rådgivere er uafhængige. Nogle rådgivere vil
              gerne sælge dig egne eller samarbejdspartnernes produkter samtidig
              med, at de rådgiver.
            </p>
            <p>
              Du skal vogte dig for konsulenter, rådgivere og andet godtfolk som
              tilbyder dig at skrive skødet til lavpris, men som ikke er i
              besiddelse af den nødvendig erfaring, ekspertise og ikke mindst
              forsikringsdækning. Berigtigelse af ejendomshandler og herunder
              også skødeskrivning er og bliver et job for boligadvokater.
            </p>
            <p>
              Vi er selvstændige og uafhængige boligadvokater og modtager ikke
              provision eller henvisningshonorar fra hverken ejendomsmæglere,
              finansieringsinstitutter, banker, forsikringsselskaber eller
              andre.
            </p>
            <p>
              Alle boligadvokater hos Isaksen & Nomanni er medlem af
              brancheforeningen Danske Advokater og boligadvokaterne hos Isaksen
              & Nomanni, deltager løbende i efteruddannelse indenfor området. Så
              er du sikker på at få den bedste faglige rådgivning.
            </p>
          </InfoText>
        </Content>
      </Container>
    );
  }
}

export default BoligMain;

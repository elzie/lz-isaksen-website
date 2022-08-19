import React from 'react';
import styled from 'styled-components';
import Privat from '../../pages/Privat';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  Link,
} from 'react-router-dom';
import GridImage1 from '../../assets/gfx/privat/privat_grid_1.jpg';
import GridImage2 from '../../assets/gfx/privat/privat_grid_2.jpg';
import GridImage3 from '../../assets/gfx/privat/privat_grid_3.jpg';
import GridImage4 from '../../assets/gfx/privat/privat_grid_4.jpg';
import GridImage5 from '../../assets/gfx/privat/privat_grid_5.jpg';
import GridImage6 from '../../assets/gfx/privat/privat_grid_6.jpg';
import GridImage7 from '../../assets/gfx/privat/privat_grid_7.jpg';
import GridImage8 from '../../assets/gfx/privat/privat_grid_8.jpg';

const PrivatContainer = styled.div``;
const PrivatContent = styled.div`
  max-width: 1250px;
  margin: auto;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
  div {
  }
`;
const GridImage = styled.div`
  border-radius: 10px;
  width: 400px;
  height: 200px;
  background: lightgrey;
  margin-bottom: 22px;

  color: white;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
`;
class PrivatMain extends React.Component {
  render() {
    return (
      <PrivatContainer>
        <PrivatContent>
          <div>
            <p>
              Advokatfirmaet Isaksen & Nomanni har kontorer i Aarhus, Odense,
              København og Odder og vi kan hjælpe dig, hvis du har brug for en
              advokat til at føre en retssag, få lavet et testamente eller en
              ægtepagt, få hjælp til din byggesag, kræve erstatning ved
              personskade osv.
            </p>
            <p>
              Vi sørger altid for at søge retshjælpsforsikringsdækning eller fri
              proces til din sag, så dine advokatomkostninger bliver så lave som
              muligt.
            </p>
            <p>Læs mere om udvalgte emner på menuen. </p>
            <p>
              Du kan også ringe til os eller sende en mail, så finder vi sammen
              ud af, hvordan du kommer videre med din sag.
            </p>
          </div>
          <GridTemplate>
            <Link to={'/privat/bolig'}>
              <GridImage style={{ background: `url(${GridImage1})` }}>
                <div>Køb og salg af bolig</div>
              </GridImage>
            </Link>
            <Link to={'/privat/familie-og-boern'}>
              <GridImage style={{ background: `url(${GridImage2})` }}>
                <div>Familie og Børn</div>
              </GridImage>
            </Link>
            <GridImage style={{ background: `url(${GridImage3})` }}>
              <div>Arv og dødsbo</div>
            </GridImage>
            <GridImage style={{ background: `url(${GridImage4})` }}>
              <div>Hævd</div>
            </GridImage>
            <GridImage style={{ background: `url(${GridImage5})` }}>
              <div>Retssager</div>
            </GridImage>
            <GridImage style={{ background: `url(${GridImage6})` }}>
              <div>Advokatomkostninger</div>
            </GridImage>
            <GridImage style={{ background: `url(${GridImage7})` }}>
              <div>Personskadeerstatning</div>
            </GridImage>
            <GridImage style={{ background: `url(${GridImage8})` }}>
              <div>Leje af bolig</div>
            </GridImage>
          </GridTemplate>
        </PrivatContent>
      </PrivatContainer>
    );
  }
}
export default PrivatMain;

import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Spinner from '../../Spinner';
import '../people/PeopleStaff.css';
import Bread from '../Bread';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  Link,
} from 'react-router-dom';
// import InkassoSagensForloeb from './InkassoSagensForloeb';
// import InkassoIkkeBureau from './InkassoIkkeBureau';
// import InkassoMain from './InkassoMain';
// import InkassoStartSag from './InkassoStartSag';
// import InkassoTilmeld from './InkassoTilmeld';
// import InkassoViaAbo from './InkassoViaAbo';

const InkassoMain = lazy(() => import('./InkassoMain'));
const InkassoStartSag = lazy(() => import('./InkassoStartSag'));
const InkassoTilmeld = lazy(() => import('./InkassoTilmeld'));
const InkassoViaAbo = lazy(() => import('./InkassoViaAbo'));
const InkassoGodeRaad = lazy(() => import('./InkassoGodeRaad'));
const InkassoSaadanLaverDuRykker = lazy(() =>
  import('./InkassoSaadanLaverDuRykker')
);
const HvemHandlerDuMed = lazy(() => import('./subpages/HvemHandlerDuMed'));
const SikkerhedOgForsikring = lazy(() =>
  import('./subpages/SikkerhedOgForsikring')
);
const SkriftligeAftaler = lazy(() => import('./subpages/SkriftligeAftaler'));
const FakturaOgRykker = lazy(() => import('./subpages/FakturaOgRykker'));
const Renter = lazy(() => import('./subpages/Renter'));
const Reklamationer = lazy(() => import('./subpages/Reklamationer'));

const InkassoHvadSiger = lazy(() => import('./InkassoHvadSiger'));
const InkassoFastePriser = lazy(() => import('./InkassoFastePriser'));
const InkassoSagensForloeb = lazy(() => import('./InkassoSagensForloeb'));
const InkassoIkkeBureau = lazy(() => import('./InkassoIkkeBureau'));

const InkassoContentContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 25px 0;
`;

const Headline = styled.h1`
  color: #223555;
  font-weight: 400;
  margin: 1rem 0;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

class InkassoContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
    };
  }
  render() {
    return (
      <InkassoContentContainer>
        <Bread text={'Inkasso'} />
        <Headline>Inkasso</Headline>

        <Router>
          <GridTemplate>
            <Link to={'/inkasso/start-inkasso-sag'}>
              <div
                className={
                  'listItem ' + (this.state.type === 1 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 1 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Start Inkassosag</p>
                </button>
              </div>
            </Link>
            <Link to="/inkasso/start-sag-via-abonnement">
              <div
                className={
                  'listItem ' + (this.state.type === 2 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 2 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Start inkassosag via abonnement</p>
                </button>
              </div>
            </Link>
            <Link to={'/inkasso/tilmeld-inkasso-abonnement'}>
              <div
                className={
                  'listItem ' + (this.state.type === 3 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 3 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Tilmeld inkasso-abonnement</p>
                </button>
              </div>
            </Link>
            <Link to={'/inkasso/6-gode-raad'}>
              <div
                className={
                  'listItem ' + (this.state.type === 4 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 4 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>6 Gode Råd</p>
                </button>
              </div>
            </Link>
            <Link to={'/inkasso/hvad-siger-andre'}>
              <div
                className={
                  'listItem ' + (this.state.type === 5 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 5 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Hvad siger andre?</p>
                </button>
              </div>
            </Link>
            <Link to={'/inkasso/faste-priser'}>
              <div
                className={
                  'listItem ' + (this.state.type === 6 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 6 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Faste priser</p>
                </button>
              </div>
            </Link>
            <Link to={'/inkasso/sagens-forloeb'}>
              <div
                className={
                  'listItem ' + (this.state.type === 7 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 7 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Sagens forløb</p>
                </button>
              </div>
            </Link>
            <Link to={'/inkasso/ikke-et-bureau'}>
              <div
                className={
                  'listItem ' + (this.state.type === 8 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 8 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Ikke et bureau</p>
                </button>
              </div>
            </Link>
          </GridTemplate>

          <Switch>
            <Route
              exact
              path="/inkasso"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoMain
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/start-inkasso-sag"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoStartSag
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/start-sag-via-abonnement"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoViaAbo
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/tilmeld-inkasso-abonnement"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoTilmeld
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoGodeRaad
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />

            <Route
              exact
              path="/inkasso/saadan-laver-du-en-rykker"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoSaadanLaverDuRykker
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad/hvem-handler-du-med"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <HvemHandlerDuMed
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad/sikkerhed-og-forsikring"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <SikkerhedOgForsikring
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad/klare-skriftlige-aftaler"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <SkriftligeAftaler
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad/faktura-og-rykker"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <FakturaOgRykker
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad/renter"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <Renter
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/6-gode-raad/reklamationer"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <Reklamationer
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/hvad-siger-andre"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoHvadSiger
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/faste-priser"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoFastePriser
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/sagens-forloeb"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoSagensForloeb
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/inkasso/ikke-et-bureau"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <InkassoIkkeBureau
                    showNav={this.showNav}
                    stickMenuToTop={this.stickMenuToTop}
                    unstickMenuFromTop={this.unstickMenuFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
          </Switch>
        </Router>
      </InkassoContentContainer>
    );
  }
}

export default InkassoContent;

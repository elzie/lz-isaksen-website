import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Spinner from '../../Spinner';
import '../people/PeopleStaff.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  Link,
} from 'react-router-dom';

const BoligMain = lazy(() => import('./bolig/BoligMain'));
const KoeberRaadgivning = lazy(() => import('./bolig/KoeberRaadgivning'));
const SaelgerRaadgivning = lazy(() => import('./bolig/SaelgerRaadgivning'));
const GodeRaadKoeber = lazy(() => import('./bolig/GodeRaadKoeber'));
const GodeRaadSaelger = lazy(() => import('./bolig/GodeRaadSaelger'));
const FastePriser = lazy(() => import('./bolig/FastePriser'));
const Advokatforbehold = lazy(() => import('./bolig/Advokatforbehold'));
const DigitalTinglysning = lazy(() => import('./bolig/DigitalTinglysning'));
const ForaeldrekoebSalg = lazy(() => import('./bolig/ForaeldrekoebSalg'));
const KoebAndelsbolig = lazy(() => import('./bolig/KoebAndelsbolig'));
const KoebPaaTvangsauktion = lazy(() => import('./bolig/KoebPaaTvangsauktion'));

const ContentContainer = styled.div`
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
class PrivatBolig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
    };
  }
  render() {
    return (
      <ContentContainer>
        <Headline>Køb og salg af bolig</Headline>

        <Router>
          <GridTemplate>
            <Link to={'/privat/bolig/10-gode-raad-til-koeber'}>
              <div
                className={
                  'listItem ' + (this.state.type === 1 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 1 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>10 gode råd til køber</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/10-gode-raad-til-saelger'}>
              <div
                className={
                  'listItem ' + (this.state.type === 2 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 2 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>10 gode råd til sælger</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/faste-priser'}>
              <div
                className={
                  'listItem ' + (this.state.type === 3 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 3 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Faste priser</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/advokatforbehold'}>
              <div
                className={
                  'listItem ' + (this.state.type === 4 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 4 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Advokatforbehold</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/digital-tinglysning'}>
              <div
                className={
                  'listItem ' + (this.state.type === 5 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 5 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Digital tinglysning</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/foraeldrekoeb-og-salg'}>
              <div
                className={
                  'listItem ' + (this.state.type === 6 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 6 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Forældrekøb og -salg</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/koeb-af-andelsbolig'}>
              <div
                className={
                  'listItem ' + (this.state.type === 7 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 7 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Køb af andelsbolig</p>
                </button>
              </div>
            </Link>
            <Link to={'/privat/bolig/koeb-paa-tvangsauktion'}>
              <div
                className={
                  'listItem ' + (this.state.type === 8 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 8 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>Køb på tvangsauktion</p>
                </button>
              </div>
            </Link>
          </GridTemplate>
          <Switch>
            <Route
              exact
              path="/privat/bolig"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <BoligMain
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
              path="/privat/bolig"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <BoligMain
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
              path="/privat/bolig/koeber-raadgivning"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <KoeberRaadgivning
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
              path="/privat/bolig/saelger-raadgivning"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <SaelgerRaadgivning
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
              path="/privat/bolig/10-gode-raad-til-koeber"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <GodeRaadKoeber
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
              path="/privat/bolig/10-gode-raad-til-saelger"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <GodeRaadSaelger
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
              path="/privat/bolig/faste-priser"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <FastePriser
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
              path="/privat/bolig/advokatforbehold"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <Advokatforbehold
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
              path="/privat/bolig/digital-tinglysning"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <DigitalTinglysning
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
              path="/privat/bolig/foraeldrekoeb-og-salg"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <ForaeldrekoebSalg
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
              path="/privat/bolig/koeb-af-andelsbolig"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <KoebAndelsbolig
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
              path="/privat/bolig/koeb-paa-tvangsauktion"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <KoebPaaTvangsauktion
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
      </ContentContainer>
    );
  }
}
export default PrivatBolig;

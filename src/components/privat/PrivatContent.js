import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Spinner from '../../Spinner';
import Bread from '../Bread';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  Link,
} from 'react-router-dom';

const PrivatMain = lazy(() => import('./PrivatMain'));
const PrivatBolig = lazy(() => import('./PrivatBolig'));

const PrivatFamilieOgBoern = lazy(() => import('./PrivatFamilieOgBoern'));

const PrivatContentContainer = styled.div`
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
class PrivatContent extends React.Component {
  render() {
    return (
      <PrivatContentContainer>
        <Bread text={'Privat'} />
        <Headline>Privat rådgivning</Headline>
        <Router>
          <Switch>
            <Route
              exact
              path="/privat"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <PrivatMain
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
                  <PrivatBolig
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
              path="/privat/familie-og-boern"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <PrivatBolig
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
      </PrivatContentContainer>
    );
  }
}

export default PrivatContent;

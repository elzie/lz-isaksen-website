import React, { lazy, Suspense } from 'react';
import './App.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  // Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './Spinner';
// import Navigation from './components/Navigation';
// import WelcomeSplash from './components/WelcomeSplash';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import People from './pages/People';
// import News from './pages/News';
// import Inkasso from './pages/Inkasso';
// import Contact from './pages/Contact';

const Navigation = lazy(() => import('./components/Navigation'));
const WelcomeSplash = lazy(() => import('./components/WelcomeSplash'));
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const People = lazy(() => import('./pages/People'));
const News = lazy(() => import('./pages/News'));
const Privat = lazy(() => import('./pages/Privat'));
const PrivatBolig = lazy(() => import('./components/privat/PrivatBolig'));
const Inkasso = lazy(() => import('./pages/Inkasso'));
const Contact = lazy(() => import('./pages/Contact'));

const NavHide = styled.div`
  visibility: ${(props) => (props.navHide ? 'hidden' : 'visible')};
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      navIsBlue: false,
      burgerMenuIsOpen: false,
      navHide: true,
    };
  }

  showNav = () => {
    this.setState({ navHide: false });
  };

  stickMenuToTop = () => {
    // Fixed topmenu
    this.setState({ isScrolled: true });
    this.setState({ navHide: false });
  };
  unstickMenuFromTop = () => {
    // 'Un-fix' topmenu
    this.setState({ isScrolled: false });
    this.setState({ navHide: false });
  };

  isScrolledFromTop = (value) => {
    // console.log(value);
    if (value === 0) {
      this.setState({ isScrolled: false });
    } else {
      this.setState({ isScrolled: true });
    }
  };

  render() {
    return (
      <div>
        <Router>
          <NavHide navHide={this.state.navHide}>
            <Suspense
              fallback={
                <div>
                  <Spinner />
                </div>
              }
            >
              <Navigation {...this.state} />
            </Suspense>
          </NavHide>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <WelcomeSplash {...props} showNav={this.showNav} />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/forside"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <Home
                    isScrolledFromTop={this.isScrolledFromTop}
                    showNav={this.showNav}
                    {...props}
                    {...this.state}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/om-os"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <AboutUs
                    isScrolledFromTop={this.isScrolledFromTop}
                    showNav={this.showNav}
                    {...props}
                    {...this.state}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/personer"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <People
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
              path="/personer/:id"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <People
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
              path="/nyheder"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <News
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
              path="/privat"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Privat
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
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
                  <Inkasso
                    showNav={this.showNav}
                    isScrolledFromTop={this.isScrolledFromTop}
                    {...props}
                  />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/kontakt"
              render={(props) => (
                <Suspense
                  fallback={
                    <div>
                      <Spinner />
                    </div>
                  }
                >
                  <Contact
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
      </div>
    );
  }
}

export default App;

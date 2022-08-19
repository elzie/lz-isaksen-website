import React from 'react';
import styled from 'styled-components';
import './Menu.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import LogoW from '../assets/gfx/logo.svg';
import LogoC from '../assets/gfx/logoB.svg';
import RightMenuBG from '../assets/gfx/rightmenu-bg-web.jpg';

const NavContainer = styled.div`
  // position: fixed;
  width: 100%;
  // transition: all 0.6s ease-in-out;
  // z-index: 1;
  // font-family: 'Poppins', sans-serif;
  box-shadow: ${(props) =>
    props.isScrolled
      ? '0 0 5px 2px rgba(0, 0, 0, 0.51)'
      : '0 0 5px 2px rgba(0, 0, 0, 0.0)'};
  // box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.51);
  background: #223555;
`;
const BurgerMenu = styled.div`
  z-index: 50;
  padding: 10px;
  background: ${(props) => (props.burgerMenu ? '#FFFFFF' : '#FFFFFF')};
  border-radius: 5px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  padding: 0.65rem;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  transition: all 0.8s ease-in-out;
  cursor: pointer;
  height: 23px;
  width: 25px;
  display: flex;
  justify-content: center;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 36%;
    background: ${(props) => (props.burgerMenu ? '#223555' : '#223555')};
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.4s ease-in-out;
    -moz-transition: 0.4s ease-in-out;
    -o-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
  }

  span:nth-child(odd) {
    left: 6px;
    border-radius: 3px 0 0 3px;
  }

  span:nth-child(even) {
    left: 49%;
    border-radius: 0 9px 9px 0;
  }

  // span:nth-child(1),
  // span:nth-child(2) {
  //   top: 10px;
  //   // top: ${(props) => (props.burgerMenu ? '16px' : '10px')};
  //   // left: ${(props) => (props.burgerMenu ? '16px' : '10px')};
  // }

  span:nth-child(3),
  span:nth-child(4) {
    top: 20px;
    width: ${(props) => (props.burgerMenu ? '21px' : '17px')};
  }

  // span:nth-child(5),
  // span:nth-child(6) {
  //   top: 30px;
  // }

  span:nth-child(1) {
    // left: 4px;
    left: ${(props) => (props.burgerMenu ? '2px' : '6px')};
    // top: 4px;
    top: ${(props) => (props.burgerMenu ? '12px' : '10px')};
    width: ${(props) => (props.burgerMenu ? '25px' : '17px')};
  }

  span:nth-child(2) {
    // left: 42%;
    left: ${(props) => (props.burgerMenu ? '42%' : '50%')};
    // top: 4px;
    top: ${(props) => (props.burgerMenu ? '12px' : '10px')};
    width: ${(props) => (props.burgerMenu ? '25px' : '17px')};
  }

  span:nth-child(3) {
    // left: -50%;
    left: ${(props) => (props.burgerMenu ? '-50%' : '14%')};
    // opacity: 0;
    opacity: ${(props) => (props.burgerMenu ? '0' : '1')};
  }

  span:nth-child(4) {
    // left: 100%;
    left: ${(props) => (props.burgerMenu ? '100%' : '50%')};
    // opacity: 0;
    opacity: ${(props) => (props.burgerMenu ? '0' : '1')};
  }

  span:nth-child(5) {
    // left: 4px;
    left: ${(props) => (props.burgerMenu ? '2px' : '6px')};
    // top: 15px;
    top: ${(props) => (props.burgerMenu ? '30px' : '30px')};
    width: ${(props) => (props.burgerMenu ? '25px' : '17px')};
  }

  span:nth-child(6) {
    // left: 42%;
    left: ${(props) => (props.burgerMenu ? '42%' : '50%')};
    // top: 15px;
    top: ${(props) => (props.burgerMenu ? '30px' : '30px')};
    width: ${(props) => (props.burgerMenu ? '25px' : '17px')};
  }

  span:nth-child(1),
  span:nth-child(6) {
    -webkit-transform: ${(props) =>
      props.burgerMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
    -moz-transform: ${(props) =>
      props.burgerMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
    -o-transform: ${(props) =>
      props.burgerMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
    transform: ${(props) =>
      props.burgerMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
  }

  span:nth-child(2),
  span:nth-child(5) {
    -webkit-transform: ${(props) =>
      props.burgerMenu ? 'rotate(-45deg)' : 'rotate(0deg)'};
    -moz-transform: ${(props) =>
      props.burgerMenu ? 'rotate(-45deg)' : 'rotate(0deg)'};
    -o-transform: ${(props) =>
      props.burgerMenu ? 'rotate(-45deg)' : 'rotate(0deg)'};
    transform: ${(props) =>
      props.burgerMenu ? 'rotate(-45deg)' : 'rotate(0deg)'};
  }
`;
const RightSideNavigation = styled.div`
  position: fixed;
  overflow: hidden;
  background: url(${RightMenuBG});
  width: ${(props) => (props.burgerMenu ? '100vw' : '0vw')};
  overflow: ${(props) => (props.burgerMenuIsOpen ? 'hidden' : 'visible')};

  right: 0;
  top: 0;
  height: 100vh;
  z-index: 20;
  transition: all 1s ease-in-out;
`;
const NavOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  background: rgba(0, 0, 0, 0.35);
`;
const BurgerNavLogo = styled.div`
  width: 368px;
  height: 75px;
  background: url(${LogoW});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 46%;
  left: 16%;
`;
const BlueNavigation = styled.div`
  position: fixed;
  overflow: hidden;
  background: #223555;
  width: ${(props) => (props.burgerMenu ? '42vw' : '0vw')};
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 25;
  transition: all 1s ease-in-out;
`;
const NavTextArea = styled.div`
  color: white;
  width: 350px;
  position: relative;
  // top: 28%;
  transition: all 0.5s ease-in-out;
  top: ${(props) =>
    props.subMenu.privatSubmenu ||
    props.subMenu.erhvervSubmenu ||
    props.subMenu.inkassoSubmenu
      ? '18%'
      : '28%'};
  left: 45px;
  text-align: left;
  a {
    color: white;
    text-decoration: none;
  }
  h1 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
    min-width: 250px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const Submenu = styled.div`
  max-height: ${(props) => (props.showMenu ? '300px' : '0')};
  transition: all 0.5s ease-in-out;
  display: block;
  overflow: hidden;
  div {
    text-transform: uppercase;
    padding: 5px 0 10px 20px;
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      open: false,
      link: 1,
      burgerMenuOpen: false,
      privatSubmenu: false,
      erhvervSubmenu: false,
      inkassoSubmenu: false,
    };
  }
  toggleBurgerMenu = () => {
    this.setState({
      burgerMenuOpen: !this.state.burgerMenuOpen,
      privatSubmenu: false,
      erhvervSubmenu: false,
      inkassoSubmenu: false,
    });
  };
  mainMenuClick = () => {
    this.toggleBurgerMenu();
    window.scrollTo(0, 0);
  };

  render() {
    let className = '';
    // let notselected = false;
    if (this.props.isScrolled) className = 'fixed-nav';

    return (
      <header>
        <nav className={className}>
          <NavContainer isScrolled={this.props.isScrolled}>
            <NavLink className={'logo'} to={'/forside'}>
              <Fade bottom>
                <img src={this.props.isScrolled ? LogoW : LogoW} alt={'Logo'} />
              </Fade>
            </NavLink>

            <div className={'nav'} ref={(ref) => (this.menu = ref)}>
              <BurgerMenu
                theProps={this.props.isScrolled}
                burgerMenu={this.state.burgerMenuOpen}
                onClick={this.toggleBurgerMenu}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </BurgerMenu>

              <RightSideNavigation burgerMenu={this.state.burgerMenuOpen}>
                <NavOverlay>
                  <BurgerNavLogo></BurgerNavLogo>
                  <BlueNavigation burgerMenu={this.state.burgerMenuOpen}>
                    <NavTextArea subMenu={this.state}>
                      <h1>
                        <Link
                          to={'/forside'}
                          onClick={() => this.mainMenuClick()}
                        >
                          FORSIDE
                        </Link>
                      </h1>
                      <h1>
                        <Link
                          to={'/om-os'}
                          onClick={() => this.mainMenuClick()}
                        >
                          OM OS
                        </Link>
                      </h1>
                      <h1>
                        <Link
                          to={'/personer'}
                          onClick={() => this.mainMenuClick()}
                        >
                          PERSONER
                        </Link>
                      </h1>
                      <div>
                        <h1>
                          <Link
                            to={'/privat'}
                            onClick={() => this.mainMenuClick()}
                          >
                            PRIVAT{' '}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowAltCircleDown}
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                              this.setState({
                                privatSubmenu: !this.state.privatSubmenu,
                                erhvervSubmenu: false,
                                inkassoSubmenu: false,
                              })
                            }
                          />
                        </h1>

                        <Submenu showMenu={this.state.privatSubmenu}>
                          <div>
                            <p>Køb og salg af bolig</p>
                            <p>Familie og børn</p>
                            <p>Arv og dødsbo</p>
                            <p>Hævd</p>
                            <p>Retssager</p>
                            <p>Advokatomkostninger</p>
                            <p>Personskadeerstatninger</p>
                          </div>
                        </Submenu>
                      </div>
                      <div>
                        <h1>
                          <Link
                            to={'/erhverv'}
                            onClick={() => this.mainMenuClick()}
                          >
                            ERHVERV{' '}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowAltCircleDown}
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                              this.setState({
                                privatSubmenu: false,
                                erhvervSubmenu: !this.state.erhvervSubmenu,
                                inkassoSubmenu: false,
                              })
                            }
                          />
                        </h1>

                        <Submenu showMenu={this.state.erhvervSubmenu}>
                          <div>
                            <p>Inkasso</p>
                            <p>Selskaber og Virksomheder</p>
                            <p>Immaterielle rettigheder</p>
                            <p>Konkurs og Rekonstruktion</p>
                            <p>Ansættelsesret</p>
                          </div>
                        </Submenu>
                      </div>
                      <div>
                        <h1>
                          <Link
                            to={'/inkasso'}
                            onClick={() => this.mainMenuClick()}
                          >
                            INKASSO{' '}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowAltCircleDown}
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                              this.setState({
                                privatSubmenu: false,
                                erhvervSubmenu: false,
                                inkassoSubmenu: !this.state.inkassoSubmenu,
                              })
                            }
                          />
                        </h1>

                        <Submenu showMenu={this.state.inkassoSubmenu}>
                          <div>
                            <Link
                              to="/inkasso/start-inkasso-sag"
                              onClick={() => this.mainMenuClick()}
                            >
                              <p>Start Inkassosag</p>
                            </Link>
                            <Link
                              to="/inkasso/start-sag-via-abonnement"
                              onClick={() => this.mainMenuClick()}
                            >
                              <p>Start Inkassosag via abonnement</p>
                            </Link>
                            <Link
                              to="/inkasso/tilmeld-inkasso-abonnement"
                              onClick={() => this.mainMenuClick()}
                            >
                              <p>Tilmeld Inkasso abonnement</p>
                            </Link>
                          </div>
                        </Submenu>
                      </div>
                      <Link
                        to={'/nyheder'}
                        onClick={() => this.mainMenuClick()}
                      >
                        <h1>NYHEDER</h1>
                      </Link>
                      <Link
                        to={'/kontakt'}
                        onClick={() => this.mainMenuClick()}
                      >
                        <h1>KONTAKT</h1>
                      </Link>
                    </NavTextArea>
                  </BlueNavigation>
                </NavOverlay>
              </RightSideNavigation>
            </div>
          </NavContainer>
        </nav>
      </header>
    );
  }
}

export default Navigation;

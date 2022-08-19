import React from 'react';
import './WelcomeSplash.css';

import styled from 'styled-components';

import HeaderBg from '../assets/gfx/headerbg.jpg';
const SplashBackground = styled.div`
  background-image: url(${HeaderBg});
  background-position: left;
  background-size: cover;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  z-index: 300;
`;

class WelcomeSplash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: false,
      fade: false,
    };

    setTimeout(() => {
      this.setState({ swap: true });
      setTimeout(() => {
        this.setState({ fade: true });
        setTimeout(() => this.props.history.push('/forside'), 1500);
        setTimeout(() => this.props.showNav(), 1500);
      }, 2000);
    }, 2000);
  }
  render() {
    return (
      <div>
        <div className={'welcome'}>
          <SplashBackground>
            <div
              style={{
                background: this.state.swap
                  ? 'rgba(34, 53, 85, 0.35)'
                  : 'rgba(34, 53, 85, 0.8)',
                transition: 'all 0.8s linear',
              }}
              className={'overlay2'}
            >
              <section
                style={{ opacity: this.state.fade ? '0' : '1' }}
                className="cd-intro"
              >
                <div className="cd-intro-content mask">
                  <h1 data-content="Advokatfirmaet">
                    <span>Advokatfirmaetuuu</span>
                  </h1>
                  <div className="action-wrapper">
                    <p>Isaksen & Nomanni</p>
                  </div>
                </div>
              </section>
            </div>
          </SplashBackground>
        </div>
      </div>
    );
  }
}

export default WelcomeSplash;

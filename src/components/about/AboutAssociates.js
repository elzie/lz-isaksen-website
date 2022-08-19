import React from 'react';
import styled from 'styled-components';

import AssociateImg1 from '../../assets/gfx/associates/logo1.png';
import AssociateImg2 from '../../assets/gfx/associates/logo2.png';
import AssociateImg3 from '../../assets/gfx/associates/logo3.png';
import AssociateImg4 from '../../assets/gfx/associates/logo4.png';
import AssociateImg5 from '../../assets/gfx/associates/logo5.png';
import AssociateImg6 from '../../assets/gfx/associates/logo6.png';
import AssociateImg7 from '../../assets/gfx/associates/logo7.png';
import AssociateImg8 from '../../assets/gfx/associates/logo8.png';

const AboutAssociatesContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 25px 0;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  justify-content: space-between;

  div {
    background: none;
    display: flex;
    justify-content: center;

    margin: 25px 0;
    img {
      //   max-height: 100px;
    }
  }
`;
class AboutAssociates extends React.Component {
  render() {
    return (
      <AboutAssociatesContainer>
        <GridTemplate>
          <div>
            <img
              src={AssociateImg1}
              style={{ width: '336px', height: '81px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg2}
              style={{ width: '324px', maxHeight: '57px', paddingTop: '25px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg3}
              style={{ width: '272px', height: '69px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg4}
              style={{ width: '264px', height: '217px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg5}
              style={{ width: '324px', height: '62px', paddingTop: '50px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg6}
              style={{ width: '324px', height: '162px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg7}
              style={{ width: '284px', height: '80px' }}
              alt='associate logo'
            />
          </div>
          <div>
            <img
              src={AssociateImg8}
              style={{ width: '274px', height: '151px' }}
              alt='associate logo'
            />
          </div>
        </GridTemplate>
      </AboutAssociatesContainer>
    );
  }
}

export default AboutAssociates;

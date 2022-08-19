import React from 'react';
import styled from 'styled-components';
import SpinnerSvg from './assets/cog-solid.svg';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';

const Background = styled.div`
  background: rgba(34, 53, 85, .7)
  height: 100vh;
  width: 100vw;
  position: fixed; /* or absolute */
  z-index: 1000;
`;

const SpinnerIcon = styled.div`
  z-index: 2;
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 60px;
`;

export default function Spinner() {
  return (
    <Background>
      <SpinnerIcon>
        <i className='fa fa-cog fa-spin' aria-hidden='true'></i>
      </SpinnerIcon>
    </Background>
  );
}

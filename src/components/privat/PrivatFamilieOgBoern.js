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
class FamilieOgBoern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
    };
  }
  render() {
    return (
      <ContentContainer>
        <Headline>Familie og Børn</Headline>

        <Router>
          <GridTemplate>
            <Link to={'/koeb-og-salg'}>
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
            <Link to={'/koeb-og-salg'}>
              <div
                className={
                  'listItem ' + (this.state.type === 1 ? 'selected' : '')
                }
              >
                <div />
                <button onClick={() => this.setState({ type: 1 })}>
                  <i className={'fa fa-chevron-right'} />
                  <p>10 gode råd til sælger</p>
                </button>
              </div>
            </Link>
          </GridTemplate>
          <Switch></Switch>
        </Router>
      </ContentContainer>
    );
  }
}
export default FamilieOgBoern;

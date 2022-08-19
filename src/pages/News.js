import React from 'react';
import styled from 'styled-components';

import NewsHeader from '../components/news/NewsHeader';
import NewsArea from '../components/news/NewsArea';
import FrontpageConsulationFeature from '../components/frontpage/FrontpageConsultationFeature';
import FrontpageFooter from '../components/frontpage/FrontpageFooter';

const NewsContainer = styled.div``;

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.stickMenuToTop();
  }
  componentWillUnmount() {
    this.props.unstickMenuFromTop();
  }

  render() {
    return (
      <NewsContainer>
        <NewsHeader />
        <NewsArea />
        <FrontpageConsulationFeature />
        <FrontpageFooter />
      </NewsContainer>
    );
  }
}

export default News;

import React from 'react';
import styled from 'styled-components';
import { newsRef } from '../../firebase';
import Bread from '../Bread';

const Container = styled.div`
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
  grid-template-columns: 400px 400px 400px;
  justify-content: space-between;
`;
const NewsItem = styled.div`
  // border: 1px solid grey;
  // height: 190px;
  width: 390px;
  overflow: hidden;
  img {
    height: 190px;
    width: 390px;
    border-radius: 5px;
  }
`;
const Teaser = styled.div`
  // text-overflow: ellipsis;
  // overflow: hidden;
  width: 390px;
  height: 80px;
  // white-space: nowrap;
`;
const Image = styled.div`
  margin: 25px 0;
  height: 190px;
  width: 390px;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const ReadMore = styled.div`
  cursor: pointer;
`;
class NewsArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: false,
      width: 0,
      news: [],
    };
    // this.getPage();
    // this.getOffice();
    this.getNews();
  }
  getNews = async () => {
    await newsRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        const news = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          createdAt: doc.data().createdAt,
          imageUrl: doc.data().imageUrl,
          teaserText: doc.data().teaserText,
        };

        this.setState({
          news: [news, ...this.state.news],
        });
      });
    });
  };
  /// TODO : Truncate the teaser text with trailing dots. Somehow.
  render() {
    const { news } = this.state;

    return (
      <Container>
        <Bread text={'Nyheder'} />
        <Headline>Om Isaksen & Nomanni</Headline>
        <GridTemplate>
          {news.map((newsItem) => (
            <NewsItem key={newsItem.id}>
              <Image
                style={{ backgroundImage: `url(${newsItem.imageUrl})` }}
              ></Image>
              <h3>{newsItem.title}</h3>
              <Teaser>{newsItem.teaserText}</Teaser>
              <ReadMore>Læs mere</ReadMore>
            </NewsItem>
          ))}
        </GridTemplate>
      </Container>
    );
  }
}
export default NewsArea;

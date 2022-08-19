import React from 'react';
import { newsRef } from '../../firebase';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';
import './slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Container = styled.div`
  // background: none;
  // min-height: 575px;
  // border: 1px solid black;
  margin-bottom: 50px;
  justify-content: center;
  text-align: center;
`;
const Header = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #223555;
  font-size: 2rem;
  font-weight: 700;
  // margin: 4rem auto 1rem;
  display: block;
  text-transform: uppercase;
`;
const SliderContainer = styled.div`
  margin-left: -30px;
  position: relative;
  height: 526px;
  left: -10px;
`;
const SliderOverlay = styled.div`
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 34%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 67%,
    rgba(255, 255, 255, 0.8) 68%,
    rgba(255, 255, 255, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 34%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 67%,
    rgba(255, 255, 255, 0.8) 68%,
    rgba(255, 255, 255, 0.8) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 34%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 67%,
    rgba(255, 255, 255, 0.8) 68%,
    rgba(255, 255, 255, 0.8) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccffffff', endColorstr='#ccffffff',GradientType=1 );

  width: 100%;
  height: 315px;
  position: relative;
  top: -531px;
  @media (max-width: 1358px) {
    top: -561px;
  }
`;
const TextOverlay = styled.div`
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 34%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 67%,
    rgba(255, 255, 255, 1) 68%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 34%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 67%,
    rgba(255, 255, 255, 1) 68%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 34%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 67%,
    rgba(255, 255, 255, 1) 68%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccffffff', endColorstr='#ccffffff',GradientType=1 );

  width: 100%;
  height: 200px;
  position: relative;
  top: -531px;
  @media (max-width: 1358px) {
    top: -561px;
  }
`;
const Slide = styled.div`
  // border: 1px solid grey;
  // height: 230px;
  // width: 350px;
  padding: 25px;
  overflow: hidden;
  text-align: left;
  &:focus {
    outline: none;
  }
`;
const Text = styled.div`
  margin: 0 50px 0 50px;
  h3 {
    background: none;
    color: #223555;
  }
`;
const ReadMore = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  svg {
    margin: 0 0 0 10px;
  }
`;
const Image = styled.div`
  margin: 25px;
  height: 300px;
  // width: 620px;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const SampleNextArrow = styled.button`
  z-index: 100;
  width: 50px;
  height: 50px;
  background: #223555;
  border: none;
  border-radius: 3px;
  font-size: 32px;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 170px;
  right: 375px;
  &:focus {
    outline: none;
  }
`;
const SamplePrevArrow = styled.button`
  z-index: 100;
  width: 50px;
  height: 50px;
  background: #223555;
  border: none;
  border-radius: 3px;
  font-size: 32px;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 170px;
  left: 375px;
  &:focus {
    outline: none;
  }
`;
class FrontpageNewsFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: false,
      width: 0,
      news: [],
    };
    // this.getPage();
    // this.getOffice();
    // this.getNews();
  }
  getNews = async () => {
    await newsRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        const news = {
          id: doc.id,
          title: doc.data().title,
          teaserText: doc.data().teaserText,
          createdAt: doc.data().createdAt,
          imageUrl: doc.data().imageUrl,
        };

        this.setState({
          news: [news, ...this.state.news],
        });
      });
    });
    // Slider hack to next slide
    this.next();
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.getNews();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  next = () => {
    // Slider hack to next slide
    this.slider.slickNext();
    setTimeout(() => {
      this.slider.slickNext();
    }, 50);
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      // this.state.width < 1300 ? (this.state.width < 900 ? 1 : 2) : 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 12000,
      arrows: true,
      draggable: false,
      centerMode: false,
      // lazyLoad: true,
      initialSlide: 3,
      centerPadding:
        this.state.width < 1300
          ? this.state.width < 900
            ? '30px'
            : '50px'
          : '310px',
      nextArrow: (
        <SampleNextArrow>
          <FontAwesomeIcon icon={faArrowRight} />
        </SampleNextArrow>
      ),
      prevArrow: (
        <SamplePrevArrow>
          <FontAwesomeIcon icon={faArrowLeft} />
        </SamplePrevArrow>
      ),
    };
    const { news } = this.state;
    return (
      <Container>
        <Fade bottom>
          <Header>Nyheder</Header>
        </Fade>

        <Fade bottom>
          <SliderContainer>
            <Slider {...settings} ref={(slider) => (this.slider = slider)}>
              {news.map((newsItem) => (
                <Slide key={newsItem.id}>
                  <Image
                    style={{ backgroundImage: `url(${newsItem.imageUrl})` }}
                  ></Image>
                  <Text>
                    <p>{newsItem.createdAt}</p>
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.teaserText}</p>
                    <ReadMore>
                      Læs mere
                      <FontAwesomeIcon icon={faArrowRight} />
                    </ReadMore>
                  </Text>
                </Slide>
              ))}
            </Slider>
            <SliderOverlay></SliderOverlay>
            <TextOverlay></TextOverlay>
          </SliderContainer>
        </Fade>
      </Container>
    );
  }
}

export default FrontpageNewsFeature;

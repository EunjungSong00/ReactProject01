import Header from '../src/components/layouts/header';
import {ContainerWrapper, Content} from '../src/styles/layout';
import styled from '@emotion/styled';
import Footer from '../src/components/layouts/footer';
import theme from '../src/styles/theme';
import {Fade} from 'react-awesome-reveal';
import useScrollFadeIn from '../src/modules/hooks/useScrollFadeIn';

export const Banner = styled.div`
  width: 100%;
  height: 521px;
  background: url(/images/culture_bg.png) no-repeat;
  background-size: cover;
  background-position: center;
  div {
    width: 1200px;
    margin: 0 auto;
    padding-top: 261px;
    color: #fff;
  }
  h3 {
    font-family: 'NotoSansKR-Bold';
    font-size: 60px;
    padding-bottom: 40px;
  }
  p {
    font-size: 24px;
    line-height: 1.92;
  }
  ${(props) => props.theme.mq.mobile} {
    width: 100%;
    min-width: 320px;
    div {
      padding: 252px 12px 0;
      width: 100%;
    }
    h3 {
      font-size: 28px;
      padding-bottom: 20px;
    }
    p {
      font-size: 15px;
    }
  } ;
`;

export const ContUl = styled.ul`
  width: 1200px;
  align-items: start;
  display: flex;
  justify-content: space-between;
  margin: 150px auto 250px;
  li {
    width: 330px;
    text-align: center;
    font-size: 36px;
    color: #333;
    font-family: 'NotoSansKR-Bold';
    line-height: 1.7;
    letter-spacing: -0.9px;
    span {
      display: block;
      color: #666;
      font-size: 24px;
      letter-spacing: -0.6px;
    }
    p:first-of-type {
      margin: 0 auto 30px;
      width: 260px;
    }
    img {
      object-fit: contain;
      width: 100%;
    }
  }
  ${(props) => props.theme.mq.mobile} {
    width: 100%;
    display: block;
    margin: 100px auto 100px;
    li {
      width: 100%;
      padding-bottom: 50px;
      font-size: 24px;
      p:first-of-type {
        width: 210px;
      }
      span {
        font-size: 18px;
      }
    }
  }
`;

export const ContactCont = styled.div`
  border-top: 1px solid #ddd;
  padding: 80px 0 110px;
  font-size: 24px;
  color: #333;
  h4 {
    font-family: 'NotoSansKR-Bold';
    font-size: 36px;
    padding-bottom: 20px;
  }
  p {
    color: #777;
    line-height: 1.5;
  }
  ul {
    padding-top: 50px;
  }
  li {
    line-height: 1.5;
    padding-left: 60px;
    padding-bottom: 20px;
    &:first-of-type {
      background: url(/images/ico-mail@3x.png) no-repeat;
      background-size: 40px;
    }
    &:nth-of-type(2) {
      background: url(/images/ico-add@3x.png) no-repeat;
      background-size: 40px;
    }
    &:last-child {
      background: url(/images/ico-tel@3x.png) no-repeat;
      background-size: 40px;
    }
  }
  ${(props) => props.theme.mq.mobile} {
    padding: 80px 12px 110px;
    font-size: 18px;
    h4 {
      font-size: 30px;
    }
    li {
      font-size: 16px;
      padding-top: 12px;
      padding-bottom: 30px;
    }
    a {
      display: block;
    }
  }
`;

const CompanyItem = [
  {
    id: 1,
    imgURL: '/images/icon1@3x.png',
    title: '자유로운 조직문화',
    subTxt: "'Co-work' 'Startup'"
  },
  {
    id: 2,
    imgURL: '/images/icon2@3x.png',
    title: '새로움 추구',
    subTxt: "'Innovation' 'New paradigm'"
  },
  {
    id: 3,
    imgURL: '/images/icon3@3x.png',
    title: '동반성장 지향',
    subTxt: "'Performance' 'Reward'"
  }
];

const AboutUs = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3)
  };

  return (
    <>
      <Header bg op />
      <ContainerWrapper theme={theme}>
        <Banner theme={theme}>
          <Fade>
            <div>
              <h3>Our Company</h3>
              <p>
                (주)핸들은 대한민국 모빌리티 사업에 한 획을 그을 자동차 유통 플랫폼을 개발하는 기업입니다.
                <br />
                자동차와 IT 전문가들이 협업하여 자동차 유통시장에 새로운 패러다임을 제시할 것입니다.
              </p>
            </div>
          </Fade>
        </Banner>
        <Content theme={theme}>
          <ContUl theme={theme}>
            {CompanyItem.map((item, index) => (
              <li key={item.id} {...animatedItem[index]}>
                <p>
                  <img src={item.imgURL} />
                </p>
                <p>
                  {item.title}
                  <span>{item.subTxt}</span>
                </p>
              </li>
            ))}
          </ContUl>
          <ContactCont theme={theme}>
            <Fade direction="left">
              <h4>Contact Us</h4>
              <p>Carmerce에 대한 문의사항, 제안사항을 보내주세요 빠른 시일 내에 답변 드리도록 하겠습니다</p>
              <ul>
                <li>
                  <a href="mailto:handle@carmerce.co.kr">handle@carmerce.co.kr</a>
                </li>
                <li>
                  <a href="tel:02-782-9060">02-782-9060</a>
                </li>
                <li>
                  본사주소 : 경기 용인시 기흥구 중부대로 242 오토허브 A동 1층 <br />
                  서울지사 : 서울 서초구 사임당로 171 EWR빌딩 12층
                </li>
              </ul>
            </Fade>
          </ContactCont>
        </Content>
      </ContainerWrapper>
      <Footer />
    </>
  );
};
export default AboutUs;

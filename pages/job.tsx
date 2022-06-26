import Header from '../src/components/layouts/header';
import {Fade} from 'react-awesome-reveal';
import {ContainerWrapper} from '../src/styles/layout';
import Footer from '../src/components/layouts/footer';
import styled from '@emotion/styled';
import theme from '../src/styles/theme';

export const Banner = styled.div`
  width: 100%;
  height: 521px;
  background: url(/images/bg_rc.png) no-repeat;
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
    background-position-x: -110px;
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

export const RecruitCont = styled.div`
  background: #f9f9f9;
  padding: 100px 0;
  font-family: 'NotoSansKR-Regular';
  ${(props) => props.theme.mq.mobile} {
    padding: 80px 12px;
  }
`;

export const Cont = styled.div`
  background: #fff;
  width: 1200px;
  margin: 0 auto;
  padding: 35px 50px;
  div {
    padding: 35px 0;
    border-top: 1px solid #ddd;
    color: #333;
    font-size: 18px;
    &::after {
      content: '';
      display: table;
      clear: both;
    }
    &:first-of-type {
      padding-top: 0;
      border-top: none;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
  p:first-of-type {
    font-size: 26px;
    float: left;
    width: 62%;
    span {
      display: block;
      color: #777;
      padding-top: 15px;
      font-size: 18px;
    }
  }
  p:nth-of-type(2) {
    float: right;
    span {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      margin: 14px 0 0 60px;
      &:last-child a {
        display: block;
        padding: 10px 0;
        width: 70px;
        height: 38px;
        border: 1px solid #ddd;
      }
    }
  }
  a:hover {
    color: #3ba0ff;
    border: 1px solid #3ba0ff !important;
    opacity: 0.7;
  }
  // mobile
  ${(props) => props.theme.mq.mobile} {
    width: 100%;
    min-width: 320px;
    padding: 40px 20px;
    p:first-of-type {
      font-size: 20px;
      width: 70%;
      line-height: 1.5;
      span {
        display: none;
      }
    }
    p:nth-of-type(2) {
      span {
        display: none;
        margin: 0;
        &:last-child {
          display: block;
        }
      }
    }
  }
`;

const JobItem = [
  {
    id: 1,
    title: '[프론트앤드]  React 웹 개발자 모집공고',
    subTitle: '반응형 웹 사이트 개발 , 관리자 사이트 개발 다양한 오픈소스 라이브러리 연동 경험',
    url: 'https://www.sdhholdings.com/forum/caeyonggonggo/haendeul-gaebaltim-peuronteuendeu-baegendeu-geomsaegenjin-caeyong#viewer-uk9d'
  },
  {
    id: 2,
    title: '[프론트앤드]  IOS 개발자 모집공고',
    subTitle: 'Swift 기반 IOS 네이티브 앱 개발 RESTful API, Graphql API에 대한 연동 경험',
    url: 'https://www.sdhholdings.com/forum/caeyonggonggo/haendeul-gaebaltim-peuronteuendeu-baegendeu-geomsaegenjin-caeyong#viewer-uk9d'
  },
  {
    id: 3,
    title: '[백엔드]  NodeJS 서버 개발자',
    subTitle: 'SQL, NoSQL, ORM, RESTful API, Graphql API 이해 유닛 테스트, 시나리오 테스트 경험',
    url: 'https://www.sdhholdings.com/forum/caeyonggonggo/haendeul-gaebaltim-peuronteuendeu-baegendeu-geomsaegenjin-caeyong#viewer-38v3f'
  },
  {
    id: 4,
    title: '[백엔드]  Java Spring 서버 개발자',
    subTitle: 'Java, Spring Boot 기반 능숙하게 활용',
    url: 'https://www.sdhholdings.com/forum/caeyonggonggo/haendeul-gaebaltim-peuronteuendeu-baegendeu-geomsaegenjin-caeyong#viewer-38v3f'
  }
];

const Job = () => {
  return (
    <>
      <Header bg op />
      <ContainerWrapper>
        <Banner theme={theme}>
          <Fade>
            <div>
              <h3>Recruit</h3>
              <p>
                핸들은 스타트업 특유의 자유로움과 새로움을 추구하는 회사입니다.
                <br />
                자유로운 분위기의 업무 문화를 바탕으로 Co-work 을 통한 성과를 중시하며 함께하는 동반성장을 지향합니다.
              </p>
            </div>
          </Fade>
        </Banner>
        <RecruitCont theme={theme}>
          <Fade direction="right" cascade>
            <Cont theme={theme}>
              {JobItem.map((item) => (
                <Fade direction="right" key={item.id}>
                  <div>
                    <p>
                      {item.title}
                      <span>{item.subTitle}</span>
                    </p>
                    <p>
                      <span>경력직</span>
                      <span>0명</span>
                      <span>
                        <a href={item.url} target="_blank">
                          더보기
                        </a>
                      </span>
                    </p>
                  </div>
                </Fade>
              ))}
            </Cont>
          </Fade>
        </RecruitCont>
      </ContainerWrapper>
      <Footer />
    </>
  );
};
export default Job;

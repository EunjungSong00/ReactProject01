import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {ContainerWrapper} from '../src/styles/layout';
import styled from '@emotion/styled';
import Footer from '../src/components/layouts/footer';
import CountDate from '../src/components/count/count-date';
import theme from '../src/styles/theme';
import {FontSize} from '../src/styles/font';

export const CarmerceSection = styled.section`
  font-family: 'NotoSansKR-Light';
  width: 100%;
  height: 1200px;
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    background: url(/images/main_bg@3x.png) no-repeat;
    background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  //mobile
  ${(props) => props.theme.mq.mobile} {
    height: auto;

    &::before {
      background-position: top center;
    }
  }
`;

export const InnerContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 238px;

  h3 {
    font-family: 'NotoSansKR-Black';
    font-size: 100px;
    letter-spacing: -2.5px;
    color: #fff;
    text-align: center;
    padding: 28px 0;
    position: relative;
  }

  // mobile
  ${(props) => props.theme.mq.mobile} {
    max-width: 414px;
    min-width: 320px;
    min-height: 677px;
    padding-top: 148px;

    h3 {
      font-size: 45px;
      padding: 20px 12px;
      line-height: 1.5;
    }
  }

  // mobile1
  ${(props) => props.theme.mq.mobile1} {
    max-width: 100%;
    min-width: 320px;
    min-height: 677px;
  }

  // mobileS
  ${(props) => props.theme.mq.mobileS} {
    min-height: 607px;
    h3 {
      font-size: 38px;
    }
  }
`;

export const Txt = styled.p`
  font-size: 34px;
  color: #fff;
  text-align: center;
  padding: 40px 12px 18px 12px;

  span {
    font-family: 'NotoSansKR-Bold';
  }

  // mobile
  ${(props) => props.theme.mq.mobile} {
    font-size: ${FontSize.md};
    span {
      font-size: 20px;
    }
  }
`;
export const SubTxt = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 1.5;

  // mobile
  ${(props) => props.theme.mq.mobile} {
    font-size: ${FontSize.md};
    padding: 10px 12px 0;
  }

  ${(props) => props.theme.mq.mobileXS} {
    font-size: 16px;
  }
`;

const Company = () => {
  let deadline = 'may, 15, 2022';
  return (
    <>
      <ContainerWrapper>
        <CarmerceSection theme={theme}>
          <InnerContent theme={theme}>
            <Fade direction="left">
              <Txt theme={theme}>
                자동차를 <span>커머스</span>하다
              </Txt>
            </Fade>
            <Fade direction="right">
              <h3>COMING SOON</h3>
              <SubTxt theme={theme}>복잡하고 불편한 자동차 구입을 혁신적인 플랫폼으로 재탄생시키기 위해 준비중입니다.</SubTxt>
            </Fade>
            <Fade direction="left">
              <CountDate deadline={deadline} />
            </Fade>
          </InnerContent>
        </CarmerceSection>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

export default Company;

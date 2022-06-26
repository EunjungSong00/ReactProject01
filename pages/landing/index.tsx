import React, {useCallback, memo, useState } from 'react';
import {Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from '@emotion/styled';
import Wrapper from '../../src/components/atoms/Wrapper';
import theme from '../../public/theme';
import usePopupEl from '../../src/hook/usePopupEl';
import Link from 'next/link';

const Landing = () => {
  const [show, setShow] = useState(false);
  const popup = usePopupEl();
  const [logoVer, setLogoVer] = useState(false);
  const [mainApp, setMainApp] = useState(true);

  const onClickAppDownload = useCallback(() => {
    setShow(!show)
  }, [show]);

  const onClickAppStore = useCallback((value) => {
    if (value === 'apple') {
      // console.log('애플');
      popup.setPopup('6월 중 서비스 오픈 예정입니다.');
    }
    else if (value === 'google') {
      // console.log('구글');
      popup.setPopup('6월 중 서비스 오픈 예정입니다.');
    }
  },[])

  const Logo = memo(() =>
    <LogoBox>
      <LogoInnerBox between>
        <a href={'/'}>
          <LogoImg src={'/images/landing/icon-logo-white.svg'}/>
        </a>
        { mainApp ? (
          <AdBanner>
            <Link href={'https://partner.carmerce.com'}>
              <a target={'_blank'}>
                파트너<br/> 모집
              </a>
            </Link>
          </AdBanner>
        ) : (
          <Wrapper>
            {/* WEB ICON */}
            <AppInfoBox w h bg={theme.color.white} onClick={onClickAppDownload}>
              <p>앱다운로드</p>
              <img src={'/images/landing/ic-download.svg'} />
            </AppInfoBox>

            {/* MOBILE ICON*/}
            <LogoMobile>
              <LogoMobileInner w h bg={theme.color.white} onClick={() => popup.setPopup('6월 중 서비스 오픈 예정입니다.')}>
                <p>앱다운로드</p>
                <img src={'/images/landing/ic-download.svg'} />
              </LogoMobileInner>
            </LogoMobile>

            {show &&
            <AppDownBox column h >
              <AppleBox onClick={() => onClickAppStore('apple')}>
                <Wrapper height={23}>
                <img src={'/images/landing/apple-download.svg'} />
                </Wrapper>
              </AppleBox>
              <GoogleBox onClick={() => onClickAppStore('google')}>
                <Wrapper height={24}>
                <img src={'/images/landing/google-download.svg'} />
                </Wrapper>
              </GoogleBox>
            </AppDownBox>
            }
          </Wrapper>
        )}
      </LogoInnerBox>
    </LogoBox>
  );

  const LogoB = memo(() =>
    <LogoBox>
      <LogoInnerBox>
        <a href={'/'}>
          <LogoImg src={'/images/landing/icon-logo-black.svg'}/>
        </a>
      </LogoInnerBox>
    </LogoBox>
  )

  const AppDownloadB = memo(() =>
        <Wrapper>
          <AppInfoBoxBlack w h bg={theme.color.black} onClick={() => popup.setPopup('6월 중 서비스 오픈 예정입니다.')}>
            <p>앱 다운로드</p>
            <img src={'/images/landing/ic-download-white.svg'} />
          </AppInfoBoxBlack>
        </Wrapper>
  );

  const MainAppBox = memo(() =>
    <MainAppWrapper>
      <AppStoreAppleBox w h onClick={() => {
        console.log('adfsadfdasadfsf');
        popup.setPopup('6월 중 서비스 오픈 예정입니다.');
      }}>
        <img src={'/images/landing/main-icon-app-appstore.svg'} />
      </AppStoreAppleBox>
      <AppStoreAndroidBox w h onClick={() => popup.setPopup('6월 중 서비스 오픈 예정입니다.')}>
        <img src={'/images/landing/main-icon-app-google.svg'} />
      </AppStoreAndroidBox>

    </MainAppWrapper>
  );

  return (
    <div>
      {logoVer ?
        <><LogoB /></> :
        <><Logo /></>
      }
      <div>
        {/*<Video />*/}
        <Swiper
          direction={'vertical'}
          // style={{height: '100vh'}}
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
          pagination={{clickable: true, type: 'bullets'}}
          mousewheel={true}
          navigation
          onSlideChange={(swiper) => {
            // console.log('slide change');
          }}
          onSwiper={(swiper) => {
            // console.log('swiper', swiper)
          }}
          onSlideChangeTransitionEnd={(sw) => {
            // console.log('sw', sw);
            sw.activeIndex === 0 ? setMainApp(true) : setMainApp(false);
            sw.activeIndex === 5 ? setLogoVer(true) : setLogoVer(false);
          }}>

          {/* Main */}
          <SwiperSlide>
            <MainTitle>
              <p>
                중고차 어려워? <br />
                카머스는 달라!
              </p>
              <MainAppBox />
            </MainTitle>
            {/*<Video />*/}
          </SwiperSlide>
          {/* Scene 1 */}
          <SwiperSlide>
            <ContentWrapper bg={theme.color.primary} height={'100vh'}>
              <ContentInner>
                {/*<TitleOutBox>*/}
                  <TitleBox>
                    원하는 차, <br />
                    카머스에는 <br />
                    다~있다! <br />
                  </TitleBox>
                  <SubTitle>
                    100% 카머스 인증 <br />
                    모든 브랜드, 모든 차종
                  </SubTitle>
                {/*</TitleOutBox>*/}
              </ContentInner>
              <ImgBox>
                <img className={'moImg'} src={'/images/landing/scene1/scene-1-mobile.svg'} />
                <img className={'minImg'} src={'/images/landing/scene1/scene-1@3x.svg'} />
                <img className={'maxImg'} src={'/images/landing/scene1/scene-1.svg'} />
              </ImgBox>
            </ContentWrapper>
          </SwiperSlide>
          {/* Scene 2 */}
          <SwiperSlide>
            <ContentWrapper bg={theme.color.primary} height={'100vh'}>
              <ContentInner>
                <TitleBox>
                  자동차 대출, <br />
                  스마트폰으로 <br />
                  가능해? <br />
                </TitleBox>
                <SubTitle>
                  나에게 맞는 대출 상품, 비교부터 실행까지! <br />
                  100% 모바일로
                </SubTitle>
              </ContentInner>
              <ImgBox2>
                <img className={'moImg'} src={'/images/landing/scene-2-mo.svg'} />
                {/*<img className={'maxImg'} src={'/images/landing/scene-2-edit.svg'} />*/}
                <img className={'maxImg'} src={'/images/landing/scene-2-web-edit.svg'} />
              </ImgBox2>
            </ContentWrapper>
          </SwiperSlide>
          {/* Scene 3 */}
          <SwiperSlide>
            <ContentWrapper bg={theme.color.primary} height={'100vh'}>
              <ContentInner>
                <TitleBox>
                  진짜? <br />
                  무조건 환불에 <br />
                  보증까지!
                </TitleBox>
                <SubTitle>
                  쇼핑몰만큼 간편한 자동차 환불 <br />
                  카머스 모든 차량 3개월 무상 보증
                </SubTitle>
              </ContentInner>
              <ImgBox3>
                <img src={'/images/landing/scene-3.png'} />
              </ImgBox3>
            </ContentWrapper>
          </SwiperSlide>
          {/* Scene 4 */}
          <SwiperSlide>
            <ContentWrapper bg={theme.color.primary} height={'100vh'}>
              <ContentInner>
                <TitleBox>
                  주문하고 <br />
                  원하는 시간에 <br />
                  집 앞으로!
                </TitleBox>
                <SubTitle>
                  어디에 있던 상관없이 <br />
                  카머스 기사님이 직접 배송
                </SubTitle>
              </ContentInner>
              <ImgBox4>
                <img className={'moImg'} src={'/images/landing/scene-4-mo.svg'} />
                <img className={'maxImg'} src={'/images/landing/scene-4.svg'} />
              </ImgBox4>
            </ContentWrapper>
          </SwiperSlide>
          {/* Scene 5*/}
          <SwiperSlide>
            <ContentWrapper bg={theme.color.white} height={'100vh'} style={{zIndex: 10}}>
              <ContentInner>
                <TitleBox2>
                  자동차를 <br />
                  이커머스 하다
                </TitleBox2>
                <AppDownloadB />
                <FooterBox>
                  <p>
                    ㈜ 핸들 <br />
                    경기도 용인시 기흥구 중부대로 242, <br />
                    A동 1층 1F10-2호(영덕동)
                  </p>
                  <p>
                    사업자번호: 488-86-01538 사업자정보확인 <br />
                    통신판매중개업: 서울 송파-NNNN <br />
                    자동차관리사업: 제02-412d-000381호
                  </p>
                  <p>
                    전자금융분쟁처리 <br />
                    <a href='tel:070-4285-7153'>TEL : 070-4285-7153</a> <br />
                    <a href='mailto:handle@carmerce.co.kr'>MAIL : handle@carmerce.co.kr</a>
                  </p>
                </FooterBox>
              </ContentInner>
            </ContentWrapper>
          </SwiperSlide>
        </Swiper>
      </div>
      <popup.Element ok />
    </div>
  );
};

export default Landing;

const LogoBox = styled(Wrapper)`
  position: fixed;
  width: 100%;
  left: 0;
  top: 70px;
  z-index: 10;
  
  // mobile
  @media only screen and (max-width: 460px) {
    top: 33px;
  }
`;

const LogoInnerBox = styled(Wrapper)`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;

  // iPad
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    max-width: 768px;
  }
  // mobile
  @media only screen and (max-width: 460px) {
    padding: 0 20px;
    max-width: 460px;
    min-width: 280px;
  }
  @media only screen and (max-width: 414px) { max-width: 414px; }
  @media only screen and (max-width: 412px) { max-width: 412px; }
  @media only screen and (max-width: 390px) { max-width: 390px; }
  @media only screen and (max-width: 375px) { max-width: 375px; }
  @media only screen and (max-width: 360px) { max-width: 360px; }
  @media only screen and (max-width: 320px) { max-width: 320px; }
  @media only screen and (max-width: 280px) { max-width: 280px; padding: 0 10px; }
  
`;


const LogoImg = styled.img`
  width: 225px;
  height: 30px;
  object-fit: contain;

  // mobile
  @media only screen and (max-width: 460px) {
    width: 120px;
    height: 16px;
    margin-top: 15px;
  }
`;

const AppInfoBox = styled(Wrapper)`
  cursor: pointer;
  width: 142px;
  height: 50px;
  border-radius: 25px;
  color: ${theme.color.primary};
  font-size: 18px;
  font-family: 'Pretendard-ExtraBold';
  margin-top: -10px;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-left: 6px;
  }

  // mobile
  @media only screen and (max-width: 460px) {
    display: none;
    width: 120px;
    height: 42px;
    font-size: 15px;
    margin-top: 2px;

    img {
      width: 13px;
      height: 13px;
    }
  }
`;


const LogoMobile = styled(Wrapper)`
  display: none;  
  // mobile
  @media only screen and (max-width: 460px) {
    display: block;
  }

`;

const LogoMobileInner = styled(Wrapper)`
  width: 120px;
  height: 42px;
  font-size: 15px;
  margin-top: 2px;
  font-family: 'Pretendard-ExtraBold';
  color: ${theme.color.primary};
  border-radius: 25px;

  img {
    width: 13px;
    height: 13px;
  }
`;


const AppInfoBoxBlack = styled(Wrapper)`
  cursor: pointer;
  width: 200px;
  height: 70px;
  border-radius: 35px;
  color: ${theme.color.white};
  font-size: 25px;
  font-family: 'Pretendard-ExtraBold';
  margin-top: 30px;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-left: 9px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 15px;
    width: 120px;
    height: 42px;
    border-radius: 21px;

    img {
      width: 13px;
      height: 13px;
      margin-left: 6px;
    }
  }
`;

const AppDownBox = styled(Wrapper)`
  margin-top: 20px;
  width: 142px;
  border: 3px solid ${theme.color.white};
  border-radius: 20px;
  padding: 23px;

  // mobile
  @media only screen and (max-width: 460px) {
    width: 120px;
    border-radius: 14px;
    padding: 13px;
    display: none;
  }
`;

const AppleBox = styled(Wrapper)`
  cursor: pointer;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.color.white};

  img {
    width: 96px;
    height: auto;
  }

  // mobile
  @media only screen and (max-width: 460px) {
    padding-bottom: 11px;

    img {
      width: 88px;
    }
  }
`;

const GoogleBox = styled(Wrapper)`
  cursor: pointer;
  padding-top: 16px;

  img {
    width: 96px;
    height: auto;
  }

  // mobile
  @media only screen and (max-width: 460px) {
    padding-top: 11px;

    img {
      width: 88px;
    }
  }
`;

const MainAppWrapper = styled(Wrapper)`
  z-index: 99;
  display: flex;
  margin: 50px auto 0;
  width: 415px;
  justify-content: space-between;
  
  @media only screen and (max-width: 460px) {
    margin: 30px auto 0;
    display: block;
    justify-content: inherit;
    width: 190px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const AppStoreAppleBox = styled(Wrapper)`
  background-color: ${theme.color.white};
  width: 200px;
  height: 70px;
  border-radius: 35px;
  z-index: 999;
  
  img {
    width: 120px;
    height: auto;
  }

  @media only screen and (max-width: 460px) {
    width: 190px;
    height: 67px;
    img {
      width: 114px;
    }
  }
`;

const AppStoreAndroidBox = styled(AppStoreAppleBox)`
  img {
    width: 122px;
  }
  @media only screen and (max-width: 460px) {
    margin-top: 15px;
    img {
      width: 116px;
    }
  }
`;

const AdBanner = styled(Wrapper)`
  z-index: 99;
  width: 202px;
  height: 244px;
  position: absolute;
  top: -70px;
  right: 0;
  background: url('/images/landing/ad-partner-edit.svg') no-repeat;
  background-size: contain;
  
  a {
    font-size: 30px;
    display: block;
    font-family: 'Pretendard-Bold';
    color: ${theme.color.white};
    text-align: right;
    margin: 20px 23px 0 0;
  }
  
  @media only screen and (max-width: 460px) {
    width: 120px;
    z-index: 99;
    top: -33px;
    a {
      font-size: 18px;
      margin: 10px 10px 0 0;
    }
  }
`;

const ContentWrapper = styled(Wrapper)`
  margin: 0;
  width: 100%;
  padding: 0 50px;
  //
  //img {
  //  image-rendering: -moz-crisp-edges;
  //  image-rendering: -o-crisp-edges;
  //  image-rendering: -webkit-optimize-contrast;
  //  -ms-interpolation-mode: nearest-neighbor;
  //  image-rendering: crisp-edges;
  //  transform: translateZ(0);
  //}

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
  
  // mobile
  @media only screen and (max-width: 460px) {
    padding: 0 20px;
    min-width: 280px;
  }
`;

const ContentInner = styled(Wrapper)`
  position: relative;
  height: 100%;
  z-index: 1;
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
  
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
  // mobile
  @media only screen and (max-width: 460px) {
    padding: 0;
    min-width: 280px;
  }
  
`;

const MainTitle = styled(Wrapper)`
  position: absolute;
  z-index: 99;
  p {
    font-size: 100px;
    font-family: 'NanumSquareExtraBold';
    color: ${theme.color.white};
    text-align: center;
    line-height: 1.15;
  }
  
  @media only screen and (max-width: 460px) {
    p {
    font-size: 45px;
    line-height: 1.18;
    }
  }
`;

const TitleOutBox = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 1024px;
  //margin-left: 50px;
  // mobile
  @media only screen and (max-width: 460px) {
    width: 460px;
    //margin-left: 20px;
  }
`;

const TitleBox = styled.p`
  font-size: 70px;
  color: ${theme.color.white};
  padding-top: 160px;
  text-align: left;
  font-family: 'NanumSquareExtraBold';
  line-height: 1.1;

  @media only screen and (max-width: 1366px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 70px;
  }
  // mobile
  @media only screen and (max-width: 460px) {
    font-size: 45px;
    padding-top: 115px;
  }
`;


const TitleBox2 = styled(TitleBox)`
  color: #111; 
  line-height: 1.17;
`;

const SubTitle = styled.p`
  font-family: 'Pretendard-Regular';
  font-size: 18px;
  color: ${theme.color.white};
  padding-top: 25px;
  line-height: 1.33;
  text-align: left;

  // mobile
  @media only screen and (max-width: 460px) {
    //position: absolute;
    //top: 332px;
    //padding: 0;
    font-size: 16px;
    padding-top: 15px;
    line-height: normal;
  }
`;

const ImgBox = styled(Wrapper)`
  position: absolute;
  right: -225px;
  bottom: -211px;
  z-index: 0;
  //bottom: -129px;
  //right: -110px;
  //background: url(/images/landing/scene-1.svg) no-repeat;
  //background-size: 1318px;
  
  img {
    //width: 775px;/
    height: auto;
    object-fit: contain;
  }
  .moImg {
    display: none;
  }
  .minImg {
    display: none;
  }
  .maxImg{
    width: 100%;
    height: 730px;
    display: block;
  }

  //.maxImg{
  //  width: 100%;
  //  height: 570px;
  //  display: block;
  //}

  @media only screen and (max-width: 1600px) {
    bottom: -129px;
    right: -110px;
    .maxImg{
      height: 570px;
    }
  } 
  
  @media only screen and (max-width: 1024px) {
    right: -544px;
    bottom: -111px;
    
    .maxImg{
      height: 730px;
    }
  }
  // iPad
  @media only screen and (max-width: 768px) {
    bottom: 0;
    right: -326px;
    //right: -460px;
    .maxImg {
      display: none;
    }
    .minImg {
      display: block;
      //width: 1030px;
      width: 820px;
      height: auto;
    }
  }
  
  // mobile
  @media only screen and (max-width: 460px) {
    right: -258px;
    bottom: -13px;
    .minImg {
      display: none;
    }
    .moImg {
      display: block;
      width: 566px;
    }
  }
`;

const ImgBox2 = styled(Wrapper)`
  position: absolute;
  bottom: -59px;
  left: 47.2%;
  z-index: 0;
  transform: translateX(-50%);

  .maxImg {
    width: 1074px;
    height: auto;
    object-fit: contain;
  }

  .moImg {
    display: none;
    object-fit: contain;
  }
  
  @media only screen and (max-width: 1600px) {
    bottom: -135px;
    left: 49.8%;
    .maxImg {
      //width: 660px;
      width: 910px;
    }
  }
  @media only screen and (max-width: 1024px) {
    bottom: -59px;
    left: 47.2%;
    .maxImg {
      width: 1074px;
    }
  }
  // iPad
  @media only screen and (max-width: 768px) {
    bottom: 0;
    .maxImg {
      width: 697px;
    }
  }

  // mobile
  @media only screen and (max-width: 460px) {
    bottom: -70px;
    left: 57%;
    .maxImg {
      display: none;
    }
    .moImg {
      display: block;
      height: auto;
      width: 600px;
    }
  }
`;

const ImgBox3 = styled(Wrapper)`
  position: absolute;
  z-index: 0;
  left: 53.5%;
  bottom: 21px;
  transform: translateX(-50%);

  img {
    width: 688px;
    height: auto;
    object-fit: contain;
  }

  @media only screen and (max-width: 1600px) {
    bottom: 31px;
    left: 52%;
    img {
      width: 520px;
    }
  }
  
  @media only screen and (max-width: 1024px) {
    left: 46.5%;
    bottom: 111px;
    img {
      width: 688px;
    }
  }

  // iPad
  @media only screen and (max-width: 768px) {
    bottom: 20px;
    img {
      width: 607px;
    }
  }

  // mobile
  @media only screen and (max-width: 460px) {
    bottom: 140px;
    left: 50.5%;
    img {
      width: 278px;
    }
  }
`;

const ImgBox4 = styled(Wrapper)`
  position: absolute;
  z-index: 0;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  
  .moImg {
    display: none;
    object-fit: contain;
  }
  .maxImg {
    display: block;
    width: 751px;
    height: auto;
    object-fit: contain;
  }


  @media only screen and (max-width: 1600px) {
    bottom: -43px;
    left: 48.6%;
    .maxImg {
      width: 636px;
    }
  }

  @media only screen and (max-width: 1024px) {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    .maxImg {
      width: 751px;
    }
  }

  // iPad
  @media only screen and (max-width: 768px) {
    .maxImg {
      width: 607px;
    }
  }
  
  
  // mobile
  @media only screen and (max-width: 460px) {
    bottom: -30px;
    left: 54%;
  
    .maxImg {
      display: none;
    }
    .moImg {
      display: block;
      width: 370px;
      height: auto;
    }
  }
`;


const FooterBox = styled(Wrapper)`
  position: absolute;
  bottom: 100px;

  p {
    margin-left: 10px;
    font-family: 'Pretendard-Regular';
    color: ${theme.color.text};
    font-size: 14px;
    line-height: 1.43;
    text-align: left;
    padding-bottom: 25px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }
  // mobile
  @media only screen and (max-width: 460px) {
    font-size: 13px;
    bottom: 100px
  }

`;


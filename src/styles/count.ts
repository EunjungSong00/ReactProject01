import styled from '@emotion/styled';

export const Layout = styled.div`
  font-family: 'NotoSansKR-Light';
  width: 100%;
  min-width: 1240px;
  height: auto;
  min-height: 1280px;
  background:
          radial-gradient(circle at 8% 10.4%, rgba(255, 55, 57, .8),
          rgba(241, 218, 69, 0.4) 36.71%),
          radial-gradient(circle at 6.7% 75%, rgba(28, 12, 51, .5),
          rgba(96, 65, 99, 0) 70.71%),
          radial-gradient(circle at 98.3% 75%,
          rgba(79, 228, 173, 1),
          rgba(241, 218, 69, 0.4) 70.71%),
          linear-gradient(34deg, rgba(33,14,70, 1), rgba(33,14,70,0) 40%),
          linear-gradient(327deg, rgb(33 14 70 / 96%), rgba(33,14,70,0) 55%);
  background: 
          -webkit-radial-gradient(circle at 8% 10.4%, rgba(255, 55, 57, .8),
          rgba(241, 218, 69, 0.4) 36.71%),
          -webkit-radial-gradient(circle at 6.7% 75%, rgba(28, 12, 51, .5),
          rgba(96, 65, 99, 0) 70.71%),
          -webkit-radial-gradient(circle at 98.3% 75%, rgba(79, 228, 173, 1),
          rgba(241, 218, 69, 0.4) 70.71%),
          -webkit-linear-gradient(34deg, rgba(33,14,70, 1), rgba(33,14,70,0) 40%),
          -webkit-linear-gradient(327deg, rgb(33 14 70 / 96%), rgba(33,14,70,0) 55%);
  background:
          -moz-radial-gradient(circle at 8% 10.4%, rgba(255, 55, 57, .8),
          rgba(241, 218, 69, 0.4) 36.71%),
          -moz-radial-gradient(circle at 6.7% 75%, rgba(28, 12, 51, .5),
          rgba(96, 65, 99, 0) 70.71%),
          -moz-radial-gradient(circle at 98.3% 75%, rgba(79, 228, 173, 1),
          rgba(241, 218, 69, 0.4) 70.71%),
          -moz-linear-gradient(34deg, rgba(33,14,70, 1), rgba(33,14,70,0) 40%),
          -moz-linear-gradient(327deg, rgb(33 14 70 / 96%), rgba(33,14,70,0) 55%);
  background:
          -o-radial-gradient(circle at 8% 10.4%, rgba(255, 55, 57, .8),
          rgba(241, 218, 69, 0.4) 36.71%),
          -o-radial-gradient(circle at 6.7% 75%, rgba(28, 12, 51, .5),
          rgba(96, 65, 99, 0) 70.71%),
          -o-radial-gradient(circle at 98.3% 75%, rgba(79, 228, 173, 1),
          rgba(241, 218, 69, 0.4) 70.71%),
          -o-linear-gradient(34deg, rgba(33,14,70, 1), rgba(33,14,70,0) 40%),
          -o-linear-gradient(327deg, rgb(33 14 70 / 96%), rgba(33,14,70,0) 55%);

  // mobile
  ${props => props.theme.mq.mobile} {
    min-width: 320px;
    width: 100%;
    min-height: inherit;
  }
`;

export const Container = styled.div`
  font-family: 'NotoSansKR-Light';
  position: relative;
  height: auto;
  min-height: 1200px;
  width: 1240px;
  margin: 0 auto;

  h1 {
    text-align: center;
    width: 400px;
    margin: 0 auto;
    padding-top: 100px;
  }
  h3 {
    font-size: 73px;
    letter-spacing: 9px;
    color: #fff;
    text-align: center;
    padding: 55px 0 30px;
  }
  
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
  // mobile
  ${props => props.theme.mq.mobile} {
    max-width: 414px;
    min-width: 320px;
    min-height: 677px;
    h1 {
      width: 300px;
      padding-top: 88px;
    }
    h3 {
      font-size: 22px;
      padding: 40px 12px 20px;
      line-height: 1.5;
    }
  }

  // mobile1
  ${props => props.theme.mq.mobile1} {
    max-width: 100%;
    min-width: 320px;
    min-height: 677px;
  }
  
  // mobileS
  ${props => props.theme.mq.mobileS} {
    min-height: 607px;
    h1 {
      width: 230px;
    }
  }
  
  // mobileXS
  ${props => props.theme.mq.mobileXS} {
    min-height: 541px;
  }
`;

export const CountNumb = styled.div`
  margin-top: 125px;
  height: 310px;
  position: relative;
  
  span {
    font-family: 'NotoSansKR-Regular';
    display: inline-block;
    z-index: 999;
    position: relative;
    font-size: 5rem;
    width: 25%;
    padding-top: 107px;
    text-align: center;
    float: left;
    
    &::before {
      content: '';
      display: inline-block;
      width: 190px;
      height: 190px;
      border-radius: 95px;
      background: url(/images/circle_bg.png) no-repeat;
      background-size: contain;
      -o-background-size: contain;
      -moz-background-size: contain;
      -webkit-background-size: contain;
      position: absolute;
      top: 57px;
      left: 59px;
      z-index: -1;
      box-shadow: 0 7px 11px 4px #1d1d1d75;
    }
    
    &::after {
      content: '';
      display: inline-block;
      width: 250px;
      height: 250px;
      border: 3px solid #fff;
      border-radius: 125px;
      opacity: .5;
      background-color: #e0e8f3;
      position: absolute;
      top: 25px;
      left: 26px;
      z-index: -1;
      box-shadow: 0 11px 18px 6px #1d1d1d75;
    }
  }
  
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
  //mobile
  ${props => props.theme.mq.mobile} {
    margin-top: 0;
    padding-top: 36px;
    height: inherit;
    
    span {
      font-size: 22px;
      padding-top: 40px;
      
      &::before {
        width: 74px;
        height: 74px;;
        top: 16px;
        left: 15px;
      }
      
      &::after {
        width: 84px;
        height: 84px;
        top: 8px;
        left: 7px;
      }
    }
  }
  
  //mobile1
  ${props => props.theme.mq.mobile1} {
    span {
      &::before {
        width: 66px;
        height: 66px;;
        top: 20px;
        left: 15px;
      }
      &::after {
        width: 80px;
        height: 80px;
        top: 10px;
        left: 5px;
      }
    }
  }
  
  // mobileS 
  ${props => props.theme.mq.mobileS} {
    span {
      &::before {
        width: 56px;
        height: 56px;;
        top: 25px;
        left: 17px;
      }
      &::after {
        width: 68px;
        height: 68px;
        top: 16px;
        left: 8px;
      }
    }
  }
  
  // mobileXS
  ${props => props.theme.mq.mobileXS} {
    span{
      font-size: 20px;
      &::before {
        width: 50px;
        height: 50px;
        top: 26px;
        left: 15px;
      }
      &::after {
        width: 62px;
        height: 62px;
        top: 17px;
        left: 6px;
      }
    }
  }
`;

export const CountTxt = styled.section`
  width: 100%;
  margin: 10px 0 180px;
  span {
    display: inline-block;
    color: #fff;
    width: 25%;
    text-align: center;
    font-size: 2.125rem;
    float: left;
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
  //mobile
  ${props => props.theme.mq.mobile} {
    margin: 10px 0 120px;
    span {
      font-size: 20px;
      padding-top: 50px;
    }
  }

  //mobile1
  ${props => props.theme.mq.mobile1} {
    span {
      font-size: 18px;
      padding-top: 45px;
    }
  }
  
  //mobileS
  ${props => props.theme.mq.mobileS} {
    margin: 10px 0 92px;
    span {
      font-size: 16px;
      padding-top: 38px;
    }
  }
  
  // mobileXS 
  ${props => props.theme.mq.mobileXS} {
    span {
      font-size: 14px;
      padding-top: 29px;
    }
  }
`;

export const FooterTxt = styled.p`
  font-size: 1.875rem;
  color: #fff;
  padding-bottom: 70px;
  text-align: center;
  b {
    font-family: 'NotoSansKR-Regular';
  }
  span {
    padding-left: 20px;
  }
`;

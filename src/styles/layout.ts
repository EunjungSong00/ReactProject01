import styled from '@emotion/styled';
import {FontSize} from '../../src/styles/font';
import {Color} from '../../src/styles/color';

export const HeaderInner = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-family: 'NotoSansKR-Regular';
  
  h1 {
    span {
      display: inline-block;
      background: url(/images/logo.svg) no-repeat;
      background-size: contain;
      width: 225px;
      height: 40px;
      text-indent: -9999em;
    }
  }
  
  ${ props => props.theme.mq.mobile }{
    width: 100%;
    min-width: 320px;
    
    h1 {
      span {
        width: 143px;
        margin: 15px 0 0 20px;
      }
    }
  };
`;

export const NavBtn = styled.div`
  display: none;
  span {
    display: inline-block;
    width: 22px;
    height: 2px;
    background: #fff;
    position: relative;
    top: -6px;
    
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: -8px;
      left: 0;
      width: 22px;
      height: 2px;
      background: #fff;
    }
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 22px;
      height: 2px;
      background: #fff;
    }
  }
  ${ props => props.theme.mq.mobile} {
    display: block;
    margin-right: 12px;
  }
`;

export const WebNav = styled.nav`
  p {
    display: none;
  }
  
  ul {
    min-width: 320px;
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }
  
  li {
    display: inline-block;
    float: left;
    margin-right: 38px;
    
    &:last-child {
      margin: 0;
    }
  }
  a {
    color: ${Color.white};
    font-size: ${FontSize.md};
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  ${ props => props.theme.mq.mobile }{
    background: #060b26;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 350ms;
    padding-top: 30px;
    
    &.active {
      right: 0;
      transition: 350ms;
    }
    
    p {
      display: block;
      position: absolute;
      right: 12px;
    }
    
    span {
      display: inline-block;
      width: 22px;
      height: 2px;
      position: relative;
      
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -8px;
        left: 0;
        width: 22px;
        height: 2px;
        background: #fff;
        transform: rotate(45deg);
      }

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: -8px;
        left: 0;
        width: 22px;
        height: 2px;
        background: #fff;
        transform: rotate(-45deg);
      }
    }
    
    li {
      float: none;
      display: block;
      padding-left: 20px;
      color: #fff;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
    }
  };
`;

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  font-family: 'NotoSansKR-Regular';
`;

export const Content = styled.section`
  div {
      width: 1200px;
      margin: 0 auto;
    
    ${ props =>  props.theme.mq.mobile} {
      width: 100%;
      min-width: 320px;
    }
  }
`;

export const FooterCont = styled.div`
  padding: 40px 0;
  background: #2c2f38;
  min-width: 320px;
  font-family: 'NotoSansKR-Regular';
    
  div {
    width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    color: #ddd;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.4px;
  }
  
  ul {
    margin-bottom: 25px;
    
    &::after {
      content: '';
      display: table;
      clear: both;
    }
    
    li {
      display: inline-block;
      width: 38px;
      height: 38px;
      float: left;
      margin-right: 4px;
      
      img {
        object-fit: contain;
      }
    }
  }
  
  span {
    color: #999;
  }

  ${props => props.theme.mq.mobile} {
    //padding: 40px 12px;
    width: 100%;
    
    div {
      font-size: 12px;
      width: 100%;
      padding: 0 12px;
    }
  }
`;

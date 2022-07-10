import React, { useEffect, useState } from "react";
import theme from '../../../src/styles/theme';
import styled from '@emotion/styled';

export const CountNumb = styled.div`
  height: 310px;
  position: relative;
  width: 858px;
  margin: 90px auto 0;
  
  div {
    display: inline-block;
    float: left;
    width: 25%;
    position: relative;
    font-family: 'NotoSansKR-Black';
    
    &::before {
      content: ':';
      display: inline-block;
      position: absolute;
      top: 78%;
      right: -6px;
      color: #fff;
      font-size: 25px;
    }

    &:last-child::before {
      display: none;
    }
    
    &::after {
      content: '';
      display: inline-block;
      width: 180px;
      height: 180px;
      border-radius: 90px;
      background: #fff;
      position: absolute;
      opacity: 0.3;
      top: 42px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }
  
  span {
    display: inline-block;
    width: 100%;
    z-index: 999;
    position: relative;
    color: #fff;
    font-size: 44px;;
    padding-top: 107px;
    text-align: center;
    
    &:last-child {
      position: absolute;
      font-family: 'NotoSansKR-Regular';
      font-size: 14px;
      bottom: -33%;
      left: 0;
    }
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
  //mobile
  ${props => props.theme.mq.mobile} {
    width: 100%;
    margin-top: 0;
    padding-top: 36px;
    height: inherit;
    
    div {
      &::before {
        font-size: 18px;
        right: -2%;
      }
      &::after {
        width: 84px;
        height: 84px;
        top: 16px;
      }
    }
    
    span {
      font-size: 22px;
      padding-top: 40px;
    }
  }

  //mobile1
  ${props => props.theme.mq.mobile1} {
    div {
      &::before {
        right: -4%;
      }
      &::after {
        width: 80px;
        height: 80px;
      }
    }
  }

  // mobileS 
  ${props => props.theme.mq.mobileS} {
    div {
      &::after {
        width: 68px;
        height: 68px;
        top: 16px;
      }
    }
    span {
      padding-top: 34px;
      //&::before {
      //  width: 56px;
      //  height: 56px;;
      //  top: 25px;
      //  left: 17px;
      //}
    }
  }

  // mobileXS
  ${props => props.theme.mq.mobileXS} {
    div {
      &::after {
        width: 62px;
        height: 62px;
        top: 17px;
      }
    }
    span {
      font-size: 20px;
      //&::before {
      //  width: 50px;
      //  height: 50px;
      //  top: 26px;
      //  left: 15px;
      //}
    }
  }
`;

const CountDate = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <CountNumb theme={theme}>
      <div>
        <span>{leading0(days)}</span>
        <span>Days</span>
      </div>
      <div>
        <span>{leading0(hours)}</span>
        <span>Hrs</span>
      </div>
      <div>
        <span>{leading0(minutes)}</span>
        <span>Min</span>
      </div>
      <div>
        <span>{leading0(seconds)}</span>
        <span>Sec</span>
      </div>
    </CountNumb>
  );
};

export default CountDate;

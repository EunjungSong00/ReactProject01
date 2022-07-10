import React, {useState} from 'react';
import { HeaderInner, WebNav, NavBtn} from '../../../src/styles/layout';
import Link from 'next/link';
import theme from '../../../src/styles/theme';
import styled from '@emotion/styled';

export const HeaderCont = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 110px;
  font-size: 1rem;
  
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: ${(props) => (props.bg? '#000' : '#transparent')};
    opacity: ${(props) => (props.op? '0.7': '0')};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  };

  ${ props => props.theme.mq.mobile }{
    width: 100%;
    min-width: 320px;
    height: 50px;
  };
`;

interface HeaderStyle {
  bg?: boolean;
  op?: boolean;
}

const Header = (props : HeaderStyle) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <HeaderCont theme={theme} bg={props.bg} op={props.op}>
      <HeaderInner theme={theme}>
        <h1>
          <Link href='/'>
            <a>
              <span>핸들</span>
            </a>
          </Link>
        </h1>
        <div>
          <NavBtn theme={theme} onClick={showSidebar}>
            <span></span>
          </NavBtn>
          <WebNav theme={theme} className={sidebar? 'active' : ''}>
            <p onClick={showSidebar}>
              <span></span>
            </p>
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about-us"><a>About Us</a></Link></li>
              <li><Link href="/job"><a>Recruit</a></Link></li>
            </ul>
          </WebNav>
        </div>
      </HeaderInner>
    </HeaderCont>
  )
}

export default Header

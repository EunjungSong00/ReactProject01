import React, {memo} from 'react';
import styled from '@emotion/styled';

interface HeaderStyle {
  bg?: boolean;
  op?: boolean;
}

interface HeaderProps extends HeaderStyle {
  children?: any;
}

const _Wrapper = ({children, ...props} : HeaderProps) => {
  return(
    <HeaderWrapper {...props}>
      {children}
    </HeaderWrapper>
  )
}

export default _Wrapper;

const HeaderWrapper = styled.div<HeaderStyle>`
  position: fixed;
  width: 100%;
  &::after {
    content: '';
    ${({bg}) => bg && 'background: #000;'};
    ${({op}) => op && 'opacity: 0.3'};
    width: 100%;
    height: 100px;
    position: absolute;
  }

`;

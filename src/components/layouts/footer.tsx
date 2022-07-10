import {FooterCont} from '../../../src/styles/layout';
import theme from '../../../src/styles/theme';

const Footer = () => {
  return(
    <FooterCont theme={theme}>
      <div>
        <ul>
          <li>
            <a href='https://www.facebook.com/' target='_blank'>
              <img src='/images/ico-facebook.svg' />
            </a>
            </li>
          <li>
            <a href='https://twitter.com/?lang=ko' target='_blank'>
              <img src='/images/ico-twitter.svg' />
            </a>
            </li>
          <li>
            <a href='https://www.instagram.com/' target='_blank'>
              <img src='/images/ico-instagram.svg' />
            </a>
            </li>
        </ul>
        <p>
          사업자등록번호: 488-86-01538&nbsp;&nbsp;|&nbsp;&nbsp;대표이사: 안인성 <br />
          HANDLE Corp. 12F 171, Saimdang-ro, Seocho-gu, Soeul, Republic of Korea<br />
          <span>Copyrights © Handle. All rights reserved.</span>
        </p>
      </div>
    </FooterCont>
  )
}


export default Footer


export const size = {
  largest: '1500px', // 1500px
  large: '1240px', // 900px
  medium: '678px', // 678px
  small: '460px', // 460px
  small1: '375px', //375px
  smallest: '360px', // 360px
  smallestx: '320px' // 320px
}


export default {
  color: {
    primary: '#007aff',
    backgroundGray: '#f1f2f4',
    textGray: '#949497',
    text: '#333333',
    lineGray: '#cfd5db',
    lineGray5: 'rgba(207, 213, 219, 0.5)',
    lineGray35: 'rgba(207, 213, 219, 0.35)',
    white: '#fff',
    silver: '#a7a7a7',
    offWhite: '#fff9e1',
    black: '#000',
    red: '#ea2016',
    blue: '#0027ff',
    green: '#00aa43',
    yellow: '#ece700',
    brown: '#662e2e',
    purple: '#8b00e2',
    optionBox: '#007aff'
  },
  font: {
    light: 'SpoqaHanSansNeo-Thin',
    regular: 'SpoqaHanSansNeo-Light',
    medium: 'SpoqaHanSansNeo-Regular',
    bold: 'SpoqaHanSansNeo-Medium',
    thick: 'SpoqaHanSansNeo-Bold'
  },
  device: {
    largest: `@media only screen and (min-width: ${size.largest})`,
    laptop: `@media only screen and (max-width: ${size.large})`,
    tablet: `@media only screen and (max-width: ${size.medium})`,
    mobile: `@media only screen and (max-width: ${size.small})`,
    mobile1: `@media only screen and (max-width: ${size.small1})`,
    mobileS: `@media only screen and (max-width: ${size.smallest})`,
    mobileXS: `@media only screen and (max-width: ${size.smallestx})`,
  },
};
export const medium = [120, 42];
export const primary = ['#0066ff', 'none'];
export const whiteBlue = ['white', '1px solid #0066ff'];
export const white = ['white', '1px solid #d8d8d8'];

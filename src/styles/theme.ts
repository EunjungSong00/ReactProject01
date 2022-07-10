export const size = {
    largest: '1500px', // 1500px
    large: '1240px', // 900px
    medium: '678px', // 678px
    small: '460px', // 460px
    small1: '375px', //375px
    smallest: '360px', // 360px
    smallestx: '320px' // 320px
}

const theme = {
    mainColor: '#0000ff',
    mq: {
        largest: `@media only screen and (min-width: ${size.largest})`,
        laptop: `@media only screen and (max-width: ${size.large})`,
        tablet: `@media only screen and (max-width: ${size.medium})`,
        mobile: `@media only screen and (max-width: ${size.small})`,
        mobile1: `@media only screen and (max-width: ${size.small1})`,
        mobileS: `@media only screen and (max-width: ${size.smallest})`,
        mobileXS: `@media only screen and (max-width: ${size.smallestx})`,
    },
}

export default theme
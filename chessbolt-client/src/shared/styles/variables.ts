const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const mq = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

const headerHeight = 5;
const footerHeight = 10;
const body = {
  heightHideFooter: 100 - headerHeight,
  heightWithFooter: 100 - headerHeight - footerHeight
}

export const DefaultVariables = {
  header: {
    height: `${headerHeight}vh`,
  },
  footer: {
    height: `${footerHeight}vh`,
  },
  body: {
    heightHideFooter: `${body.heightHideFooter}vh`,
    heightWithFooter: `${body.heightWithFooter}vh`,
  },
}

export type ThemeVariables = typeof DefaultVariables

export const mq = {
  isDesktopOrLaptop: '(min-width: 1224px)',
  isDesktopOrLaptopDevice: '(min-device-width: 1224px)',
  isBigScreen: '(min-device-width: 1824px)',
  isTabletOrMobile: '(max-width: 1224px)',
  isTabletOrMobileDevice: '(max-device-width: 1224px)',
  isPortrait: '(orientation: portrait)',
  isRetina: '(min-resolution: 2dppx)',
}

export const DefaultVariables = {
  header: {
      height: '5vh',
  },
}

export type ThemeVariables = typeof DefaultVariables
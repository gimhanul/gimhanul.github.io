import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  useColorSchemeMediaQuery: true,
  colors: {
    ...baseTheme.colors,
    primary: '#68d391',
    modes: {
      ...baseTheme.colors.modes,
      light: {
        ...baseTheme.colors.modes.light,
        background: '#fff',
      },
      dark: {
        ...baseTheme.colors.modes.dark,
        primary: '#68d391',
      },
    },
  },
}

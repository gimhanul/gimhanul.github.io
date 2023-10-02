import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  useColorSchemeMediaQuery: true,
  colors: {
    ...baseTheme.colors,
    primary: '#48bb78',
    modes: {
      ...baseTheme.colors.modes,
      light: {
        ...baseTheme.colors.modes.light,
        background: '#F5F5F5',
      },
      dark: {
        ...baseTheme.colors.modes.dark,
        primary: '#68d391',
      },
    },
  },
}

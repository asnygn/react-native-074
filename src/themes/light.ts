export const light = {
  id: 'light',
  app: {
    screenPadding: 16,
    backgroundColor: '#f6f6f6',
    borderColor: '#dadada',
  },
  fonts: {
    Poppins: {
      '100': 'Poppins-Thin',
      '200': 'Poppins-ExtraLight',
      '300': 'Poppins-Light',
      '400': 'Poppins-Regular',
      '500': 'Poppins-Medium',
      '600': 'Poppins-SemiBold',
      '700': 'Poppins-Bold',
      '800': 'Poppins-ExtraBold',
      '900': 'Poppins-Black',
    },
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    color: '#000',
  },
  button: {
    fontSize: 16,
    color: '#fff',
    borderRadius: 8,
    height: 50,
    primaryGradient: {
      color: '#fdfdfd',
      backgroundColor: ['#F21235', '#900712'],
      backgroundColorDisabled: ['#c8c8c8', '#c8c8c8'],
      backgroundColorPressed: ['#9A2131', '#9A2131'],
      backgroundColorLoading: ['#9A2131', '#9A2131'],
    },
  },
}

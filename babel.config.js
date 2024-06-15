module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/constants': './src/constants',
          '@/contexts': './src/contexts',
          '@/hooks': './src/hooks',
          '@/navigation': './src/navigation',
          '@/screens': './src/screens',
          '@/stores': './src/stores',
          '@/styles': './src/styles',
          '@/themes': './src/themes',
          '@/types': './src/types',
          '@/utils': './src/utils',
        },
      },
    ],
  ],
}

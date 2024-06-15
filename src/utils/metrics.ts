import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

export const horizontalScale = (size: number) => {
  return (width / guidelineBaseWidth) * size
}

export const verticalScale = (size: number) => {
  return (height / guidelineBaseHeight) * size
}

export const moderateScale = (size: number, factor = 0.5) => {
  return size + (horizontalScale(size) - size) * factor
}

export const responsiveWidth = (percentage: number) => {
  return (percentage / 100) * width
}

export const responsiveHeight = (percentage: number) => {
  return (percentage / 100) * height
}

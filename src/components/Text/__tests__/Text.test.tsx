import React from 'react'
import { render, screen } from '@testing-library/react-native'

import { Text } from '../Text'

test('text render correctly', () => {
  render(<Text>Hello World</Text>)
  expect(screen.getByText('Hello World')).toBeDefined()
})

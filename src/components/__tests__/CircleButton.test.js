/* eslint-env jest */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import CircleButton from '../CircleButton.js'

describe('components/ProductListMetadata', () => {
  it('check if onClick is not defined, it should be ok', () => {
    const { getByTestId } = render(<CircleButton dataTestId='1' />)
    fireEvent.click(getByTestId('1'))
    expect(1).toBe(1)
  })
  it('check if click is working', () => {
    let input = 2
    const { getByTestId } = render(
      <CircleButton
        dataTestId='1'
        onClick={() => {
          input = input + 1
        }}
      />
    )
    fireEvent.click(getByTestId('1'))
    expect(input).toBe(3)
  })
})

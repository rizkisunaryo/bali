/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ProductCard from '../ProductCard.js'

describe('components/ProductCard', () => {
  it('should have marginLeft = 5', () => {
    const data = { id: 1 }
    const { getByTestId } = render(<ProductCard data={data} isEven={false} />)
    expect(getByTestId(`productCardContainer-${data.id}`)).toHaveStyle(
      'marginLeft: 5'
    )
  })
})

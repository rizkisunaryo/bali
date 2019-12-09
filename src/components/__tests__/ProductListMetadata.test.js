/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import ProductListMetadata from '../ProductListMetadata.js'

describe('components/ProductListMetadata', () => {
  it('returns null if no metadata', () => {
    const { queryByText } = render(<ProductListMetadata />)
    expect(queryByText(/Showing results/i)).toBeNull()
  })
})

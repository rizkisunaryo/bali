/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'

import ProductCard from '../ProductCard.js'
import { initializeStore } from '../../rematch/store'

let store

beforeEach(() => {
  store = initializeStore()
})

describe('components/ProductCard', () => {
  it('should have marginLeft = 5', () => {
    const data = { id: 1 }
    const { getByTestId } = render(
      <Provider store={store}>
        <ProductCard data={data} isEven={false} />
      </Provider>
    )
    expect(getByTestId(`productCardContainer-${data.id}`)).toHaveStyle(
      'marginLeft: 5'
    )
  })
})

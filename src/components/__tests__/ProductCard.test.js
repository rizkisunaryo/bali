/* eslint-env jest */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'

import ProductCard from '../ProductCard.js'
import { initializeStore } from '../../rematch/store'
import { sleep } from '../../utils/index.js'

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

  it("should show 'Add to Cart' if mouseOver and quantityAvailable > 0", async () => {
    const data = { id: 1, quantityAvailable: 1 }
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <ProductCard data={data} isEven={false} />
      </Provider>
    )

    await sleep(100)

    fireEvent.mouseOver(getByTestId(`productCardContainer-${data.id}`))
    expect(getByText('Add to Cart')).not.toBeNull()
  })

  it("should dismiss 'Add to Cart' if mouseOut", async () => {
    const data = { id: 1, quantityAvailable: 1 }
    const { getByText, getByTestId, queryByText } = render(
      <Provider store={store}>
        <ProductCard data={data} isEven={false} />
      </Provider>
    )

    await sleep(100)

    fireEvent.mouseOver(getByTestId(`productCardContainer-${data.id}`))
    expect(getByText('Add to Cart')).not.toBeNull()

    fireEvent.mouseOut(getByTestId(`addToCartContainer-${data.id}`))
    expect(queryByText('Add to Cart')).toBeNull()
  })
})

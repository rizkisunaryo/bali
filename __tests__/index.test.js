/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from '../pages/index.js'
import { initializeStore } from '../src/rematch/store'
import { sleep } from '../src/utils/index.js'

let store

beforeEach(() => {
  store = initializeStore()
})

describe('pages/index', () => {
  it('positive case', async () => {
    fetch.once(
      JSON.stringify({
        metadata: {
          query: 'query test',
          page: 3,
          pages: 5,
          total: 200
        },
        results: [
          {
            id: 'ffc4211a-fb81-45e3-b1d8-2d399a92aa89',
            name: 'Buy Olaplex No. 3 Hair Perfector',
            salePrice: 3145,
            retailPrice: 5000,
            imageUrl:
              'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg',
            quantityAvailable: 65
          }
        ]
      })
    )

    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    await sleep(100)

    expect(getByText(/query test/i)).not.toBeNull()
    expect(getAllByText(/3/i)).not.toBeNull()
    expect(getAllByText(/5/i)).not.toBeNull()
    expect(getByText(/200/i)).not.toBeNull()
    expect(getAllByText(/1/i)).not.toBeNull()
  })
})

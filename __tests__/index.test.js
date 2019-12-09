/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import App from '../pages/index.js'

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { getAllByText } = render(<App />)

    expect(getAllByText('Hello World!')[0]).not.toBeNull()
  })
})

describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchSnapshot()
  })
})

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProductListMetadata from '../src/components/ProductListMetadata'

const Index = props => {
  useEffect(() => {
    props.fetchProductsIfNeeded()
  }, [])

  return (
    <ProductListMetadata
      metadata={props.metadata}
      count={props.products ? props.products.length : 0}
    />
  )
}

export default connect(
  ({ metadata, products }) => ({ metadata, products }),
  ({ products: { fetchProductsIfNeeded } }) => ({ fetchProductsIfNeeded })
)(Index)

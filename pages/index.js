import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ProductListMetadata from '../src/components/ProductListMetadata'
import ProductCard from '../src/components/ProductCard'

const Index = props => {
  useEffect(() => {
    props.fetchProductsIfNeeded()
  }, [])

  return (
    <>
      {}
      <ProductListMetadata
        metadata={props.metadata}
        count={props.products ? props.products.length : 0}
      />
      {props.products &&
        props.products.map((data, i) => (
          <ProductCard key={data.id} data={data} isEven={i % 2 === 0} />
        ))}
    </>
  )
}

export default connect(
  ({ metadata, products }) => ({ metadata, products }),
  ({ products: { fetchProductsIfNeeded } }) => ({ fetchProductsIfNeeded })
)(Index)

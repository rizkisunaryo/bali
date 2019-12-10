import React from 'react'
import { connect } from 'react-redux'

import CircleButton from './CircleButton'

const ProductCartItem = ({
  product,
  increaseProduct,
  decreaseProductEffect,
  removeFromCartEffect
}) => (
  <div style={{ display: 'flex', marginTop: 5, alignItems: 'center' }}>
    <div
      style={{
        width: 30,
        height: 30,
        backgroundColor: 'lightgray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {product.quantity}x
    </div>
    <div style={{ flex: 1, margin: '0 10px' }}>
      <div
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: 300
        }}
      >
        {product.name}
      </div>
      <div style={{ display: 'flex', marginTop: 5 }}>
        <CircleButton label='+' onClick={() => increaseProduct(product.id)} />
        <CircleButton
          label='-'
          style={{ marginLeft: 5 }}
          onClick={async () => {
            await decreaseProductEffect(product.id)
          }}
        />
        <CircleButton
          label='x'
          style={{ marginLeft: 5 }}
          onClick={async () => {
            await removeFromCartEffect(product.id)
          }}
        />
      </div>
    </div>
    <div>${(product.salePrice * product.quantity) / 100}</div>
  </div>
)

export default connect(
  null,
  ({
    cart: { increaseProduct, decreaseProductEffect, removeFromCartEffect }
  }) => ({
    increaseProduct,
    decreaseProductEffect,
    removeFromCartEffect
  })
)(ProductCartItem)

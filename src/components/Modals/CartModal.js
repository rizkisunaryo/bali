import React from 'react'
import { connect } from 'react-redux'

import withBlackCover from './withBlackCover'
import { CONTAINER_MAX_WIDTH } from '../../constants/DimensionConstants'

const CartModal = ({ cart }) => {
  return (
    <div
      style={{
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        display: 'table',
        maxWidth: CONTAINER_MAX_WIDTH,
        width: '100%'
      }}
    >
      <div style={{ fontSize: 16, marginBottom: 5 }}>Shopping Cart</div>
      {Object.values(cart).map(product => (
        <div key={product.id} style={{ display: 'flex', marginTop: 5 }}>
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
          <div style={{ flex: 1, margin: '0 5px' }}>
            <div
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {product.name}
            </div>
          </div>
          <div>${(product.salePrice * product.quantity) / 100}</div>
        </div>
      ))}
    </div>
  )
}

export default connect(({ cartModal, cart }) => ({ show: cartModal, cart }))(
  withBlackCover(CartModal)
)

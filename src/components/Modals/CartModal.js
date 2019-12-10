import React from 'react'
import { connect } from 'react-redux'

import withBlackCover from './withBlackCover'
import ProductCartItem from '../ProductCartItem'

const CartModal = ({ cart = [] }) => {
  return (
    <div
      style={{
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5
      }}
    >
      <div style={{ fontSize: 16, marginBottom: 5 }}>Shopping Cart</div>
      {Object.values(cart).map(product => (
        <ProductCartItem key={product.id} product={product} />
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 15
        }}
      >
        <div style={{ fontSize: 14 }}>Total</div>
        <div style={{ fontWeight: 'bold' }}>
          $
          {Object.values(cart).reduce((totalPrice, product) => {
            totalPrice += product.quantity * product.salePrice
            return totalPrice
          }, 0) / 100}
        </div>
      </div>
    </div>
  )
}

export default connect(
  ({ cartModal, cart }) => ({ show: cartModal, cart }),
  ({ cartModal: { toggleBlackCoverAndCartModal } }) => ({
    onDismiss: async () => toggleBlackCoverAndCartModal(false)
  })
)(withBlackCover(CartModal))

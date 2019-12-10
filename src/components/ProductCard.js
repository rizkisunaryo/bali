import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getProductCardImageHeight } from '../utils/DimensionUtil'

const ProductCard = ({ data, isEven, addToCartEffect }) => {
  const [showAddToCart, setShowAddToCart] = useState(false)
  return (
    <div
      data-testid={`productCardContainer-${data.id}`}
      style={{
        float: 'left',
        width: 'calc(50% - 4.5px)',
        marginLeft: isEven ? 0 : 5,
        border: '1px solid grey',
        borderRadius: 5,
        marginBottom: 5,
        position: 'relative'
      }}
      onMouseOver={() => data.quantityAvailable && setShowAddToCart(true)}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <img
          src={data.imageUrl}
          style={{ height: getProductCardImageHeight() }}
        />
        {!data.quantityAvailable && (
          <div
            style={{
              position: 'absolute',
              bottom: 5,
              right: 5,
              backgroundColor: 'gray',
              padding: '5px 10px',
              color: 'white'
            }}
          >
            SOLD OUT
          </div>
        )}
      </div>
      <div style={{ padding: 5 }}>
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 'bold'
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              textDecoration: 'line-through',
              height: 30,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {data.retailPrice > 0 && `$${data.retailPrice / 100}`}
          </div>
          <div style={{ fontSize: 16 }}>
            {data.salePrice > 0 && `$${data.salePrice / 100}`}&nbsp;
          </div>
        </div>
      </div>

      {showAddToCart && (
        <div
          onMouseOut={() => setShowAddToCart(false)}
          onClick={() => addToCartEffect(data)}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px 0',
              borderRadius: 5,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              textAlign: 'center'
            }}
          >
            Add to Cart
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(
  null,
  ({ cart: { addToCartEffect } }) => ({ addToCartEffect })
)(ProductCard)

import React from 'react'
import { getProductCardImageHeight } from '../utils/DimensionUtil'

const ProductCard = ({ data, isEven }) => {
  return (
    <div
      data-testid={`productCardContainer-${data.id}`}
      style={{
        float: 'left',
        width: 'calc(50% - 4.5px)',
        marginLeft: isEven ? 0 : 5,
        border: '1px solid grey',
        borderRadius: 5,
        marginBottom: 5
      }}
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
    </div>
  )
}

export default ProductCard

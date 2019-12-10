import React from 'react'

const withBlackCover = Content => {
  return props => {
    if (!props.show) return null
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Content {...props} />
      </div>
    )
  }
}

export default withBlackCover

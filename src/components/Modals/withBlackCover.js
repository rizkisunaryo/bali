import React from 'react'

const Dismisser = ({ onDismiss }) => (
  <div onClick={onDismiss || (() => {})} style={{ flex: 1 }} />
)

const withBlackCover = Content => {
  return props => {
    if (!props.show) return null
    return (
      <>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex'
          }}
        >
          <Dismisser onDismiss={props.onDismiss} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Dismisser onDismiss={props.onDismiss} />
            <Content {...props} />
            <Dismisser onDismiss={props.onDismiss} />
          </div>
          <Dismisser onDismiss={props.onDismiss} />
        </div>
      </>
    )
  }
}

export default withBlackCover

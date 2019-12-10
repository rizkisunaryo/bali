import React from 'react'
const CircleButton = ({
  size = 20,
  label,
  onClick = () => {},
  style = {},
  dataTestId
}) => (
  <div
    data-testid={dataTestId}
    onClick={onClick}
    style={{
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: 'gray',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      ...style
    }}
  >
    {label}
  </div>
)
export default CircleButton

import React from 'react'

const Index = () => <>
  {Array(100).fill(null).map((_, i) => <div key={i}>Hello World!</div>)}
</>

export default Index

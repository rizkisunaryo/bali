import React from 'react'

const ProductListMetadata = ({ metadata, count = 0 }) => {
  if (!metadata) return null
  return (
    <>
      {metadata.query && (
        <div style={{ fontSize: 16 }}>
          Showing results for &quot;{metadata.query}&quot;
        </div>
      )}
      {metadata.page && metadata.pages && (
        <div>
          Page {metadata.page} of {metadata.pages}
        </div>
      )}
      {metadata.total && (
        <div>
          Showing {count} of {metadata.total}
        </div>
      )}
    </>
  )
}

export default ProductListMetadata

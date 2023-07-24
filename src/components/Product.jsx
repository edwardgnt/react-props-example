import React from 'react'
import ItemDescription from './ItemDescription'

function Product({ name, description, price }) {
  return (
    <div>
        <ItemDescription name={name} description={description} />
        ${price}
    </div>
  )
}

export default Product
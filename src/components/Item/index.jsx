import React from 'react'

const Item = ({producto}) => {
  return (
    <li>
        {producto.title}
    </li>
  )
}

export default Item
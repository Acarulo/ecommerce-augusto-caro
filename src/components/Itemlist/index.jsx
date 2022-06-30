import React from 'react'
import Item from '../Item'

const Itemlist = ({productos}) => {
  return (
    <ul>
        {productos.map(
            producto => {
                return <Item producto={producto} key={producto.id}/>
            }
        )}
    </ul>
  )
}

export default Itemlist
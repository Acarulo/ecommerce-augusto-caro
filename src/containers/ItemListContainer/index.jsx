import React from 'react'
import ItemCount from '../../components/ItemCount.js'

const ItemListContainer = ({greeting}) => {

  const addToCart = () => {
    console.log("El producto se agregó al carrito")
  };

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount addToCart={addToCart} stockDisponible={15}/>
    </div>
  )
}

export default ItemListContainer
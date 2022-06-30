import React from 'react'
import { useState, useEffect } from 'react';
import Itemlist from '../../components/Itemlist/index.jsx';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("/mocks/data.json");
        const data = await response.json();
        console.log(data);

        setTimeout(() => {
          setProductos(data);
        }, 2000);
        //setProductos(data);
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    }

    getProductos();

  }, []);

  console.log(productos);

  const addToCart = () => {
    console.log("El producto se agregó al carrito")
  };

  return (
    <div>
        <h1>{greeting}</h1>
        {productos ?
         <Itemlist productos = {productos}/>
         :
         null
        }
    </div>
  )
}

export default ItemListContainer
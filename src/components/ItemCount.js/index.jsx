import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ItemCount = ({addToCart, stockDisponible}) => {

    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stockDisponible) {
            setCount(count + 1);
        }
    };

    const handleSub = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        console.log("Contador ha cambiado de valor")
    }, [count]);
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
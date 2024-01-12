import React from 'react'
import { useCartContext } from '../Context/CartContext'
import './ItemCart.css'

const ItemCart = ({product}) => {
    const { removeProduct }= useCartContext();
  return (
    <div className='detalle'>
        <img src={product.img}alt={product.nombre} />
        <div>
            <p>Titulo: {product.title}</p>
            <hr />
            <p>Cantidad: {product.quantity}</p>
            <hr />
            <p>Precio u.:$ {product.price}</p>
            <hr />
            <p>Subtotal: ${product.quantity * product.price}</p>
            <hr />
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>

    </div>
  )
}


export default ItemCart;

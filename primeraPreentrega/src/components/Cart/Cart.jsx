import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
    const {cart, totalPrice} = useCartContext();


    if (cart.length===0){
        return (
            <div className='compra'>
                <p>No hay elementos en el carrito</p>
                <Link to="/"> {''}
            <button className='btn-total'>Hacer compra</button></Link>
            </div>
        );
    }

  return (
    <div className='pedidos'>
        {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
        ))}
        <h3>Total: $ {totalPrice()}</h3>

        <Link to="/checkout">
            {''}
            <button className='btn-total'>Finalizar Compra</button>
        </Link>

        <hr />

        <Link to="/"> {''}
            <button  className='boton'>Continuar Comprando</button></Link>
    </div>
  );
};

export default Cart;

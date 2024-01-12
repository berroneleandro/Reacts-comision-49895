
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'

const ItemDetail = ({item}) => {

  const [goToCart,setGoToCart] = useState(false);
  const {addProduct}= useCartContext()
  const onAdd = (quantity)=>{
    setGoToCart(true);
    addProduct(item,quantity);
  }
 

  return (

    
      <div className="detalle ">
      <img src={item.img} alt={item.title} className='img-fluid'/>
      <div className='card-body text-center'>
      <h3>{item.title}</h3>
      <hr />
      <p>{item.description}</p>
      <hr />
      <p>$ {item.price}</p>
      <hr />
      <p>Cantidad : {item.stock}</p>
      
      <hr />
      <div className='link'>
        {goToCart ? <Link to='/cart'>
        {''}
            <button className='btn-total'>Finalizar Compra</button>
        </Link> :<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}

        <Link to="/"> {''}
            <button  className='boton'>Continuar Comprando</button></Link>
      </div>

      </div>
      </div>

   
  
  )
}

export default ItemDetail
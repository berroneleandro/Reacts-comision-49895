import './ItemDetail.css'

const ItemDetail = ({item}) => {
 

  return (

    
      <div className="detalle border border-3">
      <img src={item.imagen} alt={item.nombre} className='img-fluid'/>
      <div className='card-body text-center'>
      <h3>{item.nombre}</h3>
      <hr />
      <p>{item.descripcion}</p>
      <hr />
      <p>$ {item.precio}</p>
      <hr />
      <p>Cantidad : {item.stock}</p>
      </div>

      </div>

   
  
  )
}

export default ItemDetail
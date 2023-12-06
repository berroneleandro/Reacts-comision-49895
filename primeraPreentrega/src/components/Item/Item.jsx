import React from 'react'
import { Link } from 'react-router-dom'
 import './Item.css' 


const Item = ({item}) => {
  return (
    <div className='tarjeta'>

    

    <Link to={'/item/' + item.id} className='text-decoration-none' >

        <div className='tarjeta'>

            <div className='card border border-3'>
                <img src={item.imagen} alt={item.nombre} className='card-ig-top'/>
                <div className='card-body text-center'>
                    <h3 children='card-text'>{item.nombre}</h3>
                    <hr />
                    <p children='card-text'>{item.descripcion}</p>
                    <p children='card-text'>$ {item.precio}</p>

                </div>

            </div>


        </div>
{/*          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        {item.descripcion}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}




    </Link>

    </div>
  )
}

export default Item
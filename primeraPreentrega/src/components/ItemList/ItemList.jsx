import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({item}) => {
  return (
    <div className='grilla row '>

        {item.map(item =>
        <div className='col-md-4' key={item.id}>

            <Item item={item} />
            



        </div>
            )}


    </div>
  )
}

export default ItemList
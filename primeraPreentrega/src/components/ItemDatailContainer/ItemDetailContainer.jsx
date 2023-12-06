import ArrayProductos from '../Json/ArrayProductos.json'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailConteiner.css'


const ItemDetailContainer = () => {

  
  const[item,setItem]=useState([])
  const{id}=useParams();


  useEffect(()=>{

    const promesa = new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(ArrayProductos.find(item=>item.id===parseInt(id)))
      },2000)
    });
    promesa.then((data)=>{
      setItem(data)
    })

  },[id])
  return (
    <div className='cont'>
    <div className='cont'>

      <ItemDetail item={item} />
    </div>

  </div>
  )
}

export default ItemDetailContainer
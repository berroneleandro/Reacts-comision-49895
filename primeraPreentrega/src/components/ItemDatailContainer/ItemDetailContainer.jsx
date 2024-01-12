/* import ArrayProductos from '../Json/ArrayProductos.json' */
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore,doc,getDoc } from 'firebase/firestore';
import './ItemDetailConteiner.css'


const ItemDetailContainer = () => {

  
  const[item,setItem]=useState([])
  const{id}=useParams();


  useEffect(()=>{

   /*  const promesa = new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(ArrayProductos.find(item=>item.id===parseInt(id)))
      },2000)
    });
    promesa.then((data)=>{
      setItem(data)
    }) */

    
    const queryDb =getFirestore();
    const queryDoc= doc(queryDb,'products',id);

    getDoc(queryDoc).then((res)=>
    setItem({id: res.id,...res.data()})
    )


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
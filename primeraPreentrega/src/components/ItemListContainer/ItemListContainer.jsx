import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ArrayProductos from '../Json/ArrayProductos.json'
import ItemList from '../ItemList/ItemList'
import './ItemLitsContainer.css'


const ItemListContainer = () => {

  const[item,setItem]=useState([])
  const{id}=useParams();


  useEffect(()=>{

    const fetchData= async()=>{
      try{
        const data=await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(id ? ArrayProductos.filter(item => item.categoria===id) : ArrayProductos)
          },2000);
        });
        setItem(data);
      } catch(error){
        console.log('error :',error);
      }
    };
    fetchData();

  },[id])



  return (
  <div className='cont'>
   

      <ItemList item={item} />
 

  </div>
  )
}

export default ItemListContainer
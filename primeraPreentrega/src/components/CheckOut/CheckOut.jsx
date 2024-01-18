import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import {getFirestore,collection, addDoc,updateDoc,doc,getDoc, orderBy} from 'firebase/firestore';
import './CheckOut.css'
import { Link } from 'react-router-dom';

import React from 'react'

export const CheckOut = () => {
 
    const [nombre,setNombre]= useState('');
    const [apellido,setApellido]= useState('');
    const [telefono,setTelefono]= useState('');
    const [email,setEmail]= useState('');
    const [confirmacion,setConfirmacion]= useState('');
    const [error,setError]= useState('');
    const [ordenId,setOrdenId]= useState('');
    const [mensaje,setMensaje]= useState('');


    const {cart,totalPrice,removeProduct}= useCartContext();    

    const manejadorFormulario =(event)=> {

        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !confirmacion){
            setError('Por favor complete todos los campos requeridos');
            return;
        }

        if (email !== confirmacion){
            setError('Los email son distintos');
            return;
        }
        
        const total = totalPrice();
        const orden ={
            items: cart.map((producto)=>({

                id: producto.id,
                nombre: producto.title,
                cantidad: producto.quantity,
                   })),
                
            total:total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden)=>{
                const db = getFirestore();
                const productoRef= doc(db,'products',productoOrden.id);

                const productoDoc = await getDoc(productoRef); 
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock : stockActual - productoOrden.cantidad,
                });
            }
        ))
        .then(()=> {
            const db = getFirestore();
            addDoc(collection(db,'orders'),orden)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                removeProduct();

            })

            .catch((error)=>{
                console.log('No se pudo crear la orden');
                setError('Error en la orden ');
            });

        })
        .catch((error)=>{
            console.log('No se pudo actualizar el stock',error);
            setError('No se pudo actualizar el error')
        });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setConfirmacion('');
        setMensaje('');

        clearCart();




    };

    return(

        <div className="contenedorFormulario">
            <h2>Complete el Formulario</h2>

            <div className="form">

                <form onSubmit={manejadorFormulario} >

                    {cart.map((producto)=>(
                        <div key={producto.id}>
                            <p>{''}{producto.nombre}{producto.cantidad}</p>
                            <p>{producto.precio}</p>
                        </div>
                    ))}

                    <div>
                        <label htmlFor="" className="lab-check">Nombre</label>
                        <input type="text" className="imput-check" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <hr />

                    <div>
                        <label htmlFor="" className="lab-check">Apellido</label>
                        <input type="text" className="imput-check" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                    </div>

                    <hr />

                    <div>
                        <label htmlFor="" className="lab-check">Telefono</label>
                        <input type="number" className="imput-check" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>

                    <hr />

                    <div>
                        <label htmlFor="" className="lab-check">Email</label>
                        <input type="email" className="imput-check" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <hr />

                    <div>
                        <label htmlFor="" className="lab-check">Confirmacion de Email</label>
                        <input type="email" className="imput-check" value={confirmacion} onChange={(e)=>setConfirmacion(e.target.value)}/>
                    </div>

                    {error && <p>{error}</p>}

                    {ordenId &&(
                        <p>Gracias por tu compra!!  tu numero de seguimiento es : <br />{''}{ordenId}{''} <br /></p>
                        
                        
                    )}

                    <div>
                        <button type="submit">Enviar</button>
                        <Link to="/"> {''}
                         <button  className='boton'>Continuar Comprando</button></Link>
                        

                
                    </div>

                    

                    </form>

                    
            </div>

            
        </div>

       
    )

}

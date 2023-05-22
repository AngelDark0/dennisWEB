import {createContext, useContext, ReactNode, useState} from "react"
import { CompraCarrito } from "../components/compraCarrito"
import { useLocalStorage } from "../hooks/useLocalStorage"



type ventaCarritoProveedorProps ={
    children:ReactNode

}
type itemCarrito={
    id:number
    
    cantidad: number
}
type ventaCarritoContext={
    abrirCarrito:()=>void
    cerrarCarrito:()=>void
   
 getItemCantidad:(id:number)=>   number 
 incrementarCantidad:(id:number)=>   void 
 disminuirCantidad:(id:number)=>   void
 eliminardelCarrito:(id:number)=>   void
 cantidadCarrito:number
 itemsCarrito:itemCarrito[]

}
const ventaCarritoContext = createContext({} as ventaCarritoContext)

export function useShoppingCart(){
    return useContext(ventaCarritoContext)

}


export function ShoppingCartProvider({children}: ventaCarritoProveedorProps){

    const [estaAbierto, setEstaAbierto]= useState(false)

    const [itemsCarrito, setitemsCarrito]= useLocalStorage<itemCarrito[]>("compra-carrito",[])

    const cantidadCarrito= itemsCarrito.reduce(
        (cantidad, item)=> item.cantidad + cantidad,
        0
    )
    const abrirCarrito=()=>setEstaAbierto(true)
    const cerrarCarrito=()=>setEstaAbierto(false)

    function getItemCantidad(id:number){
        return itemsCarrito.find(item=> item.id===id)?.cantidad || 0
    }

    function incrementarCantidad (id: number){
        setitemsCarrito(currItems=> {
            if(currItems.find(item=>item.id === id)==null){
                return [...currItems,{id, cantidad:1}]

            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return {...item, cantidad:item.cantidad+1}
                    } else{
                        return item

                    }
                })
            }
        })
    }
    function  disminuirCantidad(id:number){
        setitemsCarrito(currItems=> {
            if(currItems.find(item=>item.id === id)?.cantidad === 1){
                return currItems.filter(item=> item.id !== id)

            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return {...item, cantidad:item.cantidad - 1}
                    } else{
                        return item

                    }
                })
            }
        })

    }

    function eliminardelCarrito(id: number){
        setitemsCarrito(currItems =>{
            return currItems.filter(item=>item.id !== id) 
                
           
        })
    }





    return ( <ventaCarritoContext.Provider value={{getItemCantidad, incrementarCantidad, disminuirCantidad, eliminardelCarrito, abrirCarrito, cerrarCarrito, itemsCarrito,
        cantidadCarrito,
        }}>
        {children}
        <CompraCarrito estaAbierto={estaAbierto}/>

        
    </ventaCarritoContext.Provider>
    
    )
}
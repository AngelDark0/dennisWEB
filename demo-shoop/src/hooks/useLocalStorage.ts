import {useState, useEffect} from "react"

export function useLocalStorage<T>(key:string, valorInicial:T | (()=>T)){

    const[valor, setvalor]=useState<T>(()=>{
        const jsonValue=localStorage.getItem(key)
        if(jsonValue!= null)return JSON.parse(jsonValue)

        if(typeof valorInicial ==="function"){
            return (valorInicial as ()=> T)()
        }else{
            return valorInicial
        }
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(valor))
    }, [key, valor])
    return [valor, setvalor] as[typeof valor, typeof setvalor]
}
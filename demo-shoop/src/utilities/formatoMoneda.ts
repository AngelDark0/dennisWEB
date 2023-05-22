const  formato_MONEDA = new Intl.NumberFormat('en-US',{
    currency:"USD", style: "currency"})
export function FormatoMoneda(numero: number){
    return (
        formato_MONEDA.format(numero)
        )
    
}
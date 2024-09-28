import { useMemo } from "react"
import { formatCurrency } from "../helpers"

// Define or import the OrderItem type
type OrderItem = {
    price: number
    quantity: number
}

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
    
}
export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {


  const subtotal = useMemo(() => {
    return order.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [order])  
  
  const tipAmount = useMemo(() => subtotal * tip,[tip, order])

  const totalAmount = useMemo(() => subtotal + tipAmount, [subtotal, tipAmount])

  
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-4xl">Total and tips</h2>
            <p>
                Sub-total: {''}
                <span className="font-black"> {formatCurrency(subtotal)} </span>
            </p>
            <p>
                Tip: {''}
                <span className="font-black">{formatCurrency(tipAmount)}</span>
            </p>
            <p>
                Total: {''}
                <span className="font-black">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className="w-full
             bg-black 
             p-3 uppercase
              text-white 
              font-bold 
              px-4 
              rounded
              mt-10
              disabled:opacity-50"
            disabled={totalAmount === 0}  
            onClick={placeOrder}
        >
            Save order

        </button>
    </>
  )
}

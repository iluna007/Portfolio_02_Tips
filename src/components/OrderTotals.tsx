import { useMemo } from "react"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    
}
export default function OrderTotals({order, tip} : OrderTotalsProps) {


  const subtotal = useMemo(() => {
    return order.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [order])  
  
  const tipAmount = useMemo(() => subtotal * tip,[tip, order])

  const totalAmount = useMemo(() => subtotal + tipAmount)

  
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

        <button>

        </button>
    </>
  )
}

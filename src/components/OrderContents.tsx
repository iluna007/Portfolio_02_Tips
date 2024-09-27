import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
     <div>
        <h2 className="font-black text-4xl">Order</h2>

        <div className="space-y-3 mt-10">
            {order.length === 0 ? 
             <p className="text-gray-400 text-center">No items</p>
            : (
                order.map((item) => (
                    <div key={item.id}
                        className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
                    >   
                        <div>
                            <p className="text-lg">
                                {item.name}  x  {formatCurrency(item.price) }
                            </p>
                            <p className="font-black">
                                Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)} 
                            </p>                                                      
                        </div>
                            <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={()=>removeItem(item.id)}
                            >
                                x
                            </button>
                    </div>
                    
                )
            )
            )}

        </div>
            
     </div>   
    )
}
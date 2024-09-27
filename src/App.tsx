import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem, removeItem, tip, setTip } = useOrder()

  return (
    <>
      <header className="bg-gray-800 text-white py-5">
        <h1 className="text-center text-4xl font-extrabold">TIPS CALCULATOR</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 md:grid grid-cols-2">
        <div className="p-5">
          <h1 className="text-4xl text-center font-bold">Menu</h1>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem 
              key={item.id} 
              item={item} 
              addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-zinc-500 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm 
            setTip={setTip}

          />
          <OrderTotals
            order={order}
            tip={tip}
          />
       
        </div>
      </main>
    </>
  )
}

export default App  

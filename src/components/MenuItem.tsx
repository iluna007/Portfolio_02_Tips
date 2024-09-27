import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (ite : MenuItem) => void
    }

export default function MenuItems({item, addItem} : MenuItemProps)  {
  return (
    <button
      className="border-2
       border-gray-800 
       p-4 
       hover:bg-zinc-400
       w-full 
       flex 
       justify-between 
       items-center"
       onClick={()=>addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

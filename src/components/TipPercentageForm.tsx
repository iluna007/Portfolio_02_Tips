import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="text-2xl font-bold">Tip Percentage</h3>

        <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label key={tipOption.id} className="flex items-center space-x-2">
                            <input 
                              id={tipOption.id}
                              type="radio" 
                              name="tip" 
                              value={tipOption.value}
                              onChange={e => setTip(+e.target.value)}
                              checked={tip === tipOption.value} 
                            />
                            <span>{tipOption.label}</span>
                        </label>
                    </div>    
                ))}
        </form>        
    </div>
  )
}

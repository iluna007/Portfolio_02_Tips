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
}

export default function TipPercentageForm({setTip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="text-2xl font-bold">Tip Percentage</h3>

        <form>
                {tipOptions.map(tip => (
                    <div key={tip.id} className="flex gap-2">
                        <label key={tip.id} className="flex items-center space-x-2">
                            <input 
                            id={tip.id}
                            type="radio" 
                            name="tip" 
                            value={tip.value}
                            onChange={e => setTip(+e.target.value)} 
                            />
                            <span>{tip.label}</span>
                        </label>
                    </div>    
                ))}
        </form>        
    </div>
  )
}

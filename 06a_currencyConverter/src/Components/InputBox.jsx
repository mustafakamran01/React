import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    currency = 'usd',
    onCurrencyChange,
    currencyOption = [],
    amountDisable = false,
    className = "",
}) {
   
    const id = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={id}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                    id={id}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

                >
                    {currencyOption.map( (ele) => (
                        <option value={ele}>
                            {ele}
                        </option>
                    ) )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

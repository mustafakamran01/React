import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  // Accumulating all the variable whose states need to be updated in UI
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState()
  const [convertedAmount, setConvertedAmount] = useState()

  // Extracting currencyInfo from the custom hook
  const currencyInfo = useCurrencyInfo(from)

  // Extracting all the currency name that needs to be displayed in options
  const options = Object.keys(currencyInfo)

  // Creating swap method to switch amounts
  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  // Creating a method to convert the currency values
  const conversion = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={ (amount) => setAmount(amount)}
                            currency={from}
                            onCurrencyChange={ (from) => setFrom(from)}
                            currencyOptions={options}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-500"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onAmountChange={ (convertedAmount) => setConvertedAmount(convertedAmount)}
                            currency={to}
                            onCurrencyChange={ (to) => setTo(to)}
                            currencyOptions={options}
                            amountDisable
                        />
                    </div>
                    <button 
                    type="submit" 
                    onClick={conversion}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-500">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
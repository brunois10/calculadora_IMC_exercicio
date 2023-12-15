import { useState } from 'react'
import IMCCalc from './components/Calculadora'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-5 mb-4 mt-4 bg-light rounded-3'>
        <IMCCalc />
      </div>
    </>
  )
}

export default App

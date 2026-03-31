import { useState } from 'react'
import './App.css'

const labelOptions = ['hi', 'hello', 'how', 'are', 'you', 'doing', 'today?']

function App() {
  const [buttonLabel, setButtonLabel] = useState('A Button')

  function changeLabel () {
    const randomLabel = labelOptions[Math.floor(Math.random() * labelOptions.length)]
    setButtonLabel(randomLabel)
  }

  return (
    <div className="container">
      <div className="btn-card">
        <h3 className="title">CLICK!</h3>
        <div className="btn-default">
          <button onClick={changeLabel} className='btn-label-change'>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

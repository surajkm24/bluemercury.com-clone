import { useState } from 'react';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <AllRoutes/>
    </div>
  )
}

export default App

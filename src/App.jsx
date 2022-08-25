import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {ChakraProvider} from '@chakra-ui/react';
import { HeaderCarousel } from './components/HeaderCarousel';
import { NewArrivals } from './components/NewArrivals';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <HeaderCarousel/>
        <NewArrivals/>
      </ChakraProvider>
    </div>
  )
}

export default App

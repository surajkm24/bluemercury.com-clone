import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {ChakraProvider} from '@chakra-ui/react';
import { HeaderCarousel } from './components/HeaderCarousel';
import { NewArrivals } from './components/NewArrivals';
import { GlowyMakeup } from './components/GlowyMakeup';
import { BestSellers } from './components/BestSellers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <HeaderCarousel/>
        <NewArrivals/>
        <BestSellers/>
        <GlowyMakeup/>
      </ChakraProvider>
    </div>
  )
}

export default App

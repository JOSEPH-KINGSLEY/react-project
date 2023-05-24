import './App.css';
import { BrowserRouter, Routes,  Route  } from 'react-router-dom';
import Carousel from './component/Carousel';
import Quote from './component/Quote';
import Github from './component/Github';


function App() {
  return (
   < BrowserRouter>
   <Routes>
   < Route path='/carousel' element={<Carousel />} />
    < Route path='/quote' element={<Quote />} />
    < Route path='/github' element={<Github />} />
   </Routes>
   </BrowserRouter>
  //  <Quote />
  )
}

export default App;

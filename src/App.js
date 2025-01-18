import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ArrayMethod from './Components/ArrayMethod';
import DestructObject from './Components/DestructObject';
import Destructuring from './Components/Destructuring';
import Home from './Components/Home';
import ImportModules from './Components/ImportModules';
import SpreadOperator from './Components/SpreadOperator';
import Count from './Components/Count';
import ExUseEffect from './Components/ExUseEffect';
import ExUseState from './Components/ExUseState';
import Ternary from './Components/Ternary';
import BasicTable from './Components/MUI__components/BasicTable';
import Form_c from './Components/MUI__components/Form_c';
import Cccc from './Components/MUI__components/Cccc';
import Insert from './Components/MUI__components/Insert';
import View from './Components/MUI__components/View';
import Appbarr from './Components/Appbarr';
import Quoteapi from './Components/Quoteapi';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Appbarr></Appbarr>
     <Routes>
     <Route exact path='/' element={<Home/>}/>
      <Route path='/ArrayMethod' element={<ArrayMethod/>}/>
      <Route path='/DestructObject' element={<DestructObject/>}/>
      <Route path='/Destructuring' element={<Destructuring/>}/>
      <Route path='/ImportModules' element={<ImportModules/>}/>
      <Route path='/SpreadOperator' element={<SpreadOperator/>}/>
      <Route path='/Count' element={<Count/>}/>
      <Route path='/ExUseEffect' element={<ExUseEffect/>}/>
      <Route path='/ExUseState' element={<ExUseState/>}/>
      <Route path='/Ternary' element={<Ternary/>}/>
      <Route path='/BasicTable' element={<BasicTable/>}/>
      <Route path='/Form_c' element={<Form_c/>}/>
      <Route path='/Cccc' element={<Cccc/>}/>
      <Route path='/Insert' element={<Insert/>}/>
      <Route path='/View' element={<View/>}/>
      <Route path='/Quoteapi' element={<Quoteapi/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import {BrowserRouter,Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
{/* <BrowserRouter>
   <Routes>
      <Route>
         {Child path='./' element=(<Login/>)}
         {Child path='./Dashboard' element=(<Dashboard/>)}
      </Route>
   </Routes>
</BrowserRouter> */}

<Login/>
<Dashboard/>
    
    </div>
  )
}

export default App

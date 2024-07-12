import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './homepage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './navbar'
import Login from './login'
import Register from './register'
import Job from './job'
import { Toaster } from 'sonner'
import JobDetails from './jobdetails'
import Dashboard from './dashboard'
import SearchResults from './search'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
          <BrowserRouter>
          <Navbar/>
          <Toaster richColors />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Job />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs/:id" element={<JobDetails />} />            
            <Route path="/dashboard" element={<Dashboard />} />           
            <Route path="/users/:id" element={<Dashboard />} />
            <Route path="/search" element={<SearchResults />} />       
          </Routes>          
      </BrowserRouter>
      </div>
      
      )
    }
    
    export default App
    
    
    


























{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}
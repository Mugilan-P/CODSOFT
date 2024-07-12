import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h2 className="text-uppercase mb-4 font-weight-bold" style={{color:'black',textAlign:'to'}}>Subhash Chandra Bose</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhTHubXXPQ39EKZhqRiTuh4VOVe44d8MDeA&s" alt="img not found" />
      <div>
        <div>
          <h4 style={{textAlign:"initial"}} >About Subhash Chandra Bose</h4>
        </div>
        <div style={{textAlign:"justify"}} className="text">
          <p>✧ Bose was born into wealth and privilege in a large Bengali family in Orissa during the British Raj.</p>
          <p>✧ An early recipient of an Anglo-centric education, after college he was sent to England to take the Indian Civil Service examination.</p>
          <p>✧ He succeeded with distinction in the first exam but demurred at taking the routine final exam, citing nationalism as a higher calling. Returning to India in 1921, Bose joined the nationalist movement led by Mahatma Gandhi and the Indian National Congress.</p>
          <p>✧ He followed Jawaharlal Nehru to leadership in a group within the Congress which was less keen on constitutional reform and more open to socialism.</p>
          <p>✧ Bose became Congress president in 1938. After reelection in 1939, differences arose between him and the Congress leaders, including Gandhi, over the future federation of British India and princely states, but also because discomfort had grown among the Congress leadership over Bose's negotiable attitude to non-violence, and his plans for greater powers for himself.</p>
          <p>✧ After the large majority of the Congress Working Committee members resigned in protest, Bose resigned as president and was eventually ousted from the party.</p>
          <p>✧ In April 1941 Bose arrived in Nazi Germany, where the leadership offered unexpected but equivocal sympathy for India's independence.</p>
        </div>
      </div>
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
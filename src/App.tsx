import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import Introduction from './pages/Introduction'
import Softwares from './pages/Softwares'
import Execution from './pages/Execution'
import Workflow from './pages/Workflow'
import Challenges from './pages/Challenges'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/softwares" element={<Softwares />}></Route>
        <Route path="/execution" element={<Execution />}></Route>
        <Route path="/workflow" element={<Workflow />}></Route>
        <Route path="/challenges" element={<Challenges />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
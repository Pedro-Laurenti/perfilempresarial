import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css'
import Início from './pages/index';
import Personalidades from './pages/Personalidades'


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Início />} />
                <Route path='/personalidades' element={<Personalidades />} />
            </Routes>
        </Router>
    )
}

export default App
